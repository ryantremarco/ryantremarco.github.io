import PageSection from "../../components/PageSection";

const ExperiencePane = ({ company, date, children, className}) => (
  <div className={`columns experience-pane ${className}`}>
    <div className="column is-2">
      <h2 className="title is-size-4 has-text-right-tablet">{company}</h2>
      <p className="subtitle has-text-right-tablet">{date}</p>
    </div>
    <div className="experience-details column is-9 content">
      {children}
    </div>
  </div>
); 

const Experience = () => (
  <PageSection title="Experience" id="experience">
    <div className="column is-12">
      <ExperiencePane company="VISFO" date="2021 🠒 ?">
        <p>
          In my current role, I am responsible for writing API-layer applications in Golang using
          Test-Driven Development practices. I develop and maintain the GCP-based infrastructure
          underpinning those applications in dev-ops fashion.
        </p>
        <p>
          In order to help with managing rapidly changing customer requirements, I have been
          responsible for implementing Agile practices into an environment where there were no
          official ways-of-working, and still maintain a guiding role during events and
          ceremonies.
        </p>
      </ExperiencePane>
      <ExperiencePane className="nudge-down" company="HMG" date="2017 🠒 2021">
        <p>
          In this role, I was responsible for designing, developing, and maintaining a range of
          software products for internal customers in other government departments.
        </p>
        <p>
          As a full-stack engineer, I spent time working at every layer of these applications, from
          UX and front-end heavy projects, through to API work, and data-layer and
          dev-ops/infrastructure management. The primary technologies I made use of over these
          projects include Java/Spring Boot, JavaScript/React, and OpenShift hosted on AWS.
        </p>
        <p>
          Within my teams, I organised and facilitated Agile Events, often taking on a leading role
          to help steer development effort based on customer requirements and my team’s velocity
          estimations.
        </p>
        <p>
          Secondary to my official responsibilities, I also spent time improving inner-source
          libraries and components used by my teams in order to improve software within the
          organisation beyond my own products.
          This also extended to helping to improve internal tooling, such as pushing for internal
          supportof Rust’s package manager, Cargo, to give the developer community better freedom
          in choosing the correct tool for any particular piece of work.
        </p>
      </ExperiencePane>
      <ExperiencePane className="nudge-down" company="VLDB" date="2015">
        <p>
        In my short time at VLDB, my primary responsibility was to create a mobile application for
        the marketing team for easily calculating pricing when dealing with customers on-site. To
        do so, I made use of the Xamarin mobile framework and C#.
        </p>
      </ExperiencePane>
    </div>
  </PageSection>
)

export default Experience;