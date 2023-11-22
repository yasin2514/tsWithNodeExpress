"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parser---
app.use(express_1.default.json());
app.use(express_1.default.text());
// get api
app.get("/", (req, res) => {
    res.send("Hello I'm Server");
});
// post api
app.post("/users/create-user", (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: "Success fully create user",
    });
});
exports.default = app;
