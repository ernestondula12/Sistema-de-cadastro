import { Request, Response} from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController{

    async handle(req:Request, res:Response){
        
        const {nome, email, senha, endereco, numeroTelefone} = req.body;

        //Inicializando o serviço
        const createUserService = new CreateUserService();

        //Executando o serviço
        const usuario = await createUserService.execute({
            nome,
            email,
            senha,
            endereco,
            numeroTelefone
        });

        return res.json(usuario);
    }

}

export { CreateUserController }