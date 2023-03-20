import styles from "../styles/WorkCard.module.css";

interface IWorkCardProps {
  title: string;
  description?: string;
  dates?: string[];
}

export default function WorkCard({
  title,
  description,
  dates,
}: IWorkCardProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.datesBox}>
        <h4>Acompanhe aqui as últimas datas: </h4>
        <div className={styles.ul}>
          {dates?.map((date) => {
            return <div key={date}>{date}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
