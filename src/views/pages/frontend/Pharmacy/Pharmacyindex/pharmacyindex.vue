<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<!-- Slider -->
		  	<section class="section full-slide-home">
				<div>
					<div class="slick-wrapper">
			    		<div class="slider-1">
					    	<!--slide-->
					    	<div class="col-12 d-flex">
						    	<div class="col-12 col-lg-6">
									<div class="slide-image">
										<span class="text-secondary text-uppercase d-block mb-3">Introducing Prime Doctors</span>
										<h2 class="mb-3">Hassle-free appoinments <br> with Prime Doctors</h2>
										<ul class="list-inline slide-ul">
											<li class="list-inline-item">Reasonable wait time</li>
											<li class="list-inline-item">Fixed Consultation Fee</li>
											<li class="list-inline-item">Consulation with the preferred doctor</li>
										</ul>
										<div class="d-inline-block">
											<router-link to="/booking" class="btn book-btn1" tabindex="0">Book Now</router-link>
										</div>
									</div>
						    	</div>
						    	<div class="col-12 col-lg-6 d-flex justify-content-center">
						    		<img src="../../../../../assets/img/doc-slide-1.png" alt="">
						    	</div>
					    	</div>
					    	<!--/slide-->

					    	<!--slide-->
					       <div class="col-12 d-flex">
						    	<div class="col-12 col-lg-6">
									<div class="slide-image">
										<span class="text-secondary text-uppercase d-block mb-3">Introducing Prime Doctors</span>
										<h2 class="mb-3">Hassle-free appoinments <br> with Prime Doctors</h2>
										<ul class="list-inline slide-ul">
											<li class="list-inline-item">Reasonable wait time</li>
											<li class="list-inline-item">Fixed Consultation Fee</li>
											<li class="list-inline-item">Consulation with the preferred doctor</li>
										</ul>
										<div class="d-inline-block">
											<router-link to="/booking" class="btn book-btn1" tabindex="0">Book Now</router-link>
										</div>
									</div>
						    	</div>
						    	<div class="col-6 col-12 col-lg-6 d-flex justify-content-center">
						    		<img src="../../../../../assets/img/doc-slide-1.png" alt="">
						    	</div>
					    	</div>
					    	<!--/slide-->
						</div>
					</div>
				</div>	
			</section>	 
			<!-- Slider -->

			<!-- Home Banner -->
			<section class="section-search-pharmacy">
				<div class="container-fluid">
					<div class="row justify-content-center">
						<div class="col-md-10">
							<div class="banner-wrapper2">
								<div class="search-box1">
									<form>
										<p class="mb-0 me-3" >Find a Pharmacy</p>
										<div class="form-group search-location1 postion-relative">

											<input type="text" class="form-control" placeholder="Enter your location / Pincode" style="padding-left:15px;">
											<span class="search-detect">Detect</span>
										</div>
										<router-link to="/pharmacy-search">
										<button type="submit" class="btn btn-primary search-btn"><i class="fas fa-search"></i> <span>Search</span></button>
                                        </router-link>
									</form>
								</div>
								<!-- /Search -->
								
							</div>
							
						</div>
					</div>
				</div>
			</section>
			<!-- /Home Banner -->
			
            <looking></looking>

			<specialities></specialities>
		  
			<book></book>
		   
		    <features></features>
		
        <layout-footer></layout-footer>

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
    if($('.slider-1').length > 0) {
	    $('.slider-1').slick();
	}
	},
    data() {
        return {

        }
    }
}
</script>