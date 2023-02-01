import Link from "next/link";
import styles from "../styles/Button.module.css";

interface IButtonMenuProps {
  children: React.ReactNode;
  onclick?: () => void;
}

export default function ButtonMenu({ children, onclick }: IButtonMenuProps) {
  return (
    <button className={styles.container} onClick={onclick}>
      {children}
    </button>
  );
}
