import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router,Route,Routes  } from "react-router-dom";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import ViewDetails from "./components/ViewDetails";
import LogIn from "./components/LogIn";
 
function App() {
  return (
    <>
      <Router>
          <Nav/>
              <section>
                    <Routes>
                        <Route path="" element={<Home/>} />
                        <Route path="/aboutus" element={<AboutUs/>}/>
                        <Route path="/students" element={<StudentList/>}/>
                        <Route path="/addstu" element={<AddStudent/>}/>
                        <Route path="/editstudent/:rn" element={<EditStudent/>}/>
                        <Route path="/view-details/:rn" element={<ViewDetails/>}/>
                        <Route path="/login" element={<LogIn/>}/>


                    </Routes>
              </section>
      </Router>
    </>
    
  );
}

export default App;
