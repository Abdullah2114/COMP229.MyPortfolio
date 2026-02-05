export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Build responsive websites using HTML, CSS, JavaScript, and React with clean UI and good structure.",
      icon: "🌐",
    },
    {
      title: "Frontend Design",
      desc: "Create modern layouts, smooth navigation, and user-friendly interfaces with a focus on UX.",
      icon: "🎨",
    },
    {
      title: "Programming Assistance",
      desc: "Help with coding assignments, debugging, and improving code readability and logic (JavaScript / React).",
      icon: "💻",
    },
  ];

  return (
    <section className="servicesSection pageEnter">
      <h1 className="pageTitle">Services</h1>

      <div className="servicesGrid">
        {services.map((s, i) => (
          <div className="serviceCard" key={i}>
            <div className="serviceIcon">{s.icon}</div>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
