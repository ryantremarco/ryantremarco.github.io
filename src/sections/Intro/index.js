import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => (
  <>
    <section className="hero is-primary is-fullheight has-text-centered">
      <div className="hero-body">
        <div className="hero-content">
          <section className="section">
            <p className="intro-hello">
              Hey.
            </p>
            <p className="intro-name">
              I'm Ryan Tremarco.
            </p>
            <p className="intro-para">
              I'm a full-stack Software Engineer, currently working for <strong>Her Majesty's Government</strong> in the <strong>United Kingdom</strong>.<br/>
              I am an <strong>innovation advocate</strong>, and I'm keenly interested in complex, data-oriented <strong>problem solving</strong>.<br/>
            </p>
          </section>
          <a
            href="mailto:ryantremarco@hotmail.co.uk"
            className="button is-success is-outlined is-medium"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  </>
)

export default Intro;