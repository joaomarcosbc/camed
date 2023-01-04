import styles from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import ButtonMenu from "./ButtonMenu";
import Hamburguer from "./Hamburguer";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.banner}>
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
      </div>
      <Hamburguer className={styles.menuHamburguer}>
        <div>
          <ButtonMenu goTo="/" name="Início" />
          <ButtonMenu goTo="/guias" name="guias do estudante" />
          <ButtonMenu goTo="/ligas" name="Ligas acadêmicas" />
          <ButtonMenu goTo="/" name="prestação de contas" />
          <ButtonMenu goTo="/" name="Nosso trabalho" />
          <ButtonMenu goTo="/" name="fale com a gente" />
        </div>
      </Hamburguer>
      <div className={styles.menu}>
        <ButtonMenu goTo="/" name="Início" />
        <ButtonMenu goTo="/guias" name="guias do estudante" />
        <ButtonMenu goTo="/ligas" name="Ligas acadêmicas" />
        <ButtonMenu goTo="/" name="prestação de contas" />
        <ButtonMenu goTo="/" name="Nosso trabalho" />
        <ButtonMenu goTo="/" name="fale com a gente" />
      </div>
    </header>
  );
}
