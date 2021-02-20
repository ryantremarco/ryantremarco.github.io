import PageSection from "../../components/PageSection";

const ExperiencePane = ({ company, date, children }) => (
  <div className="columns experience-pane">
    <div className="column is-2">
      <h2 className="title is-size-4 has-text-right-tablet">{company}</h2>
      <p className="subtitle has-text-right-tablet">{date}</p>
    </div>
    <div className="column is-9 content">
      {children}
    </div>
  </div>
); 

const Experience = () => (
  <PageSection title="Experience" id="experience">
    <div className="column is-8">
      <ExperiencePane company="HMG" date="2017 - ?">
        <ul>
          <li>
            Full-stack web development primarily using Java|SpringBoot
            and JavaScript|React to create apps for internal customers.
          </li>
          <li>
            Implementing good DevOps practices using OpenShift, AWS, and 
            Jenkins.
          </li>
          <li>
            Leading internal multiple product development teams, in both 
            technical and Agile capacities.
          </li>
          <li>
            Working as part of a dedicated innovation team, tasked with 
            investigating potential application of new technologies to business 
            benefit.
          </li>
        </ul>
      </ExperiencePane>
      <ExperiencePane company="VLDB" date="2015">
        <ul>
          <li>
            Designed and developed a cross-platform Xamarin mobile app for an 
            internal sales team to use with customers.
          </li>
          <li>
            Wrote automation scripts in Visual Basic for extracting, processing, 
            and revisualising customer data.
          </li>
        </ul>
      </ExperiencePane>
    </div>
  </PageSection>
)

export default Experience;