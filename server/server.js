import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import connectToDb from "./config/db.js";
import { router } from "./routes/index.js";
import { BAD_GATEWAY } from "./utils/bad_gateway.js";
import multer from "multer";
const upload = multer({dest:"uploads/"});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit : "30mb", extended : true }));
app.use(bodyParser.urlencoded({ limit : "30mb", extended : true }));
app.use(cors());

app.use(router)
app.use("*", BAD_GATEWAY)

connectToDb();

app.post("./addPost",upload.single('photo'),(req,res,next)=>{
    res.send("posted");
})

app.listen(PORT , () => {
    console.log(`Server is running at port ${PORT}`);
})
