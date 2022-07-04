<template>
  <div class="main-wrapper">
    <layout-doctorheader></layout-doctorheader>

    <breadcrumb4></breadcrumb4>

    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickyside">
              <doctorsidebar></doctorsidebar>
            </div>
          </div>

          <div class="col-md-7 col-lg-8 col-xl-9">
            <div
              class="appointments"
              v-for="item in appointment"
              :key="item.id"
            >
              <!-- Appointment List -->
              <div class="appointment-list">
                <div class="profile-info-widget">
                  <router-link to="/patient-profile" class="booking-doc-img">
                    <img :src="loadImg(item.img)" alt="User Image" />
                  </router-link>
                  <div class="profile-det-info">
                    <h3>
                      <router-link to="/patient-profile">{{
                        item.name
                      }}</router-link>
                    </h3>
                    <div class="patient-details">
                      <h5><i class="far fa-clock"></i> {{ item.time }}</h5>
                      <h5>
                        <i class="fas fa-map-marker-alt"></i> {{ item.state }}
                      </h5>
                      <h5><i class="fas fa-envelope"></i> {{ item.mail }}</h5>
                      <h5 class="mb-0">
                        <i class="fas fa-phone"></i> {{ item.phno }}
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="appointment-action">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-sm bg-info-light"
                    data-bs-toggle="modal"
                    data-bs-target="#appt_details"
                  >
                    <i class="far fa-eye"></i> View
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-sm bg-success-light"
                  >
                    <i class="fas fa-check"></i> Accept
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-sm bg-danger-light"
                  >
                    <i class="fas fa-times"></i> Cancel
                  </a>
                </div>
              </div>
              <!-- /Appointment List -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->

    <layout-footer></layout-footer>
  </div>
</template>

<script>
import appointment from "../../../../../assets/json/Doctor/appointment.json";
const images = require.context(
  "../../../../../assets/img/patients",
  false,
  /\.png$|\.jpg$/
);
export default {
  mounted() {},
  methods: {
    loadImg(imgPath) {
      return images("./" + imgPath).default;
    },
  },
  data() {
    return {
      appointment: appointment,
    };
  },
};
</script>
