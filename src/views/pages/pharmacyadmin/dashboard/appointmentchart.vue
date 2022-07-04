<template>
<!-- Appointments -->
						<div class="col-xl-7 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Revenue</h5>
										</div>
									</div>
								</div>
								<div class="card-body">			
									<div id="bar"></div>
								</div>
							</div>
						</div>
						<!-- /Appointments -->
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
					colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			series: [
				{
				name: "Gross revenue",
				type: "column",
				data: [15, 28, 5, 2, 32, 12, 30, 3, 2, 35, 15, 10]
				},
				{
				name: "Net revenue",
				type: "column",
				data: [10, 15, 2, 8, 20, 7, 15, 2, 3, 15, 8, 5]
				}
			],
			chart: {
				type: 'bar',
				fontFamily: 'Poppins, sans-serif',
				height: 350,
				toolbar: {
					show: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '60%',
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
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			},
			yaxis: {
				labels: {
					formatter: function (val) {
						return val + "0"
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
						return val + "0"
					}
				}
			}
				}
			}
		},
		
		mounted() {
			let barChart = new ApexCharts(
			document.querySelector("#bar"),
			this.noofstudentsOptions
		);
			barChart.render();
		
		}
	}
	</script>
	