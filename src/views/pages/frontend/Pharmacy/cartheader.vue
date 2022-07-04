<template>
  <!-- Header -->
  <header class="header">
    <nav class="navbar navbar-expand-lg header-nav">
      <div class="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);">
          <span class="bar-icon bar-icon-one">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <router-link to="/" class="navbar-brand logo">
          <img
            src="../../../../assets/img/logo.png"
            class="img-fluid"
            alt="Logo"
          />
        </router-link>
      </div>
      <div class="main-menu-wrapper">
        <div class="menu-header">
          <router-link to="/">
            class="menu-logo">
            <img
              src="../../../../assets/img/logo.png"
              class="img-fluid"
              alt="Logo"
            />
          </router-link>
          <a id="menu_close" class="menu-close" href="javascript:void(0);">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <ul class="main-nav">
          <li class="has-submenu" :class="homeMenu ? 'active' : 'notactive'">
            <a href="">Home <i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li :class="currentPath == 'index' ? 'active' : 'notactive'">
                <router-link to="/">Home</router-link>
              </li>
              <li><router-link to="/index-two">Home 2</router-link></li>
              <li><router-link to="/index-three">Home 3</router-link></li>
              <li><router-link to="/index-four">Home 4</router-link></li>
              <li><router-link to="/index-five">Home 5</router-link></li>
              <li><router-link to="/index-six">Home 6</router-link></li>
              <li><router-link to="/index-seven">Home 7</router-link></li>
              <li><router-link to="/index-eight">Home 8</router-link></li>
              <li><router-link to="/index-nine">Home 9</router-link></li>
              <li :class="currentPath == 'index-ten' ? 'active' : 'notactive'">
                <router-link to="/index-ten">Home 10</router-link>
              </li>
              <li
                :class="currentPath == 'index-leven' ? 'active' : 'notactive'"
              >
                <router-link to="/index-leven">Home 11</router-link>
              </li>
              <li
                :class="
                  currentPath == 'index-thirteen' ? 'active' : 'notactive'
                "
              >
                <router-link to="/index-thirteen">Home 12</router-link>
              </li>
              <li
                :class="
                  currentPath == 'index-fourteen' ? 'active' : 'notactive'
                "
              >
                <router-link to="/index-fourteen">Home 13</router-link>
              </li>
              <li
                :class="currentPath == 'index-twelve' ? 'active' : 'notactive'"
              >
                <router-link to="/index-twelve">Home 14</router-link>
              </li>
            </ul>
          </li>
          <li class="has-submenu" :class="doctorMenu ? 'active' : 'notactive'">
            <a href="">Doctors <i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li
                :class="
                  currentPath == 'doctor-dashboard' ? 'active' : 'notactive'
                "
              >
                <router-link to="/doctor-dashboard"
                  >Doctor Dashboard</router-link
                >
              </li>
              <li
                :class="currentPath == 'appointments' ? 'active' : 'notactive'"
              >
                <router-link to="/appointments">Appointments</router-link>
              </li>
              <li
                :class="
                  currentPath == 'schedule-timings' ? 'active' : 'notactive'
                "
              >
                <router-link to="/schedule-timings"
                  >Schedule Timing</router-link
                >
              </li>
              <li
                :class="currentPath == 'my-patients' ? 'active' : 'notactive'"
              >
                <router-link to="/my-patients">Patients List</router-link>
              </li>
              <li
                :class="
                  currentPath == 'patient-profile' ? 'active' : 'notactive'
                "
              >
                <router-link to="/patient-profile"
                  >Patients Profile</router-link
                >
              </li>
              <li
                :class="currentPath == 'chat-doctor' ? 'active' : 'notactive'"
              >
                <router-link to="/chat-doctor">Chat</router-link>
              </li>
              <li :class="currentPath == 'invoices' ? 'active' : 'notactive'">
                <router-link to="/invoices">Invoices</router-link>
              </li>
              <li
                :class="
                  currentPath == 'doctor-profile-settings'
                    ? 'active'
                    : 'notactive'
                "
              >
                <router-link to="/doctor-profile-settings"
                  >Profile Settings</router-link
                >
              </li>
              <li :class="currentPath == 'reviews' ? 'active' : 'notactive'">
                <router-link to="/reviews">Reviews</router-link>
              </li>
              <li
                :class="
                  currentPath == 'doctor-register' ? 'active' : 'notactive'
                "
              >
                <router-link to="/doctor-register">Doctor Register</router-link>
              </li>
              <li
                class="has-submenu"
                :class="
                  currentPath == 'doctor-blog' ||
                  currentPath == 'blog-details' ||
                  currentPath == 'doctor-add-blog'
                    ? 'has-submenu active'
                    : 'has-submenu notactive'
                "
              >
                <a>Blog</a>
                <ul class="submenu">
                  <li
                    :class="
                      currentPath == 'doctor-blog' ? 'active' : 'notactive'
                    "
                  >
                    <router-link to="/doctor-blog">Blog</router-link>
                  </li>
                  <li
                    :class="
                      currentPath == 'blog-details' ? 'active' : 'notactive'
                    "
                  >
                    <router-link to="/blog-details">Blog view</router-link>
                  </li>
                  <li
                    :class="
                      currentPath == 'doctor-add-blog' ? 'active' : 'notactive'
                    "
                  >
                    <router-link to="/doctor-add-blog">Add Blog</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            class="has-submenu"
            :class="patientsMenu ? 'active' : 'notactive'"
          >
            <a href="">Patients <i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li
                class="has-submenu"
                :class="
                  currentPath == 'map-grid' || currentPath == 'map-list'
                    ? 'has-submenu active'
                    : 'has-submenu notactive'
                "
              >
                <a href="javascript:void(0);">Doctors</a>
                <ul class="submenu">
                  <li
                    :class="currentPath == 'map-grid' ? 'active' : 'notactive'"
                  >
                    <router-link to="/map-grid">Map Grid</router-link>
                  </li>
                  <li
                    :class="currentPath == 'map-list' ? 'active' : 'notactive'"
                  >
                    <router-link to="/map-list">Map List</router-link>
                  </li>
                </ul>
              </li>
              <li :class="currentPath == 'search' ? 'active' : 'notactive'">
                <router-link to="/search">Search Doctor</router-link>
              </li>
              <li
                :class="
                  currentPath == 'doctor-profile' ? 'active' : 'notactive'
                "
              >
                <router-link to="/doctor-profile">Doctor Profile</router-link>
              </li>
              <li :class="currentPath == 'booking' ? 'active' : 'notactive'">
                <router-link to="/booking">Booking</router-link>
              </li>
              <li :class="currentPath == 'checkout' ? 'active' : 'notactive'">
                <router-link to="/checkout">Checkout</router-link>
              </li>
              <li
                :class="
                  currentPath == 'booking-success' ? 'active' : 'notactive'
                "
              >
                <router-link to="/booking-success">Booking Success</router-link>
              </li>
              <li
                :class="
                  currentPath == 'patient-dashboard' ? 'active' : 'notactive'
                "
              >
                <router-link to="/patient-dashboard"
                  >Patient Dashboard</router-link
                >
              </li>
              <li :class="currentPath == 'favourites' ? 'active' : 'notactive'">
                <router-link to="/favourites">Favourites</router-link>
              </li>
              <li :class="currentPath == 'chat' ? 'active' : 'notactive'">
                <router-link to="/chat">Chat</router-link>
              </li>
              <li
                :class="
                  currentPath == 'profile-settings' ? 'active' : 'notactive'
                "
              >
                <router-link to="/profile-settings"
                  >Profile Settings</router-link
                >
              </li>
              <li
                :class="
                  currentPath == 'change-password' ? 'active' : 'notactive'
                "
              >
                <router-link to="/change-password">Change Password</router-link>
              </li>
            </ul>
          </li>
          <li
            class="has-submenu"
            :class="pharmacyMenu ? 'active' : 'notactive'"
          >
            <a href="">Pharmacy <i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li
                :class="
                  currentPath == 'pharmacy-index' ? 'active' : 'notactive'
                "
              >
                <router-link to="/pharmacy-index">Pharmacy</router-link>
              </li>
              <li
                :class="
                  currentPath == 'pharmacy-details' ? 'active' : 'notactive'
                "
              >
                <router-link to="/pharmacy-details"
                  >Pharmacy Details</router-link
                >
              </li>
              <li
                :class="
                  currentPath == 'pharmacy-search' ? 'active' : 'notactive'
                "
              >
                <router-link to="/pharmacy-search">Pharmacy Search</router-link>
              </li>
              <li
                :class="currentPath == 'product-all' ? 'active' : 'notactive'"
              >
                <router-link to="/product-all">Product</router-link>
              </li>
              <li
                :class="
                  currentPath == 'product-description' ? 'active' : 'notactive'
                "
              >
                <router-link to="/product-description"
                  >Product Description</router-link
                >
              </li>
              <li :class="currentPath == 'cart' ? 'active' : 'notactive'">
                <router-link to="/cart">Cart</router-link>
              </li>
              <li
                :class="
                  currentPath == 'product-checkout' ? 'active' : 'notactive'
                "
              >
                <router-link to="/product-checkout"
                  >Product Checkout</router-link
                >
              </li>
              <li
                :class="
                  currentPath == 'payment-success' ? 'active' : 'notactive'
                "
              >
                <router-link to="/payment-success">Payment Success</router-link>
              </li>
              <li
                :class="
                  currentPath == 'pharmacy-register' ? 'active' : 'notactive'
                "
              >
                <router-link to="/pharmacy-register"
                  >Pharmacy Register</router-link
                >
              </li>
            </ul>
          </li>
          <li class="has-submenu" :class="pagesMenu ? 'active' : 'notactive'">
            <a href="javascript:void(0);"
              >Pages <i class="fas fa-chevron-down"></i
            ></a>

            <ul
              class="submenu"
              :class="
                currentPath == 'invoices' || currentPath == 'invoice-view'
                  ? 'has-submenu active'
                  : 'has-submenu notactive'
              "
            >
              <li :class="currentPath == 'voice-call' ? 'active' : 'notactive'">
                <router-link to="/voice-call">Voice Call</router-link>
              </li>
              <li :class="currentPath == 'video-call' ? 'active' : 'notactive'">
                <router-link to="/video-call">Video Call</router-link>
              </li>
              <li :class="currentPath == 'search' ? 'active' : 'notactive'">
                <router-link to="/search">Search Doctors</router-link>
              </li>
              <li :class="currentPath == 'calendar' ? 'active' : 'notactive'">
                <router-link to="/calendar">Calendar</router-link>
              </li>
              <li :class="currentPath == 'components' ? 'active' : 'notactive'">
                <router-link to="/components">Components</router-link>
              </li>
              <li
                class="has-submenu subdrop-menu"
                :class="
                  currentPath == 'invoices' || currentPath == 'invoice-view'
                    ? 'active'
                    : 'notactive'
                "
              >
                <!-- <router-link to="/doctor/invoices">Invoices</router-link> -->
                <a href="javascript:void(0);">Invoices</a>
                <ul class="submenu">
                  <li
                    :class="currentPath == 'invoices' ? 'active' : 'notactive'"
                  >
                    <router-link to="/doctor/invoices">Invoices</router-link>
                  </li>
                  <li
                    :class="
                      currentPath == 'invoice-view' ? 'active' : 'notactive'
                    "
                  >
                    <router-link to="/invoice-view">Invoice View</router-link>
                  </li>
                </ul>
              </li>
              <li :class="currentPath == 'blank-page' ? 'active' : 'notactive'">
                <router-link to="/blank-page">Starter Page</router-link>
              </li>
              <li :class="currentPath == 'about-us' ? 'active' : 'notactive'">
                <router-link to="/about-us">About Us</router-link>
              </li>
              <li :class="currentPath == 'contact-us' ? 'active' : 'notactive'">
                <router-link to="/contact-us">Contact Us</router-link>
              </li>
              <li :class="currentPath == 'login' ? 'active' : 'notactive'">
                <router-link to="/login">Login</router-link>
              </li>
              <li :class="currentPath == 'register' ? 'active' : 'notactive'">
                <router-link to="/register">Register</router-link>
              </li>
              <li
                :class="
                  currentPath == 'forgot-password' ? 'active' : 'notactive'
                "
              >
                <router-link to="/forgot-password">Forgot Password</router-link>
              </li>
            </ul>
          </li>
          <li class="has-submenu" :class="blogMenu ? 'active' : 'notactive'">
            <a href="">Blog <i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li :class="currentPath == 'blog-list' ? 'active' : 'notactive'">
                <router-link to="/blog-list">Blog List</router-link>
              </li>
              <li :class="currentPath == 'blog-grid' ? 'active' : 'notactive'">
                <router-link to="/blog-grid">Blog Grid</router-link>
              </li>
              <li
                :class="currentPath == 'blog-details' ? 'active' : 'notactive'"
              >
                <router-link to="/blog-details">Blog Details</router-link>
              </li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="javascript:void(0);" target="_blank"
              >Admin <i class="fas fa-chevron-down"></i
            ></a>
            <ul class="submenu">
              <li>
                <router-link to="/admin/login" target="_blank"
                  >Admin</router-link
                >
              </li>
              <li>
                <router-link to="/pharmacyadmin/login" target="_blank"
                  >Pharmacy Admin</router-link
                >
              </li>
            </ul>
          </li>
          <li class="login-link">
            <router-link to="/login">Login / Signup</router-link>
          </li>
        </ul>
      </div>
      <ul class="nav header-navbar-rht">
        <li class="nav-item contact-item">
          <div class="header-contact-img">
            <i class="far fa-hospital"></i>
          </div>
          <div class="header-contact-detail">
            <p class="contact-header">Contact</p>
            <p class="contact-info-header">+92 324 4757212</p>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link header-login" to="/login"
            >login / Signup
          </router-link>
        </li>
        <li class="nav-item view-cart-header me-3">
          <a href="javascript:void(0);" class="" id="cart"
            ><i class="fas fa-shopping-cart"></i>
            <small class="unread-msg1">7</small></a
          >
          <!-- Shopping Cart -->
          <div class="shopping-cart">
            <ul class="shopping-cart-items list-unstyled">
              <li class="clearfix">
                <div class="close-icon">
                  <i class="far fa-times-circle"></i>
                </div>
                <img
                  class="avatar-img rounded"
                  src="../../../../assets/img/products/product.jpg"
                  alt="User Image"
                />
                <span class="item-name">Benzaxapine Croplex</span>
                <span class="item-price">$849.99</span>
                <span class="item-quantity">Quantity: 01</span>
              </li>

              <li class="clearfix">
                <div class="close-icon">
                  <i class="far fa-times-circle"></i>
                </div>
                <img
                  class="avatar-img rounded"
                  src="../../../../assets/img/products/product1.jpg"
                  alt="User Image"
                />
                <span class="item-name">Ombinazol Bonibamol</span>
                <span class="item-price">$1,249.99</span>
                <span class="item-quantity">Quantity: 01</span>
              </li>

              <li class="clearfix">
                <div class="close-icon">
                  <i class="far fa-times-circle"></i>
                </div>
                <img
                  class="avatar-img rounded"
                  src="../../../../assets/img/products/product2.jpg"
                  alt="User Image"
                />
                <span class="item-name">Dantotate Dantodazole</span>
                <span class="item-price">$129.99</span>
                <span class="item-quantity">Quantity: 01</span>
              </li>
            </ul>
            <div class="booking-summary pt-3">
              <div class="booking-item-wrap">
                <ul class="booking-date">
                  <li>Subtotal <span>$5,877.00</span></li>
                  <li>Shipping <span>$25.00</span></li>
                  <li>Tax <span>$0.00</span></li>
                  <li>Total <span>$5.2555</span></li>
                </ul>
                <div class="booking-total">
                  <ul class="booking-total-list text-align">
                    <li>
                      <div class="clinic-booking pt-4">
                        <router-link class="apt-btn" to="/cart"
                          >View Card</router-link
                        >
                      </div>
                    </li>
                    <li>
                      <div class="clinic-booking pt-4">
                        <router-link class="apt-btn" to="/product-checkout"
                          >Checkout</router-link
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- /Shopping Cart -->
        </li>
      </ul>
    </nav>
  </header>
  <!-- /Header -->
</template>

<script>
export default {
  mounted() {
    var $wrapper = $(".main-wrapper");
    $(".main-nav a").on("click", function(e) {
      if (
        $(this)
          .parent()
          .hasClass("has-submenu")
      ) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this)
          .next("ul")
          .slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this)
          .next("ul")
          .slideUp(350);
      }
    });
    $("body").append('<div class="sidebar-overlay"></div>');
    $(document).on("click", "#mobile_btn", function() {
      $wrapper.toggleClass("slide-nav");
      $(".sidebar-overlay").toggleClass("opened");
      $("html").addClass("menu-opened");
      $("#task_window").removeClass("opened");
      return false;
    });

    $(document).on("click", "#menu_close", function() {
      $("html").removeClass("menu-opened");
      $(".sidebar-overlay").removeClass("opened");
      $("main-wrapper").removeClass("slide-nav");
    });
    $(".main-nav ul li:not(.submenu) a").click(function() {
      $("html").removeClass("menu-opened");
      $(".sidebar-overlay").removeClass("opened");
    });
  },
  computed: {
    currentPath() {
      return this.$route.name;
    },
    homeMenu() {
      return (
        this.$route.name == "index" ||
        this.$route.name == "index-5" ||
        this.$route.name == "index-6" ||
        this.$route.name == "index-8" ||
        this.$route.name == "index-7" ||
        this.$route.name == "index-1" ||
        this.$route.name == "index-page" ||
        this.$route.name == "index-2" ||
        this.$route.name == "index-3" ||
        this.$route.name == "index-4"
      );
    },
    doctorMenu() {
      return (
        this.$route.name == "doctor-index" ||
        this.$route.name == "doctor-appointments" ||
        this.$route.name == "schedule-timings" ||
        this.$route.name == "my-patients" ||
        this.$route.name == "messages" ||
        this.$route.name == "invoices" ||
        this.$route.name == "profile-settings" ||
        this.$route.name == "doctor-reviews" ||
        this.$route.name == "doctor-register" ||
        this.$route.name == "doctor-blogs" ||
        this.$route.name == "blog-details" ||
        this.$route.name == "add-blog" ||
        this.$route.name == "edit-blog" ||
        this.$route.name == "add-prescription" ||
        this.$route.name == "edit-prescription" ||
        this.$route.name == "add-billing" ||
        this.$route.name == "edit-billing"
      );
    },
    patientsMenu() {
      return (
        this.$route.name == "doctor-mapgrid" ||
        this.$route.name == "doctor-maplist" ||
        this.$route.name == "doctor-profile" ||
        this.$route.name == "search-doctor" ||
        this.$route.name == "booking" ||
        this.$route.name == "booking-success" ||
        this.$route.name == "checkout" ||
        this.$route.name == "patient-dashboard" ||
        this.$route.name == "favourites" ||
        this.$route.name == "chat" ||
        this.$route.name == "patient-profile-settings" ||
        this.$route.name == "patient-change-password"
      );
    },
    pharmacyMenu() {
      return (
        this.$route.name == "pharmacy" ||
        this.$route.name == "cart" ||
        this.$route.name == "pharmacy-details" ||
        this.$route.name == "pharmacy-search" ||
        this.$route.name == "pharmacy-product" ||
        this.$route.name == "pharmacy-product-description" ||
        this.$route.name == "pharmacy-cart" ||
        this.$route.name == "pharmacy-product-checkout" ||
        this.$route.name == "patient-dashboard" ||
        this.$route.name == "favourites" ||
        this.$route.name == "chat" ||
        this.$route.name == "pharmacy-payment-success" ||
        this.$route.name == "pharmacy-register"
      );
    },
    pagesMenu() {
      return (
        this.$route.name == "about-us" ||
        this.$route.name == "voice-call" ||
        this.$route.name == "video-call" ||
        this.$route.name == "calendar" ||
        this.$route.name == "components" ||
        this.$route.name == "invoice-view" ||
        this.$route.name == "login" ||
        this.$route.name == "blank-page" ||
        this.$route.name == "invoices" ||
        this.$route.name == "forgot-password"
      );
    },
    blogMenu() {
      return (
        this.$route.name == "blog-list" ||
        this.$route.name == "blog-grid" ||
        this.$route.name == "blog-details"
      );
    },
  },
  methods: {
    dashboard(value) {
      if (value == 1) {
        let router = this.$router.resolve({ path: "/admin/index" });
        window.open(router.href, "_blank");
      } else {
        let router = this.$router.resolve({ path: "/pharmacyadmin/index" });
        window.open(router.href, "_blank");
      }
    },
  },
};
</script>
