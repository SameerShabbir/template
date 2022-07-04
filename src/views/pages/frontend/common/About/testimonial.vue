<template>
 <!-- Testimonial Section -->
			<section class="section section-testimonial">
				<div class="container">
					<div class="section-header text-center mb-4">
						<h2>Testimonials</h2>
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-12">
							<!-- Slider -->
							<div class="testimonial-slider slider">
							
								<!-- Slider Item -->
								<div class="testimonial-item text-center">
									<div class="testimonial-img">
										<img src="../../../../../assets/img/patients/patient1.jpg" class="img-fluid" alt="Speciality">
									</div>
                                    <div class="testimonial-content">                                        
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p class="user-name">- Jennifer Robinson</p>
                                        <p class="user-location mb-0">Leland, USA</p>
                                    </div>
								</div>	
								<!-- /Slider Item -->
								
								<!-- Slider Item -->
								<div class="testimonial-item text-center">
									<div class="testimonial-img">
										<img src="../../../../../assets/img/patients/patient2.jpg" class="img-fluid" alt="Speciality">
									</div>
                                    <div class="testimonial-content">                                        
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p class="user-name">- Denise Stevens</p>
                                        <p class="user-location mb-0">Abington, USA</p>
                                    </div>
								</div>	
								<!-- /Slider Item -->
								
								<!-- Slider Item -->
								<div class="testimonial-item text-center">
									<div class="testimonial-img">
										<img src="../../../../../assets/img/patients/patient3.jpg" class="img-fluid" alt="Speciality">
									</div>
                                    <div class="testimonial-content">                                        
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p class="user-name">- Charles Ortega</p>
                                        <p class="user-location mb-0">El Paso, USA</p>
                                    </div>
								</div>	
								<!-- /Slider Item -->
								
								<!-- Slider Item -->
								<div class="testimonial-item text-center">
									<div class="testimonial-img">
										<img src="../../../../../assets/img/patients/patient4.jpg" class="img-fluid" alt="">
									</div>
                                    <div class="testimonial-content">                                        
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <p class="user-name">- Jennifer Robinson</p>
                                        <p class="user-location mb-0">Leland, USA</p>
                                    </div>
								</div>	
								<!-- /Slider Item -->
								
							</div>
							<!-- /Slider -->
							
						</div>
					</div>
				</div>   
			</section>	 
			<!-- Testimonial Section -->
</template>
<script>
export default {
	mounted() {
    if($('.testimonial-slider').length > 0) {
    $('.testimonial-slider').slick({
        dots: true,
        autoplay:false,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
                settings: {
                    slidesToShow: 3
                  }
        },
        {
            breakpoint: 776,
                settings: {
                    slidesToShow: 2
                  }
        },
        {
            breakpoint: 567,
                settings: {
                    slidesToShow: 1
                }
        }]
    });
}
	},
    data() {
        return {

        }
    }
}
</script>