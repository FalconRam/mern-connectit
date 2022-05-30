import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";

const app = express();
dotenv.config();

app.use(
  express.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

app.use("/posts", postRoutes);

const port = process.env.PORT;
const dbUri = process.env.CONNECTION_URL;

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port: ${port}`));
  })
  .catch((err) => console.log(err));
