//*Choice

// *Import base
import styles from './choice.module.scss';

//*Import images
import timeWork from './../../assets/svg/time-work.png';
import bird from './../../assets/image/bird.png';
import house from './../../assets/svg/house.png';

const Choice = () => {
  return (
    <>
      {/* Choice section */}
      <section className={styles.choice}>
        <div className={styles.wrapper}>
          {/* Title block */}
          <div className={styles.title}>
            <h1 className={styles.titleQuantity}>1 150 000</h1>
            <div className={styles.titleText}>
              питомцам мы помогли за 18 лет работы
            </div>
            <div className={styles.titleImage}>
              <img className={styles.imageBird} src={bird} alt={'bird'} />
            </div>
          </div>
          {/* Advantages block */}
          <div className={styles.advantages}>
            <h3 className={styles.advantagesTitle}>
              Почему хозяева выбирают нас?
            </h3>
            {/* Advantages list */}
            <div className={styles.advantagesList}>
              {/* Time work */}
              <div className={styles.timeWork}>
                <h4 className={styles.timeWorkTitle}>Работаем круглосуточно</h4>
                <div className={styles.timeWorkIconText}>
                  <div className={styles.timeWorkIcon}>
                    <img
                      className={styles.iconTimeWork}
                      src={timeWork}
                      alt={'timeWork'}
                    />
                  </div>
                  <div className={styles.timeWorkText}>
                    Мы готовы в любое время суток принять домашних питомцев и их
                    хозяев
                  </div>
                </div>
              </div>
              {/* Services */}
              <div className={styles.services}>
                <h4 className={styles.servicesTitle}>Широкий спектр услуг</h4>
                <div className={styles.servicesIconText}>
                  <div className={styles.servicesIcon}>
                    <svg className={styles.icon}>
                      <use xlinkHref='#icon-cat-dog'></use>
                    </svg>
                  </div>
                  <div className={styles.servicesText}>
                    Кроме широкопрофильных докторов в клинике развиты узкие
                    направления в ветеринарии – офтальмология, стоматология,
                    дерматология, травматология, ортопедия и онкология
                  </div>
                </div>
              </div>
              {/* Experience */}
              <div className={styles.experience}>
                <h4 className={styles.experienceTitle}>Большой опыт</h4>
                <div className={styles.experienceIconText}>
                  <div className={styles.experienceIcon}>
                    <svg className={styles.icon}>
                      <use xlinkHref='#icon-hand'></use>
                    </svg>
                  </div>
                  <div className={styles.experienceText}>
                    30 высококвалифицированных врачей нашей клиники
                    предоставляют ветеринарную помощь уже на протяжении 18 лет!
                  </div>
                </div>
              </div>
              {/* Laboratory */}
              <div className={styles.laboratory}>
                <h4 className={styles.laboratoryTitle}>
                  Собственная лаборатория
                </h4>
                <div className={styles.laboratoryIconText}>
                  <div className={styles.laboratoryIcon}>
                    <svg className={styles.icon}>
                      <use xlinkHref='#icon-tube1'></use>
                    </svg>
                  </div>
                  <div className={styles.laboratoryText}>
                    Оборудованная профессиональным оснащением производства
                    компании IDEXX International Inc.(США), которое позволяет
                    получить результаты исследования прямо на приеме
                  </div>
                </div>
              </div>
              {/* Hospital */}
              <div className={styles.hospital}>
                <h4 className={styles.hospitalTitle}>Оснащенные стационары</h4>
                <div className={styles.hospitalIconText}>
                  <div className={styles.hospitalIcon}>
                    <img
                      className={styles.iconHouse}
                      src={house}
                      alt={'house'}
                    />
                  </div>
                  <div className='hospitalText'>
                    Обычный и инфекционный стационар с индивидуальным подогревом
                    каждой клетки. Для питомцев в критическом состоянии
                    предусмотрены кислородные камеры
                  </div>
                </div>
              </div>
              {/* Equipment */}
              <div className={styles.equipment}>
                <h4 className={styles.equipmentTitle}>Новейшее оборудование</h4>
                <div className={styles.equipmentIconText}>
                  <div className={styles.equipmentIcon}>
                    <svg className={styles.icon}>
                      <use xlinkHref='#icon-microscope'></use>
                    </svg>
                  </div>
                  <div className={styles.equipmentText}>
                    Помимо лабораторного оборудования и цифрового рентгена в
                    клинике используется современный эндоскоп KARL STORZ
                  </div>
                </div>
              </div>
              {/* Reception */}
              <div className={styles.reception}>
                <h4 className={styles.receptionTitle}>
                  Запись на прием онлайн
                </h4>
                <div className={styles.receptionText}>
                  Запись на приём позволяет избежать ожиданий в очереди, но если
                  вы не можете приехать - мы выезжаем на дом!
                </div>
              </div>
              {/* Pharmacy */}
              <div className={styles.pharmacy}>
                <h4 className={styles.pharmacyTitle}>Аптека и зоомагазин</h4>
                <div className={styles.pharmacyIconText}>
                  <div className={styles.pharmacyIcon}>
                    <svg className={styles.icon}>
                      <use xlinkHref='#icon-zoo-shop'></use>
                    </svg>
                  </div>
                  <div className={styles.pharmacyText}>
                    Для удобства в клинике предусмотрен аптечный пункт, а также
                    бутик с одеждой и косметическими средствами для ухода за
                    домашними любимцами
                  </div>
                </div>
              </div>
              {/* Salon */}
              <div className={styles.salon}>
                <h4 className={styles.salonTitle}>Груминг-салон</h4>
                <div className={styles.salonIconText}>
                  <div className={styles.salonIcon}>
                    <svg className={styles.icon}>
                      <use xlinkHref='#icon-grooming'></use>
                    </svg>
                  </div>
                  <div className={styles.salonText}>
                    Отдельный кабинет для проведения гигиенческих и
                    косметических процедур, таких как мытьё и сушка, стрижка или
                    тримминг, уход за ушами, глазами и когтями и многое другое
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choice;
