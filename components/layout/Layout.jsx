import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronLeft,
  faCompass,
  faEllipsisVertical,
  faGear,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";
import styles from "./Layout.module.css";

function Layout(props) {
  const searchParams = useSearchParams();
  const pageName = searchParams.get("pageName");
  return (
    <>
      <header className={styles.header}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.btn} />
        <h1 className={styles.title}>{pageName}</h1>
        <FontAwesomeIcon icon={faEllipsisVertical} className={styles.btn} />
      </header>
      {props.children}
      <footer className={styles.footer}>
        <FontAwesomeIcon icon={faWallet} className={styles.btn} />
        <FontAwesomeIcon icon={faCompass} className={styles.btn} />
        <FontAwesomeIcon icon={faBell} className={styles.btn} />
        <FontAwesomeIcon icon={faGear} className={styles.btn} />
      </footer>
    </>
  );
}

export default Layout;
