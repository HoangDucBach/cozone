/**
 * Import.
 */
// @ts-ignore
import {config} from "dotenv";
config();
import express from 'express';
// @ts-ignore
import cookieParser from 'cookie-parser';
// @ts-ignore
import homeRoute from './routes/home.route';
// @ts-ignore
import myZoneRoute from './routes/zone.route';
// const myZone = require('./routes/myZone.route');
import {ServerSocket} from "./sockets/classes/ServerSocket";
import cors from 'cors';
/**
 * Config.
 */
const port = process.env.PORT_SERVER;
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send(port);
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// Set routes
app.use('/myzone', myZoneRoute);
app.use('/api/users', homeRoute);
app.use(cors())
server.listen(port);

ServerSocket.getInstance(server);

/**
 * Exports.
 */
export default server;