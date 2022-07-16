import { Router } from "express";
import wrapper from "../utils/wrapper";
import Controllers from "../controllers";
import AuthGuard from "../middleware/auth";

const router: Router = Router()

router.get('/users/me', AuthGuard, wrapper(Controllers.Users.get));
router.post('/users/me', AuthGuard, wrapper(Controllers.Users.update));

export default router