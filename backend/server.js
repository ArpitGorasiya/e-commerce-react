const app = require("./app");

  require("dotenv").config()

const mongoose = require("mongoose");
 mongoose.connect(process.env.DB_URL).then(console.log('Database Connected'))

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

