import PageSection from "../../components/PageSection";

const skills = [
  {name: "Java; SpringBoot", tldr: "Web API development; testing"},
  {name: "JavaScript; React", tldr: "Web UI development; testing"},
  {name: "SQL; Mongo; Elastic", tldr: "Data persistence; FGS; Optimisation"},
  {name: "AWS; OpenShift", tldr: "Product deployment; CICD management"},
  {name: "Linux Systems", tldr: "Development platform; Automation"},
  {name: "Rust", tldr: "Hobbyist development "},
];

const Skills = () => (
  <PageSection title="Skills" id="skills">
    <div className="column is-10">
      <p className="has-text-centered">
        Over my years as a Software Engineer, I have made use of wide variety of programming
        languages and technologies. Professionally, I primarily work with standard web development
        stacks but as a hobbiest, I like to venture further afield into lower-level technology.
      </p>
      <p className="has-text-centered nudge-down">
        Here are some highlights:
      </p>
      <div className="columns is-multiline is-centered skills-container">
        {skills.map(({name, tldr}) => (
          <div className="column is-4 has-text-centered nudge-down" key={name}>
            <h2 className="title is-size-4"><strong>{name}</strong></h2>
            <p className="subtitle">
              {tldr}
            </p>
          </div>
        ))}
      </div>
    </div>
  </PageSection>
)

export default Skills;