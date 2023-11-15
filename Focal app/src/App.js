import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BlogPage from './modules/JobSeeker/pages/MyBlogg/BlogPage';
// import Resum from './modules/JobSeeker/pages/Resum/Resum';
// import Information from './modules/JobSeeker/pages/Information/Information';
// import Home from './pages/Home/Home';
// import PageJobLogin from './pages/PageJobLogin/PageJobLogin';
// import Register from './pages/Register/Register';
// import Login from './modules/JobSeeker/pages/Login/Login';


function App() {
  return(
<div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>
    </div>
   
  );
}

export default App;