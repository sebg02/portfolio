export const Experience = ({ t }) => {
  return (
    <section id="experience" class="p-5 bg-light">
      <div class="container">
        <h2 class="text-center mt-5 mb-5 text-primary fw-bold ">
          {t.experience.title}
        </h2>
        <div class="position-relative">
          <div class="timeline-line position-absolute top-0 start-50 translate-middle bg-primary h-100 w-1"></div>

          {t.experience.jobs.map((job, index) => (
            <div key={index} class="row g-4 align-items-center mb-5">
              <div
                class={`col-md-6 ${
                  index % 2 === 0 ? "order-md-1 text-md-end" : "order-md-2"
                }`}
              >
                <h4 class="text-primary fw-bold mb-3">{job.position}</h4>
                <h5 class="text-muted mb-3">{job.company}</h5>
                <p class="text-primary mb-3">
                  <small>{job.period}</small>
                </p>
                <ul class="list-unstyled">
                  {job.description.map((task, i) => (
                    <li key={i} class="text-secondary mb-2">
                      • {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div class="col-md-6 d-flex justify-content-center order-md-1">
                <div class="timeline-dot bg-primary rounded-circle shadow-sm p-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
