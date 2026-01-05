import { NextFunction, Request, Response } from "express";

export const vesionMiddleware = (version: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const version = req.headers["version"];
    if (!version) {
      res.status(400).json({
        message: "please provide the version on the headers",
      });
    }
    next();
  };
};
