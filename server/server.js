import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

app.listen(8081, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        return;
    }
    console.log("Server is running on port 8081");
});