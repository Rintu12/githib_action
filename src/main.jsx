import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import HomepageUser from './pages/Home/index.jsx'
import SearchList from './pages/SearchList/index.jsx'
import RidePackageDetails from './pages/RidePackageDetails/index.jsx'
import BookingDetails from './pages/Booking/BookingDetail/index.jsx'
import PaymentBooking from './pages/Booking/Payment/index.jsx'
import BookingConfirm from './pages/Booking/BookingConfirm/index.jsx'
import UserLogin from './pages/Auth/userlogin/login.jsx'
import UserResister from './pages/Auth/resister/userresister.jsx'
import UserDashBoard from './pages/userDashboard/index.jsx'
import ManageBooking from './pages/manageBooking/index.jsx'
import UserProfile from './pages/User/userprofile.jsx'
import Ourservice from './pages/Ourservice/index.jsx'
import CustomerSupport from './pages/Customersupport/index.jsx'
import ContactUs from './pages/Contactus/index.jsx'
import BlogListPage from './pages/Blog/blogListing.jsx'
import BlogDetailsPage from './pages/Blog/blogDetails/blogDetails.jsx'
import CustomerReview from './pages/Reviews/review.jsx'
import UpcomingDetails from './pages/userDashboard/upcomingRidedetails.jsx'
import FaqPage from './pages/Faq/index.jsx'
import TermsCondition from './pages/Terms&Condition/termscondition.jsx'
import PrivacyPolicyCom from './pages/privacyPolicy/index.jsx'
import CookisPolicy from './pages/cookies-policy/index.jsx'
import CancialationPolicy from './pages/CancilationPolicy/index.jsx'
import AdminDashboard from './pages/Admin/page/Dashboard/index.jsx'
import Jobmanagement from './pages/Admin/page/Jobmanagement/jobmanagement.jsx'
import OperatorLogin from './pages/Admin/page/Auth/operatorlogin.jsx'
import DashboardLayout from './pages/Admin/layout.jsx'
import Analytics from './pages/Admin/page/Analytics/analytics.jsx'
import Discount from './pages/Admin/page/Discount/discount.jsx'
import Earnings from './pages/Admin/page/Earnings/Earnings.jsx'
import Extraincome from './pages/Admin/page/ExtraItems/extraitems.jsx'
import Invoicehistory from './pages/Admin/page/invoicehistory/invoice.jsx'
import ManagementFleet from './pages/Admin/page/ManageFleet/managefleet.jsx'
import RatingsReview from './pages/Admin/page/RatingsReview/ratingsreview.jsx'
import Riderequest from './pages/Admin/page/RideRequest/rietrequest.jsx'
import Setting from './pages/Admin/page/Settings/settings.jsx'
import Supports from './pages/Admin/page/Support/support.jsx'
import Milesprice from './pages/Admin/page/Drivermanagement/milesprice.jsx'
import LocationPrice from './pages/Admin/page/Drivermanagement/locationprice.jsx'
import PostcodePrice from './pages/Admin/page/Drivermanagement/postcodeareaprice.jsx'
import Driverlist from './pages/Admin/page/Drivermanagement/driver/driver.jsx'
import Invoicedetails from './pages/Admin/page/invoiceDetails/invoicedetails.jsx'
import DriverProfile from './pages/Admin/page/Drivermanagement/driverprofile/driverprofile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      {/* Main Application Routes */}
      {/* <Routes> */}


      <Route path='/' element={<App />}>
        <Route index element={<HomepageUser />} />
        <Route path='user-search-car' element={<SearchList />} />
        <Route path='ride-package-details' element={<RidePackageDetails />} />
        <Route path='booking-details' element={<BookingDetails />} />
        <Route path='booking-payment' element={<PaymentBooking />} />
        <Route path='booking-confirm' element={<BookingConfirm />} />
        <Route path='ourservice' element={<Ourservice />} />
        <Route path='customer-support' element={<CustomerSupport />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='blog-list' element={<BlogListPage />} />
        <Route path='blog-details' element={<BlogDetailsPage />} />
        <Route path='faq' element={<FaqPage />} />
        <Route path='terms&condition' element={<TermsCondition />} />
        <Route path='privacy&policy' element={<PrivacyPolicyCom />} />
        <Route path='cookies&policy' element={<CookisPolicy />} />
        <Route path='cancellation-policy' element={<CancialationPolicy />} />


        <Route path='customer-review' element={<CustomerReview />} />

        <Route path='/user'>
          <Route path='user-dashboard' element={<UserDashBoard />} />
          <Route path='managebooking' element={<ManageBooking />} />
          <Route path='userprofile' element={<UserProfile />} />
          <Route path='upcoming-ride-details' element={<UpcomingDetails />} />

        </Route>
        {/* Auth Routes */}
        <Route path='/auth'>
          <Route path='userlogin' element={<UserLogin />} />
          <Route path='user-resister' element={<UserResister />} />
        </Route>


        <Route index path='supplier-signup' element={<OperatorLogin />} />
        {/* <Routes location='/admin'> */}

        {/* </Routes> */}
        <Route path='/operator' element={<DashboardLayout />}>


          <Route index path='dashboard' element={<AdminDashboard />} />
          <Route path='job-management' element={<Jobmanagement />} />
          <Route path='analytics' element={<Analytics />} />

          <Route path='discount' element={< Discount />} />
          {/* <Route path='driver-management' element={< Drivermanagement />} /> */}
          <Route path='earnings' element={< Earnings />} />
          <Route path='extra-income' element={< Extraincome />} />
          <Route path='driver-list' element={< Driverlist />} />
          <Route path='driver-profile' element={< DriverProfile />} />

          <Route path='invoice-history' element={< Invoicehistory />} />
          <Route path='invoice-details' element={< Invoicedetails />} />

          <Route path='manage-fleet' element={< ManagementFleet />} />
          <Route path='ratings-review' element={< RatingsReview />} />
          <Route path='riderequest' element={< Riderequest />} />
          <Route path='settings' element={< Setting />} />
          <Route path='support' element={< Supports />} />
          <Route path='milesprice' element={< Milesprice />} />
          <Route path='location-price' element={< LocationPrice />} />
          <Route path='postcode-price' element={< PostcodePrice />} />

        </Route>
      </Route>

      {/* </Routes> */}
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
