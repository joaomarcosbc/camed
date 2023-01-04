import { useState } from "react";
import styles from "../styles/Hamburguer.module.css";

interface IHamburguerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Hamburguer({ children, ...rest }: IHamburguerProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div>x</div>
        {/* <div>---</div>
        <div>---</div> */}
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
