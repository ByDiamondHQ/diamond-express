import { connect, connection } from "mongoose";

const connectToDatabase = (DB_URL) => {
  return connect(DB_URL)
}

connection.on("connected", function () {
  console.info("Mongoose connection is open");
});

connection.on("error", function (err) {
  console.error("Mongoose connection has occured " + err + " error");
});

connection.on("disconnected", function () {
  console.warn("Mongoose connection is disconnected");
});

connection.on("SIGINT", function () {
  connection.close(function () {
    console.warn(
      "Mongoose default connection is disconnected due to application termination"
    );
    process.exit(0);
  });
});

export {
  connectToDatabase
}
