import { Request, Response } from "express";
import { MainService } from "../main.service";
import { RequestWithUser } from "../../interface/auth/auth.interface";

export class AuthService extends MainService {
  constructor(req: Request, res: Response) {
    super(req as RequestWithUser, res);
  }
  public googleOauthService = async () => {
    const { googleCode } = this.req.body;
    console.log(this.req.body);
  };
}
