import React from 'react';
import Navbar from '../Navbar';

const ContentPage = ({ children }) => {
  const classes = {
    mainContent: {
      flex: 1,
    }
  }
  return <>
    <Navbar />
    <section style={classes.mainContent} className="section">
      <div className="container">
        {children}
      </div>
    </section>
    <footer className="footer">
      <div className="content has-text-centered">
        Made with <i class="fas fa-heart" />
      </div>
    </footer>
  </>
}

export default ContentPage;