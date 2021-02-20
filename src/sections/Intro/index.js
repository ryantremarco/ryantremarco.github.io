import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => (
  <>
    <section className="hero is-primary is-fullheight has-text-centered">
      <div className="hero-body">
        <div className="hero-content">
          <p className="intro-hello">
            Hey.
          </p>
          <p className="intro-name">
            I'm <span className="avoid-wrap">Ryan Tremarco.</span>
          </p>
          <p className="intro-para">
            I'm a full-stack Software Engineer, currently based in the United Kingdom.<br/>
            I specialise in complex, data-oriented problem solving.
          </p>
          <a
            href="mailto:ryantremarco@hotmail.co.uk"
            className="button is-success is-outlined is-medium contact-button"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  </>
)

export default Intro;