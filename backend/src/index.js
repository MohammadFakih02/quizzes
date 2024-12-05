import express from "express";
import userRoutes from "./routes/users.routes.js";


const app = express();

app.use(express.json());


app.listen(8080,async()=>{
    console.log("server is running on port 8080");

    connectToDatabase();
})