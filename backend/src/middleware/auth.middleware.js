import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js"

export const protectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.jwt
        if(!token) return res.status(401).json({ message: "You are unauthorized you donot have the tokens"})

        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if(!decoded) return res.status(401).json({ message: "Kya be bhosdike chutiya samjh rakha hai behen ke laude?"})

        const user = await User.findById(decoded.userId).select("-password")
        if(!user) return res.status(404).json({ message: "User not found"});

        req.user = user;
        next();
    } catch (error) {
        console.log(`There were some error from auth.middleware.js ${error}`)
        res.status(500).json({ message: "Internal server error in protect route"})
    }
}