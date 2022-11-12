const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const usuarioRouter = require("./routes/usuarioRouter.js");
const candidatoRouter = require("./routes/candidatoRouter.js");

app.use("/usuario", usuarioRouter);
app.use("/candidato", candidatoRouter);

//test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//listen localhost
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
