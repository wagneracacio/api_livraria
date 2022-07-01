"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    database: {
        url: process.env.DATABASE_URL,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }, server: {
        port: process.env.SERVER_PORT
    }
};
