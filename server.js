import app from "./src/apps.js";
import config from "./src/config/config.js";
const {
    server: {
        port
    }
} = config

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})