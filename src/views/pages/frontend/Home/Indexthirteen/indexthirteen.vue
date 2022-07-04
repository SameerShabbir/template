<template>
  <div
    class="home-four"
    style="font-family: 'Poppins',sans-serif !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    color: #3E5463 !important;"
  >
    <!-- Main Wrapper -->

    <div class="main-wrapper">
      <!-- Home Banner -->
      <section class="home-four-banner">
        <!--Top Header -->
        <div class="home-four-top">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="left-top aos" data-aos="fade-up">
                  <ul>
                    <li><i class="feather-phone me-1"></i> +92 324 4757212</li>
                    <li>
                      <i class="feather-mail me-1"></i> doccure@example.com
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 text-end">
                <div class="right-top aos" data-aos="fade-up">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-facebook hi-icon"></i
                      ></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-linkedin hi-icon"></i
                      ></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-instagram hi-icon"></i
                      ></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-twitter hi-icon"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/Top Header -->
        <div class="container">
          <layout-indexthirteenheader></layout-indexthirteenheader>

          <div class="row align-items-center">
            <div class="col-lg-5 col-md-12"></div>
            <div class="col-lg-7 col-md-12">
              <div class="home-four-doctor">
                <div class="home-four-header">
                  <h2>Search Doctor, Make an <span>Appointment</span></h2>
                </div>
                <div class="banner-four-form">
                  <form action="#" class="banner-four-search">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            value=""
                            placeholder="Search Location"
                          />
                          <i class="far fa-compass"></i>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <vue-select :options="gender" />
                          <i class="far fa-smile"></i>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <vue-select :options="department" />
                          <i class="fas fa-user-check"></i>
                        </div>
                      </div>
                      <div class="col-md-6"></div>
                      <div class="col-md-6">
                        <div class="form-group text-end mb-0">
                          <router-link
                            to="/Search"
                            class="btn theme-btn btn-four w-100"
                            >MAKE APPOINTMENT</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /Home Banner -->

      <lookingindexthirteen></lookingindexthirteen>

      <clinicindexthirteen></clinicindexthirteen>

      <doctorindexthirteen></doctorindexthirteen>

      <featureindexthirteen></featureindexthirteen>

      <blogindexthirteen></blogindexthirteen>

      <layout-indexthirteenfooter></layout-indexthirteenfooter>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  mounted() {
    if ($(".main-wrapper .aos").length > 0) {
      AOS.init({
        duration: 1200,
        once: true,
      });
    }
  },
  data() {
    return {
      gender: ["Gender", "Male", "Female"],
      department: [
        "Department",
        "Surgen",
        "Cardiologist",
        "Gynacologist",
        "Pharmacy",
      ],
    };
  },
};
</script>
