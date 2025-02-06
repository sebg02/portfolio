export const Studies = ({ t }) => {
  return (
    <section className="third-color p-5" id="studies">
      <div className="container">
        <h2 className="mt-5 mb-5 text-center">{t.education.title}</h2>
        <div className="row justify-content-center mt-4">
          {t.education.degrees.map((study, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-5">
              <div className="card shadow border-0 h-100">
                <div className="card-body text-center">
                  <h4 className="card-title">{study.title}</h4>
                  <p className="text-muted">
                    <small>{study.year}</small>
                  </p>
                  <p className="card-text">{study.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
