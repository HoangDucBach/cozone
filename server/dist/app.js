"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import.
 */
// @ts-ignore
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
// @ts-ignore
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// @ts-ignore
const home_route_1 = __importDefault(require("./routes/home.route"));
// @ts-ignore
const zone_route_1 = __importDefault(require("./routes/zone.route"));
// const myZone = require('./routes/myZone.route');
const http_1 = require("http");
const ServerSocket_1 = require("./sockets/classes/ServerSocket");
const cors_1 = __importDefault(require("cors"));
/**
 * Config.
 */
const port = process.env.PORT_SERVER;
const app = (0, express_1.default)();
const server = new http_1.Server(app);
app.get('/', (req, res) => {
    res.send(port);
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
// Set routes
app.use('/myzone/watch', zone_route_1.default);
app.use('/api/users', home_route_1.default);
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.listen(port);
new ServerSocket_1.ServerSocket(server);
/**
 * Exports.
 */
exports.default = server;
