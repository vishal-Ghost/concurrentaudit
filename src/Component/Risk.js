import React from 'react'
import NavBar from './NavBar'

const Risk = () => {
    let handleClick = ()=>{
        alert('Form Submitted!!!')
    }
  return (
    <>
    <h1 className="display-3" style={{marginLeft:'50px'}}>Risk</h1>
    <div style={{height:'50vh',width:'50vw',margin:'50px'}}>
    <form>
  <div className="form-group">
    <label htmlFor="Title">Title</label>
    <input type="text" className="form-control" id="Title"  placeholder="Title"/>
  </div>
  <div className="form-group">
    <label htmlFor="ValidFrom">Valid From</label>
    <input type="text" className="form-control" id="ValidFrom" placeholder="Valid From"/>
  </div>
  <div className="form-group">
    <label htmlFor="ValidUntil">Valid Until</label>
    <input type="text" className="form-control" id="ValidUntil" placeholder="Valid Until"/>
  </div>
  <div className="form-group">
    <label htmlFor="OwnerOrganisation">Owner Organisation</label>
    <input type="text" className="form-control" id="OwnerOrganisation" placeholder="Owner Organisation"/>
  </div>
  <div className="form-group">
    <label htmlFor="Owner">Owner</label>
    <input type="text" className="form-control" id="Owner"  placeholder="Owner"/>
  </div>
  <div className="form-group">
    <label htmlFor="Level1Approver">Level 1 Approver</label>
    <input type="text" className="form-control" id="Lever1Approver"  placeholder="Level 1 Approver"/>
  </div>
  <div className="form-group">
    <label htmlFor="Level2Approver">Level 2 Approver</label>
    <input type="text" className="form-control" id="Lever2Approver"  placeholder="Level 2 Approver"/>
  </div>
  <div className="form-group">
    <label htmlFor="Relationships">Relationships</label>
    <input type="text" className="form-control" id="Relationships"  placeholder="Relationships"/>
  </div>
  <div className="form-group">
    <label htmlFor="Status">Status</label>
    <input type="text" className="form-control" id="Status"  placeholder="Status"/>
  </div>
  <div className="form-group">
    <label htmlFor="Category">Category</label>
    <input type="text" className="form-control" id="Category"  placeholder="Category"/>
  </div>
  <div className="form-group">
    <label htmlFor="CreatedOn">Created On</label>
    <input type="text" className="form-control" id="CreatedOn"  placeholder="Created On"/>
  </div>
  <div className="form-group">
    <label htmlFor="Created By">Created By</label>
    <input type="text" className="form-control" id="Created By"  placeholder="Created By "/>
  </div>
  <div className="form-group">
    <label htmlFor="RiskId">Risk ID</label>
    <input type="text" className="form-control" id="RiskID"  placeholder="Risk Id"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
    </>
  )
}

export default Risk