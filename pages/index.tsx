import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import equipe from "../public/equipe.png";

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
        <div className={styles.container}>
          <aside className={styles.aside}>
            <div className={styles.image}></div>
          </aside>
          <main className={styles.main}></main>
        </div>
      </Layout>
    </div>
  );
}
