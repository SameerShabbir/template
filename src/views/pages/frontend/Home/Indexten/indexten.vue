<template>
    <div class="main-wrapper">

        <div class="home-one-banner">

			<div class="bg-shapes">

				<img src="../../../../../assets/img/shapes/shape-10.png" class="shape-01 aos" alt="img" data-aos="fade-right">
				<img src="../../../../../assets/img/shapes/shape-7.png" class="shape-03 aos" alt="img" data-aos="zoom-out">
				<img src="../../../../../assets/img/shapes/shape-8.png" class="shape-04 aos" alt="img" data-aos="fade-left">
				<img src="../../../../../assets/img/shapes/shape-6.png" class="shape-02 aos" alt="img" data-aos="fade-down">

			</div>

			<div class="container">

            <layout-indextenheader></layout-indextenheader>

            <div class="row">
                <div class="col-lg-6 col-md-12 banner-left aos" data-aos="fade-up">
                    <a class="smooth-menu" href="#appointments">
                        <div class="scroll-down">
                            <div class="scroll-text">
                                <p>scroll down</p>
                            </div>
                            <div class="scroll-center">
                                <div class="scroll-mouse">
                                    <div class="scroll-wheel"></div>
                                </div>
                                <div>
                                    <span class="scroll-arrow-one"></span>
                                </div>
                                <div>
                                    <span class="scroll-arrow-two"></span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="banner-info">
                        <h2>Search Doctor,</h2>
                        <h2><span>Make an Appointment</span></h2>
                    </div>
                    <div class="banner-details">
                        <h4><img src="../../../../../assets/img/banner-check.png" class="me-2" alt="" > Instant Operation & Appointment</h4>
                        <h4><img src="../../../../../assets/img/banner-check.png" class="me-2" alt="" > 100% Expert Doctors</h4>
                        <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 aos" data-aos="fade-up">
                    <img src="../../../../../assets/img/banner-img.png" class="img-fluid dr-img" alt="">
                </div>
            </div>

            </div>

        </div>
        <!-- /Home Banner -->


        <appointmentindexten></appointmentindexten>

		<serviceindexten></serviceindexten>

		<doctorindexten></doctorindexten>

		<featureindexten></featureindexten>

		<newsindexten></newsindexten>

		<feaindexten></feaindexten>
		
        <layout-indextenfooter></layout-indextenfooter>

    </div>
</template>

<script>
import AOS from 'aos';
export default {
	mounted() {
		if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}

$('a.smooth-menu').on('click', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top});
    e.preventDefault();
});

 // Home Banner Two Slider Arrow Position 

 var window_width = $(window).outerWidth();
 var container_width = $('.container').outerWidth();
 var full_width = window_width - container_width
 var right_position_value = full_width / 2
 $('.banner-two-slider .slider-counter').css('right', right_position_value);
 $('.banner-two-slider .slick-next').css('right', right_position_value + 10);
 $('.banner-two-slider .slick-prev').css('right', right_position_value + 150);

 // Home Banner Three Slider Arrow Position 

 var window_width = $(window).outerWidth();
 var container_width = $('.container').outerWidth();
 var full_width = window_width - container_width
 var right_position_value = full_width / 2
 $('.home-three-slider .owl-dots').css('right', right_position_value - 150);
 $('.home-three-slider .owl-next').css('right', right_position_value + 10);
 $('.home-three-slider .owl-prev').css('right', right_position_value + 150);
	},
    data() {
        return {

        }
    }
}
</script>