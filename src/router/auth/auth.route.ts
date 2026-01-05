import { Router } from "express";
import { Routes } from "../../interface/routes.interface";
import { vesionMiddleware } from "../../middlewares/versionMiddleware.middleware";
import { AuthController } from "../../controllers/auth/auth.controller";

export class AuthRoute implements Routes {
  path = "/auth";
  router = Router();
  constructor() {
    this.authRoutes();
  }
  public authRoutes() {
    this.router.post("/google-oauth", vesionMiddleware("[1.0.0]"), (req, res) =>
      new AuthController(req, res).googleOauth()
    );
  }
}
