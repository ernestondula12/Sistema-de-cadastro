import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{

    nome: string;
    email: string;
    senha: string;
    endereco: string;
    numeroTelefone: string;

}

class CreateUserService{

    async execute({nome, email, senha, endereco, numeroTelefone}: UserRequest){

        //Verificar se ele enviou o email correto
        if(!email){

            throw new Error("E-mail incorreto");
        }

        //Verificar se o email já esta na base de dados
        const usuarioExistente = await prismaClient.usuario.findFirst({

            where:{
                email: email
            }
        })

        if(usuarioExistente){

            throw new Error("Este usuario já existe");
        }

        const senhaCriptografada = await hash(senha, 8);

        //Cadastrando usuario 
        const usuario = await prismaClient.usuario.create({

            data:{

                nome:nome,
                email:email,
                senha:senhaCriptografada,
                endereco:endereco,
                numeroTelefone:numeroTelefone
            },

            select:{
                id:true,
                nome:true,
                email:true,
                endereco:true,
                numeroTelefone:true
            }

        })

        return usuario;

    }
}

export { CreateUserService }