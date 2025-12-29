import express, { Application } from "express";
import cors from "cors";
import { NODE_ENV, PORT } from "./config";
import morgan from "morgan";
import { loggers } from "winston";
import { logger } from "./utils/logger";
import { connectionDB } from "./config/db";
import { Routes } from "./interface/routes.interface";

export class App {
  public app: Application;
  public port: string | number;
  public env: string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = PORT || 5000;
    this.env = NODE_ENV || "development";

    this.initializeMiddleware();
    this.initializeDatabase();
    this.initializeRoutes(routes);
  }
  public listen() {
    this.app.listen(this.port, () => {
      logger.info("================================");
      logger.info(`====server is running on ${this.port}=====`);
      logger.info(`==========${this.env}==========`);
      logger.info("===================================");
    });
  }
  private initializeMiddleware() {
    this.app.use(cors());
    this.app.use(
      morgan("tiny", {
        stream: {
          write: (message: string) => logger.info(message.trim()),
        },
      })
    );
    this.app.use(express.json());
  }
  private initializeDatabase() {
    connectionDB();
  }
  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
    this.app.use((req, res) => {
      res.status(404).json({ message: "Bad Request" });
    });
  }
}
