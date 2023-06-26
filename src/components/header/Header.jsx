//*Header

//*Import base
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import React, { Suspense } from "react";
import classNames from "classnames";
import { useState } from "react";

//*Import image
import logo from "./../../assets/image/logo.png";

//*Import components lazy
const Authorization = React.lazy(() =>
  import("./../authorization/Authorization")
);
const Registration = React.lazy(() => import("./../registration/Registration"));
const Burger = React.lazy(() => import("./../burger/Burger"));

const Header = () => {
  //*Hook useState for active
  const [modalActive, setmodalActive] = useState(false);
  const [authorizationActive, setauthorizationActive] = useState(false);
  const [burgerShow, setburgerShow] = useState(false);
  return (
    <>
      {/* Header section */}
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          {/* Logo */}
          <div className={styles.headerLogo}>
            <Link className={styles.logo} to='/'>
              <img className={styles.logoImage} src={logo} alt={"logo"} />
            </Link>
          </div>
          <div className={styles.headerBlock}>
            <div
              //*Сlosing burger menu with a click anywhere
              onClick={() => setburgerShow(false)}
              //*Сonditions for switching styles in mode active
              className={
                burgerShow
                  ? classNames(styles.headerNavigation, styles.show)
                  : styles.headerNavigation
              }
            >
              {/* Navigation */}
              <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                  <li className={styles.navigationItem}>
                    <Link className={styles.navigationLink} to='/'>
                      ГЛАВНАЯ
                    </Link>
                  </li>
                  <li className={styles.navigationItem}>
                    <Link className={styles.navigationLink} to='/about'>
                      О НАС
                    </Link>
                  </li>
                  <li className={styles.navigationItem}>
                    <a
                      className={styles.navigationLink}
                      href='https://www.linkedin.com/in/yevhenii-skubenyk-%F0%9F%87%BA%F0%9F%87%A6-a8969a125/'
                    >
                      ЛИЧНЫЙ КАБИНЕТ
                    </a>
                  </li>
                  <li className={styles.navigationItem}>
                    <Link className={styles.navigationLink} to='/contacts'>
                      КОНТАКТЫ
                    </Link>
                  </li>
                  <li className={styles.navigationItem}>
                    <Link className={styles.navigationLink} to='/review'>
                      ОТЗЫВЫ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Buttons */}
            <div className={styles.headerOther}>
              <button
                //*Open authorization form
                onClick={() => setauthorizationActive(true)}
                className={classNames(styles.button, styles.buttonTransparent)}
                type='button'
              >
                <span>ВХОД</span>
              </button>
              <button
                //*Open registration form
                onClick={() => setmodalActive(true)}
                className={styles.button}
                type='button'
              >
                <span>РЕГИСТРАЦИЯ </span>
              </button>
            </div>
            <Suspense fallback={<div></div>}>
              {/* Burger menu */}
              <Burger active={burgerShow} setActive={setburgerShow} />
            </Suspense>
          </div>
        </div>
      </header>
      <Suspense fallback={<div>Загрузка...</div>}>
        {/* Authorization form */}
        <Authorization
          active={authorizationActive}
          setActive={setauthorizationActive}
        />
      </Suspense>
      <Suspense fallback={<div>Загрузка...</div>}>
        {/* Registration form */}
        <Registration active={modalActive} setActive={setmodalActive} />
      </Suspense>
    </>
  );
};

export default Header;
