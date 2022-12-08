import { Router } from "express";
import { signUp } from "../controllers/authController";

const authRouter = Router();

//http://localhost:3001/api/auth/users for postman. This is
//a simple GET. for testing. Would be a POST for sign up.
authRouter.get("/users", signUp);

export default authRouter;
