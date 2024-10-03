import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Image src="/logo.png" alt="Fluid AI" width={50} height={50} />
        
        <div className={styles.company}>
          <p>2024 Fluid AI</p>
        </div>
      </div>
      
      <div className={styles.right}>
        <ul className={styles.nav}>
          <li><a href="#features">Our Features</a></li>
          <li><a href="#areas">Areas</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#waitlist">The Waitlist</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
