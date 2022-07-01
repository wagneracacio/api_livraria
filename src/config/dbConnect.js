import mongoose from "mongoose"
import config from './config.js'
const {
    database: {
        url,
        username,
        password
    }
} = config
mongoose.connect(`mongodb://${username}:${password}@${url}`);

let db = mongoose.connection;

export default db;