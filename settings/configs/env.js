const env = {
    database: "realstate",
    username: "root",
    password: "irisgroup",
    host: "localhost",
    port: "3306", 
    dialect: "mysql",
    srvPort: "9000",
    checkIPaddress: "https://api.ipify.org?format=json",
    secret: "@#SDfionli1818685*-+sfsf",
    storageUpload: "./public/uploads",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    expiresIn: "1h", 
    expiresTime: "3600",
    TOKEN_SECRET:'12345679',
  };
  module.exports = env;