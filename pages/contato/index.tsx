import Head from "next/head";
import styles from "../../styles/Contato.module.css";
import Layout from "../../components/Layout";
import ContactCard from "../../components/ContactCard";

export default function Contato() {
  const contacts = [
    {
      title: "WhatsApp",
    },
    {
      title: "Instagram",
    },
    {
      title: "Email",
    },
  ];

  return (
    <div>
      <Head>
        <title>Fale com a gente</title>
        <meta
          name="Página de contato do site do Camed UFS"
          content="Conteúdos relacionados ao Camed UFS"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          {contacts.map((contact, index) => {
            return <ContactCard title={contact.title} key={index} />;
          })}
        </main>
      </Layout>
    </div>
  );
}
