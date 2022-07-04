<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid content-wrap">
					
					<invoicereportchart></invoicereportchart>
					
					<!-- Invoice Report -->
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
                                                <router-link to="/admin/invoice-report">
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
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Ratings</h5>
										</div>
										<div class="col-auto d-flex">
											<div class="form-custom me-2">
												<div id="tableSearch"  class="dataTables_wrapper"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-body p-0">				
									<div class="table-responsive">									
										<table class="datatable table table-borderless hover-table" id="data-table">
											<thead class="thead-light">
												<tr>
												   <th>ID</th>
												   <th>Invoice Number</th>
												   <th>Patient</th>
												   <th>Created Date</th>
												   <th>Total Amount</th>
												   <th></th>
												   <th></th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in invoicereport1" :key="item.id">
													<td>{{item.idno}}</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">{{item.invoiceno}}</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" :src="loadImg(item.img)" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">{{item.name}}</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">{{item.date}} </span><span class="d-block">{{item.date1}}</span></td>
													<td>{{item.amt}}</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> {{item.status}}</span></td>
													<td class="text-end">
														<div class="actions">
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
					
							<div id="tablepagination"  class="dataTables_wrapper"></div>
			
						</div>
					</div>
					<!-- /Invoice Report -->
				</div>
			</div>
			<!-- /Page Wrapper -->
			
			<!-- Modal -->
			<div class="modal fade contentmodal" id="transaction" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content doctor-profile">
						<div class="modal-header border-bottom-0 justify-content-end pb-0">
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body pt-0">
							<div class="rating-wrapper">
								<h4 class="text-center mb-4">Transaction Details</h4>
								<div class="row">
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Consultation ID </h6>
											<p>#454445</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Paid On </h6>
											<p>14 Nov 2022 05:30 PM</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Payment Mode</h6>
											<p>Online</p>
										</div>
									</div>  
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Consultation Fees</h6>
											<p>$300.00</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Tax Fees</h6>
											<p>$30.00</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Total Fees</h6>
											<p>$300.00</p>
										</div>
									</div>  									
								</div> 
								<div class="submit-section">
									<a href="javascript:void(0);" class="btn btn-primary btn-download">Download Invoice</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Modal -->
			
			<!-- Modal -->
			<div class="modal fade contentmodal" id="deleteModal" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content doctor-profile">
						<div class="modal-header border-bottom-0 justify-content-end">
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body">
							<div class="delete-wrap text-center">
								<div class="del-icon"><i class="feather-x-circle"></i></div>
								<h2>Sure you Want to delete</h2>
								<p>“Transaction”</p>
								<div class="submit-section">
									<router-link to="/admin/transaction" class="btn btn-success me-2">Yes</router-link>
									<a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Modal -->
          
        </div>
</template>
<script>
    import invoicereport1 from '../../../../../assets/json/admin/invoicereport1.json';
    import util from '../../../../../assets/utils/util'
    const images = require.context('../../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
	import Vue from 'vue'
	export default {
	  data() {
	  return {
        invoicereport1: invoicereport1
	  }
	  },
	  components: {
	 
	  },
	  mounted() {
        util.datatable('#data-table')
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
  