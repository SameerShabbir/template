import {createRouter, createWebHistory} from 'vue-router';
/**************Frontend router ***************/
import index from '../views/pages/frontend/home/Index/index'
import about from '../views/pages/frontend/common/About/about'
import account from '../views/pages/frontend/Doctor/Account/account'
import Addbilling from '../views/pages/frontend/Doctor/Billing/addbilling/Addbilling'
import Addprescription from '../views/pages/frontend/Doctor/Prescription/addprescription/Addprescription'
import appointment from '../views/pages/frontend/Doctor/Appointment/appointment'
import availabletiming from '../views/pages/frontend/Doctor/Available/availabletiming'
import blankpage from '../views/pages/frontend/common/Blank/blankpage'
import blogdetails from '../views/pages/frontend/Blog/Blogdetails/blogdetails'
import bloggrid from '../views/pages/frontend/Blog/Bloggrid/bloggrid'
import bloglist from '../views/pages/frontend/Blog/Bloglist/bloglist'
import booktable from '../views/pages/frontend/Patient/Booking/booktable'
import bookingsucc from '../views/pages/frontend/Patient/bookingsuccess/bookingsucc'
import calendar from '../views/pages/frontend/common/Calendar/calendar'
import cart from '../views/pages/frontend/Pharmacy/Cart/cart'
import changepass from '../views/pages/frontend/Patient/Changepassword/changepass'
import chat from '../views/pages/frontend/Patient/Chat/chat'
import chatdoc from '../views/pages/frontend/Doctor/chatdoctor/chatdoc'
import checkout from '../views/pages/frontend/Patient/Checkout/checkout'
import component from '../views/pages/frontend/common/Components/component'
import contact from '../views/pages/frontend/common/Contact/contact'
import dependent from '../views/pages/frontend/Patient/Dependent/dependent'
import addblog from '../views/pages/frontend/Doctor/Addblog/addblog'
import doctorblog from '../views/pages/frontend/Doctor/Doctorblog/doctorblog'
import doctorchange from '../views/pages/frontend/Doctor/Doctorchangepassword/doctorchange'
import doctorindex from '../views/pages/frontend/Doctor/Dashboard/doctorindex'
import pendingblog from '../views/pages/frontend/Doctor/Doctorpending/pendingblog'
import profile from '../views/pages/frontend/Patient/Profile/profile'
import profilesettings from '../views/pages/frontend/Doctor/Doctorprofilesetting/profilesettings'
import doctorregister from '../views/pages/frontend/Doctor/register/doctorregister'
import doctorregisterstep1 from '../views/pages/frontend/Doctor/register/doctorregisterstep1'
import doctorregisterstep2 from '../views/pages/frontend/Doctor/register/doctorregisterstep2'
import doctorregisterstep3 from '../views/pages/frontend/Doctor/register/doctorregisterstep3'
import Editbilling from '../views/pages/frontend/Doctor/Billing/editbilling/Editbilling'
import editblog from '../views/pages/frontend/Doctor/Editblog/editblog'
import Editprescription from '../views/pages/frontend/Doctor/Prescription/editprescription/Editprescription'
import favourite from '../views/pages/frontend/Patient/Favourites/favourite'
import forgotpassword from '../views/pages/frontend/common/Forgot/forgotpassword'
import voicecall from '../views/pages/frontend/common/Call/voicecall'
import videocall from '../views/pages/frontend/common/Call/videocall'
import terms from '../views/pages/frontend/common/Term/terms'
import socialmedia from '../views/pages/frontend/Doctor/Social/socialmedia'
import search from '../views/pages/frontend/Patient/Search/search'
import scheduletiming from '../views/pages/frontend/Doctor/Schedule/Scheduletiming' 
import docreview from '../views/pages/frontend/Doctor/Review/docreview'
import register from '../views/pages/frontend/common/Register/register'
import profilesetng from '../views/pages/frontend/Patient/Setting/profilesetng'
import producthealth from '../views/pages/frontend/Product/Healthcare/producthealth'
import productdesc from '../views/pages/frontend/Pharmacy/Description/productdesc'
import productcheckout from '../views/pages/frontend/Pharmacy/Checkout/productcheckout'
import product from '../views/pages/frontend/Pharmacy/Productall/product'
import privacypolicy from '../views/pages/frontend/common/Privacy/privacypolicy'
import pharmacysearch from '../views/pages/frontend/Pharmacy/Search/pharmacysearch'
import pharmacyregisterstep3 from '../views/pages/frontend/Pharmacy/Register/pharmacyregisterstep3'
import pharmacyregisterstep2 from '../views/pages/frontend/Pharmacy/Register/pharmacyregisterstep2'
import pharmacyregisterstep1 from '../views/pages/frontend/Pharmacy/Register/pharmacyregisterstep1'
import pharmacyregister from '../views/pages/frontend/Pharmacy/Register/pharmacyregister'
import pharmacyindex from '../views/pages/frontend/Pharmacy/Pharmacyindex/pharmacyindex'
import pharmacydetail from '../views/pages/frontend/Pharmacy/Detail/pharmacydetail'
import paymentsucces from '../views/pages/frontend/Pharmacy/Payment/paymentsucces'
import patientregisterstep5 from '../views/pages/frontend/Patient/Register/patientregisterstep5'
import patientregisterstep4 from '../views/pages/frontend/Patient/Register/patientregisterstep4'
import patientregisterstep3 from '../views/pages/frontend/Patient/Register/patientregisterstep3'
import patientregisterstep2 from '../views/pages/frontend/Patient/Register/patientregisterstep2'
import patientregisterstep1 from '../views/pages/frontend/Patient/Register/patientregisterstep1'
import patientprofile from '../views/pages/frontend/Doctor/Profile/patientprofile'
import patientdash from '../views/pages/frontend/Patient/Dashboard/patientdash'
import patientaccount from '../views/pages/frontend/Patient/Accounts/patientaccount'
import orderlist from '../views/pages/frontend/Patient/Order/orderlist'
import mypatients from '../views/pages/frontend/Doctor/Patient/mypatients'
import membershipdetail from '../views/pages/frontend/Patient/Membership/membershipdetail'
import medicalrecords from '../views/pages/frontend/Patient/Medical/medicalrecords'
import login from '../views/pages/frontend/common/Login/login'
import invoiceview from '../views/pages/frontend/common/Invoice/invoiceview'
import invoice from '../views/pages/frontend/Doctor/Invoices/invoice'
import indextwo from '../views/pages/frontend/Home/Indextwo/indextwo'
import indexthree from '../views/pages/frontend/Home/Indexthree/indexthree'
import indexfour from '../views/pages/frontend/Home/Indexfour/indexfour'
import indexfive from '../views/pages/frontend/Home/Indexfive/indexfive'
import indexten from '../views/pages/frontend/Home/Indexten/indexten'
import indexsix from '../views/pages/frontend/Home/Indexsix/indexsix'
import indexleven from '../views/pages/frontend/Home/Indexleven/indexleven'
import indexfourteen from '../views/pages/frontend/Home/Indexfourteen/indexfourteen'
import indextwelve from '../views/pages/frontend/Home/Indextwelve/indextwelve'
import indexthirteen from '../views/pages/frontend/Home/Indexthirteen/indexthirteen'
import indexeight from '../views/pages/frontend/Home/Indexeight/indexeight'
import indexnine from '../views/pages/frontend/Home/Indexnine/indexnine'
import indexseven from '../views/pages/frontend/Home/Indexseven/indexseven'
import mapgrid from '../views/pages/frontend/Patient/Mapgrid/mapgrid'
import maplist from '../views/pages/frontend/Patient/Maplist/maplist'
import medicaldetail from '../views/pages/frontend/Patient/Medical/medicaldetail'
import doctorprofilesetting from '../views/pages/frontend/Doctor/Doctorprofilesetting/doctorprofilesetting'
/**************Pharmacy admin router ***************/
import addproduct from '../views/pages/pharmacyadmin/product/addproduct'
import addpurchase from '../views/pages/pharmacyadmin/purchase/addpurchase'
import addsupplier from '../views/pages/pharmacyadmin/supplier/addsupplier'
import categories from '../views/pages/pharmacyadmin/categories'
import customerorder from '../views/pages/pharmacyadmin/order/customerorder'
import editproduct from '../views/pages/pharmacyadmin/product/editproduct'
import editpurchase from '../views/pages/pharmacyadmin/purchase/editpurchase'
import editsupplier from '../views/pages/pharmacyadmin/supplier/editsupplier'
import expired from '../views/pages/pharmacyadmin/product/expired'
import pharmacydashboard from '../views/pages/pharmacyadmin/dashboard/pharmacydashboard'
import pharmacyinvoice from '../views/pages/pharmacyadmin/report/pharmacyinvoice'
import pharmacyinvoicereport from '../views/pages/pharmacyadmin/report/pharmacyinvoicereport'
import order from '../views/pages/pharmacyadmin/purchase/order'
import outstock from '../views/pages/pharmacyadmin/product/outstock'
import products from '../views/pages/pharmacyadmin/product/products'
import pharmacyprofile from '../views/pages/pharmacyadmin/pharmacyprofile'
import purchase from '../views/pages/pharmacyadmin/purchase/purchase'
import sales from '../views/pages/pharmacyadmin/sales'
import settings from '../views/pages/pharmacyadmin/settings'
import supplier from '../views/pages/pharmacyadmin/supplier/supplier'
import transactionlist from '../views/pages/pharmacyadmin/transactionlist'
import pharmacylogin from '../views/pages/pharmacyadmin/login'
import pharmacyregisterfirst from '../views/pages/pharmacyadmin/register'
import pharmacyforgotpassword from '../views/pages/pharmacyadmin/forgotpassword'
import pharmacyconfirmemail from '../views/pages/pharmacyadmin/confirmemail'
import productlist from '../views/pages/pharmacyadmin/product/productlist'
/*********************Admin page  *********************/
import accountsetting from '../views/pages/admin/settings/accountsetting'
import adminactiveblog from '../views/pages/admin/blog/adminactiveblog'
import adminaddblog from '../views/pages/admin/blog/adminaddblog'
import addprofile from '../views/pages/admin/page/addprofile'
import appointmentreport from '../views/pages/admin/report/appointmentreport/appointmentreport'
import adminblankpage from '../views/pages/admin/page/adminblankpage'
import adminblogdetails from '../views/pages/admin/blog/blogdetail/adminblogdetails'
import changepassword from '../views/pages/admin/settings/changepassword'
import admincomponent from '../views/pages/admin/uiinterface/component/admincomponent'
import conformemail from '../views/pages/admin/page/conformemail'
import datatable from '../views/pages/admin/uiinterface/table/datatable'
import doctorlist from '../views/pages/admin/doctor/doctorlist'
import admineditblog from '../views/pages/admin/blog/admineditblog'
import emailsetting from '../views/pages/admin/settings/emailsetting'
import error404 from '../views/pages/admin/page/error/error404'
import error500 from '../views/pages/admin/page/error/error500'
import adminforgotpassword from '../views/pages/admin/page/authentication/forgotpassword'
import formbasicinput from '../views/pages/admin/uiinterface/form/basicinput/formbasicinput'
import adminformhorizontal from '../views/pages/admin/uiinterface/form/horizontal/formhorizontal'
import adminforminput from '../views/pages/admin/uiinterface/form/forminput/forminput'
import adminformmask from '../views/pages/admin/uiinterface/form/formmask/formmask'
import adminformvalidation from '../views/pages/admin/uiinterface/form/formvalidation/formvalidation'
import adminformvertical from '../views/pages/admin/uiinterface/form/formvertical/formvertical'
import adminincomereport from '../views/pages/admin/report/incomereport/incomereport'
import adminindex from '../views/pages/admin/dashboard/adminindex'
import invoicereport from '../views/pages/admin/report/invoicereport/invoicereport'
import lockscreen from '../views/pages/admin/page/authentication/lockscreen'
import adminlogin from '../views/pages/admin/page/authentication/login'
import adminregister from '../views/pages/admin/page/authentication/register'
import loginsettings from '../views/pages/admin/settings/loginsettings'
import userreport from '../views/pages/admin/report/userreport/userreport'
import upcomingappointment from '../views/pages/admin/appointment/appointment/upcomingappointment'
import pastappointment from '../views/pages/admin/appointment/pastappointment/pastappointment'
import adminpatientlist from '../views/pages/admin/patientadmin/simplepatient'
import paymentgateway from '../views/pages/admin/settings/paymentgateway/paymentgateway'
import adminpendingblog from '../views/pages/admin/blog/pendingblog'
import pharmacycatgry from '../views/pages/admin/pharmacycategory/category/pharmacycatgry'
import adminpharamcylist from '../views/pages/admin/pharmacycategory/pharmacylist/pharmacylist'
import productcategory from '../views/pages/admin/product/productcategry/productcategory'
import adminproductlist from '../views/pages/admin/product/productlist/productlist'
import adminprofile from '../views/pages/admin/page/profile'
import ratings from '../views/pages/admin/rating/ratings'
import settingnoti from '../views/pages/admin/settings/settingnoti'
import settingpreference from '../views/pages/admin/settings/settingpreference'
import adminsettings from '../views/pages/admin/settings/settings'
import smsgateway from '../views/pages/admin/settings/smsgateway'
import specialities from '../views/pages/admin/specialities/specialities'
import tablebasic from '../views/pages/admin/uiinterface/table/tablebasic'
import transaction from '../views/pages/admin/transaction/transaction'


const routes = [
/***************frontend route *************/
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: about
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: account
  },
  {
    path: '/add-billing',
    name: 'add-billing',
    component: Addbilling
  },
  {
    path: '/add-prescription',
    name: 'add-prescription',
    component: Addprescription
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: appointment
  },
  {
    path: '/available-timings',
    name: 'available-timings',
    component: availabletiming
  },
  {
    path: '/blank-page',
    name: 'blank-page',
    component: blankpage
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: blogdetails
  },
  {
    path: '/blog-grid',
    name: 'blog-grid',
    component: bloggrid
  },
  {
    path: '/blog-list',
    name: 'blog-list',
    component: bloglist
  },
  {
    path: '/booking',
    name: 'booking',
    component: booktable
  },
  {
    path: '/booking-success',
    name: 'booking-success',
    component: bookingsucc
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: changepass
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/chat-doctor',
    name: 'chat-doctor',
    component: chatdoc
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/components',
    name: 'components',
    component: component
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: contact
  },
  {
    path: '/dependent',
    name: 'dependent',
    component: dependent
  },
  {
    path: '/doctor-add-blog',
    name: 'doctor-add-blog',
    component: addblog
  },
  {
    path: '/doctor-blog',
    name: 'doctor-blog',
    component: doctorblog
  },
  {
    path: '/doctor-change-password',
    name: 'doctor-change-password',
    component: doctorchange
  },
  {
    path: '/doctor-dashboard',
    name: 'doctor-dashboard',
    component: doctorindex
  },
  {
    path: '/doctor-pending-blog',
    name: 'doctor-pending-blog',
    component: pendingblog
  },
  {
    path: '/doctor-profile',
    name: 'doctor-profile',
    component: profile
  },
  {
    path: '/doctor-profile-settings',
    name: 'doctor-profile-settings',
    component: profilesettings
  },
  {
    path: '/doctor-register',
    name: 'doctor-register',
    component: doctorregister
  },
  {
    path: '/doctor-register-step1',
    name: 'doctor-register-step1',
    component: doctorregisterstep1
  },
  {
    path: '/doctor-register-step2',
    name: 'doctor-register-step2',
    component: doctorregisterstep2
  },
  {
    path: '/doctor-register-step3',
    name: 'doctor-register-step3',
    component: doctorregisterstep3
  },
  {
    path: '/edit-billing',
    name: 'edit-billing',
    component: Editbilling
  },
  {
    path: '/edit-blog',
    name: 'edit-blog',
    component: editblog
  },
  {
    path: '/edit-prescription',
    name: 'edit-prescription',
    component: Editprescription
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: favourite
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: forgotpassword
  },
  {
    path: '/voice-call',
    name: 'voice-call',
    component: voicecall
  },
  {
    path: '/video-call',
    name: 'video-call',
    component: videocall
  },
  {
    path: '/term-condition',
    name: 'term-condition',
    component: terms
  },
  {
    path: '/social-media',
    name: 'social-media',
    component: socialmedia
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/schedule-timings',
    name: 'schedule-timings',
    component: scheduletiming
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: docreview
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/profile-settings',
    name: 'profile-settings',
    component: profilesetng
  },
  {
    path: '/product-healthcare',
    name: 'product-healthcare',
    component: producthealth
  },
  {
    path: '/product-description',
    name: 'product-description',
    component: productdesc
  },
  {
    path: '/product-checkout',
    name: 'product-checkout',
    component: productcheckout
  },
  {
    path: '/product-all',
    name: 'product-all',
    component: product
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: privacypolicy
  },
  {
    path: '/pharmacy-search',
    name: 'pharmacy-search',
    component: pharmacysearch
  },
  {
    path: '/pharmacy-register-step3',
    name: 'pharmacy-register-step3',
    component: pharmacyregisterstep3
  },
  {
    path: '/pharmacy-register-step2',
    name: 'pharmacy-register-step2',
    component: pharmacyregisterstep2
  },
  {
    path: '/pharmacy-register-step1',
    name: 'pharmacy-register-step1',
    component: pharmacyregisterstep1
  },
  {
    path: '/pharmacy-register-step1',
    name: 'pharmacy-register-step1',
    component: pharmacyregisterstep1
  },
  {
    path: '/pharmacy-register',
    name: 'pharmacy-register',
    component: pharmacyregister
  },
  {
    path: '/pharmacy-index',
    name: 'pharmacy-index',
    component: pharmacyindex
  },
  {
    path: '/pharmacy-details',
    name: 'pharmacy-details',
    component: pharmacydetail
  },
  {
    path: '/payment-success',
    name: 'payment-success',
    component: paymentsucces
  },
  {
    path: '/patient-register-step5',
    name: 'patient-register-step5',
    component: patientregisterstep5
  },
  {
    path: '/patient-register-step4',
    name: 'patient-register-step4',
    component: patientregisterstep4
  },
  {
    path: '/patient-register-step3',
    name: 'patient-register-step3',
    component: patientregisterstep3
  },
  {
    path: '/patient-register-step2',
    name: 'patient-register-step2',
    component: patientregisterstep2
  },
  {
    path: '/patient-register-step1',
    name: 'patient-register-step1',
    component: patientregisterstep1
  },
  {
    path: '/patient-profile',
    name: 'patient-profile',
    component: patientprofile
  },
  {
    path: '/patient-dashboard',
    name: 'patient-dashboard',
    component: patientdash
  },
  {
    path: '/patient-accounts',
    name: 'patient-accounts',
    component: patientaccount
  },
  {
    path: '/orders-list',
    name: 'orders-list',
    component: orderlist
  },
  {
    path: '/my-patients',
    name: 'my-patients',
    component: mypatients
  },
  {
    path: '/membership-details',
    name: 'membership-details',
    component: membershipdetail
  },
  {
    path: '/medical-records',
    name: 'medical-records',
    component: medicalrecords
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/invoice-view',
    name: 'invoice-view',
    component: invoiceview
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: invoice
  },
  {
    path: '/index-ten',
    name: 'index-ten',
    component: indexten
  },
  {
    path: '/index-two',
    name: 'index-two',
    component: indextwo
  },
  {
    path: '/index-three',
    name: 'index-three',
    component: indexthree
  },
  {
    path: '/index-four',
    name: 'index-four',
    component: indexfour
  },
  {
    path: '/index-five',
    name: 'index-five',
    component: indexfive
  },
  {
    path: '/index-six',
    name: 'index-six',
    component: indexsix
  },
  {
    path: '/index-leven',
    name: 'index-leven',
    component: indexleven
  },
  
  {
    path: '/index-twelve',
    name: 'index-twelve',
    component: indextwelve
  },
  {
    path: '/index-thirteen',
    name: 'index-thirteen',
    component: indexthirteen
  },
  {
    path: '/index-fourteen',
    name: 'index-fourteen',
    component: indexfourteen
  },
  {
    path: '/index-eight',
    name: 'index-eight',
    component: indexeight
  },
  {
    path: '/index-nine',
    name: 'index-nine',
    component: indexnine
  },
  {
    path: '/index-seven',
    name: 'index-seven',
    component: indexseven
  },
  {
    path: '/map-grid',
    name: 'map-grid',
    component: mapgrid
  },
  {
    path: '/map-list',
    name: 'map-list',
    component: maplist
  },
  /***************Pharmacy admin route *************/
  {
    path: '/pharmacyadmin/login',
    name: '/pharmacyadmin/login',
    component: pharmacylogin
  },
  {
    path: '/pharmacyadmin/register',
    name: '/pharmacyadmin/register',
    component: pharmacyregisterfirst
  },
  {
    path: '/pharmacyadmin/forgot-password',
    name: '/pharmacyadmin/forgot-password',
    component: pharmacyforgotpassword
  },
  {
    path: '/pharmacyadmin/confirm-email',
    name: '/pharmacyadmin/confirm-email',
    component: pharmacyconfirmemail
  },
  {
    path: '/pharmacyadmin/add-product',
    name: '/pharmacyadmin/add-product',
    component: addproduct
  },
  {
    path: '/pharmacyadmin/add-purchase',
    name: '/pharmacyadmin/add-purchase',
    component: addpurchase
  },
  {
    path: '/pharmacyadmin/add-supplier',
    name: '/pharmacyadmin/add-supplier',
    component: addsupplier
  },
  {
    path: '/pharmacyadmin/categories',
    name: '/pharmacyadmin/categories',
    component: categories
  },
  {
    path: '/pharmacyadmin/customer-orders',
    name: '/pharmacyadmin/customer-orders',
    component: customerorder
  },
  {
    path: '/pharmacyadmin/edit-product',
    name: '/pharmacyadmin/edit-product',
    component: editproduct
  },
  {
    path: '/pharmacyadmin/edit-purchase',
    name: '/pharmacyadmin/edit-purchase',
    component: editpurchase
  },
  {
    path: '/pharmacyadmin/edit-supplier',
    name: '/pharmacyadmin/edit-supplier',
    component: editsupplier
  },
  {
    path: '/pharmacyadmin/expired',
    name: '/pharmacyadmin/expired',
    component: expired
  },
  {
    path: '/pharmacyadmin/index',
    name: '/pharmacyadmin/index',
    component: pharmacydashboard
  },
  {
    path: '/pharmacyadmin/invoice',
    name: '/pharmacyadmin/invoice',
    component: pharmacyinvoice
  },
  {
    path: '/pharmacyadmin/invoice-report',
    name: '/pharmacyadmin/invoice-report',
    component: pharmacyinvoicereport
  },
  {
    path: '/pharmacyadmin/order',
    name: '/pharmacyadmin/order',
    component: order
  },
  {
    path: '/pharmacyadmin/outstock',
    name: '/pharmacyadmin/outstock',
    component: outstock
  },
  {
    path: '/pharmacyadmin/products',
    name: '/pharmacyadmin/products',
    component: products
  },
  {
    path: '/pharmacyadmin/profile',
    name: '/pharmacyadmin/profile',
    component: pharmacyprofile
  },
  {
    path: '/pharmacyadmin/purchase',
    name: '/pharmacyadmin/purchase',
    component: purchase
  },
  {
    path: '/pharmacyadmin/sales',
    name: '/pharmacyadmin/sales',
    component: sales
  },
  {
    path: '/pharmacyadmin/settings',
    name: '/pharmacyadmin/settings',
    component: settings
  },
  {
    path: '/pharmacyadmin/supplier',
    name: '/pharmacyadmin/supplier',
    component: supplier
  },
  {
    path: '/pharmacyadmin/transactions-list',
    name: '/pharmacyadmin/transactions-list',
    component: transactionlist
  },
  {
    path: '/pharmacyadmin/product-list',
    name: '/pharmacyadmin/product-list',
    component: productlist
  },

  /*************Admin route ***********/
  {
    path: '/admin/login',
    name: '/admin/login',
    component: adminlogin
  },
  {
    path: '/admin/register',
    name: '/admin/register',
    component: adminregister
  },
  {
    path: '/admin/account-settings',
    name: '/admin/account-settings',
    component: accountsetting
  },
  {
    path: '/admin/active-blog',
    name: '/admin/active-blog',
    component: adminactiveblog
  },
  {
    path: '/admin/add-blog',
    name: '/admin/add-blog',
    component: adminaddblog
  },
  {
    path: '/admin/add-profile',
    name: '/admin/add-profile',
    component: addprofile
  },
  {
    path: '/admin/appointment-report',
    name: '/admin/appointment-report',
    component: appointmentreport
  },
  {
    path: '/admin/blank-page',
    name: '/admin/blank-page',
    component: adminblankpage
  },
  {
    path: '/admin/blog-details',
    name: '/admin/blog-details',
    component: adminblogdetails
  },
  {
    path: '/admin/change-password',
    name: '/admin/change-password',
    component: changepassword
  },
  {
    path: '/admin/components',
    name: '/admin/components',
    component: admincomponent
  },
  {
    path: '/admin/conform-email',
    name: '/admin/conform-email',
    component: conformemail
  },
  {
    path: '/admin/data-tables',
    name: '/admin/data-tables',
    component: datatable
  },
  {
    path: '/admin/doctor-list',
    name: '/admin/doctor-list',
    component: doctorlist
  },
  {
    path: '/admin/edit-blog',
    name: '/admin/edit-blog',
    component: admineditblog
  },
  {
    path: '/admin/email-settings',
    name: '/admin/email-settings',
    component: emailsetting
  },
  {
    path: '/admin/error-404',
    name: '/admin/error-404',
    component: error404
  },
  {
    path: '/admin/error-500',
    name: '/admin/error-500',
    component: error500
  },
  {
    path: '/admin/forgot-password',
    name: '/admin/forgot-password',
    component: adminforgotpassword
  },
  {
    path: '/admin/form-basic-inputs',
    name: '/admin/form-basic-inputs',
    component: formbasicinput
  },
  {
    path: '/admin/form-horizontal',
    name: '/admin/form-horizontal',
    component: adminformhorizontal
  },
  {
    path: '/admin/form-input-groups',
    name: '/admin/form-input-groups',
    component: adminforminput
  },
  {
    path: '/admin/form-mask',
    name: '/admin/form-mask',
    component: adminformmask
  },
  {
    path: '/admin/form-validation',
    name: '/admin/form-validation',
    component: adminformvalidation
  },
  {
    path: '/admin/form-vertical',
    name: '/admin/form-vertical',
    component: adminformvertical
  },
  {
    path: '/admin/form-vertical',
    name: '/admin/form-vertical',
    component: adminformvertical
  },
  {
    path: '/admin/income-report',
    name: '/admin/income-report',
    component: adminincomereport
  },
  {
    path: '/admin/index',
    name: '/admin/index',
    component: adminindex
  },
  {
    path: '/admin/invoice-report',
    name: '/admin/invoice-report',
    component: invoicereport
  },
  {
    path: '/admin/lock-screen',
    name: '/admin/lock-screen',
    component: lockscreen
  },
  {
    path: '/admin/login-settings',
    name: '/admin/login-settings',
    component: loginsettings
  },
  {
    path: '/admin/user-reports',
    name: '/admin/user-reports',
    component: userreport
  },
  {
    path: '/admin/upcoming-appointments',
    name: '/admin/upcoming-appointments',
    component: upcomingappointment
  },
  {
    path: '/admin/past-appointments',
    name: '/admin/past-appointments',
    component: pastappointment
  },
  {
    path: '/admin/patient-list',
    name: '/admin/patient-list',
    component: adminpatientlist
  },
  {
    path: '/admin/payment-gateway',
    name: '/admin/payment-gateway',
    component: paymentgateway
  },
  {
    path: '/admin/pending-blog',
    name: '/admin/pending-blog',
    component: adminpendingblog
  },
  {
    path: '/admin/pharmacy-category',
    name: '/admin/pharmacy-category',
    component: pharmacycatgry
  },
  {
    path: '/admin/pharmacy-list',
    name: '/admin/pharmacy-list',
    component: adminpharamcylist
  },
  {
    path: '/admin/product-category',
    name: '/admin/product-category',
    component: productcategory
  },
  {
    path: '/admin/product-list',
    name: '/admin/product-list',
    component: adminproductlist
  },
  {
    path: '/admin/profile',
    name: '/admin/profile',
    component: adminprofile
  },
  {
    path: '/admin/ratings',
    name: '/admin/ratings',
    component: ratings
  },
  {
    path: '/admin/setting-notifications',
    name: '/admin/setting-notifications',
    component: settingnoti
  },
  {
    path: '/admin/setting-preference',
    name: '/admin/setting-preference',
    component: settingpreference
  },
  {
    path: '/admin/settings',
    name: '/admin/settings',
    component: adminsettings
  },
  {
    path: '/admin/sms-gateway',
    name: '/admin/sms-gateway',
    component: smsgateway
  },
  {
    path: '/admin/specialities',
    name: '/admin/specialities',
    component: specialities
  },
  {
    path: '/admin/tables-basic',
    name: '/admin/tables-basic',
    component: tablebasic
  },
  {
    path: '/admin/transaction',
    name: '/admin/transaction',
    component: transaction
  },
  {
    path: '/medical-details',
    name: '/medical-details',
    component: medicaldetail
  },
  {
    path: '/doctor-profile-settings',
    name: '/doctor-profile-settings',
    component: doctorprofilesetting
  },


  ];
export const router = createRouter({
    history: createWebHistory('template'),
    linkActiveClass: 'active',
    routes
});