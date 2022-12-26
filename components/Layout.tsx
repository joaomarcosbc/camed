import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layouts.module.css";
import Header from "../components/Header";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.childrenDiv}>{children}</div>
    </div>
  );
}
