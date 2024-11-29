import Head from "next/head";
import { useState} from 'react'
import styles from '../../styles/Home.module.scss';
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import Link from "next/link";


export default function Signup(){

    const [loading, setLoading] = useState(false);

    return(

        <>
        <Head>
            <title>Fastcode Academy - Faça o seu cadastro</title>
        </Head>

        <div className={styles.containerCenter}>
            
            <div className={styles.login}>
                <h1>Criando a sua conta</h1>
                <form>
                    <Input placeholder="Digite o seu nome"
                    type='text' 
                    />
                    <Input placeholder="Digite o seu e-mail" 
                        type='text'
                    />
                    <Input placeholder="Digite sua senha" 
                    type='password'
                    />

                    <Button
                        type="submit"
                        loading={loading}
                    >
                        Cadastrar
                    </Button>
                </form>
                <Link href="/" legacyBehavior>
                    <a className={styles.text}>Já possui uma conta ? Faça login</a>
                </Link>
            </div>

        </div>

        </>

    )

}