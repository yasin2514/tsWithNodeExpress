import { Server } from "http";
import app from "./app";

let server: Server;
const PORT = 5000;

//create server function
async function serverBootUp() {
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

serverBootUp();
