import htmlIcon from "../assets/svg/html.svg";
import cssIcon from "../assets/svg/css.svg";
import javascriptIcon from "../assets/svg/javascript.svg";
import reactIcon from "../assets/svg/react.svg";
import pythonIcon from "../assets/svg/python.svg";
import djangoIcon from "../assets/svg/django.svg";
import postgresqlIcon from "../assets/svg/postgresql.svg";
import mongoIcon from "../assets/svg/mongo.svg";

export const Skills = ({ t }) => {
  return (
    <section id="skills" className="text-center text-primary-color py-5 m-5">
      <h2 className="custom-title">{t.skills}</h2>
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center">
          {[
            { src: pythonIcon, alt: "Python", name: "Python" },
            { src: djangoIcon, alt: "Django", name: "Django" },
            { src: javascriptIcon, alt: "JavaScript", name: "JavaScript" },
            { src: reactIcon, alt: "React", name: "React" },
            { src: htmlIcon, alt: "HTML", name: "HTML" },
            { src: cssIcon, alt: "CSS", name: "CSS" },
            { src: postgresqlIcon, alt: "PostgreSQL", name: "PostgreSQL" },
            { src: mongoIcon, alt: "MongoDB", name: "MongoDB" },
          ].map((skill, index) => (
            <div className="col" key={index}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="img-fluid skill-icon"
                />
                <span className="mt-3 fw-bold">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
