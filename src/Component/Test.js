import React from 'react'

const Test = () => {
    let handleClick = ()=>{
        alert('Form Submitted!!!')
    }
  return (
    <>
    <h1 className="display-3" style={{marginLeft:'50px'}}>TEST</h1>
    <div style={{height:'50vh',width:'50vw',margin:'50px'}}>
    <form>
  <div className="form-group">
    <label htmlFor="Title">Title</label>
    <input type="text" className="form-control" id="Title"  placeholder="Title"/>
  </div>
  <div className="form-group">
    <label htmlFor="ValidFrom">Valid From</label>
    <input type="number" className="form-control" id="ValidFrom" placeholder="ValidFrom"/>
  </div>
  <div className="form-group">
    <label htmlFor="ValidUntil">Valid Until</label>
    <input type="password" className="form-control" id="ValidUntil" placeholder="ValidUntil"/>
  </div>
  <div className="form-group">
    <label htmlFor="OwnerOrgnisation">Owner Organisation</label>
    <input type="email" className="form-control" id="OwnerOrganisation" placeholder="OwnerOrganisation"/>
  </div>
  <div className="form-group">
    <label htmlFor="Owner">Owner</label>
    <input type="email" className="form-control" id="Owner" placeholder="Owner"/>
  </div>
  <div className="form-group">
    <label htmlFor="Level1Approver">Level 1 Approver</label>
    <input type="email" className="form-control" id="Level1Approver" placeholder="Level1Approver"/>
  </div>
  <div className="form-group">
    <label htmlFor="Level2Approver">Level 2 Approver</label>
    <input type="email" className="form-control" id="Level2Approver" placeholder="Level2Approver"/>
  </div>
  <div className="form-group">
    <label htmlFor="Relationships">Relationships</label>
    <input type="email" className="form-control" id="Relationships" placeholder="Relationships"/>
  </div>
  <div className="form-group">
    <label htmlFor="Status">Status</label>
    <input type="email" className="form-control" id="Status" placeholder="Status"/>
  </div>
  <div className="form-group">
    <label htmlFor="Category">Category</label>
    <input type="email" className="form-control" id="Category" placeholder="Category"/>
  </div>
  <div className="form-group">
    <label htmlFor="CreatedOn">Created On</label>
    <input type="email" className="form-control" id="Created On" placeholder="Created On"/>
  </div>
  <div className="form-group">
    <label htmlFor="CreatedBy">Created By</label>
    <input type="email" className="form-control" id="CreatedBy" placeholder="CreatedBy"/>
  </div>
  <div className="form-group">
    <label htmlFor="TestId">Test ID</label>
    <input type="email" className="form-control" id="TestId" placeholder="TestId"/>
  </div>
  <div className="form-group">
    <label htmlFor="ResponseType">Response Type</label>
    <input type="email" className="form-control" id="ResponseType" placeholder="ResponseType"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
    </>
  )
}

export default Test