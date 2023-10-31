import ResearchersList from "./ResearchersList";
import useFetch from "./useFetch";

const Home = () => {


  const { data, isPending } = useFetch('http://localhost:8000/researchers'); 

  return ( 

    <div className="researchers-preview">
        
      { isPending && <div>Loading...</div> }
      { data && <ResearchersList data = {data}/>}

    </div>


   );
}
 
export default Home;
