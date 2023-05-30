//*Contacts

// *Import base
import styles from './contacts.module.scss';

// *Import Map
import Map from '../map/Map';

const Contacts = () => {
  return (
    <>
      {/* Contacts section  */}
      <section className={styles.contacts}>
        <div className={styles.wrapper}>
          {/* Title */}
          <h3 className={styles.title}>Контакты</h3>
          {/* Text map block */}
          <div className={styles.textMap}>
            {/* Text block */}
            <div className={styles.text}>
              <div className={styles.textTitle}>Айболит на Подоле </div>
              <div className={styles.textContent}>
                {/* Icon address */}
                <div className={styles.contentAddress}>
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-places'></use>
                  </svg>
                  <div className={styles.address}>ул.Зелёный Остров, 2</div>
                </div>
                {/* Icon telephone */}
                <div className={styles.contentTel}>
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-phone'></use>
                  </svg>
                  <div className={styles.tel}>57 55 75</div>
                </div>
                {/* Icon time */}
                <div className={styles.contentTime}>
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-time'></use>
                  </svg>
                  <div className={styles.time}>Круглосуточно</div>
                </div>
              </div>
            </div>
            {/* Map */}
            <Map />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
