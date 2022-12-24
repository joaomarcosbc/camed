import Head from "next/head";
import styles from "../../styles/Ligas.module.css";
import Layout from "../../components/Layout";

export default function Ligas() {
  return (
    <div>
      <Head>
        <title>Ligas Acadêmicas</title>
        <meta
          name="Página de Ligas Acadêmicas do Site do Camed UFS"
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
