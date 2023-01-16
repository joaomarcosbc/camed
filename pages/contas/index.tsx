import Head from "next/head";
import styles from "../../styles/Guias.module.css";
import Layout from "../../components/Layout";

export default function Contas() {
  return (
    <div>
      <Head>
        <title>Prestação de Contas</title>
        <meta
          name="Página de Prestação de Contas do site do Camed UFS"
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
