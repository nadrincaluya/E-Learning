const Courses = ({items,title}) => {
   // const items = props.items;
    
  // const title = props.title;


    return ( 
   <div>   
      <h2>Courses</h2>
   
        <div className="courses" >
           
         {items.map((items) =>(
      <div className="course" key={items.id}>
      
   
      <div className="course-image"></div>
      <div>
        <h2>{items.title} </h2>
        <div className="desc">{items.body}</div>
        <div className="progress">
            <div className="progress-bar"></div>
        </div>
     <button>Go to Course</button>
     {/*<button onClick={()=>handleDelete(items.id)}>Delete Course</button>*/}
   </div>
      </div>
    ))}
    </div>
    </div>

  

 );
   
}
 
export default Courses;