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
        .min(2, 'Минимум 2 символа')
        .required('Обязательное поле!'),
      lastName: Yup.string()
        .min(2, 'Минимум 2 символа')
        .required('Обязательное поле!'),
      userName: Yup.string()
        .min(4, 'Минимум 4 символа')
        .required('Обязательное поле!'),
      email: Yup.string()
        .email('Неправильный email адрес')
        .required('Обязательное поле!'),
      password: Yup.string()
        .min(6, 'Минимум 6 символов')
        .required('Обязательное поле!'),
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
      const response = await axios.post(URL, formData, {
        headers: { Registration: 'form registration' },
      });
      console.log(response.data);
      // Показать сообщение про успешную регистрацию
      alert('Успешная регистрация!');
    } catch (error) {
      console.error('Error:', error);
      // Показать сообщение про неудачную регистрацию
      alert('Неудачная регистрация!');
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
        <h2 className={styles.title}>РЕГИСТРАЦИЯ</h2>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor='firstName'></label>
          <input
            className={classNames(styles.input, styles.firstName)}
            name='firstName'
            placeholder='Имя'
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
            placeholder='Фамилия'
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
            placeholder='Имя пользователя'
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
            placeholder='Электронная почта'
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
              <span>РЕГИСТРАЦИЯ</span>
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
