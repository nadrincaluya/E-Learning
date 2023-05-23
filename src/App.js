

import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Logo from './Logo';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import CoursesPage from './CoursesPage';
import ProfilePage from './ProfilePage';
import WallPage from './WallPage';
import './index.css';
import BarChart from './charts/BarChart';
import Login from './Login';
import Register from './Register';

function App() {
  

  return (
    <Router>
    <div className="App">  
    

        <div className="content">
            <Switch>
              <Route exact path="/">
              <Navbar/>
                <Dashboard/>
              </Route>
              <Route path="/CoursesPage">
              <Navbar/>
                <CoursesPage/>
              </Route>
              <Route path="/ProfilePage">
              <Navbar/>
                <ProfilePage/>
              </Route>
              <Route path="/WallPage">
              <Navbar/>
               <WallPage/>
              </Route>
              <Route path="/Login">
              <Login/>
             
              </Route>
              <Route path="/Register">
           
              <Register/>
              </Route>
            </Switch>
      
        </div> 
    </div>
    </Router>
  );
}

export default App;
