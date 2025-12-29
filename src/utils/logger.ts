import { createLogger, format, transport, transports } from "winston";

const { combine, timestamp, printf, colorize } = format;

const logFormate = printf(({ level, message, timestamp }) => {
  return `${timestamp} :[${level}]: ${message}`;
});

export const logger = createLogger({
  level: "info",
  format: combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:MM:SS" }),
    logFormate
  ),
  transports: [new transports.Console()],
});