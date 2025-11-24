const express = require("express");
const cors = require("cors");

const { mongoose } = require("mongoose");
const dbschema = require("./database/db");
const PORT = 7070;
// require('dotenv').configDotenv;
require("dotenv").config();
// FRONT
const app = express();
app.use(cors());
app.use(express.json());
// Database 
mongoose
  .connect(process.env.mongolocaldb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Db Connected successfully..😎😎"))
  .catch((err) => {
    if (err) throw err;
  });
// backend
app.get("/", async (req, res) => {
  res.write("Hi front end i'm ready to receive data..😂😂😎");
  res.end();
  // const usersinfo = await dbschema.find();
  // res.json(usersinfo);
});
app.post("/query", async (req, res) => {
  try {
    const { Uname, Uemail, Usubject, Umessage } = req.body;
    if (!Uname || !Uemail || !Umessage || !Usubject) {
      return res.status(400).json({ Error: "Please fill All fields" });
    }
    const datas = new dbschema({ Uname, Uemail, Usubject, Umessage });
    await datas.save();
    return res.status(200).json({ Messages: "Data Vangitom" });
  } catch (err) {
    console.error("Backend Error", err);
    res.status(500).json({ Error: "Please Cehck Connectivity of Backend" });
  }
});
//    DEPLOYMENT
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server Running on port ${PORT} Successfully..👌`);
  }
});
