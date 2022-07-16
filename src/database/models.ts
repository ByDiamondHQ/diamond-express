import fs from "fs";
import path from "path";

const models = {}

const loadDatabaseModels = () => {
  const files = fs.readdirSync(path.join(__dirname, `../app/models`)).filter(file => file.endsWith('.ts'));

  for (let index = 0; index < files.length; index++) {
    const element = files[index];

    models[element.replace('.ts', '')] = require(path.join(__dirname, `../app/models/${element}`))
  }

  console.log(`Models loaded`)
  return models;
}

export {
  models,
  loadDatabaseModels
}
