import {Request, Response } from "express";
import { AuthService } from "../services";

class AuthController{
    constructor(){
        
    }

    getAllPosts = async(req: Request, res: Response) => {
        const response = await AuthService.register();
        return res.status(response.statusCode).json(response);
	}
}

export default new AuthController();