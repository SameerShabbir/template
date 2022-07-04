<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<appointmentheader></appointmentheader>
					
					<!-- Upcoming Appointments -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<appointmentheader1></appointmentheader1>
								<div class="card-body p-0">				
									<div class="table-responsive appointmenttable">									
										<table class="datatable table table-borderless hover-table" id="data-tables">
											<thead class="thead-light">
												<tr>
												   <th>ID</th>
												   <th>Patient</th>
												   <th>Doctor</th>
												   <th>Disease</th>
												   <th>Consultation type</th>
												   <th>Date & Time</th>
												   <th>Amount</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in appointment" :key="item.id">
													<td>{{item.idno}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" :src="loadImg(item.img)" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">{{item.name}}</span> <span class="text-muted">{{item.detail}}</span></router-link>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<router-link class="avatar-pos" to="/profile"><img class="avatar avatar-img" :src="loadImg1(item.img1)" alt="User Image"></router-link>
															<router-link to="/admin/profile" class="user-name"><span class="text-muted">{{item.name1}}</span> <span class="tab-subtext">{{item.specialist}}</span></router-link>
														</h2>
													</td>
													<td><span class="disease-name">{{item.test}}</span></td>
													<td class="status">
                                                        <span>{{item.duty}}</span> 
                                                        <a class="d-block text-primary mt-2">
															<span class="d-flex align-items-center"><i class="feather-video me-2"></i> {{item.call}}</span>
														</a>
                                                    </td>
													<td><span class="user-name">{{item.date}} </span><span class="d-block">{{item.date1}}</span></td>
													<td>{{item.amt}}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							
							<div id="tablepagination"  class="dataTables_wrapper"></div>
						</div>
					</div>
					<!-- /Upcoming Appointments -->
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
    import appointment from '../../../../../assets/json/admin/appointment.json';
	import util from '../../../../../assets/utils/util'
    const images = require.context('../../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
	import Vue from 'vue'
	export default {
	  data() {
	  return {
      appointment
	  }
	  },
	  components: {
	 
	  },
	  mounted() {
		  util.datatable('#data-tables')
		  // Date Range Picker
	if($('.bookingrange').length > 0) {
		var start = moment().subtract(6, 'days');
		var end = moment();

		function booking_range(start, end) {
			$('.bookingrange span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
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
	//Checkbox Select
	
	if($('.multipleSelection').length > 0) {
		var show = true;
		var checkboxes = document.getElementById("checkBoxes");
		$('.selectBox').on("click", function() {
			
			if (show) {
				checkboxes.style.display = "block";
				show = false;
			} else {
				checkboxes.style.display = "none";
				show = true;
			}
		});
		
	}

	//Checkbox Select
	
	if($('.SortBy').length > 0) {
		var show = true;
		var checkbox1 = document.getElementById("checkBox");
		$('.selectBoxes').on("click", function() {
			
			if (show) {
				checkbox1.style.display = "block";
				show = false;
			} else {
				checkbox1.style.display = "none";
				show = true;
			}
		});		
	}
	  },
      methods: {
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
            loadImg1(imgPath) {
                return images1('./' + imgPath).default
            },
            
        },
	}
  </Script>
  