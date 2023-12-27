// @ts-ignore
import {config} from "dotenv";
config();
import express from 'express';
// @ts-ignore
import cookieParser from 'cookie-parser';
// @ts-ignore
import homeRoute from './routes/home.route';
// const myZone = require('./routes/myZone.route');

const PORT = process.env.PORT_SERVER;
const app = express();

app.get('/', (req, res) => {
    res.send(PORT);
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// Set routes
app.use('/api/users', homeRoute);
app.listen(PORT);

