import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResearchersDetails from "./ResearchersDetails";
import NotFound from "./NotFound";


function App() {
  return (

    <Router>

      
    <div className="App">

  <Navbar />

      <Routes>

        <Route 
        path="/"
        element={<Home />}>
        </Route>
        <Route
        path="/create"
        element={<Create />}
        ></Route>
        <Route 
        path="/researchers-details/:id"
        element={<ResearchersDetails />}
        ></Route>
        <Route
        element={<NotFound />}
        path="*"
        ></Route>


      </Routes>


</div>


    </Router>

  );
}

export default App;
