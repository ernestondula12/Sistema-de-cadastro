import {Request, Response} from 'express'
import { DetalhesUsuarioService } from '../../services/user/DetalhesUsuarioService'

class DetalhesUsuarioController {

    async handle(req: Request, res:Response){

        const usuario_id = req.params.usuario_id;

        const detailUserService = new DetalhesUsuarioService();

        const usuario = await detailUserService.execute(usuario_id);

        return res.json(usuario);

    }

}

export { DetalhesUsuarioController }