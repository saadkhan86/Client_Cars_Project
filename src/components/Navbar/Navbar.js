import { useState } from "react"
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>
        AutoPart<span className={styles.logo2}>Hub</span>
      </h2>

      <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.linkTag
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.linkTag
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.linkTag
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
