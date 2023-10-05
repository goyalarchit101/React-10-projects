import styles from "./Navigation.module.css";

const Nav = () => {
  return (
    <nav className={`container ${styles.nav}`}>
        <div className="logo">
          <img src="../../public/Frame 2 1.png" alt=""></img>
        </div>

        <ul className={styles.navItems}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav;