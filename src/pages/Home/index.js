import React from 'react';
import { Link } from 'react-router-dom';
import ContentPage from '../../components/ContentPage';
import Navbar from '../../components/Navbar';

const Home = () => (
  <ContentPage padding={false}>
    <div className="hero is-primary has-text-centered">
      <div className="hero-body">
        <h1 class="is-size-1 title">
          Ryan Tremarco
        </h1>
        <p class="is-size-3 subtitle">
          Professional Full-Stack Engineering at its Finest.
        </p>
      </div>
    </div>
    <section className="section has-text-centered">
      <p className="is-size-4">Hi.</p>
      <p>
        I'm <strong>Ryan</strong>, and I'm a full-stack web developer currently based in the <strong>United Kingdom</strong>.<br/>
        I am an <strong>innovation advocate</strong>, and I'm keenly interested in complex, data-oriented <strong>problem solving</strong>.<br/>
        Why not read more about <Link to="/dev">my work</Link> or <Link to="/about">my other interests</Link> while you're here.
      </p>
    </section>
  </ContentPage>
)

export default Home;