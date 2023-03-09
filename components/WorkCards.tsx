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
      <p>{description}</p>
      <div className={styles.datesBox}>
        <p>Acompanhe aqui as últimas datas: </p>
        <div>
          {dates?.map((date) => {
            return <div>{date}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
