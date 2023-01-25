import { useState } from "react";
import styles from "../styles/ContactCard.module.css";

interface IContactCardProps {
  title: string;
  children: React.ReactNode;
  contacts: string[];
  onclick: () => void;
}

export default function ContactCard({
  title,
  children,
  contacts,
  onclick,
}: IContactCardProps) {
  return (
    <div onClick={onclick} className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
      <div>
        {contacts.map((contact) => {
          return <p>{contact}</p>;
        })}
      </div>
    </div>
  );
}
