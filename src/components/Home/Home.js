import styles from "./Home.module.css"
export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <button className={styles.btn}>Explore Our Products</button>
        </div>
      </section>
      <section className={styles.categories}>
        <h2>Explore Our Featured Categories</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/engine.png" alt="Engine" />
            <h3>Engine Parts</h3>
          </div>
          <div className={styles.card}>
            <img src="/tires.png" alt="Tires" />
            <h3>Tires</h3>
          </div>

          <div className={styles.card}>
            <img src="/headlights.png" alt="Lights" />
            <h3>Headlights</h3>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <p>Get in touch with our team</p>

        <div className={styles.contactBox}>
          <p>Email: hello@email.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className={styles.social}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </section>
    </div>
  )
}
