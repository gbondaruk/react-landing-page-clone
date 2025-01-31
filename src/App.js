import './App.css';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import hero from './images/hero@2x.png';
import play from './images/play.svg';
import ShutdownNotice from './ShutdownNotice';

export default function App() {
  return (
    <div className="App">
      <ShutdownNotice />
      <Header />
      <div className="Product">
        <img
          src={hero}
          alt="hero"
          style={{
            display: 'block',
            width: '625px',
          }}
        />
        <h1>Turn local folders into websites</h1>
        <p>
          For designers & developers who want fast, secure websites without
          command lines, or configs. It’s like if Dropbox had a cute little
          static hosting service baby.
        </p>
        <div className="Play">
          <a
            href="https://www.youtube.com/watch?v=ou-TKbN11YE"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={play}
              alt="play"
              style={{
                marginRight: '10px',
              }}
            />
            See how it works
          </a>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}
