import { Request, Response } from "express";
import { RequestWithUser } from "../../interface/auth/auth.interface";
import { AuthService } from "../../services/auth/auth.service";

export class AuthController extends AuthService {
  constructor(req: Request, res: Response) {
    super(req as RequestWithUser, res);
  }
  public googleOauth = async () => {
    try {
      const result = await this.googleOauthService();
      this.send(result);
    } catch (error) {
      this.error(error);
    }
  };
}
