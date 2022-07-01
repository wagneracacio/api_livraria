import { App } from "./app";
import config from "./config/config";
const {
    server: {
        port
    }
} = config

new App().server.listen(port);