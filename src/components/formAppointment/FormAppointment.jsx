//*FormAppointment

//*Import base
import React from 'react';
import styles from './formAppointment.module.scss';
import classNames from 'classnames';

//*Import Libraries
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FormAppointment = ({ active, setActive }) => {
  const URL = 'https://vetclinic-backend.onrender.com/api/users/send-email';
  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
      text: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Минимум 2 символа')
        .required('Обязательное поле!'),
      tel: Yup.string()
        .matches(/^\d+$/, 'Неправильный номер телефона')
        .min(10, 'Минимум 10 символов')
        .required('Обязательное поле!'),
      text: Yup.string()
        .min(30, 'Минимум 30 символов')
        .required('Обязательное поле!'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
      sendData(values);
      setActive(false);
    },
  });

  const sendData = async (formData) => {
    try {
      const response = await axios.post(URL, formData, {
        headers: {
          Appointment: 'form appointment',
        },
      });
      console.log(response.data);
      // Показать сообщение про успешную запись на прийом
      alert('Успешная запись на прийом!');
    } catch (error) {
      console.error('Error:', error);
      // Показать сообщение про неудачную запись на прийом
      alert('Неудачная запись на прийом!');
    }
  };

  return (
    <div
      className={
        active ? classNames(styles.modal, styles.active) : styles.modal
      }
      onClick={() => setActive(false)}
    >
      <div className={styles.form} onClick={(e) => e.stopPropagation()}>
        <div className={styles.formWrapper}>
          <form action='#' method='post' onSubmit={formik.handleSubmit}>
            <div className={styles.conntainerForm}>
              <h2 className={styles.titleForm}>Запись на прием</h2>
              <div className={styles.formContent}>
                <label htmlFor='name'></label>
                <input
                  className={styles.name}
                  type='text'
                  placeholder='Имя'
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className={styles.error}>{formik.errors.name}</div>
                ) : null}
                <label htmlFor='tel'></label>
                <input
                  className={styles.tel}
                  type='tel'
                  placeholder='Телефон'
                  name='tel'
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.tel && formik.touched.tel ? (
                  <div className={styles.error}>{formik.errors.tel}</div>
                ) : null}
                <label htmlFor='text'></label>
                <textarea
                  className={styles.formContentText}
                  rows='8'
                  placeholder='Кратко опишите проблему'
                  name='text'
                  value={formik.values.text}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.text && formik.touched.text ? (
                  <div className={styles.error}>{formik.errors.text}</div>
                ) : null}
              </div>
              <div className={styles.formButton}>
                <button className={styles.buttonSubmit} type='submit'>
                  <span>ОТПРАВИТЬ</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAppointment;
