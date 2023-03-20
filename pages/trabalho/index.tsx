import Head from "next/head";
import styles from "../../styles/Work.module.css";
import Layout from "../../components/Layout";
import WorkCard from "../../components/WorkCards";

export default function Trabalho() {
  const jobs = [
    {
      title: "Faxina na Salinha do CAMED",
      description:
        "Um dos projetos da nossa gestão atual (“A Sua Voz” 2022/23) é fazer faxinas mensais na nossa salinha do Hospital Universitário. Assim, os integrantes da nossa equipe se dividem em grupos e fazem rodízio para manter a sala do CAMED limpa e cheirosa para que todos os alunos usem! No nosso instagram existe um destaque com imagens de todas as faxinas realizadas.",
      dates: [
        "15/10/2022 - Primeira Faxina",
        "15/11/2022 - Faxina de Novembro",
        "28/01/2023 - Faxina de Janeiro",
        "18/02/2023 - Faxina de Fevereiro",
      ],
    },
    // {
    //   title: "Faxina na Salinha do CAMED",
    //   description:
    //     "Um dos projetos da nossa gestão atual (“A Sua Voz” 2022/23) é fazer faxinas mensais na nossa salinha do Hospital Universitário. Assim, os integrantes da nossa equipe se dividem em grupos e fazem rodízio para manter a sala do CAMED limpa e cheirosa para que todos os alunos usem! No nosso instagram existe um destaque com imagens de todas as faxinas realizadas.",
    //   dates: [
    //     "15/10/2022 - Primeira Faxina",
    //     "15/11/2022 - Faxina de Novembro",
    //     "28/01/2023 - Faxina de Janeiro",
    //     "18/02/2023 - Faxina de Fevereiro",
    //   ],
    // },
  ];
  return (
    <div>
      <Head>
        <title>Nosso trabalho</title>
        <meta
          name="Página de trabalhos do site do Camed UFS"
          content="Conteúdos relacionados ao Camed UFS"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <div className={styles.cards}>
            {jobs.map((work) => {
              return (
                <WorkCard
                  key={work.title}
                  title={work.title}
                  description={work.description}
                  dates={work.dates}
                />
              );
            })}
          </div>
        </main>
      </Layout>
    </div>
  );
}
