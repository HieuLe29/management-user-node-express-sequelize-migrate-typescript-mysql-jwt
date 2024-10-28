import User from "./database/models/user";
import { Router } from "express";

const userRoute = Router();

userRoute.get("/all", async (req, res) => {
  try{
    res.send(await User.findAll())
  }catch(err){
    console.error(err);
    res.status(500).send("Unexpected error occurred on server!");
  }
})

userRoute.post("/create", async (req, res) => {
  console.log(req.body)
  try{
    res.send(await User.create(req.body))
  }catch(err){
    console.error(err);
    res.status(500).send("Unexpected error occurred on server!");
  }
})
export default userRoute;

