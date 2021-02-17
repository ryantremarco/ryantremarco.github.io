import React from 'react';
import ContentPage from '../../../components/ContentPage';

const NotFound = () => (
  <ContentPage>
    <section className="hero">
      <div className="hero-body has-text-centered">
        <h2 className="title">
          404
        </h2>
        <p className="subtitle">
          Looks like this place doesn't exist.<br/>
          Probably calls for an existential crisis, wouldn't you say?
        </p>
      </div>
    </section>
  </ContentPage>
)

export default NotFound;