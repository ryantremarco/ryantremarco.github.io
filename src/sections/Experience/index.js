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
      <ExperiencePane company="Benefex" date="Jan 2023 - Sept 2024">
        <p>
          As a senior engineer at Benefex, I led multiple teams and projects from conception to final delivery to
          customers, taking resposibility for the technical leadership of design and implementation while
          upskilling my more junior team members.
        </p>
        <p>
          Notable projects include:
            <ul>
              <li>Centralised notifications service for the whole platform supporting email, web, mobile, and Microsoft Teams push Notifications</li>
              <li>Microsoft Teams app and accompanying bot built using the Azure Bot framework for notification delivery and product interaction</li>
              <li>A product provisioning service + global navigation wrapper to enable customers to expand usage of Benefex products globally (with an average 33% revenue increase per customer)</li>
            </ul>
        </p>
        <p>
          I also put emphasis into creating and maintaining standards as well as shared packages and api clients
          for the backend chapter, improving the daily workflow for all back-end engineers at Benefex.
          This included standardising error formats across the service landscape, introducing OpenAPI specifications to our services,
          and making use of and writing <code class="inline">go gen</code> code generation tools to reduce manually-written boilerplate across the chapter.
        </p>
      </ExperiencePane>
      <ExperiencePane className="nudge-down" company="VISFO" date="Jul 2021 - Jan 2023">
        <p>
          At VISFO, I was responsible for writing API-layer applications in Golang using
          Test-Driven Development practices. I also developed and maintained the GCP-based infrastructure
          underpinning those applications with Terraform.
        </p>
        <p>
          In order to help with managing rapidly changing customer requirements, I pushed for and implemented
          Agile practices into an environment where there were no official ways-of-working, and
          maintained a guiding role during events and ceremonies.
        </p>
      </ExperiencePane>
      <ExperiencePane className="nudge-down" company="HMG" date="Sept 2017 - Jul 2021">
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
          support of Rust’s package manager, Cargo, to give the developer community better freedom
          in choosing the correct tool for any particular piece of work.
        </p>
      </ExperiencePane>
    </div>
  </PageSection>
)

export default Experience;
