import Head from "next/head";
import styles from "../../styles/Guias.module.css";
import Layout from "../../components/Layout";

export default function Guias() {
  return (
    <div>
      <Head>
        <title>Guias do Estudante</title>
        <meta
          name="Página de Guias do Estudante do site do Camed UFS"
          content="Conteúdos relacionados ao Camed UFS"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <main className={styles.main}></main>
      </Layout>
    </div>
  );
}
