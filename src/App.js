
import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/Shared/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Admin/Dashboard';
import Footer from './components/Shared/Footer/Footer';
import EmailThankYou from './Pages/EmailThankYou';

import RequireAuth from './components/Shared/RequireAuth';
import MyAccount from './Pages/MyAccount';

import EditWebsite from './Pages/Admin/EditWebsite';
import UserDashboard from './Pages/UserDashboard';
import ReportSeo from './Pages/ReportSeo';
import Packages from './Pages/Admin/Packages';
import Package from './Pages/Package';
import TotalOrders from './Pages/Admin/TotalOrders';
import OrderAction from './Pages/Admin/OrderAction';


function App() {
  return (
    <body className='home-main header-fixed'>
      <div className='wrapper'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/report-sent' element={<EmailThankYou></EmailThankYou>}></Route>
        <Route path='/report/:id' element={<ReportSeo></ReportSeo>}></Route>
        <Route path='/package/:id' element={<RequireAuth><Package></Package></RequireAuth>}></Route>
        <Route path='/user-dashboard' element={<RequireAuth><UserDashboard></UserDashboard></RequireAuth>}></Route>


        <Route path='/admin/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/admin/packages' element={<RequireAuth><Packages></Packages></RequireAuth>}></Route>
        <Route path='/admin/website-edit/:id' element={<RequireAuth><EditWebsite></EditWebsite></RequireAuth>}></Route>
        <Route path='/admin/order/:id' element={<RequireAuth><OrderAction></OrderAction></RequireAuth>}></Route>
        <Route path='/admin/orders' element={<RequireAuth><TotalOrders></TotalOrders></RequireAuth>}></Route>

        
        



    

        

      </Routes>


      <Footer></Footer>
    </div>
    </body>
  );
}

export default App;
