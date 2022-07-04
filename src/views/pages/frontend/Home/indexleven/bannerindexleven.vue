<template>

<!-- Banner Two -->
			<div class="home-banner-two">
				<span class="slider-counter-three"></span>
				<div class="home-banner-three-slider">
					<div class="profile-widget slider-img-one"></div>
					<div class="profile-widget slider-img-two"></div>
					<div class="profile-widget slider-img-three"></div>
					<div class="profile-widget slider-img-four"></div>
				</div>		
				<div class="container">
					<div class="row justify-content-between align-items-center">
						<div class="col-lg-6 col-md-12">
							<div class="banner-two-form">
								<div class="app-form aos" data-aos="fade-up">
									<div class="search-doctor">
										<div class="search-area">
											<h2 class="text-center">Search Doctor, Make an Appointment</h2>
											<form class="search-input">
												<div class="row">
													<div class="col-12 col-md-12">
														<div class="form-group">
															<label>Location</label>
															<input type="text" class="form-control" value="">
														</div>
													</div>
													<div class="col-12 col-md-12">
														<div class="form-group">
															<label>Gender</label>
															<vue-select :options="addgender" />
														</div>
													</div>
													<div class="col-12 col-md-12">
														<div class="form-group">
															<label>Department</label>
															<vue-select :options="adddepartment" />
														</div>
													</div>
												</div>
												<div class="submit-section">
													<button type="submit" class="btn search-btn btn-two">Search</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>			
			<!-- /Banner Two -->
</template>
<script>
export default {
	mounted() {
    var $status = $('.slider-counter-three');
	var $slickElement = $('.home-banner-three-slider');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		if(!slick.$dots){
		return;
	}
	var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + '/' + (slick.$dots[0].children.length));
	});

	if($('.home-banner-three-slider').length > 0) {
		$slickElement.slick({
			autoplay:false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: true
		});
	}
	},
    data() {
        return {
			addgender: ["Male", "Female"],
			adddepartment: ["Surgen", "Cardiologist", "Gynacologist"]
        }
    }
}
</script>