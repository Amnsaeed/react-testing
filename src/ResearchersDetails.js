
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResearchersDetails = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {


      fetch('http://localhost:8000/researchers/' + id , {

        method: 'DELETE'

      })

      navigate('/')


  }

  
  const { id } = useParams();
  const { data, isPending } = useFetch('http://localhost:8000/researchers/' + id);
 
  
  return ( 

    <div>


      { isPending && <div>Loading...</div>}     
      {data && <div className="researchers-preview">
        
        <h2> {data.title} </h2>
        <p>Written by {data.name}</p>
        <p>{data.body}</p>
        <button
        onClick={handleClick}
        className="delete-button">delete</button>

        </div>}


    </div>
      
  

   );
}
 
export default ResearchersDetails;