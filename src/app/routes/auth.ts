import { Router } from "express";
import wrapper from "../utils/wrapper";
import Controllers from "../controllers";
import { validator } from "../services/validator";

const router: Router = Router()

router.post("/auth/signup", validator('signup'), wrapper(Controllers.Auth.signup));
router.post("/auth/token", validator('token'), wrapper(Controllers.Auth.token));
router.post("/auth/login", validator('login'), wrapper(Controllers.Auth.login));

export default router