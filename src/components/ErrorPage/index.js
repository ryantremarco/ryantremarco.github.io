import React from 'react';
import ContentPage from '../../components/ContentPage';

const ErrorPage = ({title, children}) => (
  <ContentPage>
    <section className="hero">
      <div className="hero-body has-text-centered">
        <h2 className="title">
          {title}
        </h2>
        <p className="subtitle">
          {children}
        </p>
      </div>
    </section>
  </ContentPage>
)

export default ErrorPage;