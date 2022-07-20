import React from 'react'
import {Route} from 'react-router-dom'
import AuditPlan from './AuditPlan'
import Control from './Control'
import Dashboard from './Dashboard'
import ManageAudit from './ManageAudit'
import NavBar from './NavBar'
import Org from './Org'
import Process from './Process'
import Risk from './Risk'
import Test from './Test'
import User from './User'
import WorkPaper from './WorkPaper'

const Elements = () => {
  return (
    <>
    <Route path='Component/AuditPlan' element={<AuditPlan/>}/>
        <Route path='Component/ManageAudit' element={<ManageAudit/>}/>
        <Route path='Component/WorkPaper' element={<WorkPaper/>}/>
        <Route path='Component/DashBoard' element={<Dashboard/>}/>
        <Route path = '/Component/NavBar' element={<NavBar/>}/>
        <Route path='/Component/Control' element={<Control/>}/>
        <Route path='/Component/Test' element={<Test/>}/>
        <Route path='/Component/User' element={<User/>}/>
        <Route path = '/Component/Process' element={<Process/>}/>
        <Route path = '/Component/Risk' element={<Risk/>}/>
        <Route path = '/Component/Org' element={<Org/>}/>
    </>
  )
}

export default Elements