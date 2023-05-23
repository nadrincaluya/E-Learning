import Courses from "./Courses";
import Completed from "./Completed";
import useFetch from "./useFetch";
import Metrics from './metrics';

const Home = () => {
  const { data: CourseItems, isPending, error } = useFetch('http://localhost:8000/CourseItems');

  return (  
    <div className="course-content">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {CourseItems && <Courses items={CourseItems.filter((item)=>item.division === 'Courses')} />}
      {CourseItems && <Completed items={CourseItems.filter((item)=>item.division === 'Completed')} />}   
      <Metrics/>
    </div>       
  );
}
 
export default Home;
