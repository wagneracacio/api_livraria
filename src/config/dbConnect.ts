import { connect, connection } from "mongoose"
import config from './config.js'
const {
    database: {
        url,
        username,
        password
    }
} = config
connect(`mongodb://${username}:${password}@${url}`);

let db = connection;

export default db;