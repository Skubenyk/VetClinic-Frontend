//*FormReviev

// *Import base
import styles from './../review/review.module.scss';
import { useState } from 'react';

export const FormReviev = ({ addReviev }) => {
  const [userName, setuserName] = useState('');
  const [text, setText] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    addReviev(userName, text);
    setuserName('');
    setText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlerSubmit(e);
    }
  };

  return (
    <>
      {/* Form */}
      <div className={styles.form}>
        <div className={styles.formWrapper}>
          <form onSubmit={handlerSubmit}>
            <div className={styles.conntainerForm}>
              {/* Title form */}
              <h2 className={styles.titleForm}>Оставте отзыв</h2>
              <div className={styles.formContent}>
                {/* Name */}
                <input
                  className={styles.name}
                  type='text'
                  placeholder='Имя'
                  value={userName}
                  onChange={(event) => {
                    setuserName(event.target.value);
                  }}
                  onKeyDown={handleKeyPress}
                />
                {/* Text */}
                <textarea
                  className={styles.formContentText}
                  rows='8'
                  placeholder='Напишите свой отзыв'
                  value={text}
                  onChange={(event) => {
                    setText(event.target.value);
                  }}
                  onKeyDown={handleKeyPress}
                />
              </div>
              {/* Buttons */}
              <div className={styles.formButton}>
                <button className={styles.buttonSubmit}>
                  <span>ОТПРАВИТЬ</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
