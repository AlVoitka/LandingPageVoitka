import './App.scss';

import NavBar from '../NavBar/NavBar';
import Sidebar from '../SideBar/SideBar';
import Main from '../Main/Main';


function App() {
  return (
    <>
        <NavBar/>
          <div className='wrapp' style={{display: 'flex'}}>
            <Sidebar/> 
            <Main/>
          </div>
    </>
    
  );
}

export default App;
