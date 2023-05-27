import logo from './e-learning.jpg'
import { Link, useHistory } from "react-router-dom";


const Navbar = () => {
  const history = useHistory();

  const handleButtonClick = () =>{
    history.push('/');
  }

  return ( 
    <div className="sidebar">
      <div className="logo">
        <button onClick={handleButtonClick}>
          <img src={logo} alt="My Image" />
        </button>
      </div>
      <ul>
        <li><Link to="/ProfilePage">Profile</Link></li>
        <li><Link to="/Overview">Courses</Link></li>
        <li><Link to="/WallPage">Wall</Link></li>
      </ul>
      <div className="logout">
      <Link className="logout-link-container" to="/Login" style={{ width: '100%', height: '100%' }}>
  <button className="logout-button"style={{ width: '100%', height: '100%' }}>Logout</button>
</Link>

      </div>
    </div>
  );
}
 
export default Navbar;
