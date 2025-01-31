import emblem from '../images/icon-white.svg';
import logo from '../images/wunderbucket-type.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.root}>
      <header>
        <div>
          <a href="/">
            <img
              src={emblem}
              alt="logo"
              style={{
                width: '35px',
              }}
            />
          </a>

          <a href="/">
            <img
              src={logo}
              alt="logo"
              style={{
                height: '25px',
                marginLeft: '15px',
              }}
            />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="https://wunderbucket.io/docs/">Getting Started</a>
            </li>
            <li>
              <a href="https://wunderbucket.io/pricing.html">Pricing</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
