<template>
<!-- Features Section -->
		<section class="features-section">
			<div class="container">
				<div class="section-header text-center aos" data-aos="fade-up">
					<h2 class="color-primary">Availabe Features in Our Clinic</h2>
					<p class="sub-title color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div class="row">
					<div class="col-md-12 aos" data-aos="fade-up">
						<div class="features-section-slider slider">
							<div class="features-grid hvr-bounce-to-bottom">
								<div class="features-cricle">
									<div class="features-round">
										<img src="../../../../../assets/img/services/features-01.svg" class="img-fluid" alt="">
									</div>
								</div>
								<h4>Operation</h4>
							</div>
							<div class="features-grid hvr-bounce-to-bottom">
								<div class="features-cricle">
									<div class="features-round">
										<img src="../../../../../assets/img/services/features-02.svg" class="img-fluid" alt="">
									</div>
								</div>
								<h4>Medical</h4>
							</div>
							<div class="features-grid hvr-bounce-to-bottom">
								<div class="features-cricle">
									<div class="features-round">
										<img src="../../../../../assets/img/services/features-03.svg" class="img-fluid" alt="">
									</div>
								</div>
								<h4>Patient Ward</h4>
							</div>
							<div class="features-grid hvr-bounce-to-bottom">
								<div class="features-cricle">
									<div class="features-round">
										<img src="../../../../../assets/img/services/features-04.svg" class="img-fluid" alt="">
									</div>
								</div>
								<h4>Laboratory</h4>
							</div>
							<div class="features-grid hvr-bounce-to-bottom">
								<div class="features-cricle">
									<div class="features-round">
										<img src="../../../../../assets/img/services/features-01.svg" class="img-fluid" alt="">
									</div>
								</div>
								<h4>Operation</h4>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-end">
						<div class="slick-view-btn me-2">
							<a href="javascript:void(0);" class="btn">
								View More <i class="fas fa-arrow-right ms-2"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /Features Section -->
</template>
<script>
export default {
	mounted() {
     if($('.features-section-slider').length > 0) {
    $('.features-section-slider').slick({
        dots: false,
        autoplay:false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                  }
        },
        {
            breakpoint: 992,
                settings: {
                    slidesToShow: 3
                  }
        },
        {
            breakpoint: 860,
                settings: {
                    slidesToShow: 2
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