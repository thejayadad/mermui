import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv  from "dotenv"
import Student from "./models/Student.js"
const app = express();
dotenv.config()
app.use(cors())
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})

//GET ROUTE
app.get("/", async (req, res) => {
    const students = await Student.find();
    return res.json(students)
})

//CREATE A STUDENT
// const stuff = new Student({
//     name: "Jace",
//     email: "jace@gmail.com",
//     grade: 10
// })
// stuff.save().then(stuff => {
//     console.log(stuff)
// })
// .catch(e => {
//     console.log(e);
// })

app.listen(5000, () => console.log("App Listening") )