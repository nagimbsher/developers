import React from 'react';
import{ Routes, Route, NavLink , BrowserRouter} from "react-router-dom";
//import { Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>HomePage</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="40%" />
  </div>
);

const About = () => (
  <div>
    <h1>About me : My Hobbies</h1>
    <img
      src="https://cdn.pixabay.com/photo/2017/06/16/18/03/classical-2409809_1280.png"
      alt="About"
      width="40%" />
    <p>I love playing the guitar!</p>
  </div>
);

const MyProjects = () => (
  <div>
    <h1>Here is a list of projects</h1>
    <img
      src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
      alt="About"
      width="30%" />
  </div>
);

const App = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/projects">My Projects</NavLink>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<MyProjects />} />
    </Routes>
  </div>
);

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
