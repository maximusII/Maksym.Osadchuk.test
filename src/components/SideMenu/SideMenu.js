import React, { useState } from "react";
import styles from "./SideMenu.module.css";
import menuIcon from "./images/menu-icon.png";
import closeIcon from "./images/close-icon.png";
import logo from "./images/logo_magetic.png";

const SideMenu = () => {
  //*** Используется хук useState для изменения состояния меню - открытое/закрытое. В зависимости от этого применяются разные стили и отображаются разные элементы в меню.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //*** Функция для изменения состояния меню - открытое/закрытое при клике на иконку меню или на иконку Х.
  function handleMenu(e) {
    switch (e.target.name) {
      case "menuIcon":
        setIsMenuOpen(true);
        break;

      case "closeIcon":
        setIsMenuOpen(false);
        break;

      default:
        break;
    }
  }

  return (
    <div className={styles.sideMenu_container}>
      {/*Применение одного из двух классов по условию, открыто или закрыто меню*/}
      <div
        className={
          isMenuOpen
            ? styles.sideMenu_head_openedMenu
            : styles.sideMenu_head_closedMenu
        }
      >
        {/*Применение одного из двух классов по условию, открыто или закрыто меню*/}
        <div
          className={
            isMenuOpen
              ? styles.sideMenu_body__openedMenu
              : styles.sideMenu_body_closedMenu
          }
          //*** Слушатель события "клик" по иконке меню
          onClick={handleMenu}
        >
          <img
            src={menuIcon}
            alt="menu"
            className={styles.sideMenu_menuIcon}
            name="menuIcon"
          />
        </div>
        {/***Рендеринг по условию открыто или закрыто меню*/}
        {isMenuOpen ? (
          <div>
            <img src={logo} alt="logo" className={styles.logo} />

            {/* Слушатель события "клик" по иконке крестик*/}
            <div className={styles.sideMenu_closeButton} onClick={handleMenu}>
              <img
                src={closeIcon}
                alt="close"
                className={styles.sideMenu_closeIcon}
                name="closeIcon"
              />
            </div>
          </div>
        ) : null}
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
      </div>
    </div>
  );
};

export default SideMenu;
