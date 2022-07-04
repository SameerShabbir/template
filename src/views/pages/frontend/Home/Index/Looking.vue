<template>
  <section class="section home-tile-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9 m-auto">
          <div class="section-header text-center aos" data-aos="fade-up">
            <h2>What are you looking for?</h2>
          </div>
          <div class="row">
            <div
              class="col-lg-4 mb-3 aos"
              data-aos="fade-up"
              v-for="item in looking"
              :key="item.id"
            >
              <div class="card text-center doctor-book-card">
                <img :src="loadImg(item.img)" alt="" class="img-fluid" />
                <div class="doctor-book-card-content tile-card-content-1">
                  <div>
                    <h3 class="card-title mb-0">{{ item.name }}</h3>
                    <router-link
                      to="/search"
                      class="btn book-btn1 px-3 py-2 mt-3 btn-one-light"
                      tabindex="0"
                      >{{ item.button }}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import looking from "../../../../../assets/json/Index/looking.json";
const images = require.context(
  "../../../../../assets/img",
  false,
  /\.png$|\.jpg$/
);
export default {
  data() {
    return {
      looking: looking,
    };
  },
  methods: {
    loadImg(imgPath) {
      return images("./" + imgPath).default;
    },
  },
};
</script>
<style>
.doctor-book-card {
  height: 231px;
  overflow: hidden;
  border-radius: 5px;
}
</style>
