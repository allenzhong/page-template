import React, { Component } from 'react';
import ad from "./images/ad.jpg";
import masthead from "./images/masthead.jpg";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="main">
          <h1 className="logo">Book Site</h1>
          <div className="social">
            <a className="icon twitter" href="#">Twitter</a>
            <a className="icon facebook" href="#">Facebook </a>
          </div>
        </header>

        <aside className="main">
          <nav>
            <a href="#">books</a>
            <a href="#">authors</a>
            <a href="#">news</a>
            <a href="#">blog</a>
          </nav>
          <div className="ads">
            <figure className="ad">
              <img src={ad} />
            </figure>
            <figure className="ad">
              <img src={ad} />
            </figure>
          </div>
        </aside>
        <section className="content">
          <article>
            <header className="masthead">
              <figure>
                <img src={masthead} />
              </figure>
            </header>
            <h2>Headline</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
