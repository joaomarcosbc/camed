import { useState } from "react";
import styles from "../styles/ContactCard.module.css";

interface IContactCardProps {
  title: string;
  //   image: React.ReactNode;
  //   contacts: string[];
}

export default function ContactCard({ title }: IContactCardProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
