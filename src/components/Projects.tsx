import { FaGithub,} from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'API RESTful de Personajes',
    repo: 'https://github.com/BJCorado/proyecto-API',
    description: 'Colaboré en la creación de una API REST para la gestión de personajes usando Node.js y MongoDB.',
    techs: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Sistema de Nómina',
    repo: 'https://github.com/KizunaG/SistemaNomina',
    description: 'Participé como colaborador en el desarrollo del sistema de nómina con Blazor y SQL Server.',
    techs: ['Blazor', '.NET 8', 'SQL Server']
  },
  {
    title: 'Proyecto de Métodos Formales',
    repo: 'https://github.com/KizunaG/ProyectoMetodosF',
    description: 'Apoyé en modelado y estructura de base de datos del proyecto académico de métodos formales.',
    techs: ['Modelado UML', 'SQL', 'Diagrama ER']
  }
];

const Projects = () => {
  return (
    <section className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Proyectos Colaborativos</h2>
        <div className="projects-timeline d-flex flex-column gap-4">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-line" />
              <div className="project-content shadow-sm">
                <h5 className="project-title">{project.title}</h5>
                <p className="project-desc">{project.description}</p>
                <div className="project-techs">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="badge bg-secondary-subtle text-dark me-2 mb-2">{tech}</span>
                  ))}
                </div>
                <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark mt-2">
                  <FaGithub className="me-2" /> Ver en GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;