//*Services

//*Import base
import styles from './services.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Services = () => {
  return (
    <>
      {/* Services section */}
      <section className={styles.services}>
        <div className={styles.wrapper}>
          {/* Card block */}
          <div className={styles.card}>
            {/* Therapy */}
            <div className={styles.cardTherapy}>
              <div className={styles.therapyLinkContainer}>
                <Link
                  className={classNames(styles.therapyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Терапия</h4>
                  <div className={styles.contentTherapy}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentTherapyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-stethoscope'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Surgery */}
            <div className={styles.cardSurgery}>
              <div className={styles.surgeryLinkContainer}>
                <Link
                  className={classNames(styles.surgeryLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Хирургия</h4>
                  <div className={styles.contentSurgery}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentSurgeryIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-scalpel'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Neurology */}
            <div className={styles.cardNeurology}>
              <div className={styles.neurologyLinkContainer}>
                <Link
                  className={classNames(styles.neurologyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Неврология</h4>
                  <div className={styles.contentNeurology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentNeurologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-collar'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Orthopedics */}
            <div className={styles.cardOrthopedics}>
              <div className={styles.orthopedicsLinkContainer}>
                <Link
                  className={classNames(styles.orthopedicsLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Ортопедия</h4>
                  <div className={styles.contentOrthopedics}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentOrthopedicsIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-bone'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Dermatology */}
            <div className={styles.cardDermatology}>
              <div className={styles.dermatologyLinkContainer}>
                <Link
                  className={classNames(styles.dermatologyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Дерматология</h4>
                  <div className={styles.contentDermatology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentDermatologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-paw'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Ophthalmology */}
            <div className={styles.cardOphthalmology}>
              <div className={styles.ophthalmologyLinkContainer}>
                <Link
                  className={classNames(styles.ophthalmologyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Офтальмология</h4>
                  <div className={styles.contentOphthalmology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentOphthalmologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-cat'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Cardiology */}
            <div className={styles.cardCardiology}>
              <div className={styles.cardiologyLinkContainer}>
                <Link
                  className={classNames(styles.cardiologyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Кардиология</h4>
                  <div className={styles.contentCardiology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentCardiologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-hard'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Dentistry */}
            <div className={styles.cardDentistry}>
              <div className={styles.dentistryLinkContainer}>
                <Link
                  className={classNames(styles.dentistryLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Стоматология</h4>
                  <div className={styles.contentDentistry}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentDentistryIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-teeth'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Reproductology */}
            <div className={styles.cardReproductology}>
              <div className={styles.reproductologyLinkContainer}>
                <Link
                  className={classNames(styles.reproductologyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Репродуктология</h4>
                  <div className={styles.contentReproductology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentReproductologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-reproductology'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Diagnostics */}
            <div className={styles.cardDiagnostics}>
              <div className={styles.diagnosticsLinkContainer}>
                <Link
                  className={classNames(styles.diagnosticsLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Визуальная диагностика</h4>
                  <div className={styles.contentDiagnostics}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentDiagnosticsIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-visual-diagnostic'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Laboratory */}
            <div className={styles.cardLaboratory}>
              <div className={styles.laboratoryLinkContainer}>
                <Link
                  className={classNames(styles.laboratoryLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Лаборатория</h4>
                  <div className={styles.contentLaboratory}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentLaboratoryIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-tube2'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Oncology */}
            <div className={styles.cardOncology}>
              <div className={styles.oncologyLinkContainer}>
                <Link
                  className={classNames(styles.oncologyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Онкология</h4>
                  <div className={styles.contentOncology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentOncologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-onko'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Endocrinology */}
            <div className={styles.cardEndocrinology}>
              <div className={styles.endocrinologyLinkContainer}>
                <Link
                  className={classNames(styles.endocrinologyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Эндокринология</h4>
                  <div className={styles.contentEndocrinology}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentEndocrinologyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-endocr'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Exotic */}
            <div className={styles.cardExotic}>
              <div className={styles.exoticLinkContainer}>
                <Link
                  className={classNames(styles.exoticLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Экзотические животные</h4>
                  <div className={styles.contentExotic}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentExoticIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-exotic'> </use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Pharmacy */}
            <div className={styles.cardPharmacy}>
              <div className={styles.pharmacyLinkContainer}>
                <Link
                  className={classNames(styles.pharmacyLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Аптека</h4>
                  <div className={styles.contentPharmacy}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentPharmacyIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-zoo-shop'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* Grooming */}
            <div className={styles.cardGrooming}>
              <div className={styles.groomingLinkContainer}>
                <Link
                  className={classNames(styles.groomingLink, styles.a)}
                  to='/'
                >
                  <h4 className={styles.title}>Груминг</h4>
                  <div className={styles.contentGrooming}>
                    <div className={styles.contentText}>26 услуг</div>
                    <div className={styles.contentGroomingIcon}>
                      <svg className={styles.icon}>
                        <use xlinkHref='#icon-grooming'></use>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
