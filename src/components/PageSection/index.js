import { Children } from "react";

const PageSection = ({title, children, ...passThrough}) => (
  <section className="section" {...passThrough}>
    <div className="container">
      <h1 className="title is-size-1 has-text-centered">
        {title}
      </h1>
      <div className="columns is-centered section-content">
        {children}
      </div>
    </div>
  </section>
)

export default PageSection;