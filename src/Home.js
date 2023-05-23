//Use State import
import { useState,useEffect } from "react";
import Courses from "./Courses";
import Completed from "./Completed";
const Home = () => {
  //useState Initialization //String
const[name,setName] = useState('mario');

  //useState Initialization //Int
//const [age, setAge] = useState(25);

//Dashboard Items List
const[CourseItems,setItems] = useState(null);
const[isPending,setIsPending] =useState(true);
const [error,setError] = useState(null);
    /*In progress Courses
    { title: 'Course 1', body: 'lorem ipsum...', division: 'Courses', id: 1 },
    { title: 'Course 2 ', body: 'lorem ipsum...', division: 'Courses', id: 2 },
    { title: 'Course 3', body: 'lorem ipsum...', division: 'Courses', id: 3 },
    { title: 'Course 4', body: 'lorem ipsum...', division: 'Courses', id: 4 },
    //Completed Courses
    { title: 'Course 1', body: 'lorem ipsum...', division: 'Completed', id: 5 },
    { title: 'Course 2 ', body: 'lorem ipsum...', division: 'Completed', id: 6 },
    { title: 'Course 3', body: 'lorem ipsum...', division: 'Completed', id: 7 },
    { title: 'Course 4', body: 'lorem ipsum...', division: 'Completed', id: 8 }
*/



useEffect(()=>{
 fetch('http://localhost:8000/CourseItems')
 .then(res =>{
  if(!res.ok){
    throw Error('Cloud not fetch data');
  }
  return res.json()
 })
 .then(data=>{
  console.log(data);
  setItems(data);
  setIsPending(false);
  setError(null);
 })
 .catch(err=>{
  setIsPending(false);
  setError(err.message);
 })
},[]);

const handleDelete = (id) =>{
  const newItems =CourseItems.filter(CourseItem => CourseItem.id !== id);
  setItems(newItems);
  
}

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
<BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario blog"/> */} 

       {/*<p>{name} is {age} years old</p>*/} 
       
    return (  
  
      <div className="course-content">
       
        
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {CourseItems &&<Courses items={CourseItems.filter((item)=>item.division === 'Courses')} />}
        

       {/*  <button onClick={() => setName('luigi')}>change name</button>*/}
        
       {CourseItems && <Completed items={CourseItems.filter((item)=>item.division === 'Completed')} />  }   
     
        </div>
       
    );
}
 
export default Home;