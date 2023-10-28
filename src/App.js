
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
import MyOrders from './Pages/MyOrders';
import TotalSpend from './Pages/TotalSpend';
import PayNow from './Pages/PayNow';
import PendingPayment from './Pages/PendingPayment';
import EditPackage from './Pages/Admin/EditPackage';
import Setting from './Pages/Admin/Setting';
import SettingPayment from './Pages/Admin/SettingPayment';
import Updatepaypal from './Pages/Admin/Updatepaypal';
import GeneralOption from './Pages/Admin/GeneralOption';
import UpdateLogo from './Pages/Admin/UpdateLogo';
import HomaPageSetting from './Pages/Admin/HomaPageSetting';
import AboutUsOption from './Pages/Admin/AboutUsOption';
import EditBanner from './Pages/Admin/EditBanner';
import AboutUsEdit from './components/HomePage/AboutUsEdit';
import SpecialityOptionEdit from './components/HomePage/SpecialityOptionEdit';
import WhyChooseEdit from './components/HomePage/WhyChooseEdit';
import EditRoadMaps from './Pages/Admin/EditRoadMaps';
import TeamList from './Pages/Admin/TeamList';
import TeamMemberEdit from './Pages/Admin/TeamMemberEdit';
import UpdateTeamTitle from './Pages/Admin/UpdateTeamTitle';
import TestimonialsList from './Pages/Admin/TestimonialsList';
import TestimonialEdit from './Pages/Admin/TestimonialEdit';
import TestimonialTitle from './Pages/Admin/TestimonialTitle';
import FaqsList from './Pages/Admin/FaqsList';
import EditFaqTitle from './Pages/Admin/EditFaqTitle';
import FaqsEdit from './Pages/Admin/FaqsEdit';
import FooterEdit from './Pages/Admin/FooterEdit';
import EditFooterLink from './Pages/Admin/EditFooterLink';
import EditSocialLinks from './Pages/Admin/EditSocialLinks';
import BannerSliderList from './Pages/Admin/BannerSliderList';
import EditBannerSlider from './Pages/Admin/EditBannerSlider';


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
        <Route path='/user-dashboard/my-orders/' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
        <Route path='/user-dashboard/spend/' element={<RequireAuth><TotalSpend></TotalSpend></RequireAuth>}></Route>
        <Route path='/pay-now/:id' element={<RequireAuth><PayNow></PayNow></RequireAuth>}></Route>
        <Route path='/pending-payment/' element={<RequireAuth><PendingPayment></PendingPayment></RequireAuth>}></Route>


        <Route path='/admin/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/admin/setting' element={<RequireAuth><Setting></Setting></RequireAuth>}></Route>
        
        <Route path='/admin/setting-general/' element={<RequireAuth><GeneralOption></GeneralOption></RequireAuth>}></Route>
        <Route path='/admin/update-logo/:id' element={<RequireAuth><UpdateLogo></UpdateLogo></RequireAuth>}></Route>


        <Route path='/admin/setting-homepage' element={<RequireAuth><HomaPageSetting></HomaPageSetting></RequireAuth>}></Route>
        <Route path='/admin/edit-banner-option/:id' element={<RequireAuth><EditBanner></EditBanner></RequireAuth>}></Route>

        <Route path='/admin/slider-banner/' element={<RequireAuth><BannerSliderList></BannerSliderList></RequireAuth>}></Route>
        <Route path='/admin/edit-slider/:id' element={<RequireAuth><EditBannerSlider></EditBannerSlider></RequireAuth>}></Route>




        <Route path='/admin/about-edit/:id' element={<RequireAuth><AboutUsEdit></AboutUsEdit></RequireAuth>}></Route>

        <Route path='/admin/speciality-edit/:id' element={<RequireAuth><SpecialityOptionEdit></SpecialityOptionEdit></RequireAuth>}></Route>
        <Route path='/admin/why-choose-edit/:id' element={<RequireAuth><WhyChooseEdit></WhyChooseEdit></RequireAuth>}></Route>
        <Route path='/admin/road-edit/:id' element={<RequireAuth><EditRoadMaps></EditRoadMaps></RequireAuth>}></Route>


        <Route path='/admin/team/' element={<RequireAuth><TeamList></TeamList></RequireAuth>}></Route>
        <Route path='/admin/team-edit/:id' element={<RequireAuth><TeamMemberEdit></TeamMemberEdit></RequireAuth>}></Route>
        <Route path='/admin/edit-team-title/:id' element={<RequireAuth><UpdateTeamTitle></UpdateTeamTitle></RequireAuth>}></Route>



        <Route path='/admin/packages' element={<RequireAuth><Packages></Packages></RequireAuth>}></Route>
        <Route path='/admin/package-edit/:id' element={<RequireAuth><EditPackage></EditPackage></RequireAuth>}></Route>


        <Route path='/admin/testimonials' element={<RequireAuth><TestimonialsList></TestimonialsList></RequireAuth>}></Route>
        <Route path='/admin/testimonial-edit/:id' element={<RequireAuth><TestimonialEdit></TestimonialEdit></RequireAuth>}></Route>
        <Route path='/admin/edit-testimonial-title/:id' element={<RequireAuth><TestimonialTitle></TestimonialTitle></RequireAuth>}></Route>



        <Route path='/admin/setting-footer' element={<RequireAuth><FooterEdit></FooterEdit></RequireAuth>}></Route>
        <Route path='/admin/edit-footer/:id' element={<RequireAuth><EditFooterLink></EditFooterLink></RequireAuth>}></Route>
        <Route path='/admin/edit-social/:id' element={<RequireAuth><EditSocialLinks></EditSocialLinks></RequireAuth>}></Route>





        <Route path='/admin/faqs' element={<RequireAuth><FaqsList></FaqsList></RequireAuth>}></Route>
        <Route path='/admin/faq-edit/:id' element={<RequireAuth><FaqsEdit></FaqsEdit></RequireAuth>}></Route>
        <Route path='/admin/faqs-title/:id' element={<RequireAuth><EditFaqTitle></EditFaqTitle></RequireAuth>}></Route>



        <Route path='/admin/website-edit/:id' element={<RequireAuth><EditWebsite></EditWebsite></RequireAuth>}></Route>
        <Route path='/admin/order/:id' element={<RequireAuth><OrderAction></OrderAction></RequireAuth>}></Route>
        <Route path='/admin/orders' element={<RequireAuth><TotalOrders></TotalOrders></RequireAuth>}></Route>
        <Route path='/admin/setting-payment' element={<RequireAuth><SettingPayment></SettingPayment></RequireAuth>}></Route>
        <Route path='/admin/paypal/:id' element={<RequireAuth><Updatepaypal></Updatepaypal></RequireAuth>}></Route>

        
        



    

        

      </Routes>


      <Footer></Footer>
    </div>
    </body>
  );
}

export default App;
