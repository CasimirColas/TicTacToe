import styles from "../styles/Home.module.css";

interface Props {
  value: string;
  onClick: () => void;
}

function Square({ value, onClick }: Props) {
  return (
    <div className={styles.square} onClick={onClick}>
      <p>{value}</p>
    </div>
  );
}

export default Square;
