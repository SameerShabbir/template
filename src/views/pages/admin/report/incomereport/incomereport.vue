<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid content-wrap">
					
					<!-- Appointments Report -->
					<incomereportchart></incomereportchart>
					<!-- /Appointments Report -->
					
					<!-- Upcoming Appointments -->
					<div class="row">
						<div class="col-sm-12">
							<div class="app-listing">
								<div class="custom-list">
									<div class="SortBy">
										<div class="selectBoxes order-by">
											<p class="mb-0"><img src="../../../../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
											<span class="down-icon"><i class="feather-chevron-down"></i></span>
										</div>						  
										<div id="checkBox">
											<form>
												<p class="lab-title">Order By </p>
												<label class="custom_radio w-100">
													<input type="radio" name="order">
													<span class="checkmark"></span> ID
												</label>
												<label class="custom_radio w-100">
													<input type="radio" name="order">
													<span class="checkmark"></span> Amount
												</label>
												<label class="custom_radio w-100">
													<input type="radio" name="order">
													<span class="checkmark"></span> Date
												</label>
												<label class="custom_radio w-100">
													<input type="radio" name="order">
													<span class="checkmark"></span> Number of Appointments
												</label>
												<p class="lab-title">Sort By</p>
												<label class="custom_radio w-100">
													<input type="radio" name="sort">
													<span class="checkmark"></span> Ascending
												</label>
												<label class="custom_radio w-100">
													<input type="radio" name="sort">
													<span class="checkmark"></span> Descending
												</label>
												<router-link to="/admin/income-report">
												<button type="submit" class="btn w-100 btn-primary">Apply</button>
											    </router-link>
											</form>
										</div>
									</div>
								</div>
								<div class="import-list">
									<a href="javascript:void(0);"><i class="feather-download"></i> Import</a>
								</div>
							</div>
							
							<div class="card">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Doctors</h5>
										</div>
									</div>
								</div>
								<div class="card-body p-0">				
									<div class="table-responsive appointmenttable">									
										<table class="datatable table table-borderless hover-table" id="data-tables">
											<thead class="thead-light">
												<tr>
												   <th>ID</th>
												   <th>Doctor</th>
												   <th>Specialities</th>
												   <th>Member Since</th>
												   <th>Number of Appointments</th>
												   <th>Total Income</th>
												   <th>Account Status</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in invoicereport" :key="item.id">
													<td>{{item.idno}}</td>
													<td>
														<h2 class="table-avatar">
															<a class="avatar-pos" href="javascript:void(0);" data-bs-target="#doctorlist" data-bs-toggle="modal"><img class="avatar avatar-img" :src="loadImg(item.img)" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-target="#doctorlist" data-bs-toggle="modal" class="user-name">{{item.name}}</a>
														</h2>
													</td>
													<td>{{item.specialist}}</td>
													<td><span class="user-name">{{item.date}} </span><span class="d-block">{{item.date1}}</span></td>
													<td>{{item.amt}}</td>
													<td>{{item.rate}}</td>
													<td>
														<label class="toggle-switch" for="status1">
															<input type="checkbox" class="toggle-switch-input" id="status1">
															<span class="toggle-switch-label">
																<span class="toggle-switch-indicator"></span>
															</span>
														</label>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div id="tablepagination"  class="dataTables_wrapper"></div>
			
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
    import invoicereport from '../../../../../assets/json/admin/invoicereport.json';
    import util from '../../../../../assets/utils/util'
    const images = require.context('../../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
	import Vue from 'vue'
	export default {
	  data() {
	  return {
        invoicereport: invoicereport
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
            }
            
        },
	}
  </Script>
  