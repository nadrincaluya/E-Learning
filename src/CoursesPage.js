import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

import data from './coursesData.json';
const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(data);
  }, []);

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
      {data.map((course) => (
        <div key={course.id} className="course-content">
        

          <div className="header">
            <div className="course-details">
              <h3>{course.name}</h3>
              <div className="profile-picture">
                <img src={course.profilePicture} alt="Profile" className="profile-image" />
                <span className="profile-name">{course.profileName}</span>
              </div>
              <div className="rating">
                <h4>Rating</h4>
                {generateStars(course.rating)}
                <h4>
                  {course.rating} | {course.totalRatings} Ratings
                </h4>
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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et deserunt numquam suscipit facilis voluptate
              debitis. Ducimus facilis laudantium aspernatur aliquam, minus vel? Nobis fugiat illo hic asperiores esse
              accusamus quisquam!
            </p>

            <h2>Course Outline</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et deserunt numquam suscipit facilis voluptate
              debitis. Ducimus facilis laudantium aspernatur aliquam, minus vel? Nobis fugiat illo hic asperiores esse
              accusamus quisquam!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
