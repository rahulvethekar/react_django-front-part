import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>
        



        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/aboutus">AboutUs</Link>
        </li>
        {/* Student list */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/students">Student List</Link>
        </li>
        {/* Create student */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/addstu">Add Student</Link>
        </li>
      
        

       

        

        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Cart{count>0 && <span>({totalCount.tCount})</span>} </Link>
        </li> */}

        
        
        
          

          
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
