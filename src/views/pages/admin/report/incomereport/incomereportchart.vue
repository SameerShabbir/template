<template>
<div class="row">
						<div class="col-md-12">							
							<div class="card">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Income Report</h5>
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
									<div class="w-100">			
										<div class="income-rev">Total Revenue : <span>$451254K</span></div>
									</div>
									<div id="totincome-report"></div>
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
				revenueOptions : {
				series: [{
				name: "Video Call",
				data: [0, 2.5, 1, 3, 4, 2, 3, 2, 4]
			},
			{
				name: "Audio Call",
				data: [0, 2, 4, 4.3, 4, 2.5, 3.5, 2.5, 4, 3]
			},
			{
				name: "Chat",
				data: [0, 4, 4.5, 3.8, 4, 2, 3, 3.5, 4, 3]
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
					return val + "k"
				}
			},
			axisBorder: {
				show: true,
			},
		},
        xaxis: {
          categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021', '26/11/2021', '27/11/2021', '28/11/2021', '25/11/2021', '25/11/2021'],
			}
				},
			}
		},
		mounted() {
				let areaChart = new ApexCharts(
			document.querySelector("#totincome-report"),
			this.revenueOptions
		);
			areaChart.render();
		}
	}
	</script>