import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
            I'm a back-end Software Engineer based in the United Kingdom.<br/>
            I specialise in cloud-deployed Go microservice design and development.
          </p>
          <section className="section">
            <a
              href="mailto:ryantremarco@hotmail.co.uk"
              className="button is-success is-outlined is-medium"
            >
              Get in touch
            </a>
          </section>
        </div>
      </div>
      <div className="hero-footer">
        <div className="intro-arrow">
          <Link smooth to="#about">
            <i className="fas fa-chevron-down is-size-3"/>
          </Link>
        </div>
      </div>
    </section>
  </>
)

export default Intro;
