import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  FaSteamSquare,
  FaGooglePlay,
  FaAppStoreIos,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa';
import { IoMdBrowsers } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const SuperAutoPets = () => (
  <>
    <div className="main-container">
      <main>
        <h1>
          Super Auto Pets{' '}
          <img
            className="hide-small"
            src="icon-round.png"
            alt="logo"
            width="50px"
          />
        </h1>
        <section>
          <iframe
            id="youtube-video"
            src="https://www.youtube.com/embed/ggRELN8KyHs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
        <section>
          <h2>Play it now!</h2>
          <div className="cards">
            <button className="card">
              <FaSteamSquare />
              <span>Steam</span>
            </button>
            <button className="card">
              <FaGooglePlay />
              <span>Android</span>
            </button>
            <button className="card">
              <FaAppStoreIos />
              <span>iOS</span>
            </button>
            <button className="card">
              <IoMdBrowsers />
              <span>Browser</span>
            </button>
          </div>
        </section>
        <section>
          <h2>Feel free to contact us about anything</h2>
          <div className="cards">
            <button className="card">
              <MdEmail />
              <span>Email</span>
            </button>
            <button className="card">
              <FaTwitter />
              <span>Twitter</span>
            </button>
            <button className="card">
              <FaDiscord />
              <span>Discord</span>
            </button>
          </div>
        </section>
      </main>
      <img
        id="left-turtle"
        className="turtle-icon hide-small"
        src="Turtle.png"
        alt="turtle"
      />
      <img
        id="right-turtle"
        className="turtle-icon hide-small"
        src="TurtleMirror.png"
        alt="turtle mirrored"
      />
    </div>
    <footer>
      <span>© 2021 Team Wood Games ApS</span>
    </footer>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SuperAutoPets />);
