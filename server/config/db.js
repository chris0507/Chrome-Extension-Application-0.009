require("dotenv").config();
const mongoose = require('mongoose')
const consola = require('consola')
const dbURL = process.env.MONGODB_URI || "";

 const mongooseConnection = () => {
  mongoose.connect(dbURL, {
    minPoolSize: 1,
    maxPoolSize: 20,
    compressors: ["zlib"],
    socketTimeoutMS: 6000,
    serverSelectionTimeoutMS: 6000,
  });

  mongoose.connection.on("connecting", () =>
    consola.info("database connecting...")
  );
  mongoose.connection.on("connected", () =>
    consola.success("database connected")
  );
  mongoose.connection.on("disconnecting", () =>
    consola.info("database disconnecting...")
  );
  mongoose.connection.on("disconnected", () =>
    consola.info("database disconnected")
  );
  mongoose.connection.on("error", () => {
    consola.error("database error");
    process.exit(1);
  });
};


module.exports = { mongooseConnection };
   
