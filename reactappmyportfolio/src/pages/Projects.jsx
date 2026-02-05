export default function Projects() {
  const projects = [
    {
      title: "Responsive Student Website",
      img: "/project1.jpg",
      role: "Frontend Developer",
      desc: "Multi-page website using HTML/CSS/JavaScript that adapts to mobile, tablet, and desktop.",
      outcome: "Built a clean, mobile-friendly layout.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Student Data App",
      img: "/project2.jpg",
      role: "Logic & UI Developer",
      desc: "A simple app that organizes and displays user-entered data clearly.",
      outcome: "Improved readability using structured UI.",
      tags: ["JavaScript", "UI", "Data"],
    },
    {
      title: "React Portfolio Website",
      img: "/project3.jpg",
      role: "Full React Implementation",
      desc: "Multi-page React portfolio with routing, navigation, and clean styling.",
      outcome: "Prepared project for cloud deployment.",
      tags: ["React", "Vite", "Router"],
    },
  ];

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Projects</h1>
      <p style={{ color: "rgba(233,238,247,0.75)" }}>
        Here are a few projects that show my progress in web development.
      </p>

      <div className="projectsGrid">
        {projects.map((p) => (
          <div className="projectCard" key={p.title}>
            <img className="projectImg" src={p.img} alt={p.title} />
            <div className="projectBody">
              <h3 style={{ margin: "6px 0" }}>{p.title}</h3>
              <p style={{ margin: "6px 0", color: "rgba(233,238,247,0.75)" }}>
                {p.desc}
              </p>
              <p style={{ margin: "8px 0" }}>
                <strong>Role:</strong> {p.role}
                <br />
                <strong>Outcome:</strong> {p.outcome}
              </p>

              <div className="tagRow">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
