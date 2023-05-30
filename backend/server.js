const app = require("./app");

  require("dotenv").config()

const mongoose = require("mongoose");
 mongoose.connect(process.env.DB_URL).then(console.log('Database Connected'))

// create server
const port = process.env.PORT
const server = app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port}`
  );
});

