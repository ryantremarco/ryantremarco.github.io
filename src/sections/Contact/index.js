import PageSection from "../../components/PageSection";

const Contact = () => (
  <PageSection title="Contact" id="contact">
    <div className="column is-6 has-text-centered">
      <p className="has-text-centered">
        I'm currently looking for exciting  work opportunities in Japan.<br/>
        If you think you have something I may be interested in (or you just want to 
        say hi) please don't hesitate to send me a message.
      </p>
      <section className="section">
        <a
          href="mailto:ryantremarco@hotmail.co.uk"
          className="button is-primary is-medium"
        >
          Get in touch
        </a>
      </section>
    </div>
  </PageSection>
)

export default Contact;