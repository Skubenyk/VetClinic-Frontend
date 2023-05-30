//*Reviev

// *Import base
import styles from './review.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// *Import components
import { FormReviev } from './../formReviev/FormReviev';
import { RevievList } from './../revievList/RevievList';

const Reviev = () => {
  const GetRevievs = () => {
    let localStorageRevievs = localStorage.getItem('revievs');
    if (!localStorageRevievs) {
      return [];
    }
    return JSON.parse(localStorageRevievs);
  };

  const [revievs, setRevievs] = useState(GetRevievs());

  const addReviev = (userName, text) => {
    if ((userName, text)) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        name: userName,
        text: text,
      };
      setRevievs([...revievs, newItem]);
      localStorage.setItem('revievs', JSON.stringify([...revievs, newItem]));
    }
  };

  return (
    <>
      {/* Reviev section */}
      <section className={styles.reviev}>
        <div className={styles.wrapper}>
          {/* Link beck */}
          <Link className={styles.linkBeck} to='/'>
            НАЗАД
          </Link>
          {/* Content about */}
          <div className={styles.contentReviev}>
            {/* Title about */}
            <h2 className={styles.titleReviev}>Отзывы о клинике</h2>
            <FormReviev addReviev={addReviev} />
            {revievs.map((reviev) => {
              return <RevievList reviev={reviev} key={reviev.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviev;
