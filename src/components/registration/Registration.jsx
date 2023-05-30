//*Registration
// *Import base
import styles from './registration.module.scss';
import classNames from 'classnames';

// *Import Formik library for creating forms
import { useFormik } from 'formik';

// *Import Yup library for validation forms
import * as Yup from 'yup';

const Registration = ({ active, setActive }) => {
  const URL = 'http://localhost:8080/api/users/registration';
  //*Formik
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
    },
    //*Validation
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Минимум 2 символова')
        .required('Обязательное поле!'),
      lastName: Yup.string()
        .min(2, 'Минимум  2 символов')
        .required('Обязательное поле!'),
      userName: Yup.string()
        .min(4, 'Минимум  4 символов')
        .required('Обязательное поле!'),
      email: Yup.string()
        .email('Неправильный email адрес')
        .required('Обязательное поле!'),
      password: Yup.string()
        .min(6, 'Минимум  6 символов')
        .required('Обязательное поле!'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
      }, 400);
    },
  });
  //*Sending data form
  fetch(URL, {
    method: 'POST',
    headers: { Registration: 'form registration' },
    body: JSON.stringify(formik),
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
  return (
    <div
      //*Сonditions for switching styles in mode active
      className={
        active ? classNames(styles.modal, styles.active) : styles.modal
      }
      onClick={() => setActive(false)}
    >
      {/* Form */}
      <form
        className={styles.form}
        method='post'
        onSubmit={formik.handleSubmit}
      >
        {/* Title form */}
        <h2 className={styles.title}>РЕГИСТРАЦИЯ</h2>
        <div className={styles.wrapper}>
          {/* First name */}
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
          {/* Conditions for including a style error */}
          {formik.errors.firstName && formik.touched.firstName ? (
            <div className={styles.error}>{formik.errors.firstName}</div>
          ) : null}
          {/* Last name */}
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
          {/* Conditions for including a style error */}
          {formik.errors.lastName && formik.touched.lastName ? (
            <div className={styles.error}>{formik.errors.lastName}</div>
          ) : null}
          {/* User name */}
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
          {/* Conditions for including a style error */}
          {formik.errors.userName && formik.touched.userName ? (
            <div className={styles.error}>{formik.errors.userName}</div>
          ) : null}
          {/* Email */}
          <label className={styles.label} htmlFor='email'></label>
          <input
            className={classNames(styles.input, styles.email)}
            name='email'
            placeholder='Почта'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={(e) => e.stopPropagation()}
          />
          {/* Conditions for including a style error */}
          {formik.errors.email && formik.touched.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
          {/* Password */}
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
          {/* Conditions for including a style error */}
          {formik.errors.password && formik.touched.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
          {/* Buttons */}
          <div className={styles.button}>
            <button
              className={styles.buttonSubmit}
              type='submit'
              onClick={(e) => e.stopPropagation()}
            >
              <span>Регистрация</span>
            </button>
            <button
              //*Close form
              className={styles.buttonClose}
              type='button'
            >
              <span>ЗАКРЫТЬ </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
