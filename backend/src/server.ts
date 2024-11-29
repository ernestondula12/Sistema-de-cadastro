import express , { Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, next:NextFunction) => {

    //Verificando se o caminho é uma instancia do tipo error
    if(err instanceof Error){

        return res.status(400).json({
            error: err.message
        })
    }

    //Se caso não for uma instancia do tipo error
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })

})


//Configurando a porta
app.listen('3030', () => console.log('Servidor Online'));