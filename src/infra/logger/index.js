import winston, { createlogger } from "winston";

const logger = createlogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false,
    }),
    new winston.transports.File({
      filename: "./logs/migrations.log",
      level: "info",
      handleExceptions: true,
      colorize: false,
    }),
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true,
      colorize: true,
      format: winston.format.simple(),
    }),
  ],
  exitOnError: false,
});

export { logger };
