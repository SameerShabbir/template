<template>
<!-- Features Clinic Four -->
		<section class="features-clinic-four">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<div class="section-header-four text-center aos" data-aos="fade-up">
							<h2 class="title-four">Available Features <span class="color-primary">in Our Clinic</span></h2>
							<p class="sub-title color-grey">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-md-12">
						<div class="clinic-big-img aos" data-aos="fade-up">
							<img src="../../../../../assets/img/clinic/clinic-big-img.png" alt="" class="img-fluid">
						</div>
					</div>
					<div class="col-lg-6 col-md-12">
						<div class="features-clinic-slider-four slider" data-aos="fade-up">
							<div class="item featurestyle">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-01.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Medical</p>
									</div>
								</div>
							</div>
							<div class="item featurestyle">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-02.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Patient Ward</p>
									</div>
								</div>
							</div>
							<div class="item featurestyle">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-03.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Operation</p>
									</div>
								</div>
							</div>
							<div class="item featurestyle">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-04.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Laboratory</p>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 d-flex justify-content-between align-items-center">
								<div class="owl-nav slide-nav-8 nav-control"></div>
								<div class="float-end">
									<div class="text-end">
										<a href="javascript:void(0);" class="btn btn-one">View More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /Features Clinic Four -->
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
		if($('.features-clinic-slider-four').length > 0) {
		$('.features-clinic-slider-four').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 2
					  }
			},
			{
				breakpoint: 800,
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
			},
			{
				breakpoint: 1300,
					settings: {
						slidesToShow: 3
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