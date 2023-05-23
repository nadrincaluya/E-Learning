import logo from './e-learning.jpg'
const Navbar = () => {
    return ( 
              
  <div className="sidebar">
     
     <div className="logo">
      <img src={logo} alt="Logo"/>
    </div>
    
    <ul>
        <li><a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=goo&aqs=chrome.1.69i57j46i131i199i433i465i512j0i131i433i512j69i59j0i131i433i512l4j0i433i512j0i271.1554j0j15&sourceid=chrome&ie=UTF-8">Profile</a></li>
        <li><a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=goo&aqs=chrome.1.69i57j46i131i199i433i465i512j0i131i433i512j69i59j0i131i433i512l4j0i433i512j0i271.1554j0j15&sourceid=chrome&ie=UTF-8">Courses</a></li>
        <li><a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=goo&aqs=chrome.1.69i57j46i131i199i433i465i512j0i131i433i512j69i59j0i131i433i512l4j0i433i512j0i271.1554j0j15&sourceid=chrome&ie=UTF-8">Wall</a></li>

    </ul>
    <div className="logout">
      <a href="signup.html">Logout</a>
    </div>
</div>
     );
}
 
export default Navbar;