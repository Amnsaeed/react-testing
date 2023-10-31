import {Link } from 'react-router-dom';


const Navbar = () => {
  return ( 

      <div className="navbar">

        <h1>House of Articles</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Submit Article</Link>
      </div>



   );
}
 
export default Navbar;