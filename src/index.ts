// import todoRoute from "../src/routes/todo.api";
import { PORT } from "./configs";
import Express from "express";
// import userRoute from "../src/routes/user.api";
import yearRouter from "../src/routes/year.routes";
import subjectRouter from "../src/routes/subject.routes";
import classRoutes from "../src/routes/class.routes";
import userRoutes from "../src/routes/user.routes";

const server = Express();

server.use(Express.json());
server.use(Express.text());
server.use(Express.urlencoded());


// server.use("/todo", todoRoute)
// server.use("/user", userRoute)
server.use("/year", yearRouter)
server.use("/subject", subjectRouter)
server.use("/class", classRoutes)
server.use("/api", userRoutes)

const port = PORT || 3000;
server.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`)
})
