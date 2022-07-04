import { createApp } from 'vue';
import { router } from './router';
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'
import './assets/css/aos.css'
import './assets/js/aos.js'
import './assets/fontawesome/css/fontawesome.min.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/feather.css'
import './assets/js/feather.min.js'
import App from "./App.vue";
import LayoutHeader from './views/pages/frontend/Header'
import LayoutFooter from './views/pages/frontend/footer'
import LayoutDoctorHeader from './views/pages/frontend/Doctor/Doctorheader'
import LayoutIndexTenHeader from './views/pages/frontend/Home/Indexten/indextenheader'
import LayoutIndexTwoHeader from './views/pages/frontend/Home/Indextwo/indextwoheader'
import LayoutIndexFourTopHeader from './views/pages/frontend/Home/Indexfour/indexfourtopheader'
import LayoutIndexTenFooter from './views/pages/frontend/Home/Indexten/indextenfooter'
import LayoutIndexLevenHeader from './views/pages/frontend/Home/Indexleven/indexlevenheader'
import LayoutIndexLevenFooter from './views/pages/frontend/Home/Indexleven/indexlevenfooter'
import LayoutIndexFourteenHeader from './views/pages/frontend/Home/Indexfourteen/indexfourteenheader'
import LayoutIndexFourteenFooter from './views/pages/frontend/Home/Indexfourteen/indexfourteenfooter'
import LayoutIndexThirteenHeader from './views/pages/frontend/Home/Indexthirteen/indexthirteenheader'
import LayoutIndexThirteenFooter from './views/pages/frontend/Home/Indexthirteen/indexthirteenfooter'
import LayoutIndexFiveHeader from './views/pages/frontend/Home/Indexfive/indexfiveheader'
import LayoutIndexFiveFooter from './views/pages/frontend/Home/Indexfive/indexfivefooter'
import LayoutIndexEightHeader from './views/pages/frontend/Home/Indexeight/indexeightheader'
import LayoutIndexEightFooter from './views/pages/frontend/Home/Indexeight/indexeightfooter'
import LayoutIndexNineHeader from './views/pages/frontend/Home/Indexnine/indexnineheader'
import LayoutIndexNineFooter from './views/pages/frontend/Home/Indexnine/indexninefooter'
import LayoutIndexSevenHeader from './views/pages/frontend/Home/Indexseven/indexsevenheader'
import LayoutIndexSevenFooter from './views/pages/frontend/Home/Indexseven/indexsevenfooter'
import LayoutHeaderPharmacy from './views/pages/pharmacyadmin/headerpharmacy'
import LayoutSidebarPharmacy from './views/pages/pharmacyadmin/sidebarpharmacy'
import Layoutheaderadmin from './views/pages/admin/headeradmin'
import Layoutsidebaradmin from './views/pages/admin/sidebaradmin'
import Loader from './views/pages/Loader'




/**************Home component ***************/
import Banner from './views/pages/frontend/Home/Index/Banner'
import Looking from './views/pages/frontend/Home/Index/Looking'
import Specialities from './views/pages/frontend/Home/Index/Specialities'
import Book from './views/pages/frontend/Home/Index/Book'
import Features from './views/pages/frontend/Home/Index/Features'
import Blog from './views/pages/frontend/Home/Index/Blog'
import feaindexten from './views/pages/frontend/Home/Indexten/feaindexten'
import newsindexten from './views/pages/frontend/Home/Indexten/newsindexten'
import featureindexten from './views/pages/frontend/Home/Indexten/featureindexten'
import doctorindexten from './views/pages/frontend/Home/Indexten/doctorindexten'
import serviceindexten from './views/pages/frontend/Home/Indexten/serviceindexten'
import appointmentindexten from './views/pages/frontend/Home/Indexten/appointmentindexten'
import blogindexleven from './views/pages/frontend/Home/Indexleven/blogindexleven'
import highserviceindexleven from './views/pages/frontend/Home/Indexleven/highserviceindexleven'
import feaindexleven from './views/pages/frontend/Home/Indexleven/feaindexleven'
import bestdocindexleven from './views/pages/frontend/Home/Indexleven/bestdocindexleven'
import lookingindexleven from './views/pages/frontend/Home/Indexleven/lookingindexleven'
import bannerindexleven from './views/pages/frontend/Home/Indexleven/bannerindexleven'
import blogindexfourteen from './views/pages/frontend/Home/Indexfourteen/blogindexfourteen'
import newindexfourteen from './views/pages/frontend/Home/Indexfourteen/newindexfourteen'
import clinicsecindexfourteen from './views/pages/frontend/Home/Indexfourteen/clinicsecindexfourteen'
import bestindexfourteen from './views/pages/frontend/Home/Indexfourteen/bestindexfourteen'
import browseindexfourteen from './views/pages/frontend/Home/Indexfourteen/browseindexfourteen'
import doctorindexfourteen from './views/pages/frontend/Home/Indexfourteen/doctorindexfourteen'
import clinicindexfourteen from './views/pages/frontend/Home/Indexfourteen/clinicindexfourteen'
import lookingindexfourteen from './views/pages/frontend/Home/Indexfourteen/lookingindexfourteen'
import homeindexfourteen from './views/pages/frontend/Home/Indexfourteen/homeindexfourteen'
import indextwelveheader from './views/pages/frontend/Home/Indextwelve/indextwelveheader'
import indextwelvefooter from './views/pages/frontend/Home/Indextwelve/indextwelvefooter'
import newindextwelve from './views/pages/frontend/Home/Indextwelve/newindextwelve'
import latestindextwelve from './views/pages/frontend/Home/Indextwelve/latestindextwelve'
import featureindextwelve from './views/pages/frontend/Home/Indextwelve/featureindextwelve'
import doctorsecindextwelve from './views/pages/frontend/Home/Indextwelve/doctorsecindextwelve'
import doctorindextwelve from './views/pages/frontend/Home/Indextwelve/doctorindextwelve'
import specialiyindextwelve from './views/pages/frontend/Home/Indextwelve/specialiyindextwelve'
import lookingindextwelve from './views/pages/frontend/Home/Indextwelve/lookingindextwelve'
import blogindexthirteen from './views/pages/frontend/Home/Indexthirteen/blogindexthirteen'
import featureindexthirteen from './views/pages/frontend/Home/Indexthirteen/featureindexthirteen'
import doctorindexthirteen from './views/pages/frontend/Home/Indexthirteen/doctorindexthirteen'
import clinicindexthirteen from './views/pages/frontend/Home/Indexthirteen/clinicindexthirteen'
import lookingindexthirteen from './views/pages/frontend/Home/Indexthirteen/lookingindexthirteen'
import Indextwobestdoctor from './views/pages/frontend/Home/Indextwo/indextwobestdoctor'
import Indextwobrowserspec from './views/pages/frontend/Home/Indextwo/indextwobrowserspec'
import Indexthreebanner from './views/pages/frontend/Home/Indexthree/indexthreebanner'
import Indexfourbanner from './views/pages/frontend/Home/Indexfour/indexfourbanner'
import Indexfivebanner from './views/pages/frontend/Home/Indexfive/indexfivebanner'
import Indexfivecategory from './views/pages/frontend/Home/Indexfive/indexfivecategory'
import Indexfivespecialities from './views/pages/frontend/Home/Indexfive/indexfivespecialities'
import IndexFiveBrowseSpeclty from './views/pages/frontend/Home/Indexfive/indexfivebrowsespeclty'
import IndexFiveSelect from './views/pages/frontend/Home/Indexfive/indexfiveselect'
import IndexFiveBookDoctor from './views/pages/frontend/Home/Indexfive/indexfivebookdoctor'
import IndexFiveAvailableFeature from './views/pages/frontend/Home/Indexfive/indexfiveavailablefeature'
import IndexFiveLatestBlog from './views/pages/frontend/Home/Indexfive/indexfivelatestblog'
import IndexSixBanner from './views/pages/frontend/Home/Indexsix/Banner'
import IndexEightBanner from './views/pages/frontend/Home/Indexeight/banner'
import IndexEightCategory from './views/pages/frontend/Home/Indexeight/category'
import IndexEightSpecialities from './views/pages/frontend/Home/Indexeight/specialities'
import IndexBrowSpec from './views/pages/frontend/Home/Indexeight/browsespec'
import IndexDoctorSec from './views/pages/frontend/Home/Indexeight/doctorsec'
import IndexBestDoc from './views/pages/frontend/Home/Indexeight/bestdoc'
import IndexLatestBlog from './views/pages/frontend/Home/Indexeight/latestblog'
import IndexNineBanner from './views/pages/frontend/Home/Indexnine/banner'
import IndexNineDoctor from './views/pages/frontend/Home/Indexnine/doctor'
import IndexNineSpecialities from './views/pages/frontend/Home/Indexnine/specialities'
import IndexNineBrowse from './views/pages/frontend/Home/Indexnine/browse'
import IndexNineDoctorfow from './views/pages/frontend/Home/Indexnine/doctorfow'
import IndexNineBestdoctor from './views/pages/frontend/Home/Indexnine/bestdoctor'
import IndexNineBlog from './views/pages/frontend/Home/Indexnine/blog'
import IndexSevenBanner from './views/pages/frontend/Home/Indexseven/banner'
import IndexSevenSpecialities from './views/pages/frontend/Home/Indexseven/specialities'
import IndexSevenBrowse from './views/pages/frontend/Home/Indexseven/browse'
import IndexSevenClinic from './views/pages/frontend/Home/Indexseven/clinic'
import IndexSevenFeatures from './views/pages/frontend/Home/Indexseven/features'
import IndexSevenBlog from './views/pages/frontend/Home/Indexseven/blog'

/*************Page component**************/
import testimonial from './views/pages/frontend/common/About/testimonial'
import available from './views/pages/frontend/common/About/available'
import category from './views/pages/frontend/common/About/category'
import calendarsidebar from './views/pages/frontend/common/Calendar/calendarsidebar'
import tab from './views/pages/frontend/common/Components/tab'
import pagination from './views/pages/frontend/common/Components/pagination'
import card from './views/pages/frontend/common/Components/card'
import alert from './views/pages/frontend/common/Components/alert'
import componentmodal from './views/pages/frontend/common/Components/componentmodal'

/************Doctor component **************/
import accounttable from './views/pages/frontend/Doctor/Account/accounttable'
import accountsecond from './views/pages/frontend/Doctor/Account/accountsecond'
import accountfirst from './views/pages/frontend/Doctor/Account/accountfirst'
import Doctorsidebar from './views/pages/frontend/Doctor/Doctorsidebar'
import Billingsidebar from './views/pages/frontend/Doctor/Billingsidebar'
import Billingtable from './views/pages/frontend/Doctor/Billing/addbilling/Billingtable'
import chatdocleft from './views/pages/frontend/Doctor/chatdoctor/chatdocleft'
import chatdocright from './views/pages/frontend/Doctor/chatdoctor/chatdocright'
import Prescriptiontable from './views/pages/frontend/Doctor/Prescription/addprescription/Prescriptiontable'
import addblogmodal from './views/pages/frontend/Doctor/Addblog/addblogmodal'
import membership from './views/pages/frontend/Doctor/Doctorprofilesetting/membership'
import education from './views/pages/frontend/Doctor/Doctorprofilesetting/education'
import pricing from './views/pages/frontend/Doctor/Doctorprofilesetting/pricing'
import clinicinfo from './views/pages/frontend/Doctor/Doctorprofilesetting/clinicinfo'
import basicinformation from './views/pages/frontend/Doctor/Doctorprofilesetting/basicinformation'
import editform from './views/pages/frontend/Doctor/Editblog/editform'
import modalschedule from './views/pages/frontend/Doctor/Schedule/modalschedule'
import reviewlive from './views/pages/frontend/Doctor/Review/reviewlive'
import reviewcomment from './views/pages/frontend/Doctor/Review/reviewcomment'
import appointmentprofile from './views/pages/frontend/Doctor/Profile/appointmentprofile'
import billingprofile from './views/pages/frontend/Doctor/Profile/billingprofile'
import medicalprofile from './views/pages/frontend/Doctor/Profile/medicalprofile'
import patientprofilesidebar from './views/pages/frontend/Doctor/Profile/patientprofilesidebar'
import prescriptionprofile from './views/pages/frontend/Doctor/Profile/prescriptionprofile'

/************Blog component ***************/
import blogsidebar from './views/pages/frontend/Blog/blogsidebar'
/************Patient component ************/
import schedulewidget from './views/pages/frontend/Patient/Booking/schedulewidget'
import patientheader from './views/pages/frontend/Patient/patientheader'
import patientsidebar from './views/pages/frontend/Patient/patientsidebar'
import chatright from './views/pages/frontend/Patient/Chat/chatright'
import chatleft from './views/pages/frontend/Patient/Chat/chatleft'
import checkoutsidebar from './views/pages/frontend/Patient/Checkout/checkoutsidebar'
import Detailprofile from './views/pages/frontend/Patient/Profile/Detailprofile'
import widgetprofile from './views/pages/frontend/Patient/Profile/widgetprofile'
import busineeshour from './views/pages/frontend/Patient/Profile/busineeshour'
import reviewcontent from './views/pages/frontend/Patient/Profile/reviewcontent'
import Locationcontent from './views/pages/frontend/Patient/Profile/Locationcontent'
import overviewcontent from './views/pages/frontend/Patient/Profile/overviewcontent'
import searchsidebar from './views/pages/frontend/Patient/Search/searchsidebar'
import appointmentdash from './views/pages/frontend/Patient/Dashboard/appointmentdash'
import billingdash from './views/pages/frontend/Patient/Dashboard/billingdash'
import medicalrecorddash from './views/pages/frontend/Patient/Dashboard/medicalrecorddash'
import patientdashmodal from './views/pages/frontend/Patient/Dashboard/patientdashmodal'
import prescriptiondash from './views/pages/frontend/Patient/Dashboard/prescriptiondash'
import patientrightheader from './views/pages/frontend/Patient/Accounts/patientrightheader'
import patientleftheader from './views/pages/frontend/Patient/Accounts/patientleftheader'
import refundtab from './views/pages/frontend/Patient/Accounts/refundtab'
import accounttab from './views/pages/frontend/Patient/Accounts/accounttab'
import prescriptiontab from './views/pages/frontend/Patient/Medical/prescriptiontab'
import medicalcontent from './views/pages/frontend/Patient/Medical/medicalcontent'

/************Pharmacy component ***********/
import cartheader from './views/pages/frontend/Pharmacy/cartheader'
import descriptiondetail from './views/pages/frontend/Pharmacy/Description/descriptiondetail'
import descriptionsidebar from './views/pages/frontend/Pharmacy/Description/descriptionsidebar'
import checkoutform from './views/pages/frontend/Pharmacy/Checkout/checkoutform'
import checkoutsidbar from './views/pages/frontend/Pharmacy/Checkout/checkoutsidbar'
import productheader from './views/pages/frontend/Pharmacy/Productall/productheader'
import pharmacysidebar from './views/pages/frontend/Pharmacy/Search/pharmacysidebar'
import businessdetail from './views/pages/frontend/Pharmacy/Detail/businessdetail'
import detailwidget from './views/pages/frontend/Pharmacy/Detail/detailwidget'
import locationdetail from './views/pages/frontend/Pharmacy/Detail/locationdetail'
import overviewdetail from './views/pages/frontend/Pharmacy/Detail/overviewdetail'
import reviewdetail from './views/pages/frontend/Pharmacy/Detail/reviewdetail'

/************Product component ************/
import productsidebar from './views/pages/frontend/Product/productsidebar'

/************admin page************ */
import appointmentreportchart from './views/pages/admin/report/appointmentreport/appointmentreportchart'
import adminblogdetailcomment from './views/pages/admin/blog/blogdetail/adminblogdetailcomment'
import componentavatar from './views/pages/admin/uiinterface/component/componentavatar'
import componentbutton from './views/pages/admin/uiinterface/component/componentbutton'
import componentdropdown from './views/pages/admin/uiinterface/component/componentdropdown'
import componentpagination from './views/pages/admin/uiinterface/component/componentpagination'
import componenttab from './views/pages/admin/uiinterface/component/componenttab'
import componenttypography from './views/pages/admin/uiinterface/component/componenttypography'
import doctormodal from './views/pages/admin/doctor/doctormodal'
import settingsidebar from './views/pages/admin/settings/settingsidebar'
import formbasicinputsize from './views/pages/admin/uiinterface/form/basicinput/formbasicinputsize'
import addressformhorizontal from './views/pages/admin/uiinterface/form/horizontal/addressformhorizontal'
import threecolumnhorizontal from './views/pages/admin/uiinterface/form/horizontal/threecolumnhorizontal'
import twocolumnhorizontal from './views/pages/admin/uiinterface/form/horizontal/twocolumnhorizontal'
import forminputexample from './views/pages/admin/uiinterface/form/forminput/forminputexample'
import forminputdropdown from './views/pages/admin/uiinterface/form/forminput/forminputdopdown'
import forminputaddons from './views/pages/admin/uiinterface/form/forminput/forminputaddons'
import formcheck from './views/pages/admin/uiinterface/form/forminput/formcheck'
import forminputsizing from './views/pages/admin/uiinterface/form/forminput/forminputsizing'
import formcustomvalidation from './views/pages/admin/uiinterface/form/formvalidation/formcustomvalidation'
import defaultformvalidation from './views/pages/admin/uiinterface/form/formvalidation/defaultformvalidation'
import serverformvalidation from './views/pages/admin/uiinterface/form/formvalidation/serverformvalidation'
import formvalidationsupport from './views/pages/admin/uiinterface/form/formvalidation/formvalidationsupport'
import formvalidationtooltip from './views/pages/admin/uiinterface/form/formvalidation/formvalidationtooltip'
import threeformvertical from './views/pages/admin/uiinterface/form/formvertical/threeformvertical'
import twoformvertical from './views/pages/admin/uiinterface/form/formvertical/twoformvertical'
import formverticaladdress from './views/pages/admin/uiinterface/form/formvertical/formverticaladdress'
import formbasicvertical from './views/pages/admin/uiinterface/form/formvertical/formbasicvertical'
import incomereportchart from './views/pages/admin/report/incomereport/incomereportchart'
import ratings from './views/pages/admin/dashboard/ratings'
import countries from './views/pages/admin/dashboard/countries'
import prescription from './views/pages/admin/dashboard/prescription'
import upcoming from './views/pages/admin/dashboard/upcoming'
import consultation from './views/pages/admin/dashboard/consultation'
import popular from './views/pages/admin/dashboard/popular'
import topdoctor from './views/pages/admin/dashboard/topdoctor'
import dashchart from './views/pages/admin/dashboard/dashchart'
import overview from './views/pages/admin/dashboard/overview'
import recentactivities from './views/pages/admin/dashboard/recentactivities'
import todayappointment from './views/pages/admin/dashboard/todayappointment'
import invoicereportchart from './views/pages/admin/report/invoicereport/invoicereportchart'
import userheader from './views/pages/admin/report/userreport/userheader'
import appointmentheader from './views/pages/admin/appointment/appointment/appointmentheader'
import appointmentheader1 from './views/pages/admin/appointment/appointment/appointmentheader1'
import pastappointmentheader from './views/pages/admin/appointment/pastappointment/pastappointmentheader'
import pastmainheader from './views/pages/admin/appointment/pastappointment/pastmainheader'
import patientmodal from './views/pages/admin/patientadmin/patientmodal'
import patientmainheader from './views/pages/admin/patientadmin/patientmainheader'
import paymentaccordion from './views/pages/admin/settings/paymentgateway/paymentaccordion'
import paymentaccordion1 from './views/pages/admin/settings/paymentgateway/paymentaccordion1'
import pharmacymodal from './views/pages/admin/pharmacycategory/category/pharmacymodal'
import pharmacylistmodal from './views/pages/admin/pharmacycategory/pharmacylist/pharmacylistmodal'
import adminproductlist1 from './views/pages/admin/product/productcategry/productmodal'
import productlistmodal from './views/pages/admin/product/productlist/productlistmodal'
import specialitiesmodal from './views/pages/admin/specialities/specialitiesmodal'
import transactionmodal from './views/pages/admin/transaction/transactionmodal'


/** Breadcrumbs **/
import BreadCrumb from './views/pages/breadcrumb/AboutUS'
import BreadCrumb1 from './views/pages/breadcrumb/Account'
import BreadCrumb2 from './views/pages/breadcrumb/Addbilling'
import BreadCrumb3 from './views/pages/breadcrumb/Addprescription'
import BreadCrumb4 from './views/pages/breadcrumb/Appointment'
import BreadCrumb5 from './views/pages/breadcrumb/Available'
import BreadCrumb6 from './views/pages/breadcrumb/Blankpage'
import BreadCrumb7 from './views/pages/breadcrumb/Blogdetail'
import BreadCrumb8 from './views/pages/breadcrumb/Bloggrid'
import BreadCrumb9 from './views/pages/breadcrumb/Bloglist'
import BreadCrumb10 from './views/pages/breadcrumb/Booking'
import BreadCrumb11 from './views/pages/breadcrumb/Bookingsucces'
import BreadCrumb12 from './views/pages/breadcrumb/Calendar'
import BreadCrumb13 from './views/pages/breadcrumb/Cart.vue'
import BreadCrumb14 from './views/pages/breadcrumb/Changepassword'
import BreadCrumb15 from './views/pages/breadcrumb/Checkout'
import BreadCrumb16 from './views/pages/breadcrumb/Component'
import BreadCrumb17 from './views/pages/breadcrumb/Contactus'
import BreadCrumb18 from './views/pages/breadcrumb/Dependent'
import BreadCrumb19 from './views/pages/breadcrumb/Doctoraddblog'
import BreadCrumb20 from './views/pages/breadcrumb/Addblog'
import BreadCrumb21 from './views/pages/breadcrumb/Doctochangepassword'
import BreadCrumb22 from './views/pages/breadcrumb/Doctordashboard'
import BreadCrumb23 from './views/pages/breadcrumb/Doctorpendingblog'
import BreadCrumb24 from './views/pages/breadcrumb/Patientprofile'
import BreadCrumb25 from './views/pages/breadcrumb/Doctorprofilesetting'
import BreadCrumb26 from './views/pages/breadcrumb/Editbilling'
import BreadCrumb27 from './views/pages/breadcrumb/Editblog'
import BreadCrumb28 from './views/pages/breadcrumb/Editprescription'
import BreadCrumb29 from './views/pages/breadcrumb/Favourite'
import BreadCrumb30 from './views/pages/breadcrumb/Term'
import BreadCrumb31 from './views/pages/breadcrumb/Socialmedia'
import BreadCrumb32 from './views/pages/breadcrumb/Search'
import BreadCrumb33 from './views/pages/breadcrumb/Scheduletiming'
import BreadCrumb34 from './views/pages/breadcrumb/Review'
import BreadCrumb35 from './views/pages/breadcrumb/Profilesettings'
import BreadCrumb36 from './views/pages/breadcrumb/Healthcare'
import BreadCrumb37 from './views/pages/breadcrumb/Productdescription'
import BreadCrumb38 from './views/pages/breadcrumb/Productcheckout'
import BreadCrumb39 from './views/pages/breadcrumb/Productall'
import BreadCrumb40 from './views/pages/breadcrumb/Privacypolicy'
import BreadCrumb41 from './views/pages/breadcrumb/Pharmacysearch'
import BreadCrumb42 from './views/pages/breadcrumb/Pharmacydetail'
import BreadCrumb43 from './views/pages/breadcrumb/Paymentsuccess'
import BreadCrumb44 from './views/pages/breadcrumb/Patientpro'
import BreadCrumb45 from './views/pages/breadcrumb/Patientdash'
import BreadCrumb46 from './views/pages/breadcrumb/Patientaccount'
import BreadCrumb47 from './views/pages/breadcrumb/Orderlist'
import BreadCrumb48 from './views/pages/breadcrumb/Mypatients'
import BreadCrumb49 from './views/pages/breadcrumb/Membershipdetail'
import BreadCrumb50 from './views/pages/breadcrumb/Medicalrecord'
import BreadCrumb51 from './views/pages/breadcrumb/Invoiceview'
import BreadCrumb52 from './views/pages/breadcrumb/Invoice'
/******************pharmacy admin **************/
import incomechart from './views/pages/pharmacyadmin/dashboard/incomechart'
import appointmentchart from './views/pages/pharmacyadmin/dashboard/appointmentchart'
import widgetpharmacy from './views/pages/pharmacyadmin/dashboard/widgetpharmacy'

import VueSelect from 'vue3-select2-component'
import DatePicker from 'vue3-datepicker'
import 'moment'
import jquery from 'jquery'; 
window.$ = jquery

if(window.location.href.includes("template/pharmacyadmin")) {
  require('./assets/PharmacyAdminStyle.css');
  require('./assets/css/bootstrap4.min.css')
  require('./assets/css/dataTables.bootstrap4.min.css')
  require('./assets/css/jquery.dataTables.min.js')
  require('./assets/css/dataTables.bootstrap4.min.js')
} else if(window.location.href.includes("template/admin")) {
  require('./assets/js/daterangepicker/daterangepicker.css');
  require('./assets/AdminStyle.css');
  require('./assets/js/daterangepicker/daterangepicker.js');
  require('./assets/css/bootstrap4.min.css')
  require('./assets/css/dataTables.bootstrap4.min.css')
  require('./assets/css/jquery.dataTables.min.js')
  require('./assets/css/dataTables.bootstrap4.min.js')
  require('./assets/js/slick.js');
}else if(!window.location.href.includes("template/admin") && !window.location.href.includes("template/pharmacyadmin")) {
  require('./assets/js/daterangepicker/daterangepicker.css');
  require('./assets/style.css');
  require('./assets/js/daterangepicker/daterangepicker.js');
  require('./assets/js/fancybox/jquery.fancybox.min.css');
  require('./assets/js/fancybox/jquery.fancybox.min.js');
  require('./assets/js/swiper/css/swiper.min.css');
  require('./assets/js/slick.js');
}
 

const app = createApp(App)

/*Global Components */
app.component('layout-header', LayoutHeader);
app.component('layout-footer', LayoutFooter);
app.component('layout-doctorheader', LayoutDoctorHeader);
app.component('layout-indextenheader', LayoutIndexTenHeader);
app.component('layout-indextwoheader', LayoutIndexTwoHeader);
app.component('layout-indexfourtopheader', LayoutIndexFourTopHeader);
app.component('layout-indextenfooter', LayoutIndexTenFooter);
app.component('layout-indexlevenheader', LayoutIndexLevenHeader);
app.component('layout-indexlevenfooter', LayoutIndexLevenFooter);
app.component('layout-indexfourteenheader', LayoutIndexFourteenHeader);
app.component('layout-indexfourteenfooter', LayoutIndexFourteenFooter);
app.component('layout-indextwelveheader', indextwelveheader);
app.component('layout-indextwelvefooter', indextwelvefooter);
app.component('layout-indexthirteenheader', LayoutIndexThirteenHeader);
app.component('layout-indexthirteenfooter', LayoutIndexThirteenFooter);
app.component('layout-headerpharamcy', LayoutHeaderPharmacy);
app.component('layout-sidebarpharmacy', LayoutSidebarPharmacy);
app.component('layout-headeradmin', Layoutheaderadmin);
app.component('layout-sidebaradmin', Layoutsidebaradmin);
app.component('layout-indexfiveheader', LayoutIndexFiveHeader);
app.component('layout-indexfivefooter', LayoutIndexFiveFooter);
app.component('layout-indexeightheader', LayoutIndexEightHeader);
app.component('layout-indexeightfooter', LayoutIndexEightFooter);
app.component('layout-indexninefooter', LayoutIndexNineHeader);
app.component('layout-indexnineheader', LayoutIndexNineFooter);
app.component('layout-indexsevenheader', LayoutIndexSevenHeader);
app.component('layout-indexsevenfooter', LayoutIndexSevenFooter);
app.component('loader', Loader);



/*************Home component ************/
app.component('banner', Banner);
app.component('looking', Looking);
app.component('specialities', Specialities);
app.component('book', Book);
app.component('features', Features);
app.component('blog', Blog);
app.component('feaindexten', feaindexten);
app.component('newsindexten', newsindexten);
app.component('featureindexten', featureindexten);
app.component('doctorindexten', doctorindexten);
app.component('serviceindexten', serviceindexten);
app.component('appointmentindexten', appointmentindexten);
app.component('blogindexleven', blogindexleven);
app.component('highserviceindexleven', highserviceindexleven);
app.component('feaindexleven', feaindexleven);
app.component('bestdocindexleven', bestdocindexleven);
app.component('lookingindexleven', lookingindexleven);
app.component('bannerindexleven', bannerindexleven);
app.component('blogindexfourteen', blogindexfourteen);
app.component('newindexfourteen', newindexfourteen);
app.component('clinicsecindexfourteen', clinicsecindexfourteen);
app.component('bestindexfourteen', bestindexfourteen);
app.component('browseindexfourteen', browseindexfourteen);
app.component('doctorindexfourteen', doctorindexfourteen);
app.component('clinicindexfourteen', clinicindexfourteen);
app.component('lookingindexfourteen', lookingindexfourteen);
app.component('homeindexfourteen', homeindexfourteen);
app.component('newindextwelve', newindextwelve);
app.component('latestindextwelve', latestindextwelve);
app.component('featureindextwelve', featureindextwelve);
app.component('doctorsecindextwelve', doctorsecindextwelve);
app.component('doctorindextwelve', doctorindextwelve);
app.component('specialiyindextwelve', specialiyindextwelve);
app.component('lookingindextwelve', lookingindextwelve);
app.component('blogindexthirteen', blogindexthirteen);
app.component('featureindexthirteen', featureindexthirteen);
app.component('doctorindexthirteen', doctorindexthirteen);
app.component('clinicindexthirteen', clinicindexthirteen);
app.component('lookingindexthirteen', lookingindexthirteen);
app.component('indextwobestdoctor', Indextwobestdoctor);
app.component('indextwobrowserspec', Indextwobrowserspec);
app.component('indexthreebanner', Indexthreebanner);
app.component('indexfourbanner', Indexfourbanner);
app.component('indexfivebanner', Indexfivebanner);
app.component('indexfivecategory', Indexfivecategory);
app.component('indexfivespecialities', Indexfivespecialities);
app.component('indexfivebrowsespeclty', IndexFiveBrowseSpeclty);
app.component('indexfiveselect', IndexFiveSelect);
app.component('indexfivebookdoctor', IndexFiveBookDoctor);
app.component('indexfiveavailablefeature', IndexFiveAvailableFeature);
app.component('indexfivelatestblog', IndexFiveLatestBlog);
app.component('indexsixbanner', IndexSixBanner);
app.component('indexeightbanner', IndexEightBanner);
app.component('indexeightcategory', IndexEightCategory);
app.component('indexeightepecialities', IndexEightSpecialities);
app.component('indexbrowspec', IndexBrowSpec);
app.component('indexdoctorsec', IndexDoctorSec);
app.component('indexbestdoc', IndexBestDoc);
app.component('indexlatestblog', IndexLatestBlog);
app.component('indexninebanner', IndexNineBanner);
app.component('indexninedoctor', IndexNineDoctor);
app.component('indexninespecialities', IndexNineSpecialities);
app.component('indexninebrowse', IndexNineBrowse);
app.component('indexninedoctorfow', IndexNineDoctorfow);
app.component('indexninebestdoctor', IndexNineBestdoctor);
app.component('indexnineblog', IndexNineBlog);
app.component('indexsevenbanner', IndexSevenBanner);
app.component('indexsevenspecialities', IndexSevenSpecialities);
app.component('indexsevenbrowse', IndexSevenBrowse);
app.component('indexsevenclinic', IndexSevenClinic);
app.component('indexsevenfeatures', IndexSevenFeatures);
app.component('indexsevenblog', IndexSevenBlog);



/************page *******************/
app.component('testimonial', testimonial);
app.component('available', available);
app.component('category', category);
app.component('calendarsidebar', calendarsidebar);
app.component('tab', tab);
app.component('pagination', pagination);
app.component('card', card);
app.component('alert', alert);
app.component('componentmodal', componentmodal);

/************Doctor *******************/
app.component('accounttable', accounttable);
app.component('accountsecond', accountsecond);
app.component('accountfirst', accountfirst);
app.component('doctorsidebar', Doctorsidebar);
app.component('billingsidebar', Billingsidebar);
app.component('billingtable', Billingtable);
app.component('prescriptiontable', Prescriptiontable);
app.component('chatdocleft', chatdocleft);
app.component('chatdocright', chatdocright);
app.component('addblogmodal', addblogmodal);
app.component('membership', membership);
app.component('education', education);
app.component('pricing', pricing);
app.component('clinicinfo', clinicinfo);
app.component('basicinformation', basicinformation);
app.component('editform', editform);
app.component('modalschedule', modalschedule);
app.component('reviewlive', reviewlive);
app.component('reviewcomment', reviewcomment);
app.component('appointmentprofile', appointmentprofile);
app.component('billingprofile', billingprofile);
app.component('medicalprofile', medicalprofile);
app.component('patientprofilesidebar', patientprofilesidebar);
app.component('prescriptionprofile', prescriptionprofile);


/************Blog *********************/
app.component('blogsidebar', blogsidebar);
/************Patient *****************/
app.component('schedulewidget', schedulewidget);
app.component('patientheader', patientheader);
app.component('patientsidebar', patientsidebar);
app.component('chatleft', chatleft);
app.component('chatright', chatright);
app.component('checkoutsidebar', checkoutsidebar);
app.component('detailprofile', Detailprofile);
app.component('widgetprofile', widgetprofile);
app.component('busineeshour', busineeshour);
app.component('reviewcontent', reviewcontent);
app.component('Locationcontent', Locationcontent);
app.component('overviewcontent', overviewcontent);
app.component('searchsidebar', searchsidebar);
app.component('appointmentdash', appointmentdash);
app.component('billingdash', billingdash);
app.component('medicalrecorddash', medicalrecorddash);
app.component('patientdashmodal', patientdashmodal);
app.component('prescriptiondash', prescriptiondash);
app.component('patientrightheader', patientrightheader);
app.component('patientleftheader', patientleftheader);
app.component('refundtab', refundtab);
app.component('accounttab', accounttab);
app.component('prescriptiontab', prescriptiontab);
app.component('medicalcontent', medicalcontent);


/************Pharmacy ****************/
app.component('cartheader', cartheader);
app.component('descriptiondetail', descriptiondetail);
app.component('descriptionsidebar', descriptionsidebar);
app.component('checkoutform', checkoutform);
app.component('checkoutsidbar', checkoutsidbar);
app.component('productheader', productheader);
app.component('pharmacysidebar', pharmacysidebar);
app.component('businessdetail', businessdetail);
app.component('detailwidget', detailwidget);
app.component('locationdetail', locationdetail);
app.component('overviewdetail', overviewdetail);
app.component('reviewdetail', reviewdetail);
/************Product ****************/
app.component('productsidebar', productsidebar);
app.component('adminblogdetailcomment', adminblogdetailcomment);


/* BreadCrumbs */
app.component('breadcrumb', BreadCrumb);
app.component('breadcrumb1', BreadCrumb1);
app.component('breadcrumb2', BreadCrumb2);
app.component('breadcrumb3', BreadCrumb3);
app.component('breadcrumb4', BreadCrumb4);
app.component('breadcrumb5', BreadCrumb5);
app.component('breadcrumb6', BreadCrumb6);
app.component('breadcrumb7', BreadCrumb7);
app.component('breadcrumb8', BreadCrumb8);
app.component('breadcrumb9', BreadCrumb9);
app.component('breadcrumb10', BreadCrumb10);
app.component('breadcrumb11', BreadCrumb11);
app.component('breadcrumb12', BreadCrumb12);
app.component('breadcrumb13', BreadCrumb13);
app.component('breadcrumb14', BreadCrumb14);
app.component('breadcrumb15', BreadCrumb15);
app.component('breadcrumb16', BreadCrumb16);
app.component('breadcrumb17', BreadCrumb17);
app.component('breadcrumb18', BreadCrumb18);
app.component('breadcrumb19', BreadCrumb19);
app.component('breadcrumb20', BreadCrumb20);
app.component('breadcrumb21', BreadCrumb21);
app.component('breadcrumb22', BreadCrumb22);
app.component('breadcrumb23', BreadCrumb23);
app.component('breadcrumb24', BreadCrumb24);
app.component('breadcrumb25', BreadCrumb25);
app.component('breadcrumb26', BreadCrumb26);
app.component('breadcrumb27', BreadCrumb27);
app.component('breadcrumb28', BreadCrumb28);
app.component('BreadCrumb29', BreadCrumb29);
app.component('breadCrumb30', BreadCrumb30);
app.component('breadCrumb31', BreadCrumb31);
app.component('breadCrumb32', BreadCrumb32);
app.component('breadCrumb33', BreadCrumb33);
app.component('breadCrumb34', BreadCrumb34);
app.component('breadCrumb35', BreadCrumb35);
app.component('breadCrumb36', BreadCrumb36);
app.component('breadCrumb37', BreadCrumb37);
app.component('breadCrumb38', BreadCrumb38);
app.component('breadCrumb39', BreadCrumb39);
app.component('breadCrumb40', BreadCrumb40);
app.component('breadCrumb41', BreadCrumb41);
app.component('breadCrumb42', BreadCrumb42);
app.component('breadCrumb43', BreadCrumb43);
app.component('breadCrumb44', BreadCrumb44);
app.component('breadCrumb45', BreadCrumb45);
app.component('breadCrumb46', BreadCrumb46);
app.component('breadCrumb47', BreadCrumb47);
app.component('breadCrumb48', BreadCrumb48);
app.component('breadCrumb49', BreadCrumb49);
app.component('breadCrumb50', BreadCrumb50);
app.component('breadCrumb51', BreadCrumb51);
app.component('breadCrumb52', BreadCrumb52);
/************pharmacy admin ***********/
app.component('incomechart', incomechart);
app.component('appointmentchart', appointmentchart);
app.component('widgetpharmacy', widgetpharmacy);
/************admin page ***********/
app.component('appointmentreportchart', appointmentreportchart);
app.component('componentavatar', componentavatar);
app.component('componentbutton', componentbutton);
app.component('componentdropdown', componentdropdown);
app.component('componentpagination', componentpagination);
app.component('componenttab', componenttab);
app.component('componenttypography', componenttypography);
app.component('doctormodal', doctormodal);
app.component('settingsidebar', settingsidebar);
app.component('formbasicinputsize', formbasicinputsize);
app.component('addressformhorizontal', addressformhorizontal);
app.component('threecolumnhorizontal', threecolumnhorizontal);
app.component('twocolumnhorizontal', twocolumnhorizontal);
app.component('forminputexample', forminputexample);
app.component('forminputdropdown', forminputdropdown);
app.component('forminputaddons', forminputaddons);
app.component('formcheck', formcheck);
app.component('forminputsizing', forminputsizing);
app.component('formcustomvalidation', formcustomvalidation);
app.component('defaultformvalidation', defaultformvalidation);
app.component('serverformvalidation', serverformvalidation);
app.component('formvalidationsupport', formvalidationsupport);
app.component('formvalidationtooltip', formvalidationtooltip);
app.component('threeformvertical', threeformvertical);
app.component('twoformvertical', twoformvertical);
app.component('formverticaladdress', formverticaladdress);
app.component('formbasicvertical', formbasicvertical);
app.component('incomereportchart', incomereportchart);
app.component('ratings', ratings);
app.component('countries', countries);
app.component('prescription', prescription);
app.component('upcoming', upcoming);
app.component('consultation', consultation);
app.component('popular', popular);
app.component('topdoctor', topdoctor);
app.component('dashchart', dashchart);
app.component('overview', overview);
app.component('recentactivities', recentactivities);
app.component('todayappointment', todayappointment);
app.component('invoicereportchart', invoicereportchart);
app.component('userheader', userheader);
app.component('appointmentheader', appointmentheader);
app.component('appointmentheader1', appointmentheader1);
app.component('pastappointmentheader', pastappointmentheader);
app.component('pastmainheader', pastmainheader);
app.component('patientmodal', patientmodal);
app.component('patientmainheader', patientmainheader);
app.component('paymentaccordion', paymentaccordion);
app.component('paymentaccordion1', paymentaccordion1);
app.component('pharmacymodal', pharmacymodal);
app.component('pharmacylistmodal', pharmacylistmodal);
app.component('adminproductlist1', adminproductlist1);
app.component('productlistmodal', productlistmodal);
app.component('specialitiesmodal', specialitiesmodal);
app.component('transactionmodal', transactionmodal);
app.component('vue-select', VueSelect);
app.component('datepicker', DatePicker);
app.use(router)
.mount('#app');