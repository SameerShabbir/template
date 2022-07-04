<template>
<!-- Home Banner -->
<div class="pharmacy-home-slider pharmacy-home-slider-primary">
    <div class="swiper-container">
        <div class="swiper-wrapper">
              <div class="swiper-slide">
                  <img src="../../../../../assets/img/slide1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                  <img src="../../../../../assets/img/slide2.jpg" alt="">
              </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="banner-wrapper">
            <div class="banner-header text-center aos" data-aos="fade-up">
                <h1>Search Doctor, Make an Appointment</h1>
                <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
            </div>
            <!-- Search -->
            <div class="search-box aos" data-aos="fade-up">
                <form>
                    <div class="form-group search-location">
                        <input type="text" class="form-control" placeholder="Search Location">
                        <span class="form-text">Based on your Location</span>
                    </div>
                    <div class="form-group search-info">
                        <input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc">
                        <span class="form-text">Ex : Dental or Sugar Check up etc</span>
                    </div>
                    <router-link to="/search">
                    <button type="submit" class="btn btn-primary search-btn mt-0"><i class="fas fa-search"></i> <span>Search</span></button>
                    </router-link>
                </form>
            </div>
            <!-- /Search -->
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
</div>
<!-- /Home Banner -->        
</template>
<script>
    export default {
        mounted() {
            if($('.pharmacy-home-slider .swiper-container').length > 0) {
		 	var swiper = new Swiper('.pharmacy-home-slider .swiper-container', {
		 	loop: true,
		 	speed: 1000,
	      	pagination: {
	        	el: '.pharmacy-home-slider .swiper-pagination',
	        	dynamicBullets: true,
	        	clickable: true,
	      	},
	      	navigation: {
        		nextEl: '.pharmacy-home-slider .swiper-button-next',
        		prevEl: '.pharmacy-home-slider .swiper-button-prev',
      		},
	    });
	}
        },
    }
    </script>