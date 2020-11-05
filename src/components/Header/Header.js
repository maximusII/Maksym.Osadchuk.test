import React from "react";
import styles from "./Header.module.css";
import searchIcon from "./images/search-icon.png";
import dialogIcon from "./images/dialog-icon.png";
import bellIcon from "./images/bell-icon.png";
import userIcon from "./images/user-icon.png";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <input type="text" />

      <img src={searchIcon} alt="search" className={styles.search_icon} />

      <a href="/">
        <img src={dialogIcon} alt="dialog" className={styles.dialog_icon} />
      </a>
      <a href="/">
        <img src={bellIcon} alt="bell" className={styles.bell_icon} />
      </a>
      <a href="/">
        <img src={userIcon} alt="user" className={styles.user_icon} />
      </a>
    </header>
  );
};

export default Header;
