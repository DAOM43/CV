import './Skills.css'; // Asegúrate de tener los estilos que te dejo abajo

function Skills() {
  const skills = [
    { name: "C#", icon: "bi bi-code-slash text-purple", percent: 30 },
    { name: "HTML5", icon: "bi bi-filetype-html text-danger", percent: 55 },
    { name: "JavaScript", icon: "bi bi-filetype-js text-warning", percent: 20 },
    { name: "MySQL", icon: "bi bi-database-fill-gear text-info", percent: 20 },
    { name: "SQL Server", icon: "bi bi-hdd-network-fill text-secondary", percent: 45 },
    { name: "CSS3", icon: "bi bi-filetype-css text-primary", percent: 25 },
  ];

  return (
    <section id="habilidades" className="container py-5 border-bottom">
      <h2 className="text-center mb-5">Habilidades Técnicas</h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card text-white text-center bg-dark rounded-4 shadow p-3 h-100">
              <i className={`skill-icon ${skill.icon}`}></i>
              <h5 className="mt-3">{skill.name}</h5>
              <div className="progress mt-3" role="progressbar">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  style={{ width: `${skill.percent}%` }}
                >
                  {skill.percent}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
