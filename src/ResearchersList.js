import { Link } from "react-router-dom";

const ResearchersList = ( { data } ) => {

  
  return ( 

        <div className="researchers-preview">

            {data.map( data => (

            <div className="researchers-preview" key={data.id}>

              
                <Link className="researchers-list" to={`/researchers-details/${data.id}`}>


                  <h2>{ data.title }</h2>
                  <p>Written by { data.name }</p>

                </Link>
            </div>


))}




        </div>


  

      

   );
}
 
export default ResearchersList;