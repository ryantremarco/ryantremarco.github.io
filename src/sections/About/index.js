import PageSection from "../../components/PageSection";

const About = () => (
  <PageSection title="About" id="about">
    <div className="column is-4">
      <h2 className="title is-size-4">Me</h2>
      <p>
        Hello! I'm Ryan, a full-stack Software Eningeer working for Her Majesty's Government 
        in the UK.
      </p>
      <p>
        Since completing a government apprenticeship scheme and obtaining my first-class 
        honours degree, I've primarily been working on everything web application.
      </p>
      <p>
        I am currently looking to progress my career further down into the tech stack 
        - be it exlusively web backend, or systems development.
      </p>
    </div>

    <div className="column is-1"/>

    <div className="column is-4">
      <h2 className="title is-size-4">My Interests</h2>
      <p>
        Because I intend to move to Japan soon, I have recently been spending a lot of 
        my free time learning Japanese. I still have a ways to go, but it's a fun journey.
      </p>
      <p>
        I enjoy playing around with technologies I don't get to use day-to-day ie. Rust, 
        Ruby, and lately even some Haskell. This also extends to pretending that I'm a game 
        developer every now and again.
      </p>
      <p>
        Taking part in table-top roleplaying games is another hobby of mine, but I tend to 
        roll a lot of 1s.
      </p>
    </div>
  </PageSection>
)

export default About;