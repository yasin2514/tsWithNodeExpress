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
//create router
const userRouter = express_1.default.Router();
const coursesRouter = express_1.default.Router();
//create  middleware
const logger = (req, res, next) => {
    next();
};
//router middleware
app.use("/api/v1/users", logger, userRouter);
app.use("/api/v1/courses", logger, coursesRouter);
// use router api--------------------------
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log({ user });
    res.json({
        success: true,
        message: "user created successfully",
        data: user,
    });
});
//course router api-----------------------
coursesRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log({ course });
    res.json({
        success: true,
        message: "course created successfully",
        data: course,
    });
});
// normal api-----------------------
// get api
app.get("/", (req, res) => {
    res.send("Hello I'm Server");
});
// post api
app.post("/users/create-user", (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: "Successfully created user",
    });
});
// all error give
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Not Found",
    });
});
//global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({
            success: false,
            message: "Something went to wrong",
        });
    }
});
exports.default = app;
