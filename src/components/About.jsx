export const About = ({ t }) => {
  return (
    <section className="secondary-color p-5" id="about">
      <div className="container">
        <h2 className="custom-title text-center">{t.about.title}</h2>
        <p className="mb-5 lh-lg">{t.about.description}</p>
      </div>
    </section>
  );
};
