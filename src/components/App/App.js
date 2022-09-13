import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import About from '../About/About';
import About_info from '../About/About_info';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Greet from '../Greet/Greet';


function App() {
  return (
    <Router>
      <div className='app'>
          <NavBar/>
          <Switch>
            <Route exact path='/'>
              <Main/>
              <Greet/>
            </Route>
            <Route exact path='/work'>
              <Work/>
            </Route>
            <Route exact path='/about'>
              <About/>
              <About_info/>
            </Route>
            <Route exact path='/skills'>
              <Skills/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
