import PageSection from "../../components/PageSection";

const About = () => (
  <PageSection title="About" id="about">
    <div className="column is-4">
      <h2 className="title is-size-4">Me</h2>
      <p>
        Hello! I'm Ryan, a <span className="avoid-wrap">back-end</span> Software Eningeer working
        for med-tech firm <a href="https://visformatics.net/" target="_"> Visfo</a> in the UK.
      </p>
      <p className="nudge-down">
        Since completing a <span className="avoid-wrap">government-sponsored</span> apprenticeship
        scheme and obtaining my <span className="avoid-wrap">first-class</span> honours degree I 
        spent a number of years working <span className="avoid-wrap">full-stack</span> development,
        but I have since transitioned to backe-end specific work.
      </p>
      <p className="nudge-down">
        In the future, I intend to keep to <span className="avoid-wrap">back-end</span> web
        technologies, and potentially even explore <span className="avoid-wrap">lower-level</span>
        work such as systems and embedded development. So long as 
        it's <span className="avoid-wrap">data-driven</span>, I'll be happy.
      </p>
    </div>

    <div className="column is-1"/>

    <div className="column is-4">
      <h2 className="title is-size-4">My Interests</h2>
      <p>
        Because I intend to move to Japan in the near future, I spend a large amount of 
        my free time learning Japanese. I still have a ways to go, but it's a fun journey.
      </p>
      <p className="nudge-down">
        I enjoy playing around with technologies I don't get to use 
        <span className="avoid-wrap">day-to-day</span> ie. Rust, Ruby, and even some purely 
        functional tech like Haskell. This also extends to pretending that I'm a game developer
        every now and again.
      </p>
      <p className="nudge-down">
        I also enjoy playing in and running various tabletop games such as Dungeons and Dragons.
      </p>
    </div>
  </PageSection>
)

export default About;