import { useState } from "react";
import styles from "../styles/Hamburguer.module.css";
import { List } from "phosphor-react";
import { X } from "phosphor-react";

interface IHamburguerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Hamburguer({ children, ...rest }: IHamburguerProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        {isOpen ? (
          <X color="#fff" size={32} />
        ) : (
          <List color="#fff" size={32} />
        )}
      </button>
      <div
        className={styles.menuHamburguer}
        style={{
          ...(isOpen ? { display: "flex" } : { display: "none" }),
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </div>
  );
}
