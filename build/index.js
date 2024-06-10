"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// Express config
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");
dotenv_1.default.config();
// Define the routes
app.use("/api/v1", routes_1.default);
// Mongo connection
const mongoURL = process.env.MONGO_DB_URI;
if (!mongoURL) {
    console.error("MongoDB URL is not defined");
    process.exit(1);
}
mongoose_1.default.connect(mongoURL, {}).then(() => {
    console.log("MongoDB is connected");
})
    .catch((error) => {
    console.log(error);
});
// Start the server
try {
    const port = app.get("PORT");
    const baseUrl = app.get("BASE_URL");
    server.listen(port, () => {
        console.log("Server is listening");
    });
}
catch (error) {
    console.log(error);
}
exports.default = server;
