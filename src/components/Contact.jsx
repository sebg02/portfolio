export const Contact = ({ t }) => {
  return (
    <section class="primary-color text-white py-5" id="contact">
      <div class="container">
        <h2 class="text-center mt-5 mb-4">{t.contact}</h2>
        <ul class="list-unstyled d-flex justify-content-center gap-3">
          <li>
            <a
              href="https://www.linkedin.com/in/sebastian-gil-rueda-474357268"
              target="_blank"
              class="btn btn-outline-light"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sebg02"
              target="_blank"
              class="btn btn-outline-light"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
