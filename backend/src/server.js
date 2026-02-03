import dotenv from 'dotenv';
import express from 'express';

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"

dotenv.config();
const app = express();

app.use("/api/auth", authRoutes);
app.use('/api/messages',messageRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));