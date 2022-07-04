<template>
<!-- Total Invoice -->
					<div class="row">
						<div class="col-md-12">							
							<div class="card">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Invoice Report</h5>
										</div>
										<div class="col-auto">
											<div class="bookingrange btn btn-white btn-sm">
												<div class="cal-ico">
													<i class="feather-calendar mr-1"></i>
													<span>Select Date</span>
												</div>
												<div class="ico">
													<i class="fas fa-chevron-left"></i>
													<i class="fas fa-chevron-right"></i>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-body">			
									<div class="income-rev float-none mb-0">Todays Total Invoice : <span>45</span></div>
									<div id="totsales_chart"></div>
								</div>
							</div>
						</div>						
					</div>
					<!-- /Total Invoice -->
</template>
<script>
	import ApexCharts from 'apexcharts'
	import { ref } from "vue";
	
	export default {
		components: {
		},
		data() {
			return {
				noofstudentsOptions : {
				colors: ['#0CE0FF'],
			series: [
				{
				name: "Video Call",
				type: "column",
				data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3]
				}
			],
			chart: {
				type: 'bar',
				fontFamily: 'Poppins, sans-serif',
				height: 360,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '30%',
				},
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				show: false,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
			 },
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '25/11/2021', '25/11/2021', '27/11/2021', '28/11/2021'],
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "k"
					}
				},
				axisBorder: {
					show: true,
				},
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val + "k"
					}
				}
			}
				}
			}
		},
		
		mounted() {
			let barChart = new ApexCharts(
			document.querySelector("#totsales_chart"),
			this.noofstudentsOptions
		);
			barChart.render();
		
		}
	}
	</script>
	