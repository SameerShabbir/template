<template>
<!-- Latest Blog Section -->
		<section class="latest-blog-section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="header-three aos" data-aos="fade-up">
							<h2>Our Latest Blogs</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 aos" data-aos="fade-up">
						<div class="latest-blog-slider slider">
							<div class="item bestdoctorsize1">
								<div class="latest-blog-grid">
									<div class="latest-blog-img">
										<router-link to="/blog-details">
											<img src="../../../../../assets/img/blog/blog-04.jpg" alt="" class="img-fluid">
										</router-link>
									</div>
									<div class="lastest-blog-info">
										<div class="lastest-blog-date">
											<h4>20 <span>Jan 2022</span></h4>
										</div>
										<h4 class="latest-blog-title">
											<router-link to="/blog-details">Doccure – Making your clinic painless visit?</router-link>
										</h4>
										<p>Urology</p>
										<div class="lastest-post-author">
											<router-link to="/doctor-profile">
												<img src="../../../../../assets/img/doctors/doctor-thumb-01.jpg" alt="" class="me-2"> 
												<span>Dr. Ruby Perrin</span>
											</router-link>
										</div>
										<div class="lastest-blod-btn">
											<router-link to="/blog-details" class="btn btn-one">Read More</router-link>
										</div>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize1">
								<div class="latest-blog-grid">
									<div class="latest-blog-img">
										<router-link to="/blog-details">
											<img src="../../../../../assets/img/blog/blog-wrap-02.jpg" alt="" class="img-fluid">
										</router-link>
									</div>
									<div class="lastest-blog-info">
										<div class="lastest-blog-date">
											<h4>13 <span>Feb 2022</span></h4>
										</div>
										<h4 class="latest-blog-title">
											<router-link to="/blog-details">What are the benefits of Online Doctor Booking?</router-link>
										</h4>
										<p>Surgery</p>
										<div class="lastest-post-author">
											<router-link to="/doctor-profile">
												<img src="../../../../../assets/img/doctors/doctor-thumb-02.jpg" alt="" class="me-2"> 
												<span>Dr. Darren Elder</span>
											</router-link>
										</div>
										<div class="lastest-blod-btn">
											<router-link to="/blog-details" class="btn btn-one">Read More</router-link>
										</div>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize1">
								<div class="latest-blog-grid">
									<div class="latest-blog-img">
										<router-link to="/blog-details">
											<img src="../../../../../assets/img/blog/blog-wrap-03.jpg" alt="" class="img-fluid">
										</router-link>
									</div>
									<div class="lastest-blog-info">
										<div class="lastest-blog-date">
											<h4>05 <span>Mar 2022</span></h4>
										</div>
										<h4 class="latest-blog-title">
											<router-link to="/blog-details">Benefits of consulting with an Online Doctor</router-link>
										</h4>
										<p>Cardiology</p>
										<div class="lastest-post-author">
											<router-link to="/doctor-profile">
												<img src="../../../../../assets/img/doctors/doctor-thumb-03.jpg" alt="" class="me-2"> 
												<span>Dr. Deborah Angel</span>
											</router-link>
										</div>
										<div class="lastest-blod-btn">
											<router-link to="/blog-details" class="btn btn-one">Read More</router-link>
										</div>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize1">
								<div class="latest-blog-grid">
									<div class="latest-blog-img">
										<router-link to="/blog-details">
											<img src="../../../../../assets/img/blog/blog-04.jpg" alt="" class="img-fluid">
										</router-link>
									</div>
									<div class="lastest-blog-info">
										<div class="lastest-blog-date">
											<h4>20 <span>Jan 2022</span></h4>
										</div>
										<h4 class="latest-blog-title">
											<router-link to="/blog-details">Doccure – Making your clinic painless visit?</router-link>
										</h4>
										<p>Urology</p>
										<div class="lastest-post-author">
											<router-link to="/doctor-profile">
												<img src="../../../../../assets/img/doctors/doctor-thumb-01.jpg" alt="" class="me-2"> 
												<span>Dr. Ruby Perrin</span>
											</router-link>
										</div>
										<div class="lastest-blod-btn">
											<router-link to="/blog-details" class="btn btn-one">Read More</router-link>
										</div>
									</div>
								</div>
							</div>
							<div class="item bestdoctorsize1">
								<div class="latest-blog-grid">
									<div class="latest-blog-img">
										<router-link to="/blog-details">
											<img src="../../../../../assets/img/blog/blog-wrap-02.jpg" alt="" class="img-fluid">
										</router-link>
									</div>
									<div class="lastest-blog-info">
										<div class="lastest-blog-date">
											<h4>13 <span>Feb 2022</span></h4>
										</div>
										<h4 class="latest-blog-title">
											<router-link to="/blog-details">What are the benefits of Online Doctor Booking?</router-link>
										</h4>
										<p>Surgery</p>
										<div class="lastest-post-author">
											<router-link to="/doctor-profile">
												<img src="../../../../../assets/img/doctors/doctor-thumb-02.jpg" alt="" class="me-2"> 
												<span>Dr. Darren Elder</span>
											</router-link>
										</div>
										<div class="lastest-blod-btn">
											<router-link to="/blog-details" class="btn btn-one">Read More</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 d-flex justify-content-between align-items-center">
						<div class="owl-nav slide-nav-7 nav-control"></div>
						<div class="float-end">
							<div class="text-end">
								<router-link to="/blog-details" class="btn btn-one">View More</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Latest Blog Section -->
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
		if($('.latest-blog-slider').length > 0) {
		$('.latest-blog-slider').slick({
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