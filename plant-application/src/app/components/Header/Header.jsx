import Link from "next/link";
import Search from "../Search/Search";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.headerComponents}>
        <div className={styles.memberInfo}>
          <div className={styles.pictureGreetingContainer}>
            <img
              className={styles.profilePicture}
              src="/images/Ben.jpeg"
              alt="profile"
            />
            <p className={styles.greeting}>
              Hi, <span className="username">Ben!</span>
            </p>
          </div>
          <p className={styles.flowerCount}>4 Flowers</p>
        </div>
        <div className={styles.searchContainer}>
        <Search />
        </div>
      </div>
      <ul className="homepage-nav">
        <li className="homepage-nav-item">
          <Link className={styles.link} href="/">
            All Flowers
          </Link>
        </li>
        <li className="homepage-nav-item">
          <Link className={styles.link} href="/indoors">
            Indoors
          </Link>
        </li>
        <li className="homepage-nav-item">
          <Link className={styles.link} href="/outdoors">
            Outdoors
          </Link>
        </li>
        <li className="homepage-nav-item">
          <Link className={styles.link} href="/organic">
            Organic
          </Link>
        </li>
        <li className="homepage-nav-item">
          <Link className={styles.link} href="/garden">
            Garden
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
