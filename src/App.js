import AboutMe from './blocks/AboutMe.js';
import Header from './blocks/Header.js';
import Skills from './blocks/Skills.js';

function App() {
  return (
    <div className="main-page">
        <Header/>
        <AboutMe/>
        <Skills/>
      <footer>
        <p className="main-page__footer">© 2021 Nikolenko Danil </p>
      </footer>
    </div>
  );
}

export default App;

