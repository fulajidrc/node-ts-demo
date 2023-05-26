import express from "express";
import authRoute from "./auth.route";

const restRouter = express.Router();

restRouter.use('/auth', authRoute)
export{ restRouter };
