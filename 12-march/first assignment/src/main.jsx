import React from 'react';

const Features = () => {
  return (
    <section id="features">
      <h2>Features</h2>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </section>
  );
}

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>Pricing</h2>
      <p>View our flexible pricing plans.</p>
      <button>View Pricing</button>
    </section>
  );
}

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}

const MainContent = () => {
  return (
    <main>
      <Features />
      <Pricing />
      <Contact />
    </main>
  );
}

export default MainContent;
