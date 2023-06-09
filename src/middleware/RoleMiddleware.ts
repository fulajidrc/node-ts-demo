import { NextFunction, Response } from "express";
import { Permission } from "../models";
import * as jwt from 'jsonwebtoken'
import RequestCustom from "../interfaces/RequestCustom.interface";

export const checkRole = function(module:string, type:string){
    return async (req:RequestCustom, res:Response, next:NextFunction) => {
        try {
            const authHeader = req.headers["authorization"];
            if(!authHeader)
            return res.status(401).json({code:401, message: 'Please provide auth token!', data: null})
            const accessToken = process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : 'drc'
            const decoded:any = await jwt.verify(authHeader, accessToken);
            if(decoded){
                if(typeof decoded !== 'string'){
                    const permission = type === 'create' 
                                        ? {create: true}
                                        : type === 'edit' 
                                            ? { edit:true }
                                            : type === 'delete'
                                                ? {delete:true}
                                                : type === 'read'
                                                    ? {read:true}
                                                    : {} 
                    const checkRole = await Permission.findOne({
                        where: {
                            userId: decoded.id,
                            roleId: decoded.RoleId,
                            module: module,
                            ...permission
                        }
                    })
                    if(checkRole){
                        req.user = decoded.id;
                        req.userId = decoded.id;
                        req.roleId = decoded.RoleId;
                        return next();
                    }else{
                        return res.status(401).json({
                            code: 401,
                            message: `No permission to ${type} ${module}`,
                            data:null
                        })
                    }
                }else{
                    return res.status(401).json({
                        code: 401,
                        message: 'Unauthorize access!',
                        data:null
                    }) 
                }
            }else{
                return res.status(401).json({
                    code: 401,
                    message: 'Unauthorize access!',
                    data:null
                })
            }
        }catch (error) {
            return res.status(500).json({
                code: 500,
                message: 'Request failed due to an internal error!',
                data:null
            })
        }
    }
}
