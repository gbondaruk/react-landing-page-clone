import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>
          © 2023 <a href="https://smmall.site/">Smmall Inc.</a>
          <br /> Illustrations by{' '}
          <a href="https://humanities.studio/">Humanities</a>
        </p>
        <ul>
          <li>
            <a href="https://wunderbucket.io/about.html">About</a>
          </li>
          <li>
            <a href="https://wunderbucket.io/blog">Blog</a>
          </li>
          <li>
            <a href="https://wunderbucket.io/docs">Docs</a>
          </li>
          <li>
            <a href="https://status.wunderbucket.io/49572-Wunderbucket">
              System Status
            </a>
          </li>
          <li>
            <a href="https://wunderbucket.io/privacy.html">Privacy</a>
          </li>
          <li>
            <a href="https://wunderbucket.io/terms.html">Terms</a>
          </li>
          <li>
            <a href="https://wunderbucket.io/contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
