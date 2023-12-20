import { NextFunction, Request, Response } from "express";

interface ErrorResponse extends Error{
    statusCode:number
}

export const errorMiddleware=(err:ErrorResponse,_:Request,res:Response)=>{
    err.message=err.message || 'Internal Server Error'
    err.statusCode = err.statusCode || 500
    res.status(err.statusCode).json({success:false,message:err.message})
}

export const asyncError=(passedFunction:CallableFunction)=>(req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(passedFunction(req,res,next)).catch(next)
}