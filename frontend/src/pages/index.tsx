import {useState} from 'react'
import Head from 'next/head';
import styles from '../styles/Home.module.scss'
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import Link from 'next/link';


export default function Home() {

  //Criando o nosso estado responsavel pelo loading
  const [loading, setLoading] = useState(false);

  return (
    <>
    
      <Head>
          <title>Fascode Academy - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
          <div className={styles.login}>
              <h1 className={styles.titulo}>Academia<span className={styles.laranja}>Fastcode</span></h1>

              <form>
                <Input placeholder='Digite o seu e-mail'
                  type='text'
                />

                <Input placeholder='Digite a sua senha'
                type='password' 
                />

                <Button
                  type="submit"
                  loading={loading}
                >
                  Acessar
                </Button>             
              </form>

              <Link href="/signup" legacyBehavior>
                  <a className={styles.text}>Não possui uma conta ? cadastre-se</a>
              </Link>

          </div>
      </div>
    
    </>
  );
}
