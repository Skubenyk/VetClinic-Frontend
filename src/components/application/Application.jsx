//*Application

// *Import base
import styles from './application.module.scss';

//*Import images
import application from './../../assets/image/application.png';
import googlePlay from './../../assets/image/google-play.png';
import appStore from './../../assets/image/app-store.png';
import bigl from './../../assets/image/bigl.png';

const Application = () => {
  return (
    <>
      {/* Application section */}
      <section className={styles.application}>
        <div className={styles.wrapper}>
          {/* Text apps block*/}
          <div className={styles.textApps}>
            <div className={styles.textTop}>скоро</div>
            <h2 className={styles.title}>
              Удобное приложение для питомцев и их хозяев
            </h2>
            {/* Apps mobile */}
            <div className={styles.appsMobile}>
              <a href='#'>
                <img
                  className={styles.appStore}
                  src={appStore}
                  alt={'appStore'}
                />
              </a>
              <a href='#'>
                <img
                  className={styles.googlePlay}
                  src={googlePlay}
                  alt={'googlePlay'}
                />
              </a>
            </div>
          </div>
          {/*Image block */}
          <div className={styles.image}>
            <img className={styles.imageBigl} src={bigl} alt={'bigl'} />
            <img
              className={styles.imageMobileApp}
              src={application}
              alt={'application'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Application;
