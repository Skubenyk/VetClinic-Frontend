//*Footer

//*Import base
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

//*Import images
import googlePlay from './../../assets/image/google-play.png';
import appStore from './../../assets/image/app-store.png';
import logo from './../../assets/image/logo.png';

const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <footer className={styles.footer} id='footer'>
        <div className={styles.wrapper}>
          {/* Logo block */}
          <div className={styles.logo}>
            <div className={styles.logoImageContainer}>
              <Link to='/'>
                <img className={styles.logoImage} src={logo} alt={'logo'} />
              </Link>
            </div>
            <div className={styles.logoText}>
              <div className={styles.logoTitle}>Айболит</div>
              <div className={styles.logoSubtitle}>ветеринарная клиника</div>
              <div className={styles.logoTextPolitics}>
                Политика конфиденциальности в отношении обработки персональных
                данных
              </div>
            </div>
          </div>
          {/* Link block */}
          <div className={styles.link}>
            {/* Link column1 */}
            <div className={styles.linkColumn1}>
              <div className={styles.linkColumn}>
                <Link to='/'>Главная</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Услуги и цены</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>История компании</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Наши специалисты</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Вакансии</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Реквизиты</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Онлайн-оплата</Link>
              </div>
            </div>
            {/* Link column2 */}
            <div className={styles.linkColumn2}>
              <div className={styles.linkColumn}>
                <Link to='/'>Отзывы</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Контакты</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Груминг-салон</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Косметика</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Новости и акции</Link>
              </div>
              <div className={styles.linkColumn}>
                <Link to='/'>Блог</Link>
              </div>
            </div>
          </div>
          {/* Apps block */}
          <div className={styles.apps}>
            <div className={styles.appsMobile}>
              {/* App store */}
              <a href='https://www.linkedin.com/in/yevhenii-skubenyk-%F0%9F%87%BA%F0%9F%87%A6-a8969a125/'>
                <img
                  className={styles.appStore}
                  src={appStore}
                  alt={'appStore'}
                />
              </a>
              {/* Google play */}
              <a href='https://drive.google.com/file/d/1qErtv6BIo6BDVGpSuNN_JIvtt0LoNTHe/view'>
                <img
                  className={styles.googlePlay}
                  src={googlePlay}
                  alt={'googlePlay'}
                />
              </a>
            </div>
            {/* Apps icon */}
            <div className={styles.appsIcon}>
              {/* Icon instagram */}
              <a
                className={styles.iconInstagram}
                href='https://github.com/Skubenyk'
              >
                <svg className={styles.icon}>
                  <use xlinkHref='#icon-instagram'></use>
                </svg>
              </a>
              {/* Icon facebook */}
              <a
                className={styles.iconFacebook}
                href='https://heartfelt-paletas-b9d248.netlify.app/'
              >
                <svg className={styles.icon}>
                  <use xlinkHref='#icon-facebook'></use>
                </svg>
              </a>
              {/* Icon vk */}
              <a
                className={styles.iconVk}
                href='https://restaurant.alexcode.space/'
              >
                <svg className={styles.icon}>
                  <use xlinkHref='#icon-vk'></use>
                </svg>
              </a>
              {/* Icon youtube */}
              <a
                className={styles.iconYoutube}
                href='https://drive.google.com/file/d/1qErtv6BIo6BDVGpSuNN_JIvtt0LoNTHe/view'
              >
                <svg className={styles.icon}>
                  <use xlinkHref='#icon-youtube'></use>
                </svg>
              </a>
            </div>
            {/* Apps mail */}
            <div className={styles.appsMail}>
              <a href='mailto:skubenik@gmail.com'>skubenik@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
