const express = require("express")
const app = express()
const cors = require("cors")
const { connectToMongo } = require("./db")
require("dotenv").config()
connectToMongo();
app.use(cors());
app.use(express.json());
app.use('/api/user',require("./routes/user"))
app.use('/api/payment',require("./routes/payment"))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Running at http://localhost:5000`);
})