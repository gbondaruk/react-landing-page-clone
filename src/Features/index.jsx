import anyEditor from '../images/any-editor.png';
import cloudHosted from '../images/cloud-hosted.png';
import customDomains from '../images/custom-domains.png';
import editAnywhere from '../images/edit-anywhere.png';
import freeSSL from '../images/free-ssl.png';
import globalCdn from '../images/global-cdn.png';
import instantPublish from '../images/instant-publish.png';
import macNative from '../images/mac-native.png';
import smartLocalhost from '../images/smart-localhost.png';
import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.line}>
        <p>
          Here's some of the highlights of the features you get when you build
          sites with Wunderbucket.
        </p>
        <div className={styles.singleFeature}>
          <img src={cloudHosted} alt="cloud hosted" />
          <aside>
            <h3>Cloud Hosted</h3>
            <p>
              All your content is hosted on Amazon's Cloud. This is the
              infrastructure that powers the world's biggest websites, not a
              server running out of a garage. You're in good hands.
            </p>
          </aside>
        </div>
        <div className={styles.singleFeature}>
          <aside>
            <h3>Instant Publish</h3>
            <p>
              When you're done making changes in a local folder, just click
              "publish" and it's live. No branch, merge, build, deploy just to
              fix a typo or change a font. It lets you quickly iterate, and
              tinker. It works how you work.
            </p>
          </aside>
          <img src={instantPublish} alt="instant publish" />
        </div>
        <div className={styles.singleFeature}>
          <img src={editAnywhere} alt="edit anywhere" />
          <aside>
            <h3>Edit Anywhere</h3>
            <p>
              Sync your site's code to multiple computers. Allow your teammates
              to made edits and publish sites from multiple desktops.
            </p>
          </aside>
        </div>
        <div className={styles.singleFeature}>
          <aside>
            <h3>Smart Localhost</h3>
            <p>
              When you add a folder to Wunderbucket, you get a localhost server
              that will reload the page any time you change your source code.
              You'll never need to hit refresh again.
            </p>
          </aside>
          <img src={smartLocalhost} alt="smart localhost" />
        </div>
        <div className={styles.singleFeature}>
          <img src={macNative} alt="mac native" />
          <aside>
            <h3>Mac Native</h3>
            <p>
              A totally different take on static hosting, Wunderbucket is deeply
              integrated in the macOS experience. It makes publishing static
              content a completely natural part of your normal Mac workflow.
            </p>
          </aside>
        </div>
        <div className={styles.singleFeature}>
          <aside>
            <h3>Works with any code editor</h3>
            <p>
              Use your favorite code editor to build your web sites: Nova, Coda,
              Espresso, Visual Studio Code, BBEdit, TextWangler, etc. Because
              Wunderbucket natively integrates with the macOS Finder it works
              with all of them.
            </p>
          </aside>
          <img src={anyEditor} alt="works with any code editor" />
        </div>
        <div className={styles.singleFeature}>
          <img src={customDomains} alt="custom domains" />
          <aside>
            <h3>Use your own domain</h3>
            <p>
              All Wunderbucket sites support custom domains with minimal
              configuration. It only takes minutes to get your site running off
              of your own domain.
            </p>
          </aside>
        </div>
        <div className={styles.singleFeature}>
          <aside>
            <h3>Global CDN</h3>
            <p>
              Your sites will load super fast on any device from any location
              when they're published over our global content distribution
              network.
            </p>
          </aside>
          <img src={globalCdn} alt="global CDN" />
        </div>
        <div className={styles.singleFeature}>
          <img src={freeSSL} alt="free SSL" />
          <aside>
            <h3>Free SSL</h3>
            <p>
              All of your pages and assets will be served over https. You won't
              have to worry about purchasing or renewing your SSL certificate.
            </p>
          </aside>
        </div>
        <div className={styles.singleFeature}>
          <aside>
            <h3>Cloud by AWS</h3>
            <p>
              With Wunderbucket, your sites will be hosted on the AWS Cloud: The
              world's fastest and most reliable hosting platform.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default Features;
