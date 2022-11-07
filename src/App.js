import logo from './logo.svg';
import './App.css';
import Labs from './labs/index.js';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment6 from './labs/a6';
import Assignment7 from './labs/a7';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Routes> 
    <Route path="/*" element={<Labs/>}/>  
    <Route index
        element={<Assignment6/>}/>
       <Route path="a7"
        element={<Assignment7/>}/>
      <Route path ="/hello" element={<HelloWorld/>}/>
      <Route path="/tuiter/*" element={<Tuiter/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>
    //       Welcome to Web Dev!
    //     </h1>
    //     <a href="labs/a2/index.html">
    //      Assignment 2
    //     </a>
    //     <a href="labs/a3/index.html">
    //      Assignment 3
    //     </a>
    //     <a href="labs/a4/index.html">
    //      Assignment 4
    //     </a>
    //     <a href="labs/a5/index.html">
    //      Assignment 5
    //     </a>
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
  );
}

export default App;
