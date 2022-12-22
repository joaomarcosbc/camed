import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Camed</title>
        <meta
          name="Site do Camed UFS"
          content="Conteúdos relacionados ao Camed UFS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}></main>
    </div>
  );
}
