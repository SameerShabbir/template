<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid content-wrap">
					
					<appointmentreportchart></appointmentreportchart>
					
					<!-- Upcoming Appointments -->
					<div class="row">
						<div class="col-sm-12">
							<div class="app-listing">
								<div class="multipleSelection">
									<div class="selectBox">
										<p class="mb-0"><i class="feather-filter me-1"></i> Filter</p>
										<span class="down-icon"><i class="feather-chevron-down"></i></span>
									</div>						  
									<div id="checkBoxes">
										<form>
											<div class="form-custom">
												<input type="text" class="form-control bg-grey" placeholder="Search by Patient">
												<i class="fas fa-search"></i>
											</div>
											<div class="form-custom">
												<input type="text" class="form-control bg-grey" placeholder="Search by Doctor">
												<i class="fas fa-search"></i>
											</div>
											<p class="lab-title">Consultation Type</p>
											<label class="custom_check w-100">
												<input type="checkbox" name="year">
												<span class="checkmark"></span> Video Call
											</label>
											<label class="custom_check w-100">
												<input type="checkbox" name="year">
												<span class="checkmark"></span> Audio Call
											</label>
											<label class="custom_check w-100">
												<input type="checkbox" name="year">
												<span class="checkmark"></span> Chat
											</label>
                                            <router-link to="/admin/appointment-report">
											<button type="submit" class="btn w-100 btn-primary">Apply</button>
                                            </router-link>
										</form>
									</div>
								</div>
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
												<p class="lab-title">Sort By</p>
												<label class="custom_radio w-100">
													<input type="radio" name="sort">
													<span class="checkmark"></span> Ascending
												</label>
												<label class="custom_radio w-100">
													<input type="radio" name="sort">
													<span class="checkmark"></span> Descending
												</label>
                                                <router-link to="/admin/appointment-report">
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
												<tr v-for="item in appointmentreport" :key="item.id">
													<td>{{item.no}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" :src="loadImg(item.img)" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">{{item.name}}</span> <span class="text-muted">{{item.year}}</span></router-link>
														</h2>
													</td>
													<td>
														<h2 class="table-avatar">
															<a class="avatar-pos" href="javascript:void(0);"><img class="avatar avatar-img" :src="loadImg1(item.img1)" alt="User Image"></a>
															<router-link to="/admin/profile" class="user-name"><span class="text-muted">{{item.name1}}</span> <span class="tab-subtext">{{item.name2}}</span></router-link>
														</h2>
													</td>
													<td><span class="disease-name">{{item.disease}}</span></td>
													<td class="status">
                                                        <span>{{item.schedule}}</span> 
                                                        <a href="javascript:void(0);" class="d-block text-primary mt-2">
															<span class="d-flex align-items-center"><i class="feather-video me-2"></i> {{item.call}}</span>
														</a>
                                                    </td>
													<td><span class="user-name">{{item.date}} </span><span class="d-block">{{item.date1}}</span></td>
													<td>{{item.amount}}</td>
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
    import appointmentreport from '../../../../../assets/json/admin/appointmentreport.json';
    import util from '../../../../../assets/utils/util'
    const images = require.context('../../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
	import Vue from 'vue'
	export default {
	  data() {
	  return {
      appointmentreport: appointmentreport
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
            loadImg1(img1Path) {
                return images1('./' + img1Path).default
            },
            
        },
	}
  </Script>
  