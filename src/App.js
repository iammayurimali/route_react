import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import About from './components/About'
import Support from './components/Support';
import Home from './components/Home';
import MainIndex from './components/MainIndex';


function App() {

  return (

    <div className="App">
      <nav>
        <ul>
          <NavLink to = "/">Home </NavLink> 
          <NavLink to = "/support">Support </NavLink>
          <NavLink to = "/about">About </NavLink>
          <NavLink to = "/labs">Labs </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home/>}>
          <Route index element = {<MainIndex/>}></Route>
        <Route path = "/support" element = {<Support/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
        <Route path = "/labs" element = {<Labs/>}></Route>
        <Route path = "*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
