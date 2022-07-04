<template>
<!-- Header -->
<header class="header header-trans header-five">
    <nav class="navbar navbar-expand-lg header-nav no-border">
        <div class="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
                <span class="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
            <router-link to="/" class="navbar-brand logo">
                <img src="../../../../../assets/img/logo.png" class="img-fluid" alt="Logo">
            </router-link>
        </div>
        <div class="main-menu-wrapper">
            <div class="menu-header">
                <router-link to="/" class="menu-logo">
                    <img src="../../../../../assets/img/logo.png" class="img-fluid" alt="Logo">
                </router-link>
                <a id="menu_close" class="menu-close" href="javascript:void(0);">
                    <i class="fas fa-times"></i>
                </a>
            </div>
            <ul class="main-nav blue-font">
                <li class="has-submenu active">
                    <a href="">Home <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/index-two">Home 2</router-link></li>
                        <li><router-link to="/index-three">Home 3</router-link></li>
                        <li><router-link to="/index-four">Home 4</router-link></li>
                        <li><router-link to="/index-five">Home 5</router-link></li>
                        <li><router-link to="/index-six">Home 6</router-link></li>
                        <li><router-link to="/index-seven">Home 7</router-link></li>
                        <li><router-link to="/index-eight">Home 8</router-link></li>
                        <li class="active"><router-link to="/index-nine">Home 9</router-link></li>
                        <li><router-link to="/index-ten">Home 10</router-link></li>
                        <li><router-link to="/index-leven">Home 11</router-link></li>
                        <li><router-link to="/index-twelve">Home 12</router-link></li>
                        <li><router-link to="/index-thirteen">Home 13</router-link></li>
                        <li><router-link to="/index-fourteen">Home 14</router-link></li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <a href="">Doctors <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li><router-link to="/doctor-dashboard">Doctor Dashboard</router-link></li>
                        <li><router-link to="/appointments">Appointments</router-link></li>
                        <li><router-link to="/schedule-timings">Schedule Timing</router-link></li>
                        <li><router-link to="/my-patients">Patients List</router-link></li>
                        <li><router-link to="/patient-profile">Patients Profile</router-link></li>
                        <li><router-link to="/chat-doctor">Chat</router-link></li>
                        <li><router-link to="/invoices">Invoices</router-link></li>
                        <li><router-link to="/doctor-profile-settings">Profile Settings</router-link></li>
                        <li><router-link to="/reviews">Reviews</router-link></li>
                        <li><router-link to="/doctor-register">Doctor Register</router-link></li>
                        <li class="has-submenu">
                            <a>Blog</a>
                            <ul class="submenu">
                                <li><router-link to="/doctor-blog">Blog</router-link></li>
                                <li><router-link to="/blog-details">Blog view</router-link></li>
                                <li><router-link to="/doctor-add-blog">Add Blog</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </li>	
                <li class="has-submenu">
                    <a href="">Patients <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li class="has-submenu">
                            <a href="javascript:void(0);">Doctors</a>
                            <ul class="submenu">
                                <li><router-link to="/map-grid">Map Grid</router-link></li>
                                <li><router-link to="/map-list">Map List</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/search">Search Doctor</router-link></li>
                        <li><router-link to="/doctor-profile">Doctor Profile</router-link></li>
                        <li><router-link to="/booking">Booking</router-link></li>
                        <li><router-link to="/checkout">Checkout</router-link></li>
                        <li><router-link to="/booking-success">Booking Success</router-link></li>
                        <li><router-link to="/patient-dashboard">Patient Dashboard</router-link></li>
                        <li><router-link to="/favourites">Favourites</router-link></li>
                        <li><router-link to="/chat">Chat</router-link></li>
                        <li><router-link to="/profile-settings">Profile Settings</router-link></li>
                        <li><router-link to="/change-password">Change Password</router-link></li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <a href="">Pharmacy <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li><router-link to="/pharmacy-index">Pharmacy</router-link></li>
                        <li><router-link to="/pharmacy-details">Pharmacy Details</router-link></li>
                        <li><router-link to="/pharmacy-search">Pharmacy Search</router-link></li>
                        <li><router-link to="/product-all">Product</router-link></li>
                        <li><router-link to="/product-description">Product Description</router-link></li>
                        <li><router-link to="/cart">Cart</router-link></li>
                        <li><router-link to="/product-checkout">Product Checkout</router-link></li>
                        <li><router-link to="/payment-success">Payment Success</router-link></li>
                        <li><router-link to="/pharmacy-register">Pharmacy Register</router-link></li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <a href="">Pages <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li><router-link to="/voice-call">Voice Call</router-link></li>
                        <li><router-link to="/video-call">Video Call</router-link></li>
                        <li><router-link to="/search">Search Doctors</router-link></li>
                        <li><router-link to="/calendar">Calendar</router-link></li>
                        <li><router-link to="/components">Components</router-link></li>
                        <li class="has-submenu">
                            <a>Invoices</a>
                            <ul class="submenu">
                                <li><router-link to="/invoices">Invoices</router-link></li>
                                <li><router-link to="/invoice-view">Invoice View</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/blank-page">Starter Page</router-link></li>
                        <li><router-link to="/about-us">About Us</router-link></li>
                        <li><router-link to="/contact-us">Contact Us</router-link></li>
                        <li><router-link to="/login">Login</router-link></li>
                        <li><router-link to="/register">Register</router-link></li>
                        <li><router-link to="/forgot-password">Forgot Password</router-link></li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <a href="">Blog <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li><router-link to="/blog-list">Blog List</router-link></li>
                        <li><router-link to="/blog-grid">Blog Grid</router-link></li>
                        <li><router-link to="/blog-details">Blog Details</router-link></li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <a href="javascript:void(0);" target="_blank">Admin <i class="fas fa-chevron-down"></i></a>
                    <ul class="submenu">
                        <li><router-link to="/admin/login" target="_blank">Admin</router-link></li>
                        <li><router-link to="/pharmacyadmin/login" target="_blank">Pharmacy Admin</router-link></li>
                    </ul>
                </li>
                <li class="login-link">
                    <router-link to="/login">Login / Signup</router-link>
                </li>
            </ul>
        </div>
        <ul class="nav header-navbar-rht right-menu">
            <li class="nav-item">
                <router-link class="nav-link header-login white-bg" to="/login">login / Signup</router-link>
            </li>
        </ul>
    </nav>
</header>
<!-- /Header -->
</template>
<script>

    export default {
       mounted() {
           if($('.header-trans').length > 0) {
		$(document).ready(function(){
		  $(window).scroll(function(){
			var scroll = $(window).scrollTop();
			  if (scroll > 95) {
				$(".header-trans").css("background" , "#FFFFFF");
			  }

			  else{
				  $(".header-trans").css("background" , "transparent");  	
			  }
		  })
		})
	}
           var $wrapper = $('.main-wrapper');
           $('.main-nav a').on('click', function(e) {
                if($(this).parent().hasClass('has-submenu')) {
                    e.preventDefault();
                }
                if(!$(this).hasClass('submenu')) {
                    $('ul', $(this).parents('ul:first')).slideUp(350);
                    $('a', $(this).parents('ul:first')).removeClass('submenu');
                    $(this).next('ul').slideDown(350);
                    $(this).addClass('submenu');
                } else if($(this).hasClass('submenu')) {
                    $(this).removeClass('submenu');
                    $(this).next('ul').slideUp(350);
                }
            });
           $('body').append('<div class="sidebar-overlay"></div>');
           $(document).on('click', '#mobile_btn', function() {
               $wrapper.toggleClass('slide-nav');
               $('.sidebar-overlay').toggleClass('opened');
               $('html').addClass('menu-opened');
               $('#task_window').removeClass('opened');
               return false;
           });
           
        $(document).on('click', '#menu_close', function() {
            $('html').removeClass('menu-opened');
            $('.sidebar-overlay').removeClass('opened');
            $('main-wrapper').removeClass('slide-nav');
        });
        $('.main-nav ul li:not(.submenu) a').click(function(){
                $("html").removeClass('menu-opened');         
                $(".sidebar-overlay").removeClass('opened');
            });
        
    
       },
       computed: {
           currentPath() {
               return this.$route.name
           },
           homeMenu() {
               return this.$route.name == '' ||  this.$route.name == 'index';
           }
       },
       methods: {
           dashboard(value) {
               if(value == 1) {
                   let router = this.$router.resolve({path: '/admin/index'});
                   window.open(router.href, '_blank');
               } else {
                   let router = this.$router.resolve({path: '/pharmacyadmin/index'});
                   window.open(router.href, '_blank');
               }
           }
       },
    }
    </script>