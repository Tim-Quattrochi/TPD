import { Router } from "express";
import { api } from "../controllers/apiController";

const Router = Router();

Router.use("/api", api);

export default Router;
