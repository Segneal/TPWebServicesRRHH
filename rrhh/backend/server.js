const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const testRouter = require("./routes/testRouter.js");
app.use("/api", testRouter);
//test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//listen localhost
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
