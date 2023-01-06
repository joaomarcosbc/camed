import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import equipe from "../public/equipe.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Camed</title>
        <meta
          name="Site do Camed UFS"
          content="Conteúdos relacionados ao Camed UFS"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <aside className={styles.aside}>
            <div className={styles.image}>
              <Image src={equipe} alt="test" />
            </div>
          </aside>
          <main className={styles.main}>
            <div className={styles.board}>
              <h1>QUEM SOMOS?</h1>
              <p className={styles.text}>
                Já nos conhece? Se não, muito prazer!
                <br /> Nós somos o CAMED – Centro Acadêmico de Medicina “Dr.
                Augusto César Leite” da Universidade Federal de Sergipe (UFS).
                Nossos integrantes são alunos escolhidos por todos os estudantes
                de medicina para que possamos representá-los e estabelecer uma
                comunicação entre eles e as instâncias responsáveis pelo curso.
                Assim, nosso trabalho gira em torno de fortalecer o movimento
                estudantil, garantindo o direito dos acadêmicos de medicina e
                lutar por uma educação médica de qualidade e cada vez mais
                completa. Além disso, também atuamos promovendo eventos
                esportivos, festas e outras atividades com o intuito de gerar
                uma maior integração entre os alunos de diversos períodos. Nós
                nos reunimos periodicamente e, além de debatermos os problemas
                burocráticos, também temos uma ouvidoria para que vocês nos
                tragam informações, críticas e sugestões para que possamos
                melhorar, juntos, a experiência na universidade e que tenhamos
                ótimos anos de formação.
                <br /> Qualquer dúvida, é só entrar em contato com qualquer um
                dos integrantes dessa gestão!
              </p>
            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
}
