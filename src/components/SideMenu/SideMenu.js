import React, { useState } from "react";
import styles from "./SideMenu.module.css";
import menuImage from "./images/menu-icon.png";
import logo from "./images/logo_magetic.png";

const SideMenu = () => {
  //*** Используется хук useState для изменения состояния меню - открытое/закрытое. В зависимости от этого применяются разные стили и отображаются разные элементы в меню

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //***

  //*** Функции для изменения состояния меню - открытое/закрытое при клике на иконку меню и на значок Х

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  //***

  return (
    <div
      className={
        //*** Применение одного из двух классов по условию открыто или закрыто меню
        isMenuOpen
          ? styles.sideMenu_container_open
          : styles.sideMenu_container_close
        //***
      }
    >
      <div
        className={
          //*** Применение одного из двух классов по условию, открыто или закрыто меню
          isMenuOpen ? styles.sideMenu_icon_open : styles.sideMenu_icon_close
        }
        //***

        //*** Слушатель события "клик" по иконке меню
        onClick={handleMenuOpen}
        //***
      >
        <img
          src={menuImage}
          alt="menu"
          className={styles.sideMenu_icon_image}
        />
      </div>

      {/***Рендеринг по условию открыто или закрыто меню*/}
      {isMenuOpen ? (
        <div>
          <img src={logo} alt="logo" className={styles.logo} />
          <span
            onClick={handleMenuClose}
            className={styles.sideMenu_closeButton}
          >
            X
          </span>
        </div>
      ) : null}
      {/***/}

      {/***Рендеринг по условию открыто или закрыто меню*/}
      {isMenuOpen ? (
        <ul className={styles.menu_list}>
          <li className={styles.menu_list_item}>
            <a href="/">link a</a>
          </li>
          <li className={styles.menu_list_item}>
            <a href="/">link b</a>
          </li>
          <li className={styles.menu_list_item}>
            <a href="/">link c</a>
          </li>
          <li className={styles.menu_list_item}>
            <a href="/">link d</a>
          </li>
          <li className={styles.menu_list_item}>
            <a href="/">link e</a>
          </li>
          <li className={styles.menu_list_item}>
            <a href="/">link f</a>
          </li>
        </ul>
      ) : null}
      {/***/}
    </div>
  );
};

export default SideMenu;
