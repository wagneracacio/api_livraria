"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_js_1 = __importDefault(require("./config.js"));
const { database: { url, username, password } } = config_js_1.default;
(0, mongoose_1.connect)(`mongodb://${username}:${password}@${url}`);
let db = mongoose_1.connection;
exports.default = db;
