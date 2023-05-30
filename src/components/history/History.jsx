//*History

//*Import base
import styles from './history.module.scss';
import { Link } from 'react-router-dom';

//*Import Slider
import Slider from '../slider/Slider';

const History = () => {
  return (
    <>
      {/* History section */}
      <section className={styles.history}>
        <div className={styles.wrapper}>
          {/* Text block */}
          <div className={styles.text}>
            <h3 className={styles.textTitle}>История компании</h3>
            <div className={styles.textContent}>
              История компании начинается 14 января 1999 года, когда было
              образовано ООО «Чижи». Идея пришла, т.к. у основателя компании
              Прозор Жанны Георгиевны была собака боксёр по кличке Бард…
            </div>
            <div className={styles.textLink}>
              <Link to='/about'>ЧИТАТЬ ДАЛЕЕ</Link>
            </div>
          </div>
          {/* Specialist block */}
          <div className={styles.specialist}>
            <h3 className={styles.specialistTitle}>Наши специалисты</h3>
            {/* Slider */}
            <Slider />
            <div className={styles.specialisLink}>
              <Link to='/specialists'>ПОСМОТРЕТЬ ВСЕХ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
