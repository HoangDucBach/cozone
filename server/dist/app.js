"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// @ts-ignore
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// @ts-ignore
const home_route_1 = __importDefault(require("./routes/home.route"));
// const myZone = require('./routes/myZone.route');
const PORT = process.env.PORT_SERVER;
app.get('/', (req, res) => {
    res.send(PORT);
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
// Set routes
app.use('/api/users', home_route_1.default);
app.listen(PORT);
