import React, { useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'

export let navAuditType;
const NavBar = () => {

  const auditSelec = useRef();

  const navigate = useNavigate();

  const handleLogOut=()=>{
    navigate('/')
  }

  const navAudit = (event)=>{
    navAuditType = event.target.value;
    navigate(`/Component/${navAuditType}`)
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Component/Process">Process</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Component/Risk">Risk</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Component/Control">Control <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Component/Test">Test</Link>
      </li>      
      <li className="nav-item">
        <Link className="nav-link" to="/Component/Org">ORG</Link>
      </li>      
      <li className="nav-item">
        <Link className="nav-link" to="/Component/User">User</Link> 
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Component/Dashboard">Dashboard</Link> 
      </li>
      <li className="nav-item">
      <select className="custom-select auditSelc" onChange={navAudit} ref={auditSelec}>
      <option value='AuditPlan'>Audit Plan</option>
      <option value="ManageAudit">Manage Audit</option>
      <option value="WorkPaper">Work Paper</option>
      <option value="AuditReport">Audit report</option>
      </select>
      </li>
      <li>
      <button className="btn btn-danger lobtn" onClick={handleLogOut}>Log Out</button>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default NavBar