export const Projects = ({ t }) => {
  return (
    <section id="projects" className="p-5 secondary-color">
      <div className="container">
        <h2 className="text-center my-5 mb-5 text-white">{t.projects.title}</h2>
        <div className="row justify-content-center">
          {t.projects.proj.map((project, index) => (
            <div key={index} className="col-md-8">
              <div className="border-start border-4 border-light ps-4 mb-4">
                <h4 className="text-white fw-bold">{project.title}</h4>
                <p className="text-light">{project.description}</p>
                <p className="text-white-50 fw-semibold">
                  {project.technologies}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  {project.viewProject}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
