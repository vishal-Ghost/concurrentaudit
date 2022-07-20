import './App.css';
import NavBar from './Component/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Control from './Component/Control';
import Test from './Component/Test';
import User from './Component/User';
import Process from './Component/Process';
import Risk from './Component/Risk';
import Org from './Component/Org';
import LoginPage from './Component/LoginPage';
import Dashboard from './Component/Dashboard';
import AuditPlan from './Component/AuditPlan';
import ManageAudit from './Component/ManageAudit';
import WorkPaper from './Component/WorkPaper';
import ProtectedRoute from './Component/ProtectedRoute';
import AuditReport from './Component/AuditReport';


function App() {
  return (
    <>
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        </Routes>
        <NavBar/>
        <Routes>
        <Route element={<ProtectedRoute isLogged={true}/>}> 
        <Route path='Component/AuditReport' element={<AuditReport/>}/>    
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
      </Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
