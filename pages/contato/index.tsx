import Head from "next/head";
import styles from "../../styles/Contato.module.css";
import Layout from "../../components/Layout";
import ContactCard from "../../components/ContactCard";
import { WhatsappLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { useState } from "react";

export default function Contato() {
  const [open, setOpen] = useState<boolean>(false);

  function handleClose() {
    setOpen(!open);
  }

  const whatsAppContacts = [
    {
      name: "Bia (vice-coordenadora geral)",
      nick: "Bia",
      whatsAppNumber: "5579991822825",
    },
    {
      name: "Cléverton (coordenador geral)",
      nick: "Cléverton",
      whatsAppNumber: "5579996026079",
    },
  ];

  const contacts = [
    {
      title: "WhatsApp",
      icon: <WhatsappLogo size={70} color="#303030" />,
      contacts: [
        "Bia (vice-coordenadora geral)",
        "Cléverton (coordenador geral)",
      ],
      onclick: () => {
        setOpen(!open);
      },
    },
    {
      title: "Instagram",
      icon: <InstagramLogo size={70} color="#303030" />,
      contacts: ["@camed.ufs"],
      onclick: () => {
        window.open("https://instagram.com/camed.ufs");
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

  function sendWhatsAppMessage(contact: any) {
    window.open(
      `https://api.whatsapp.com/send?phone=${contact.whatsAppNumber}&text=Olá,%20${contact.nick}!%20Estou%20entrando%20em%20contato%20através%20do%20site%20do%20Camed-UFS`
    );
  }

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
          <div className={styles.cardBox}>
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
            <Modal title="WhatsApp" open={open} handleClose={handleClose}>
              <div className={styles.modalBody}>
                <p className={styles.modalText}>
                  Para quem você deseja enviar mensagem?
                </p>
                <div className={styles.buttonsModal}>
                  {whatsAppContacts.map((contact) => {
                    return (
                      <Button
                        key={contact.nick}
                        onclick={() => sendWhatsAppMessage(contact)}
                      >
                        {contact.nick}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Modal>
          </div>
        </main>
      </Layout>
    </div>
  );
}
