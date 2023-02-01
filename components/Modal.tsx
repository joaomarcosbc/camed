import styles from "../styles/Modal.module.css";

interface IModalProps {
  title?: string;
  children: React.ReactNode;
  open: boolean;
  handleClose?: () => void;
}

export default function Modal({
  title,
  children,
  open,
  handleClose,
}: IModalProps) {
  return (
    <div
      className={styles.modalBackGround}
      style={{ ...(open ? { display: "block" } : { display: "none" }) }}
    >
      <div className={styles.modal}>
        <span className={styles.close} onClick={handleClose}>
          &times;
        </span>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
