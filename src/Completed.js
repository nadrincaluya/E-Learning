
const Completed = ({items,title}) => {
    return ( 
        <div>
            <h1>Completed Courses</h1>
        <div className="completed-content">
     
        <div className="completed-courses"  >
        {items.map((items) =>(
            <div className="completed-container" key={items.id}>
            <div className="completed-course-image" ></div>
            
              <h2>{items.title} </h2>
            </div>
            
          ))}
          </div>
  </div>   
  </div>
     );

}
 
export default Completed;