//*Burger

// *Import base
import styles from './../header/header.module.scss';
import classNames from 'classnames';

const Burger = ({ active, setActive }) => {
  return (
    <>
      {/* Burger */}
      <div className={styles.headerBurger}>
        {/* Button */}
        <button
          //*Opening and closing burger menu
          onClick={() => setActive(!active)}
          //*Сonditions for switching styles in mode active
          className={
            active ? classNames(styles.burger, styles.show) : styles.burger
          }
          type='button'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};

export default Burger;
