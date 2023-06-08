import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';
import data from './coursesData.json';

const FAQ = () => {
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<div key={i} className="star" />);
    }
    return stars;
  };

  return (
    <div>
       <div className="search-bar">
            <h2>Courses</h2>
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
      {data.map((course, index) => (
        <div className="course-content" key={index}>
         

          <div className="header">
            <div className="course-details">
              <h3>{course.courseName}</h3>
              <div className="rating">
                <h4>Rating</h4>
                {generateStars(course.rating)}
                <h4>{course.rating} | {course.numRatings} Ratings</h4>
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
            <p>{course.description}</p>

            <h2>Course Outline</h2>
            <p>{course.outline}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
