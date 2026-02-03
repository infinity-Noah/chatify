import dotenv from 'dotenv';
import express from 'express';
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"

dotenv.config();

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use('/api/messages',messageRoutes);

//make ready for deployement 
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));