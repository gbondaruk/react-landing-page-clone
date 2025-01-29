import emblem from '../images/icon-white.svg';
import logo from '../images/wunderbucket-type.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.shutdownNotice}>
        <a href="https://wunderbucket.io/closing.html">
          Wunderbucket is shutting down on Oct 1st
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img src={emblem} alt="logo" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li>
            <a href="https://wunderbucket.io/docs/">Getting Started</a>
          </li>
          <li>
            <a href="https://wunderbucket.io/pricing.html">Pricing</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
