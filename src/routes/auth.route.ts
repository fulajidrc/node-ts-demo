import express from "express";
import { AuthController } from "../controllers";

const authRoute = express.Router();

authRoute.post('/register', AuthController.getAllPosts)

export default authRoute;
