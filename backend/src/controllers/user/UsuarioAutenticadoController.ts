import { Request, Response } from "express";
import { UsuarioAutenticadoService } from "../../services/user/UsuarioAutenticadoService";

class UsuarioAutenticadoController{

    async handle(req:Request, res:Response){

        const { email, senha } = req.body;

        const ServiceUsuario = new UsuarioAutenticadoService();

        const autentica = await ServiceUsuario.execute({
            email,
            senha
        })

        return res.json(autentica);

    }

}

export { UsuarioAutenticadoController }