//*Specialists

//*Import base
import styles from './specialists.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

const Specialists = ({ foto, name, description, specialization }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={styles.specialistsWrapper}>
        <div className={styles.imageName}>
          <img className={styles.image} src={foto} alt={'foto'} />
          <div className={styles.nameSpecialization}>
            <h3 className={styles.titleName}>{name}</h3>
            <div className={styles.specialization}>{specialization}</div>
          </div>
        </div>
        <div
          className={
            show
              ? styles.description
              : classNames(styles.description, styles.activeText)
          }
        >
          {description}
        </div>
        <button
          onClick={() => setShow(!show)}
          className={
            show ? styles.button : classNames(styles.button, styles.active)
          }
          type='button'
        >
          Описание...
        </button>
      </div>
    </>
  );
};

export default Specialists;
