<template>
<div class="col-xl-4 col-md-6">
							<div class="card">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Top Countries</h5>
										</div>
										<div class="col-auto">
											<vue-select class="weekstyle" :options="patient" />
										</div>
									</div>
								</div>
								<div class="card-body">	
									<div class="country-item">	
										<div class="con-name">
											<div class="flag-box">
												<img class="rounded-circle" src="../../../../assets/admin_img/flags/flag-01.png" alt="User Image">
											</div>
											<div class="flag-name">
												<p class="user-name"><span>United States</span> <span class="d-block text-muted">800 Patients</span></p>
											</div>
										</div>
										<div class="con-revenue">
											<p class="text-muted">Revenue</p>
											<h6>$6000K</h6>
										</div>
									</div>
									<div class="country-item">	
										<div class="con-name">
											<div class="flag-box">
												<img class="rounded-circle" src="../../../../assets/admin_img/flags/flag-02.png" alt="User Image">
											</div>
											<div class="flag-name">
												<p class="user-name"><span>United Kingdom</span> <span class="d-block text-muted">450 Patients</span></p>
											</div>
										</div>
										<div class="con-revenue">
											<p class="text-muted">Revenue</p>
											<h6>$4000K</h6>
										</div>
									</div>
									<div class="country-item">	
										<div class="con-name">
											<div class="flag-box">
												<img class="rounded-circle" src="../../../../assets/admin_img/flags/flag-03.png" alt="User Image">
											</div>
											<div class="flag-name">
												<p class="user-name"><span>UAE</span> <span class="d-block text-muted">300 Patients</span></p>
											</div>
										</div>
										<div class="con-revenue">
											<p class="text-muted">Revenue</p>
											<h6>$3000K</h6>
										</div>
									</div>
									<div class="country-item">	
										<div class="con-name">
											<div class="flag-box">
												<img class="rounded-circle" src="../../../../assets/admin_img/flags/flag-04.png" alt="User Image">
											</div>
											<div class="flag-name">
												<p class="user-name"><span>India</span> <span class="d-block text-muted">300 Patients</span></p>
											</div>
										</div>
										<div class="con-revenue">
											<p class="text-muted">Revenue</p>
											<h6>$3000K</h6>
										</div>
									</div>
									<div class="country-item">	
										<div class="con-name">
											<div class="flag-box">
												<img class="rounded-circle" src="../../../../assets/admin_img/flags/flag-05.png" alt="User Image">
											</div>
											<div class="flag-name">
												<p class="user-name"><span>UAE</span> <span class="d-block text-muted">300 Patients</span></p>
											</div>
										</div>
										<div class="con-revenue">
											<p class="text-muted">Revenue</p>
											<h6>$3000K</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
</template>
<script>
	import ApexCharts from 'apexcharts'
	import { ref } from "vue";
	
	export default {
		components: {
		},
		data() {
			return {
				patient: ["Patients", "Doctors"],
			}
		},
		
		mounted() {
		}
	}
	</script>