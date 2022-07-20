import React from 'react'

const User = () => {
    let handleClick = ()=>{
        alert('Form Submitted!!!')
    }
  return (
    <>
    <h1 className="display-3" style={{marginLeft:'50px'}}>User</h1>
    <div style={{height:'50vh',width:'50vw',margin:'50px'}}>
    <form>
  <div className="form-group">
    <label htmlFor="FirstName">First Name</label>
    <input type="text" className="form-control" id="FirstName"  placeholder="FirstName"/>
  </div>
  <div className="form-group">
    <label htmlFor="MidleName">Middle Name</label>
    <input type="password" className="form-control" id="MiddleName" placeholder="MiddleName"/>
  </div>
  <div className="form-group">
    <label htmlFor="Lat Name">Last Name</label>
    <input type="number" className="form-control" id="Last Name" placeholder="LastName"/>
  </div>
 
  <div className="form-group">
    <label htmlFor="UserName">User Name</label>
    <input type="email" className="form-control" id="UserName" placeholder="UserName"/>
  </div>
  <div className="form-group">
    <label htmlFor="FullName">Full Name</label>
    <input type="email" className="form-control" id="FullName" placeholder="FullName"/>
  </div>
  <div className="form-group">
    <label htmlFor="EmailAddress">Eamil Address</label>
    <input type="email" className="form-control" id="EmailAddress" placeholder="EmailAddress"/>
  </div>
  <div className="form-group">
    <label htmlFor="PhoneNumber">Phone Number</label>
    <input type="email" className="form-control" id="PhoneNumber" placeholder="PhoneNumber"/>
  </div>
  <div className="form-group">
    <label htmlFor="Location">Location</label>
    <input type="email" className="form-control" id="Location" placeholder="Location"/>
  </div>
  <div className="form-group">
    <label htmlFor="UserId">User Id</label>
    <input type="email" className="form-control" id="UserId" placeholder="UserId"/>
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
    <label htmlFor="Organisation">Organisation</label>
    <input type="email" className="form-control" id="Organisation" placeholder="Organisation"/>
  </div>
  <div className="form-group">
    <label htmlFor="Role">Role</label>
    <input type="email" className="form-control" id="Role" placeholder="Role"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
    </>
  )
}

export default User