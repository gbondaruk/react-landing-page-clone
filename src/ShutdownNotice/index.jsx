import styles from './ShutdownNotice.module.css';

const ShutdownNotice = () => {
  return (
    <div className={styles.shutdownNotice}>
      <a href="https://wunderbucket.io/closing.html">
        Wunderbucket is shutting down on Oct 1st
      </a>
    </div>
  );
};
export default ShutdownNotice;
