"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../classes/User");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// @ts-ignore
let user = new User_1.User("", "", null);
router.get('/', (req, res) => {
    res.json([
        {
            id: "bach",
            age: 26,
        },
        {
            id: "hoc",
            age: 26,
        }
    ]);
});
module.exports = router;
