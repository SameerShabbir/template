<template>
<div class="row">
						<!-- Appointments -->
						<div class="col-xl-7 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Appointments</h5>
										</div>
										<div class="col-auto d-flex">
											<vue-select class="weekstyle" :options="year" />
											<div class="ms-2">
												<vue-select class="weekstyle" :options="type" />
											</div>
										</div>
									</div>
								</div>
								<div class="card-body">			
									<div id="sales_chart"></div>
								</div>
							</div>
						</div>
						<!-- /Appointments -->
						
						<!-- Income Report -->
						<div class="col-xl-5 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Income Report</h5>
										</div>
										<div class="col-auto d-flex">
											<vue-select class="weekstyle" :options="monthly" />
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="text-end w-100">
										<div class="income-rev">Total Revenue : <span>$451254K</span></div>
									</div>
									<div id="totincome-report"></div>
								</div>
							</div>
						</div>
						<!-- /Income Report -->
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
				year: ["2022", "2022"],
				type: ["Select Type", "Video"],
				monthly: ["Monthly", "Weekly"],
				
				noofstudentsOptions : {
					colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
			series: [
				{
				name: "Video Call",
				type: "column",
				data: [4, 2.8, 5, 2, 3.2, 1.2, 2, 3, 2, 3.5, 5, 2]
				},
				{
				name: "Audio call",
				type: "column",
				data: [3, 3, 2, 3, 1.5, 1, 3, 2, 3, 1.5, 2, 3]
				},
				{
					name: "Chat",
					type: "column",
					data: [4.5, 3.8, 2.5, 3, 4.5, 3, 4.5, 3, 4, 5, 1.5, 2]
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
				},
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
			let barChart = new ApexCharts(
			document.querySelector("#sales_chart"),
			this.noofstudentsOptions
		);
			barChart.render();
			let areaChart = new ApexCharts(
			document.querySelector("#totincome-report"),
			this.revenueOptions
		);
			areaChart.render();
			
		
		}
	}
	</script>