const app = require("./app");
const connectDatabase = require("./db/Database");

  require("dotenv").config()

// connect db
connectDatabase();

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

