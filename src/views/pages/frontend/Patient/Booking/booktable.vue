<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadcrumb10></breadcrumb10>
        
		<!-- Page Content -->
			<div class="content">
				<div class="container">
				
					<div class="row">
						<div class="col-12">
						
							<div class="card">
								<div class="card-body">
									<div class="booking-doc-info">
										<router-link to="/doctor-profile" class="booking-doc-img">
											<img src="../../../../../assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
										</router-link>
										<div class="booking-info">
											<h4><router-link to="/doctor-profile">Dr. Darren Elder</router-link></h4>
											<div class="rating mapgridrating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">35</span>
											</div>
											<p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</p>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12 col-sm-4 col-md-6">
									<h4 class="mb-1">11 November 2019</h4>
									<p class="text-muted">Monday</p>
								</div>
								<div class="col-12 col-sm-8 col-md-6 text-sm-end">
									<div class="bookingrange btn btn-white btn-sm mb-3">
										<i class="far fa-calendar-alt me-2"></i>
										<span></span>
										<i class="fas fa-chevron-down ms-2"></i>
									</div>
								</div>
                            </div>
							
							<schedulewidget></schedulewidget>
							
							<!-- Submit Section -->
							<div class="submit-section proceed-btn text-end">
								<router-link to="/checkout" class="btn btn-primary submit-btn">Proceed to Pay</router-link>
							</div>
							<!-- /Submit Section -->
							
						</div>
					</div>
				</div>

			</div>		
			<!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
</template>

<script>
import 'moment'
export default {
	mounted() {
	if($('.bookingrange').length > 0) {
		var start = moment().subtract(6, 'days');
		var end = moment();

		function booking_range(start, end) {
			$('.bookingrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
		}

		$('.bookingrange').daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}
		}, booking_range);

		booking_range(start, end);
	}
	},
    data() {
        return {

        }
    }
}
</script>