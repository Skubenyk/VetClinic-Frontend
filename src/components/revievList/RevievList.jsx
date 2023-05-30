// *Import base
import styles from './../review/review.module.scss';

export const RevievList = ({ reviev }) => {
  return (
    <>
      <div key={reviev.id} className={styles.revievWrapper}>
        <h2 className={styles.revievTitle}>{reviev.name}</h2>
        <div className={styles.revievText}>{reviev.text}</div>
      </div>
    </>
  );
};
