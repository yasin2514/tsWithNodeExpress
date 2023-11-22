import express, { NextFunction, Request, Response } from "express";
const app = express();

//parser---
app.use(express.json());
app.use(express.text());

//create router
const userRouter = express.Router();
const coursesRouter = express.Router();

//create  middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  next();
};

//router middleware
app.use("/api/v1/users", logger, userRouter);
app.use("/api/v1/courses", logger, coursesRouter);

// use router api--------------------------
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log({ user });
  res.json({
    success: true,
    message: "user created successfully",
    data: user,
  });
});

//course router api-----------------------
coursesRouter.post("/create-course", (req: Request, res: Response) => {
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
app.get("/", (req: Request, res: Response) => {
  res.send("Hello I'm Server");
});

// post api
app.post("/users/create-user", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    success: true,
    message: "Successfully created user",
  });
});

export default app;
