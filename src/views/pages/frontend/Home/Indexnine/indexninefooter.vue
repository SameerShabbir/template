<template>
  <!-- Footer -->
  <footer class="footer footer-2 footer-five">
    <!-- Footer Top -->
    <div class="footer-top">
      <div class="container-fluid">
        <div class="row aos" data-aos="fade-up">
          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title footer-title-two">Quick Links</h2>
              <ul>
                <li><a href="javascript:void(0);">About Us</a></li>
                <li><a href="javascript:void(0);">Our Mission</a></li>
                <li><a href="javascript:void(0);">Our Approach</a></li>
                <li><a href="javascript:void(0);">Our History</a></li>
                <li>
                  <a href="javascript:void(0);">Awards And Achievements</a>
                </li>
                <li><a href="javascript:void(0);">Careers</a></li>
                <li><a href="javascript:void(0);">Appointment</a></li>
                <li><a href="javascript:void(0);">Facilities</a></li>
                <li><a href="javascript:void(0);">Pricing Plans</a></li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-3 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-about">
              <div class="footer-logo">
                <img
                  src="../../../../../assets/img/footer-logo.png"
                  alt="logo"
                />
              </div>
              <div class="footer-about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="footer-widget footer-contact mt-4">
                <h2 class="footer-title footer-title-two">Our Location</h2>
                <div class="footer-contact-info">
                  <div class="footer-address">
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <p>
                      3556 Beech Street, San Francisco,<br />
                      California, CA 94108
                    </p>
                  </div>
                  <p>
                    <i class="fas fa-phone-alt"></i>
                    +92 324 4757212
                  </p>
                  <p class="mb-0">
                    <i class="fas fa-envelope"></i>
                    doccure@example.com
                  </p>
                </div>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-3 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title footer-title-two">Services</h2>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><a href="javascript:void(0);">Cardiology</a></li>
                    <li><a href="javascript:void(0);">Diabetes</a></li>
                    <li><a href="javascript:void(0);">Plastic Surgery</a></li>
                    <li><a href="javascript:void(0);">Gastroenterology</a></li>
                    <li><a href="javascript:void(0);">Gynecology</a></li>
                    <li><a href="javascript:void(0);">Hepatology</a></li>
                    <li><a href="javascript:void(0);">Neurology</a></li>
                    <li><a href="javascript:void(0);">Radiology</a></li>
                    <li><a href="javascript:void(0);">Rhinology</a></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><a href="javascript:void(0);">Obstetrics</a></li>
                    <li><a href="javascript:void(0);">Ophthalmology</a></li>
                    <li><a href="javascript:void(0);">Oral Health</a></li>
                    <li><a href="javascript:void(0);">Orthopedics</a></li>
                    <li><a href="javascript:void(0);">Osteology</a></li>
                    <li><a href="javascript:void(0);">Otology</a></li>
                    <li><a href="javascript:void(0);">Pediatrics</a></li>
                    <li><a href="javascript:void(0);">Psychiatry</a></li>
                    <li><a href="javascript:void(0);">Pulmonology</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title footer-title-two">For Patients</h2>
              <ul>
                <li>
                  <router-link to="/search">Search for Doctors</router-link>
                </li>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/register">Register</router-link></li>
                <li><router-link to="/booking">Booking</router-link></li>
                <li>
                  <router-link to="/patient-dashboard"
                    >Patient Dashboard</router-link
                  >
                </li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-2 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title footer-title-two">For Doctors</h2>
              <ul>
                <li>
                  <router-link to="/appointments">Appointments</router-link>
                </li>
                <li><router-link to="/chat">Chat</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
                <li>
                  <router-link to="/doctor-register">Register</router-link>
                </li>
                <li>
                  <router-link to="/doctor-dashboard"
                    >Doctor Dashboard</router-link
                  >
                </li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>
        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container-fluid">
        <!-- Copyright -->
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <div class="copyright-text">
                <p class="mb-0">
                  &copy; 2022 <span>Doccure</span>. All rights reserved.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <!-- Copyright Menu -->
              <div class="copyright-menu">
                <ul class="policy-menu">
                  <li>
                    <router-link to="/term-condition"
                      >Terms and Conditions</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/privacy-policy">Policy</router-link>
                  </li>
                </ul>
              </div>
              <!-- /Copyright Menu -->
            </div>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
  <!-- /Footer -->
</template>
