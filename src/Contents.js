import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

const Contents = () => {


  return (
    <div>
    <div className="course-content">
      <div className="header">
        <div className="course-details">
          <h3>Course Name</h3>
        </div>
       
      </div>
      <nav className="navigation-bar">
        <ul className="nav-items">
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/contents">Contents</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h2>Course Description</h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et deserunt numquam suscipit facilis voluptate debitis. Ducimus facilis laudantium aspernatur aliquam, minus vel? Nobis fugiat illo hic asperiores esse accusamus quisquam!</p>
      
       <h2>Course Outline</h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et deserunt numquam suscipit facilis voluptate debitis. Ducimus facilis laudantium aspernatur aliquam, minus vel? Nobis fugiat illo hic asperiores esse accusamus quisquam!</p>
      </div>
      
    </div>
    </div>

    
  );
};

export default Contents;
