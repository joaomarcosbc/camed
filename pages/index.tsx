import Head from "next/head";
import styles from "../styles/Header.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Camed</title>
        <meta
          name="Site do Camed UFS"
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
