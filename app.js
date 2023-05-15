require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./Routes/router");
//const PORT = process.env.PORT || 6010
const PORT = 6010;

app.use(cors());

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
      res.status(201).json("Server started");
})

app.listen(PORT, () => {
      console.log(`Server is listening on Port ${PORT}`);
})