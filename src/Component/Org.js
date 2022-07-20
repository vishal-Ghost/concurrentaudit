import React from 'react'
import NavBar from './NavBar'

const Org = () => {
    let handleClick = ()=>{
        alert('Form Submitted!!!')
    }
  return (
    <>
    
    <>
    <h1 className="display-3" style={{marginLeft:'50px'}}>ORG Structure</h1>
    <div style={{height:'50vh',width:'50vw',margin:'50px'}}>
    <form>
  <div className="form-group">
    <label htmlFor="OrganisationId">Organisation Id</label>
    <input type="text" className="form-control" id="OrganisationId"  placeholder="OrganisationId"/>
  </div>
  <div className="form-group">
    <label htmlFor="OrgName">Organisation Name</label>
    <input type="number" className="form-control" id="OrgName" placeholder="OrgName"/>
  </div>
  <div className="form-group">
    <label htmlFor="OrganisationLevel">Organisation Level</label>
    <input type="password" className="form-control" id="OrganisationLevel" placeholder="OrganisationLevel"/>
  </div>
  <div className="form-group">
    <label htmlFor="OrganisationTitle">Organisation Title</label>
    <input type="email" className="form-control" id="OrganisationTitle" placeholder="OrganisationTitle"/>
  </div>
  <div className="form-group">
    <label htmlFor="Location">Location</label>
    <input type="email" className="form-control" id="Location" placeholder="Location"/>
  </div>
  <div className="form-group">
    <label htmlFor="StartDate">Start Date</label>
    <input type="email" className="form-control" id="StartDate" placeholder="StartDate"/>
  </div>
  <div className="form-group">
    <label htmlFor="EndDate">End Date</label>
    <input type="email" className="form-control" id="EndDate" placeholder="EndDate"/>
  </div>
  <div className="form-group">
    <label htmlFor="ParentOrganisation">Parent Organisation</label>
    <input type="email" className="form-control" id="ParentOrganisation" placeholder="ParentOrganisation"/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
    </>
 
    </>
  )
}

export default Org