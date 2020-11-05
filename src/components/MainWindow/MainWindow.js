import React from "react";
import styles from "./MainWindow.module.css";
import bellIcon from "./images/bell-icon.png";
import menuIcon from "./images/menu-icon.png";

const MainWindow = () => {
  return (
    <div className={styles.mainWindow_container}>
      <div className={styles.leftWindow}>
        <div>
          <div className={styles.mainWindow_titles}>
            <div>Activity</div>
            <div>
              All Updates <span className={styles.arrow}>&#129171;</span>
            </div>
          </div>
        </div>
        <div className={styles.mainWindow_content}></div>
      </div>
      <div className={styles.rightWindow}>
        <div>
          <div className={styles.mainWindow_titles}>
            <div>Vehicles</div>
            <div className={styles.icons}>
              <a href="/">
                <img src={bellIcon} alt="bell" className={styles.bell_icon} />
              </a>
              <a href="/">
                <img src={menuIcon} alt="menu" className={styles.menu_icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.mainWindow_content}></div>
      </div>
    </div>
  );
};

export default MainWindow;
