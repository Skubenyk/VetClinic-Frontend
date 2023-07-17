//*Authorization

//*Import base
import styles from './authorization.module.scss';
import classNames from 'classnames';

//*Import Libraries
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Authorization = ({ active, setActive }) => {
  const URL = 'https://vetclinic-backend.onrender.com/api/users/authorization';

  //*Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    //*Validation
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Неправильный email адрес')
        .required('Обязательное поле!'),
      password: Yup.string()
        .min(6, 'Минимум  6 символов')
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

  //*Sending data form
  const sendData = async (formData) => {
    try {
      const response = await axios.post(URL, formData, {
        headers: { Authorization: 'form authorization' },
      });
      console.log(response.data);
      // Показать сообщение про успешную авторизацию
      alert('Успешная авторизацияция!');
    } catch (error) {
      console.error('Error:', error);
      // Показать сообщение про неудачную авторизацию
      alert('Неудачная авторизация!');
    }
  };

  return (
    <div
      //*Сonditions for switching styles in mode active
      className={
        active ? classNames(styles.modal, styles.active) : styles.modal
      }
      onClick={() => setActive(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {/* Form */}
        <form
          className={styles.form}
          method='post'
          onSubmit={formik.handleSubmit}
        >
          {/* Title form */}
          <h2 className={styles.title}>АВТОРИЗАЦИЯ</h2>
          <div className={styles.wrapper}>
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
            />
            {/* Conditions for including a style error */}
            {formik.errors.password && formik.touched.password ? (
              <div className={styles.error}>{formik.errors.password}</div>
            ) : null}
            {/* Buttons */}
            <div className={styles.button}>
              <button className={styles.buttonSubmit} type='submit'>
                <span>ВХОД</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
