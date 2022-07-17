import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser"
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import config from "./../config/globals";
import express, { Express } from 'express';
import { failure } from './utils/http-responses';
import { validateObject } from "./services/validator";
import { loadDatabaseModels } from '../database/models';
import { connectToDatabase } from "../database/connector";

async function loadConfig() {
  return (await validateObject('globals', config))
}

async function loadDatabase(config) {
  await loadDatabaseModels()
  await connectToDatabase(config.DB_URL)
}

async function loadExpress(config) {
  const app: Express = express();
  const port = config.PORT;

  app.use(morgan('dev'));
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/', authRoutes)
  app.use('/', userRoutes)

  // error handler
  app.use(function (err, req, res, next) {
    console.log(err);

    if (err.message === 'Not Found') {
      let error = {
        path: req.originalUrl,
        method: req.method,
        message: err.message,
      }

      return failure(res, { success: false, data: { error }, error: err.message }, 404)
    }

    return failure(res, { success: false, error: err.message }, 500)
  });

  app.listen(port, () => {
    return console.log(`Server is running at http://localhost:${port}`);
  });
}

async function main() {
  let config = (await loadConfig());
  await loadDatabase(config);
  await loadExpress(config);
}

main()