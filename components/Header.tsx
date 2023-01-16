import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import bannerL from "../public/bannerL.png";
import bannerR from "../public/bannerR.png";

import ButtonMenu from "./ButtonMenu";
import Hamburguer from "./Hamburguer";

export default function Header() {
  const pages = [
    {
      name: "Início",
      path: "/",
    },
    {
      name: "Guias do estudante",
      path: "/guias",
    },
    {
      name: "Prestação de contas",
      path: "/contas",
    },
    {
      name: "Nosso trabalho",
      path: "/trabalho",
    },
    {
      name: "fale com a gente",
      path: "/contato",
    },
  ];

  return (
    <header className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={bannerR}
          alt="bannerL"
          height={278}
          className={styles.bannerImages}
        />

        <div className={styles.bannerCenter}>
          <Image
            src={logo}
            alt="Logomarca Camed"
            quality={100}
            width={148}
            height={177}
          />
          <h2 className={styles.bannerTitle}>
            {"Centro Acadêmico de Medicina “Dr. Augusto césar leite” da UFS".toUpperCase()}
          </h2>
        </div>
        <Image
          src={bannerL}
          alt="bannerR"
          height={278}
          className={styles.bannerImages}
        />
      </div>
      <Hamburguer className={styles.menuHamburguer}>
        <div>
          {pages.map((page) => {
            return <ButtonMenu goTo={page.path} name={page.name} />;
          })}
        </div>
      </Hamburguer>
      <div className={styles.menu}>
        {pages.map((page) => {
          return <ButtonMenu goTo={page.path} name={page.name} />;
        })}
      </div>
    </header>
  );
}
