export const About = ({ t }) => {
  return (
    <section className="secondary-color p-5" id="about">
      <h2 className="mt-5 text-center">{t.about.title}</h2>
      <p className="mb-5">{t.about.description}</p>
    </section>
  );
};
