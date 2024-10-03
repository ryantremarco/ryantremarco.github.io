import PageSection from "../../components/PageSection";

const About = () => (
  <PageSection title="About" id="about">
    <div className="column is-4">
      <h2 className="title is-size-4">Me</h2>
      <p>
        Hello! I'm Ryan, a <span className="avoid-wrap">back-end</span> Software Eningeer currently
        using Go and looking for remote-first work in the UK.
      </p>
      <p className="nudge-down">
        After completing a <span className="avoid-wrap">government-sponsored</span> apprenticeship
        scheme and obtaining my <span className="avoid-wrap">first-class</span> honours degree I 
        spent a number of years doing <span className="avoid-wrap">full-stack</span> development,
        but I have since transitioned to <span className="avoid-wrap">back-end</span> specific
        work.
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
      <p className="nudge-down">
        I enjoy playing around with technologies I don't get to use <span className="avoid-wrap">day-to-day</span> ie.
        Rust, Ruby, and even some purely 
        functional tech like Haskell. I lean best by doing so I like to take part in events like 
        <a href="https://adventofcode.com"> Advent of Code</a> to practice and learn. This also extends to pretending that I'm a game
        developer every now and again using <a href="https://godotengine.org/">Godot</a>'s node system to enter Game Jams.
      </p>
      <p className="nudge-down">
        Since around 2020, I also spend a portion of my time on language learning. I have been focused on Japanese for a while now,
        but I hope to pick up some Italian in the future too.
      </p>
      <p className="nudge-down">
        I also enjoy playing in and running various tabletop games such as Dungeons and Dragons, Mothership, and Warhammer -
        I'm even 3D printing and painting my own minis!
      </p>
    </div>
  </PageSection>
)

export default About;
