
//Importing dependencies
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

//Making Instances
const app = express();
dotenv.config();

//MiddleWares
app.use(express.json()); // For JSON data
app.use(cors("*")) // For incoming request

//Api Endpoint
app.get("/", (req,res) => {
 res.json({msg:"Success✅"})
});


//Listening to the port 
const PORT = process.env.PORT || 3001;

app.listen(PORT,() =>{
    console.log(`The server is listening on the port ${PORT}`);
})