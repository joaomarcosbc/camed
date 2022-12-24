import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Header from "../components/Header";
import { Children } from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
