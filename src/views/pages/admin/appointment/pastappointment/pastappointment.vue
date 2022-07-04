<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<pastmainheader></pastmainheader>
					
					<!-- Past Appointments -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<pastappointmentheader></pastappointmentheader>
								<div class="card-body p-0">				
									<div class="table-responsive appointments">									
										<table class="datatable table table-borderless hover-table" id="data-tables">
											<thead class="thead-light">
												<tr>
												   <th>ID</th>
												   <th>Patient</th>
												   <th>Doctor</th>
												   <th>Disease</th>
												   <th>Appointment Date & Time</th>
												   <th>Amount</th>
												   <th>Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Bess Twishes</span> <span class="text-muted">Male, 40 Years Old</span></router-link>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<router-link class="avatar-pos" to="/admin/profile"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile" class="user-name"><span class="text-muted">Dr. Rayan</span> <span class="tab-subtext">Gyanoclogist</span></router-link>
														</h2>
													</td>
													<td><span class="disease-name">Allergies & Asthma</span></td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$300.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Completed</span></td>
												</tr>
												<tr>
													<td>#8774</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-04.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Bess Twishes</span> <span class="text-muted">Female,30 Years Old</span></router-link>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Monroe</span> <span class="tab-subtext">Hair Specialities</span></a>
														</h2>
													</td>
													<td><span class="disease-name">Sleep Problem</span></td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$300.00</td>
													<td><span class="badge bg-badge-grey text-danger"><i class="fas fa-circle me-1"></i> Cancelled</span></td>
												</tr>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Abdul Aziz Lazis</span> <span class="text-muted">Male, 25 Years Old</span></router-link>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></a>
															<router-link to="/admin/profile" class="user-name"><span class="text-muted">Dr. Lester</span> <span class="tab-subtext">Orthopaedics</span></router-link>
														</h2>
													</td>
													<td><span class="disease-name">Tooth Pain</span></td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$300.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Completed</span></td>
												</tr>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Alex Siauw</span> <span class="text-muted">Male, 29 Years Old</span></router-link>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<router-link class="empty-user" to="/admin/profile"><i class="feather-user"></i> </router-link>
															<router-link to="/admin/profile" class="user-name"><span class="text-muted">Dr. Clint</span> <span class="tab-subtext">Neurology</span></router-link>
														</h2>
													</td>
													<td><span class="disease-name">Pain  on knee</span></td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$300.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Completed</span></td>
												</tr>
												<tr>
													<td>#5644</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Gobbs Siauw</span> <span class="text-muted">Male, 40 Years Old</span></router-link>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-12.jpg" alt="User Image"></a>
															<router-link to="/admin/profile" class="user-name"><span class="text-muted">Dr. John</span> <span class="tab-subtext">Gyanoclogist</span></router-link>
														</h2>
													</td>
													<td><span class="disease-name">Allergies & Asthma</span></td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$300.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Completed</span></td>
												</tr>
												<tr>
													<td>#2324</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-11.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Deborah</span> <span class="text-muted">Female,30 Years Old</span></router-link>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" src="../../../../../assets/admin_img/profiles/avatar-06.jpg" alt="User Image"></a>
															<router-link to="/admin/profile" class="user-name"><span class="text-muted">Dr. Linda</span> <span class="tab-subtext">Hair Specialities</span></router-link>
														</h2>
													</td>
													<td><span class="disease-name">Sleep Problem</span></td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$300.00</td>
													<td><span class="badge bg-badge-grey text-danger"><i class="fas fa-circle me-1"></i> Cancelled</span></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							
							<div id="tablepagination"  class="dataTables_wrapper"></div>
						</div>
					</div>
					
					<!-- /Past Appointments -->
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
	import Vue from 'vue'
	import util from '../../../../../assets/utils/util'
	export default {
	  data() {
	  return {
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
	}
  </Script>
  