import Link from "next/link";
import styles from "../styles/ButtonMenu.module.css";

interface IButtonMenuProps {
  name: string;
  goTo: string;
}

export default function ButtonMenu({ name, goTo }: IButtonMenuProps) {
  return (
    <Link href={goTo} className={styles.container}>
      <p>{name.toUpperCase()}</p>
    </Link>
  );
}
