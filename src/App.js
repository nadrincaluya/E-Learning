

import Navbar from './Navbar';
import Home from './Home';
import Logo from './Logo';
function App() {
  

  return (
  <div className="App">
    <Logo/>
    <Navbar/>
      <div className="content">
        <Home/>
    
      </div> 
  </div>
  );
}

export default App;
