"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import {
  faArrowUpFromBracket,
  faBell,
  faChevronLeft,
  faCompass,
  faEllipsisVertical,
  faGear,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Layout.module.css";
import { faFile, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

function Layout(props) {
  const searchParams = useSearchParams();

  const [activeMenu, setActiveMenu] = useState(false);
  const pageName = searchParams.get("pageName");

  return (
    <>
      <header className={styles.header}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.btn} />
        <h1 className={styles.title}>{pageName}</h1>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          tabIndex={1}
          onClick={() => setActiveMenu((prev) => !prev)}
          onBlur={() => {
            setActiveMenu(false);
          }}
          className={`${styles.btn} ${styles.menuBtn} ${
            activeMenu && styles.activeMenuBtn
          }`}
        />
        <ul className={`${styles.menu} ${!activeMenu && styles.hideMenu} `}>
          <li className={styles.menuItem}>
            Edit <FontAwesomeIcon icon={faPenToSquare} />
          </li>
          <li className={styles.menuItem}>
            Courier Info <FontAwesomeIcon icon={faFile} />
          </li>
          <li className={styles.menuItem}>
            share <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </li>
          <li className={styles.menuItem}>
            Remove <span>&#8854;</span>
          </li>
        </ul>
      </header>
      {props.children}
      <footer className={styles.footer}>
        <FontAwesomeIcon icon={faWallet} className={`${styles.btn} active`} />
        <FontAwesomeIcon icon={faCompass} className={styles.btn} />
        <FontAwesomeIcon icon={faBell} className={styles.btn} />
        <FontAwesomeIcon icon={faGear} className={styles.btn} />
      </footer>
    </>
  );
}

export default Layout;
