<template>

    <div class="home-five" style="font-family: 'Inter', sans-serif !important;font-size: 16px !important;font-weight: 500 !important;color: #3E5463 !important;">

    <!-- Main Wrapper -->

		<div class="main-wrapper">
        
        <layout-indexfourteenheader></layout-indexfourteenheader>

            <homeindexfourteen></homeindexfourteen>

			<lookingindexfourteen></lookingindexfourteen>

			<clinicindexfourteen></clinicindexfourteen>

			<doctorindexfourteen></doctorindexfourteen>

			<!-- Doctor Section Five -->
			<section class="doctor-section-five">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
							<div class="doctor-grid-five w-100">
								<div class="doctor-details">
									<h4>ARE YOU A DOCTOR?</h4>
									<p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
									<router-link to="/booking" class="btn">Book Now</router-link>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 doctor-img2 aos" data-aos="fade-up">
							<div class="doctor-grid-five w-100">
								<img src="../../../../../assets/img/doctors/doctor-img2.png" alt="" class="img-fluid">
							</div>
						</div>
						<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
							<div class="doctor-grid-five w-100">
								<div class="doctor-details doctor-details-one">
									<h4>ARE YOU A PATIENT?</h4>
									<p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
									<router-link to="/booking" class="btn">Book Now</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- Doctor Section Five -->

			<browseindexfourteen></browseindexfourteen>

			<bestindexfourteen></bestindexfourteen>

			<clinicsecindexfourteen></clinicsecindexfourteen>

			<newindexfourteen></newindexfourteen>

			<blogindexfourteen></blogindexfourteen>

        <layout-indexfourteenfooter></layout-indexfourteenfooter>

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
	},
    data() {
        return {

        }
    }
}
</script>