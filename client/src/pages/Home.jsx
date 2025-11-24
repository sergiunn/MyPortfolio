function Home() {
  return (
    <section className="home-section">

      <div className="home-container">

        <h1 className="home-title">
          Hi, I'm <span className="home-title-highlight">Your Name</span>.
        </h1>

        <h2 className="home-subtitle">
          Embedded Software Developer → Aspiring Full-Stack Developer
        </h2>

        <p className="home-description">
          I’m transitioning from embedded software engineering into full-stack development.
          I enjoy building clean, efficient applications using modern tools like
          <span className="home-description-strong"> React, Node.js, and JavaScript.</span>
        </p>

        <div className="home-buttons">
          <a href="/projects" className="home-btn-primary">View Projects</a>
          <a href="/contact" className="home-btn-secondary">Contact Me</a>
        </div>

      </div>

      <section className="skills-section">
        <div className="skills-container">

          <h3 className="skills-title">Skills</h3>

          <div className="skills-grid">
            <div className="skill-item">React</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">HTML & CSS</div>
            <div className="skill-item">Git</div>
            <div className="skill-item">TailwindCSS</div>
          </div>

        </div>
      </section>

    </section>
  );
}

export default Home;
