import React from 'react'
import NavBar from './NavBar'

const ManageAudit = () => {
    let handleClick = ()=>{
        alert('Form Submitted!!!')
    }
  return (
    <>
    <h1 className="display-3" style={{marginLeft:'50px'}}>Manage Audit</h1>
    <div style={{height:'50vh',width:'50vw',margin:'50px'}}>
    <form>
  <div className="form-group">
    <label htmlFor="FieldOne">Field One</label>
    <input type="text" className="form-control" id="FieldOne" aria-describedby="emailHelp" placeholder="FIeld One"/>
  </div>
  <div className="form-group">
    <label htmlFor="FieldTwo">Field Two</label>
    <input type="number" className="form-control" id="FieldTwo" placeholder="Field Two"/>
  </div>
  <div className="form-group">
    <label htmlFor="FieldThree">Field Three</label>
    <input type="password" className="form-control" id="FieldThree" placeholder="Field Three"/>
  </div>
  <div className="form-group">
    <label htmlFor="FieldFour">Field Four</label>
    <input type="email" className="form-control" id="FieldFour" placeholder="Field Four"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
    </>
  )
}

export default ManageAudit