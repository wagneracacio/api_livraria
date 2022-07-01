"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.db = dbConnect_1.default;
        this.db.on("error", console.log.bind(console, 'Erro de conexão'));
        this.db.once("open", () => {
            console.log('conexão com o banco feita com sucesso');
        });
        this.server = (0, express_1.default)();
        this.middleware();
        this.router();
    }
    middleware() {
        this.server.use(express_1.default.json());
    }
    router() {
        (0, routes_1.default)(this.server);
    }
}
exports.App = App;
