import React, { useContext } from "react";
import LanguageContext, {
  LanguageProvider,
} from "./context/LanguageContext.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Experience } from "./components/Experience.jsx";
import { Studies } from "./components/Studies.jsx";

const Main = () => {
  const { language, switchLanguage, t } = useContext(LanguageContext);

  return (
    <div>
      <Navbar t={t} switchLanguage={switchLanguage}></Navbar>
      <Home t={t}></Home>
      <About t={t}></About>
      <Skills t={t}></Skills>
      <Studies t={t}> </Studies>
      <Experience t={t}> </Experience>
      <Projects t={t}></Projects>
      <Contact t={t}></Contact>
    </div>
  );
};

function App() {
  return (
    <>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </>
  );
}

export default App;
