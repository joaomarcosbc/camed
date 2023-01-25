import Head from "next/head";
import styles from "../../styles/Contato.module.css";
import Layout from "../../components/Layout";
import ContactCard from "../../components/ContactCard";
import { WhatsappLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import { useRouter } from "next/router";

export default function Contato() {
  const router = useRouter();
  const contacts = [
    {
      title: "WhatsApp",
      icon: <WhatsappLogo size={70} color="#303030" />,
      contacts: [
        "Bia (vice-coordenadora geral)",
        "Cléverton (coordenador geral)",
      ],
      onclick: () => {
        router.push(
          `https://api.whatsapp.com/send?phone=5579991822825&text=Olá%20Bia!%20Estou%20entrando%20em%20contato%20através%20do%20site%20do%20Camed-UFS`
        );
      },
    },
    {
      title: "Instagram",
      icon: <InstagramLogo size={70} color="#303030" />,
      contacts: ["@camed.ufs"],
      onclick: () => {
        router.push("https://instagram.com/camed.ufs");
      },
    },
    {
      title: "Email",
      icon: <EnvelopeSimple size={70} color="#303030" />,
      contacts: ["camed.ufs.comunica@gmail.com"],
      onclick: async () => {
        await navigator.clipboard.writeText("camed.ufs.comunica@gmail.com");
        alert("E-mail copiado para área de transferência!");
      },
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
            return (
              <ContactCard
                title={contact.title}
                key={index}
                contacts={contact.contacts}
                onclick={contact.onclick}
              >
                {contact.icon}
              </ContactCard>
            );
          })}
        </main>
      </Layout>
    </div>
  );
}
