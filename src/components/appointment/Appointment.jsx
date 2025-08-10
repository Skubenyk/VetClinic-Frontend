//*Appointment

// *Import base
import React, { Suspense } from 'react';
import styles from './appointment.module.scss';
import { useState } from 'react';

//*Import image
import catDog from './../../assets/image/cat_dog.png';

//*Import components lazy
const FormAppointment = React.lazy(() =>
  import('./../formAppointment/FormAppointment')
);

const Appointment = () => {
  //*Hook for open modal window
  const [modalActive, setmodalActive] = useState(false);
  return (
    <>
      {/* Appointment section */}
      <section className={styles.appointment}>
        <div className={styles.wrapper}>
          {/* Text image block */}
          <div className={styles.textImage}>
            {/* Text icon block */}
            <div className={styles.textIcon}>
              <div className={styles.text}>
                <h2 className={styles.textTitle}>
                  Айболит круглосуточная ветклиника
                </h2>
                <button
                  //*Open the modal window
                  onClick={() => setmodalActive(true)}
                  className={styles.buttonOpen}
                  type='button'
                >
                  <span>ЗАПИСАТЬСЯ</span>
                </button>
              </div>
              {/* Icon */}
              <div className={styles.appointmentIcon}>
                <a
                  className={styles.iconInstagram}
                  href='https://github.com/Skubenyk'
                >
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-instagram'></use>
                  </svg>
                </a>
                <a
                  className={styles.iconFacebook}
                  href='https://drive.google.com/file/d/1sTvNHY7JenORCncbY40TSC9zAEtYOJwS/view'
                >
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-facebook'></use>
                  </svg>
                </a>
                <a
                  className={styles.iconLinkedin}
                  href='https://www.linkedin.com/in/yevhenii-skubenyk-%F0%9F%87%BA%F0%9F%87%A6-a8969a125/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BV2Yq86D1TD%2BU2lSeVxY7mg%3D%3D'
                >
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-linkedin'></use>
                  </svg>
                </a>
                <a
                  className={styles.iconYoutube}
                  href='https://t.me/Skubenik_E'
                >
                  <svg className={styles.icon}>
                    <use xlinkHref='#icon-youtube'></use>
                  </svg>
                </a>
              </div>
            </div>
            {/* Image */}
            <div className={styles.image}>
              <img
                className={styles.imageContent}
                src={catDog}
                alt={'catDog'}
              />
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<div></div>}>
        {/* Form appointment */}
        <FormAppointment active={modalActive} setActive={setmodalActive} />
      </Suspense>
    </>
  );
};

export default Appointment;
