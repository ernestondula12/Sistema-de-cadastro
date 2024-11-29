import { Router } from "express";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateUserController } from "./controllers/user/createUserController";
import { UsuarioAutenticadoController } from "./controllers/user/UsuarioAutenticadoController";
import { DetalhesUsuarioController } from "./controllers/user/DetalhesUsuarioController";


const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/sessao', new UsuarioAutenticadoController().handle)
router.get('/me', isAuthenticated, new DetalhesUsuarioController().handle)

export { router };