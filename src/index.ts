import todoRoute from "./todo.api";
import { PORT } from "./configs";
import Express from "express";
import userRoute from "./user.api";

const server = Express();

server.use(Express.json());
server.use(Express.text());
server.use(Express.urlencoded());


server.use("/todo", todoRoute)
server.use("/user", userRoute)

const port = PORT || 3000;
server.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`)
})
