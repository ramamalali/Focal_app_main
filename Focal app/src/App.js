// import logo from './logo.svg';
import './App.css';
import SkillsList from "../../../Focal_app_main/Focal app/src/modules/JobSeeker/components/SkillsList/SkillsList"
import Experience from "../../../Focal_app_main/Focal app/src/modules/JobSeeker/components/Experience/Experience"
import LanguagesList from "../../../Focal_app_main/Focal app/src/modules/JobSeeker/components/LanguagesList/LanguagesList"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
        <SkillsList />
       <Experience />
       <LanguagesList/>
    </>

    
  );
}

export default App;
