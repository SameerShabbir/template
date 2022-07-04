<template>
<!-- Income Report -->
						<div class="col-xl-5 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Status</h5>
										</div>
									</div>
								</div>
								<div class="card-body">
									<div id="apexcharts-area"></div>
								</div>
							</div>
						</div>
						<!-- /Income Report -->
</template>
<script>
	import ApexCharts from 'apexcharts'
	import { ref } from "vue";
	
	
	export default {
		components: {
		},
		data() {
			return {
				revenueOptions : {
					series: [{
					name: "Doctors",
					data: [0, 1, 5, 3, 2]
				},
				{
					name: "Patients",
					data: [0, 3, 5, 2, 3]
				}
			],
		colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
          chart: {
          height: 300,
          type: 'area',
		  toolbar: {
				show: false
			},
          zoom: {
            enabled: false
          }
        },
		markers: {
			size: 3,
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
		  width: 1,
        },
		legend: {
			position: 'top',
			horizontalAlign: 'right',
		 },
        grid: {
          show: false,
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
        xaxis: {
			categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021'],
			}
				},
			}
		},
		mounted() {
				let areaChart = new ApexCharts(
			document.querySelector("#apexcharts-area"),
			this.revenueOptions
		);
			areaChart.render();
		}
	}
	</script>