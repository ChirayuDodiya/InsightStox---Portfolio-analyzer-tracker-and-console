import "dotenv/config";
import { connectDB } from "./src/db/dbConnection.js";
import {connectmongoDB} from "./src/mongodb/mongoConnection.js";
import { app } from "./app.js";

connectDB();
await connectmongoDB();

app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT||8000}`);
    })