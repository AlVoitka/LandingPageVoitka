import './App.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import About from '../About/About';
import AboutInfo from '../About/AboutInfo';
import Skills from '../Skills/Skills';
import SkillsInfo from '../Skills/SkillsInfo';
import Work from '../Work/Work';
import Greet from '../Greet/Greet';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';





function App() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className='app'>
          <NavBar
            handleMenu={()=> setMenuOpen(isMenuOpen ? false : true)}
          />
          <Switch>
            <Route exact path='/'>
              <Main/>
              <Greet/>
              <MobileMenu
                menuOpen={isMenuOpen}
                menuClose={()=> setMenuOpen(false)}
              />
            </Route>
            <Route exact path='/work'>
              <Work/>
            </Route>
            <Route exact path='/about'>
              <About/>
              <AboutInfo/>
            </Route>
            <Route exact path='/skills'>
              <Skills/>
              <SkillsInfo/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;


