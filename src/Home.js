//Use State import
import { useState,useEffect } from "react";
import Courses from "./Courses";
const Home = () => {
  //useState Initialization //String
//const[name,setName] = useState('mario');

  //useState Initialization //Int
//const [age, setAge] = useState(25);

const[CourseItems,setItems] = useState([
  //Courses Items List
    { title: 'Course 1', body: 'lorem ipsum...', author: 'Mapua', id: 1 },
    { title: 'Course 2 ', body: 'lorem ipsum...', author: 'Harvard', id: 2 },
    { title: 'Course 3', body: 'lorem ipsum...', author: 'Mapua', id: 3 },
    { title: 'Course 4', body: 'lorem ipsum...', author: 'Mapua', id: 4 },

]);

const handleDelete = (id) =>{
  const newItems =CourseItems.filter(CourseItem => CourseItem.id !== id);
  setItems(newItems);
}

useEffect(()=>{
  console.log('use effect rub')
});
    //click event
 //   const handleClick = ()=>{
      //useState call functions
     // setName('luigi');
    //  setAge(30);
 //   }
    //click event with parameter
    //const handleClickAgain = (name) =>{
    //  console.log('hello ' + name);
   // }

 {/*   <BlogList blogs={blogs} title="All Blogs"/>
       <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario blog"/>

       {/*<p>{name} is {age} years old</p>*/} 
       
    return (  
  
        <div className="course-content">
        

   
         <Courses items={CourseItems} title="Courses" handleDelete={handleDelete}/>
          <div className="courses">
       
        
         
          </div>
  
          <div className="completed-content">
            <h1>Completed Courses</h1>
      
            <div className="completed-courses">
              <div className="completed-container">
                <div className="completed-course-image"></div>
                <h2>Course 1</h2>
          
              </div>
      
              <div className="completed-container">
                <div className="completed-course-image"></div>
                <h2>Course 2</h2>
             
              </div>
      
              <div className="completed-container">
                <div className="completed-course-image"></div>
                <h2>Course 3</h2>
              
              </div>
      
              <div className="completed-container">
                <div className="completed-course-image"></div>
                <h2>Course 4</h2>
               
              </div>
            </div>
             
        </div>
        </div>
    );
}
 
export default Home;