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
          <router-link to="/" class="menu-logo">
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
            <router-link to="/">Home</router-link>
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
                  currentPath == 'edit-prescription' ||
                  currentPath == 'edit-billing' ||
                  currentPath == 'patient-profile' ||
                  currentPath == 'add-billing' ||
                  currentPath == 'add-prescription'
                    ? 'active'
                    : 'notactive'
                "
              >
                <router-link to="/patient-profile"
                  >Patients Profile</router-link
                >
              </li>
              <!-- <li
                :class="currentPath == 'chat-doctor' ? 'active' : 'notactive'"
              >
                <router-link to="/chat-doctor">Chat</router-link>
              </li>
              <li><router-link to="/invoices">Invoices</router-link></li> -->
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
              <!-- <li :class="currentPath == 'reviews' ? 'active' : 'notactive'">
                <router-link to="/reviews">Reviews</router-link>
              </li> -->
              <li
                :class="
                  currentPath == 'doctor-register' ? 'active' : 'notactive'
                "
              >
                <router-link to="/doctor-register">Doctor Register</router-link>
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
        <li class="nav-item dropdown has-arrow logged-item">
          <a
            href="javascript:void(0);"
            class="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <span class="user-img">
              <img
                class="rounded-circle"
                src="../../../../assets/img/doctors/doctor-thumb-02.jpg"
                width="31"
                alt="Darren Elder"
              />
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <div class="user-header">
              <div class="avatar avatar-sm">
                <img
                  src="../../../../assets/img/doctors/doctor-thumb-02.jpg"
                  alt="User Image"
                  class="avatar-img rounded-circle"
                />
              </div>
              <div class="user-text">
                <h6>Darren Elder</h6>
                <p class="text-muted mb-0">Doctor</p>
              </div>
            </div>
            <router-link class="dropdown-item" to="/doctor-dashboard"
              >Dashboard</router-link
            >
            <router-link class="dropdown-item" to="/doctor-profile-settings"
              >Profile Settings</router-link
            >
            <router-link class="dropdown-item" to="/login">Logout</router-link>
          </div>
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
        this.$route.name == "patient-profile" ||
        this.$route.name == "reviews" ||
        this.$route.name == "edit-prescription" ||
        this.$route.name == "edit-blog" ||
        this.$route.name == "edit-billing" ||
        this.$route.name == "doctor-profile-settings" ||
        this.$route.name == "doctor-pending-blog" ||
        this.$route.name == "doctor-dashboard" ||
        this.$route.name == "doctor-blog" ||
        this.$route.name == "doctor-add-blog" ||
        this.$route.name == "chat-doctor" ||
        this.$route.name == "doctor-index" ||
        this.$route.name == "appointments" ||
        this.$route.name == "doctor-appointments" ||
        this.$route.name == "schedule-timings" ||
        this.$route.name == "my-patients" ||
        this.$route.name == "messages" ||
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
        this.$route.name == "pharmacy-details" ||
        this.$route.name == "pharmacy-search" ||
        this.$route.name == "product-checkout" ||
        this.$route.name == "payment-success" ||
        this.$route.name == "pharmacy-register"
      );
    },
    localMenu() {
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
