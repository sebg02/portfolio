import coderImage from "../assets/images/coder.jpg";
export const Home = ({ t }) => {
  return (
    <section
      className="primary-color min-vh-100 d-flex align-items-center"
      id="home"
    >
      <div className="container pt-5 pt-lg-5">
        <div className="row justify-content-center align-items-center text-center text-md-start">
          <div className="col-md-6 d-flex flex-column gap-4 mt-lg-5">
            <p className="h1 fw-bold pt-5">{t.welcome.title}</p>
            <p className="display-4 fw-bold">{t.welcome.p1}</p>
            <p className="fw-bold">{t.welcome.p2}</p>
            <div>
              <a className="btn btn-primary me-3 btn-lg-lg " href="#contact">
                {t.welcome.b1}
              </a>
              <button
                className="btn btn-secondary btn-lg-lg "
                onClick={() => {
                  const isSpanish = t.welcome.b2
                    .toLowerCase()
                    .includes("descargar");
                  const cvUrl = isSpanish
                    ? "/cv/SEBASTIAN_GIL_RUEDA_CV.pdf"
                    : "/cv/EN_SEBASTIAN_GIL_RUEDA_CV.pdf";

                  const link = document.createElement("a");
                  link.href = cvUrl;
                  link.download = cvUrl.split("/").pop();
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                {t.welcome.b2}
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={coderImage}
              className="img-fluid w-75 mt-4 mb-md-0"
              alt="Coder illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
