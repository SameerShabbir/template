<template>

    <div class="home-three" style="font-family: 'Montserrat', sans-serif !important;
    font-size: 16px;
    font-weight: 500;
    color: #3E5463;">

    <!-- Main Wrapper -->

		<div class="main-wrapper">
        
        <layout-indextwelveheader></layout-indextwelveheader>

         <!-- Home Banner -->
		<section class="home-banner-three">
			<div class="owl-carousel home-three-slider owl-theme">
				<div class="item">
					<img src="../../../../../assets/img/banner-4.jpg" class="img-fluid" alt="">
				</div>
				<div class="item">
					<img src="../../../../../assets/img/banner-4.jpg" class="img-fluid" alt="">
				</div>
				<div class="item">
					<img src="../../../../../assets/img/banner-4.jpg" class="img-fluid" alt="">
				</div>
			</div>
			<div class="banner-wrapper-three">
				<div class="container">
					<div class="row justify-content-between align-items-center">
						<div class="col-lg-6 col-md-12" >
							<div class="banner-wrapper doc-form d-lg-block d-md-none banner-wrapper-left">
								<div class="app-form">
									<div class="banner-three-content">
										<h2>We Provide Solution</h2>
										<h2><span>To stressless Life</span></h2>
										<p>People who are more perfectionist are most likely to be depressed, Because they stress themselves out so much.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-12">
							<div class="banner-wrapper doc-form banner-wrapper-right">
								<div class="app-form app-form-one">
									<form action="#" class="doctor-form">
										<div class="row">
											<div class="col-md-12 col-lg-12">
												<div class="form-group">
													<label>Location</label>
													<input type="text" class="form-control" value="">
												</div>
											</div>
											<div class="col-md-6 col-lg-4">
												<div class="form-group">
													<label>Gender</label>
													<vue-select :options="gender" />
												</div>
											</div>
											<div class="col-md-6 col-lg-8">
												<div class="form-group">
													<label>Department</label>
													<vue-select :options="department" />
												</div>
											</div>
											<div class="col-md-12 col-lg-12">
												<router-link to="/search" class="btn btn-one w-100">Search</router-link>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /Home Banner -->

		<lookingindextwelve></lookingindextwelve>

		<specialiyindextwelve></specialiyindextwelve>

		<doctorindextwelve></doctorindextwelve>

		<doctorsecindextwelve></doctorsecindextwelve>

		<featureindextwelve></featureindextwelve>

		<latestindextwelve></latestindextwelve>

		<newindextwelve></newindextwelve>

        <layout-indextwelvefooter></layout-indextwelvefooter>

        </div>

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
	if($('.home-three-slider').length > 0) {
    $('.home-three-slider').slick({
        dots: true,
        autoplay:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
                settings: {
                    slidesToShow: 1
                  }
        },
        {
            breakpoint: 800,
                settings: {
                    slidesToShow: 1
                  }
        },
        {
            breakpoint: 776,
                settings: {
                    slidesToShow: 1
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
		gender: ["Male", "Female"],
		department: ["Surgen*", "Cardiologist", "Gynacologist"]
        }
    }
}
</script>