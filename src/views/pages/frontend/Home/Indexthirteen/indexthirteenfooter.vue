<template>
  <!-- Footer Four -->
  <footer class="footer footer-four">
    <div class="news-section-four">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="news-info">
              <h2>Subscribe to our Newsletter</h2>
              <p>
                Subscribe today for our exclusive offers, latest news and
                updates about health care programs.
              </p>
            </div>
            <div class="footer-news-four">
              <form>
                <div class="form-group mb-0">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Your Email Address"
                  />
                  <button type="submit" class="btn btn-one">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Top -->
    <div class="footer-top aos" data-aos="fade-up">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-contact">
              <h2 class="footer-title">Contact Us</h2>
              <div class="footer-contact-info">
                <div class="footer-address">
                  <span><i class="feather-map-pin"></i></span>
                  <p>
                    3556 Beech Street, San Francisco, <br />California, CA
                    <br />94108
                  </p>
                </div>
                <p><i class="feather-phone"></i> +92 324 4757212</p>
                <p class="mb-0">
                  <i class="feather-mail"></i> doccure@example.com
                </p>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>
          <div class="col-lg-3 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">For Patients</h2>
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
          <div class="col-lg-3 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">For Doctors</h2>
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
          <div class="col-lg-3 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-menu">
              <h2 class="footer-title">Social Network</h2>
              <ul>
                <li>
                  <a href="javascript:void(0);" target="_blank"
                    ><i class="fab fa-facebook me-2"></i> Facebook</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" target="_blank"
                    ><i class="fab fa-twitter me-2"></i> Twitter</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" target="_blank"
                    ><i class="fab fa-linkedin me-2"></i> Linkedin</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" target="_blank"
                    ><i class="fab fa-instagram me-2"></i> Instagram</a
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
      <div class="container">
        <!-- Copyright -->
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <div class="copyright-text">
                <p class="mb-0">&copy; 2022 Doccure. All rights reserved.</p>
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
  <!-- /Footer One-->
</template>
