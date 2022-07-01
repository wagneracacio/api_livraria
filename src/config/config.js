import dotenv from 'dotenv'
dotenv.config()
export default {
    database: {
        url: process.env.DATABASE_URL,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }, server: {
        port: process.env.SERVER_PORT
    }
}