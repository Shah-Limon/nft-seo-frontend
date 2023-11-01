
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
import OrderPending from './Pages/Admin/OrderPending';
import PaymentPending from './Pages/Admin/PaymentPending';
import AcceptedOrder from './Pages/Admin/AcceptedOrder';
import PaymentsReceived from './Pages/Admin/PaymentsReceived';
import OrdersCancelled from './Pages/Admin/OrdersCancelled';
import PaymentsCancelled from './Pages/Admin/PaymentsCancelled';
import PaymentsRefunded from './Pages/Admin/PaymentsRefunded';
import AboutPage from './Pages/AboutPage';
import PricePage from './Pages/PricePage';
import ContactPage from './Pages/ContactPage';
import ContactPageEdit from './components/HomePage/ContactPageEdit';
import ContactUsMessages from './components/HomePage/ContactUsMessages';
import SupportPage from './Pages/SupportPage';
import TicketPage from './Pages/TicketPage';
import HelpDesk from './Pages/HelpDesk';
import HelpDeskAction from './Pages/HelpDeskAction';
import TicketAction from './Pages/TicketAction';
import SubscriptionMail from './Pages/SubscriptionMail';
import CancelledPayment from './Pages/CancelledPayment';
import ReceivedPayment from './Pages/ReceivedPayment';
import PackageTitleEdit from './Pages/Admin/PackageTitleEdit';
import ContactUsMessageRead from './components/HomePage/ContactUsMessageRead';
import ContactMessageSuccessMessage from './Pages/ContactMessageSuccessMessage';


function App() {
  return (
    <body className='home-main header-fixed'>
      <div className='wrapper'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-us' element={<AboutPage></AboutPage>}></Route>
        <Route path='/pricing' element={<PricePage></PricePage>}></Route>



        <Route path='/user-dashboard/support/' element={<SupportPage></SupportPage>}></Route>
        <Route path='/user-dashboard/create-ticket/' element={<TicketPage></TicketPage>}></Route>
        <Route path='/user-dashboard/support/:id' element={<RequireAuth><TicketAction></TicketAction></RequireAuth>}></Route>


        <Route path='/contact-us' element={<ContactPage></ContactPage>}></Route>
        
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/report-sent' element={<EmailThankYou></EmailThankYou>}></Route>
        <Route path='/message-sent-success' element={<ContactMessageSuccessMessage></ContactMessageSuccessMessage>}></Route>
        <Route path='/report/:id' element={<ReportSeo></ReportSeo>}></Route>
        <Route path='/package/:id' element={<RequireAuth><Package></Package></RequireAuth>}></Route>
        <Route path='/package-title-edit/:id' element={<RequireAuth><PackageTitleEdit></PackageTitleEdit></RequireAuth>}></Route>
        <Route path='/user-dashboard' element={<RequireAuth><UserDashboard></UserDashboard></RequireAuth>}></Route>
        <Route path='/user-dashboard/my-orders/' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
        <Route path='/user-dashboard/spend/' element={<RequireAuth><TotalSpend></TotalSpend></RequireAuth>}></Route>
        <Route path='/pay-now/:id' element={<RequireAuth><PayNow></PayNow></RequireAuth>}></Route>
        <Route path='/pending-payment/' element={<RequireAuth><PendingPayment></PendingPayment></RequireAuth>}></Route>
        <Route path='/cancelled-payment/:id' element={<RequireAuth><CancelledPayment></CancelledPayment></RequireAuth>}></Route>
        <Route path='/received-payment/:id' element={<RequireAuth><ReceivedPayment></ReceivedPayment></RequireAuth>}></Route>


        <Route path='/admin/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/admin/help-desk' element={<RequireAuth><HelpDesk></HelpDesk></RequireAuth>}></Route>
        <Route path='/admin/help-desk/:id' element={<RequireAuth><HelpDeskAction></HelpDeskAction></RequireAuth>}></Route>
        <Route path='/admin/subscription-email/' element={<RequireAuth><SubscriptionMail></SubscriptionMail></RequireAuth>}></Route>

   


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


        <Route path='/admin/edit-contact-page/:id' element={<ContactPageEdit></ContactPageEdit>}></Route>
        <Route path='/admin/contact-messages/' element={<ContactUsMessages></ContactUsMessages>}></Route>
        <Route path='/admin/contact-message/:id' element={<ContactUsMessageRead></ContactUsMessageRead>}></Route>
       


        <Route path='/admin/faqs' element={<RequireAuth><FaqsList></FaqsList></RequireAuth>}></Route>
        <Route path='/admin/faq-edit/:id' element={<RequireAuth><FaqsEdit></FaqsEdit></RequireAuth>}></Route>
        <Route path='/admin/faqs-title/:id' element={<RequireAuth><EditFaqTitle></EditFaqTitle></RequireAuth>}></Route>



        <Route path='/admin/website-edit/:id' element={<RequireAuth><EditWebsite></EditWebsite></RequireAuth>}></Route>
        <Route path='/admin/order/:id' element={<RequireAuth><OrderAction></OrderAction></RequireAuth>}></Route>
        <Route path='/admin/orders' element={<RequireAuth><TotalOrders></TotalOrders></RequireAuth>}></Route>
        <Route path='/admin/orders-pending' element={<RequireAuth><OrderPending></OrderPending></RequireAuth>}></Route>
        <Route path='/admin/payments/pending' element={<RequireAuth><PaymentPending></PaymentPending></RequireAuth>}></Route>
        <Route path='/admin/orders/accepted' element={<RequireAuth><AcceptedOrder></AcceptedOrder></RequireAuth>}></Route>
        <Route path='/admin/payments/received' element={<RequireAuth><PaymentsReceived></PaymentsReceived></RequireAuth>}></Route>
        <Route path='/admin/orders/cancelled' element={<RequireAuth><OrdersCancelled></OrdersCancelled></RequireAuth>}></Route>
        <Route path='/admin/payments/cancelled' element={<RequireAuth><PaymentsCancelled></PaymentsCancelled></RequireAuth>}></Route>
        <Route path='/admin/payments/refunded' element={<RequireAuth><PaymentsRefunded></PaymentsRefunded></RequireAuth>}></Route>







        <Route path='/admin/setting-payment' element={<RequireAuth><SettingPayment></SettingPayment></RequireAuth>}></Route>
        <Route path='/admin/paypal/:id' element={<RequireAuth><Updatepaypal></Updatepaypal></RequireAuth>}></Route>

        
        



    

        

      </Routes>


      <Footer></Footer>
    </div>
    </body>
  );
}

export default App;
