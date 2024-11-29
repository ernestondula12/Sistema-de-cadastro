import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface UsuarioAutenticado{

    email: string;
    senha: string;
}

class UsuarioAutenticadoService{

    async execute({email, senha}: UsuarioAutenticado){

        //Verificando se o email existe na base de dados
        const usuario = await prismaClient.usuario.findFirst({

            where:{
                email:email
            }
        })

        if(!usuario){

            throw new Error("Usuario/palavra passe esta incorreta")
        }

        //Comparando as senhas
        const CorrepondenciaPasse = await compare(senha, usuario.senha)

        if(!CorrepondenciaPasse){

            throw new Error("Usuario/palavra passe esta incorreta");
        }

        //Caso der tudo certo

        const token = sign(
            {
                nome: usuario.id,
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                subject: usuario.id,
                expiresIn: '30d'
            }
        )

        //Retorno das informações após o usuario for autenticado

        return {

            id: usuario.id,
            nome: usuario.nome,
            email:usuario.email,
            token: token
        }
    }
}

export { UsuarioAutenticadoService }