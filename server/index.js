import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoutes from "./routes/AuthRoutes.js";

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


const PORT=3005||process.env.PORT;

app.use("/api/auth",AuthRoutes)


app.listen(PORT, (err) => {
  console.log(`Server listening on ${PORT}`);
});