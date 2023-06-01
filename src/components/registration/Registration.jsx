//*Registration

//*Import base
import styles from './registration.module.scss';
import classNames from 'classnames';

//*Import Libraries
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Registration = ({ active, setActive }) => {
  const URL = 'https://vetclinic-backend.onrender.com/api/users/registration';

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .required("Обов'язкове поле!"),
      lastName: Yup.string()
        .min(2, 'Мінімум 2 символи')
        .required("Обов'язкове поле!"),
      userName: Yup.string()
        .min(4, 'Мінімум 4 символи')
        .required("Обов'язкове поле!"),
      email: Yup.string()
        .email('Неправильний адрес електронної пошти')
        .required("Обов'язкове поле!"),
      password: Yup.string()
        .min(6, 'Мінімум 6 символів')
        .required("Обов'язкове поле!"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
      }, 400);
      sendData(values);
    },
  });

  const sendData = async (formData) => {
    try {
      const response = await axios.post(URL, formData);
      console.log(response.data);
    } catch (error) {
      console.error('Помилка:', error);
    }
  };

  return (
    <div
      className={
        active ? classNames(styles.modal, styles.active) : styles.modal
      }
      onClick={() => setActive(false)}
    >
      <form
        className={styles.form}
        method='post'
        onSubmit={formik.handleSubmit}
      >
        <h2 className={styles.title}>РЕЄСТРАЦІЯ</h2>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor='firstName'></label>
          <input
            className={classNames(styles.input, styles.firstName)}
            name='firstName'
            placeholder="Ім'я"
            type='text'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div className={styles.error}>{formik.errors.firstName}</div>
          ) : null}
          <label className={styles.label} htmlFor='lastName'></label>
          <input
            className={classNames(styles.input, styles.lastName)}
            name='lastName'
            placeholder='Прізвище'
            type='text'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <div className={styles.error}>{formik.errors.lastName}</div>
          ) : null}
          <label className={styles.label} htmlFor='userName'></label>
          <input
            className={classNames(styles.input, styles.userName)}
            name='userName'
            placeholder="Ім'я користувача"
            type='text'
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
          {formik.errors.userName && formik.touched.userName ? (
            <div className={styles.error}>{formik.errors.userName}</div>
          ) : null}
          <label className={styles.label} htmlFor='email'></label>
          <input
            className={classNames(styles.input, styles.email)}
            name='email'
            placeholder='Електронна пошта'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
          <label className={styles.label} htmlFor='password'></label>
          <input
            className={classNames(styles.input, styles.password)}
            name='password'
            placeholder='Пароль'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
          <div className={styles.button}>
            <button
              className={styles.buttonSubmit}
              type='submit'
              onClick={(e) => e.stopPropagation()}
            >
              <span>Реєстрація</span>
            </button>
            <button className={styles.buttonClose} type='button'>
              <span>ЗАКРЫТЬ</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
