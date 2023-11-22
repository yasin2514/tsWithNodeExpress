import express, { Request, Response } from "express";
const app = express();

//parser---
app.use(express.json());
app.use(express.text());

// get api
app.get("/", (req: Request, res: Response) => {
  res.send("Hello I'm Server");
});

// post api
app.post("/users/create-user", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    success: true,
    message: "Success fully create user",
  });
});

export default app;
