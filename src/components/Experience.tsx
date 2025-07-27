function Experience() {
  return (
    <section id="experiencia" className="container py-5 border-bottom">
      <h2>Experiencia</h2>
      <ul className="list-unstyled">
        <li>
          <strong>Sistema de Gestión de Tareas (Proyecto Académico)</strong><br />
          Desarrollado con ASP.NET Core, Razor Pages, MySQL<br />
          Funciones: CRUD de tareas, autenticación de usuarios
        </li>
        <li className="mt-3">
          <strong>Sistema de Nómina (Proyecto Académico)</strong><br />
          API RESTful en ASP.NET Core con SQL Server y QuestPDF<br />
          Funciones: Control de empleados, generación de reportes PDF
        </li>
      </ul>
    </section>
  );
}

export default Experience;