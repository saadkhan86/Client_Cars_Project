import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>AutoPart<span className={styles.logo2}>Hub</span></h2>

      <ul className={styles.links}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* <div className={styles.auth}>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Signup</button>
      </div> */}
    </nav>
  );
}