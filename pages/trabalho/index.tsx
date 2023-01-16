import Head from "next/head";
import styles from "../../styles/Guias.module.css";
import Layout from "../../components/Layout";

export default function Trabalho() {
  return (
    <div>
      <Head>
        <title>Nosso trabalho</title>
        <meta
          name="Página de trabalhos do site do Camed UFS"
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
