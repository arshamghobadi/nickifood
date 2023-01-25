import styles from './Layout.module.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">NICKIFOOD</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a
          href="https://jolly-selkie-ced79b.netlify.app/Arsham-Ghobadi-Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          NICKIFOOD
        </a>
        this is created by Arsham Ghobadi with next.js &copy;
      </footer>
    </>
  );
};

export default Layout;
