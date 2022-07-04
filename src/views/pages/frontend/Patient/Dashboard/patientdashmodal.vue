<template>
<!-- Graph One-->
		<div class="modal fade custom-modal show" id="graph1">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">BMI Status</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
					<apexchart
      width="760"
      height="350"
      type="line"
      :options="chartOptions3"
      :series="series1"
    ></apexchart>
						
					</div>
				</div>
			</div>
		</div>
		<!-- /Graph One-->

		<!-- Graph Two-->
		<div class="modal fade custom-modal show" id="graph2">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Heart Rate Status</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<apexchart
      width="760"
      height="350"
      type="line"
      :options="chartOptions2"
      :series="series2"
    ></apexchart>
					</div>
				</div>
			</div>
		</div>
		<!-- /Graph Two-->

		<!-- Graph Two-->
		<div class="modal fade custom-modal show" id="graph3">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">FBC Status</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
								<apexchart
      width="760"
      height="350"
      type="bar"
      :options="chartOptions"
      :series="series3"
    ></apexchart>
					</div>
				</div>
			</div>
		</div>
		<!-- /Graph Two-->

		<!-- Graph Two-->
		<div class="modal fade custom-modal show" id="graph4">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Weight Status</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<apexchart
      width="760"
      height="350"
      type="line"
      :options="chartOptions1"
      :series="series4"
    ></apexchart>
					</div>
				</div>
			</div>
		</div>
		<!-- /Graph Two-->
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
	components: {
    apexchart: VueApexCharts,
  },
	  mounted() {
   },
   data: function() {
    return {    
      chartOptions: {
      	plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#0de0fe',
                colorTo: '#0de0fe',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
        series3: [{
          name: 'FBC',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        chartOptions1: {
        	stroke: {
          curve: 'stepline',
        },
        dataLabels: {
          enabled: false
        },
        title: {
          align: 'left'
        },
        markers: {
          hover: {
            sizeOffset: 4
          }
        }
     
      },
      series4: [{
          name: 'Weight',
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }],

         chartOptions2: {

         	stroke: {
          width: 7,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
          tickAmount: 10,
        },
        title: {
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#0de0fe'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        markers: {
          size: 4,
          colors: ["#15558d"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          }
        },
        yaxis: {
          min: -10,
          max: 40,
          title: {
          },
        }
        	
     
          },
     series2: [{
          name: 'HeartRate',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
          chartOptions3: {
            zoom: {
            enabled: false
          },
             dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        	
     
          },
     series1: [{
            name: "BMI",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
    };
  },
}
</script>