"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envUrl = process.env.NODE_ENV
    ? path_1.default.resolve(__dirname, `../${process.env.NODE_ENV}.env`)
    : path_1.default.resolve(__dirname, `../.env`);
console.log('envUrl', envUrl);
// require('dotenv').config({
//     path: envUrl
// });
dotenv_1.default.config({
    path: envUrl
});
const models_1 = __importDefault(require("./src/models"));
(0, models_1.default)();
const database_1 = require("./config/database");
const routes_1 = require("./src/routes");
const app = (0, express_1.default)();
const port = process.env.PORT;
database_1.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
app.use("/api/", routes_1.restRouter);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
