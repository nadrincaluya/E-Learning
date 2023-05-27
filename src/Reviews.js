import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

const Reviews = () => {
  const rating = 3;
  
  
  const generateStars = () => {
  


    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<div key={i} className="star" />);
    }


    return stars;
  };

  return (
    <div>   
        
    <div className="course-content">
    <div className="search-bar">
        <h2>Courses</h2>
        <input type="text" className="search-input" placeholder="Search..." />
    </div>

      <div className="header">
        <div className="course-details">
          <h3>Course Name 1</h3>
          
          <div className="rating">
        
          <h4>Rating</h4>
            {generateStars()} 
            {<h4> {rating}| 100,000 Ratings</h4>}
          </div>
        </div>
        <button className="follow-button">Follow</button>
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
   
       
    <h2>Add Reviews here</h2>
      </div>
    </div>

    <div className="course-content">
    

      <div className="header">
        <div className="course-details">
          <h3>Course Name 2</h3>
          
          <div className="rating">
        
          <h4>Rating</h4>
            {generateStars()} 
            {<h4> {rating}| 100,000 Ratings</h4>}
          </div>
        </div>
        <button className="follow-button">Follow</button>
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

    <div className="course-content">
    

    <div className="header">
      <div className="course-details">
        <h3>Course Name 3</h3>
        
        <div className="rating">
      
        <h4>Rating</h4>
          {generateStars()} 
          {<h4> {rating}| 100,000 Ratings</h4>}
        </div>
      </div>
      <button className="follow-button">Follow</button>
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
      ]
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

export default Reviews;
