export default function About() {
  return (
    <section className="aboutSection pageEnter">
      <div className="aboutCard">

        <div className="aboutImage">
          <img src="/me.jpg" alt="Abdullah Madani" />
        </div>

        <div className="aboutContent">
          <h1>About Me</h1>

          <h2>Abdullah Madani</h2>

          <p>
            I am a Software Engineering student at Centennial College with a strong
            interest in web development and Artificial Intelligence. I enjoy building
            modern, user-friendly applications that solve real-world problems.
          </p>

          <div className="aboutButtons">
            <a href="/resume.pdf" download className="btnPrimary">
              Download Resume (PDF)
            </a>

            <a href="/projects" className="btnOutline">
              View My Projects
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
