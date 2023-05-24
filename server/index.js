const express = require('express')
const app = express()
const cors = require('cors')
const crypto = require('crypto')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const dotenv =require('dotenv')



dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// mongoose Schema


const RobotSchema = new mongoose.Schema({
  name: String, 
  imageURL: String
});
// model
const RobotModel = mongoose.model('Robots', RobotSchema);
//MONGO DATABASE CONNECTION
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=> console.log("Mongo DB Connected!"))





app.get('/', (req, res) => {
  res.send('Hello World!')
})

//get All robots
app.get("/api/robots", async(req, res) => {
  const { name } = req.query;
  const robots = await RobotModel.find();
  if (name === undefined) {
    res.status(200).send({
      data: robots,
      message: "data get success!",
    });
  } else {
    res.status(200).send({
      data: artists.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim())),
      message: "data get success!",
    });
  }
});
//post
app.post("/api/robots",async(req, res) => {
  const { name, imageURL } = req.body;
  const newRobot = new RobotModel({
    name: name,
    imageURL: imageURL,
    
  })
  await newRobot.save();
  res.status(201).send("created");
});
PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})