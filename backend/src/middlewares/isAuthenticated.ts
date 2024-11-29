import { NextFunction, Request, Response } from 'express'
    import { verify } from 'jsonwebtoken'

    interface PayLoad{

        sub: string
    }

    export function isAuthenticated(

        req: Request,
        res: Response,
        next: NextFunction
    ){

        const autenticaToken = req.headers.authorization;

        if(!autenticaToken){

            return res.status(401).end();

        }

        const [token] = autenticaToken.split(" ");

        //Verificando o token
        try{
            //Validando

            const { sub } = verify(

                token,
                process.env.JWT_SECRET
            )as PayLoad;

            //Recuperando o id do token e colocar dentro de uma variavel
            req.params.usuario_id = sub;
            
            return next();

        }catch{
            return res.status(401).end();
        }
    }