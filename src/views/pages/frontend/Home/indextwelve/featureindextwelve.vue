<template>
<!-- Features Clinic -->
		<section class="features-clinic">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="header-three aos" data-aos="fade-up">
							<h2>Available Features in Our Clinic</h2>
							<p>Meet our Experts & Book Online</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 aos" data-aos="fade-up">
						<div class="features-clinic-slider slider">
							<div class="item bestdoctorsize">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-01.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Medical</p>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-02.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Patient Ward</p>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-03.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Operation</p>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-04.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Laboratory</p>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-02.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Patient Ward</p>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize">
								<div class="features-clinic-grid">
									<div class="features-clinic-img">
										<img src="../../../../../assets/img/clinic/features-clinic-03.jpg" alt="" class="img-fluid">
									</div>
									<div class="feature-clinic-overlay">
										<p>Operation</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 d-flex justify-content-between align-items-center">
						<div class="owl-nav slide-nav-6 nav-control"></div>
						<div class="float-end">
							<div class="text-end">
								<a href="javascript:void(0);" class="btn btn-one">View More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /Features Clinic -->
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
		if($('.features-clinic-slider').length > 0) {
		$('.features-clinic-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
					  }
			},
			{
				breakpoint: 800,
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
			},
			{
				breakpoint: 1300,
					settings: {
						slidesToShow: 4
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