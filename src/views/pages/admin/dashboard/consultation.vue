<template>
<div class="col-xl-4 col-md-6">
							<div class="row">
								<div class="col-md-6 pe-md-0">
									<div class="card cons-card mb-3">
										<h6>Consultaion Today</h6>
										<div id="income-month"></div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card pat-card mb-1">
										<div class="card-body">
											<p>New Patients</p>
											<h3>45</h3>
											<p class="trade-level mb-0"><span class="text-danger me-1"><i class="fas fa-caret-down me-1"></i>1.15%</span> last week</p>
										</div>
									</div>
									<div class="card pat-card mb-3">
										<div class="card-body">
											<p>Old Patients</p>
											<h3>45</h3>
											<p class="trade-level mb-0"><span class="text-success me-1"><i class="fas fa-caret-up me-1"></i>9.5%</span> last week</p>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="card">
										<div class="card-header">
											<div class="row align-items-center">
												<div class="col">
													<h5 class="card-title">Appointment Status</h5>
												</div>

												<div class="col-auto">
													<vue-select class="weekstyle" :options="week" />
												</div>
											</div>
										</div>
										<div class="card-body">	
											<div class="row">
												<div class="col-md-6">
													<div id="status_chart"></div>
												</div>
												<div class="col-md-6">
													<div class="app-status">
														<p>Completed Appointment</p>
														<h6 class="text-primary">650</h6>
														<p>Cancelled Appointment</p>
														<h6>250</h6>												
													</div>
												</div>
											</div>
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

				week: ["This Week", "This Month"],
				
				noofstudentsOptions : {
					chart: {
			height: 165,
			type: 'bar',
			stacked: true,
			toolbar: {
			  show: false,
			}
		},
		colors: ['#0CE0FF', '#1B5A90', '#EEF1FE'],
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					position: 'bottom',
					offsetX: -10,
					offsetY: 0
				}
			}
		}],
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '30px',			
			},
		},
		grid: {
			padding: {
				left: -15,
				right: 0
			  },
			 show: false,
		},
		dataLabels: {
			enabled: false,
		},
		series: [{
			name: 'Scheduled Appointment',
			data: [1.6, 1.6, 1.5]
		},{
			name: 'Doctors Available Now',
			data: [4, 2, 1.8]
		},{
			name: 'Home Visits',
			data: [9, 4, 6]
		}],
		xaxis: {
			categories: ['09:00', '10:00', '11:00'],
			axisBorder: {
				show: true,
			},
		}, 
		legend: {
			show: false,
		},
		fill: {
			opacity: 1
		},
		yaxis: {
			show: false,
			labels: {
      offsetX: 0,
			}
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "€ " + val + "k"
				}
			}
		}
				},

				noofteacher : {
					colors: ['#0CE0FF', '#1B5A90'],
			series: [650, 250],
			 plotOptions: {
				pie: {
				  donut: {
						  size: '60%',
					labels: {
					  show: true,
					   total: {
			  show: false,
					   },
					},
				  },
				},
			 },
			  stroke: {
				lineCap: "round",
			  },
			chart: {
				fontFamily: 'Poppins, sans-serif',
				height: 194,
				type: 'donut',
			},
			labels: ['Completed', 'Cancelled'],
			legend: {show: true,
			position: 'bottom',
				horizontalAlign: 'left',},
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
				}
			}
		},
		
		mounted() {
			let barChart = new ApexCharts(
			document.querySelector("#income-month"),
			this.noofstudentsOptions
		);
			barChart.render();

			let barChart1 = new ApexCharts(
			document.querySelector("#status_chart"),
			this.noofteacher
		);
			barChart1.render();
		}
	}
	</script>