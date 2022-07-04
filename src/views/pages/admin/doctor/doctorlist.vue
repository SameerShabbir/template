<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col-md-12 d-flex justify-content-end">
								<div class="doc-badge me-3">Doctors <span class="ms-1">48</span></div>
								<div class="SortBy">
									<div class="selectBoxes order-by">
										<p class="mb-0"><img src="../../../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
										<span class="down-icon"><i class="feather-chevron-down"></i></span>
									</div>						  
									<div id="checkBox">
										<form>
											<p class="lab-title">Specialities</p>
											<label class="custom_radio w-100">
												<input type="radio" name="year">
												<span class="checkmark"></span> Number of Appointment
											</label>
											<label class="custom_radio w-100">
												<input type="radio" name="year">
												<span class="checkmark"></span> Total Income
											</label>
											<label class="custom_radio w-100 mb-4">
												<input type="radio" name="year">
												<span class="checkmark"></span> Ratings
											</label>
											<p class="lab-title">Sort By</p>
											<label class="custom_radio w-100">
												<input type="radio" name="sort">
												<span class="checkmark"></span> Ascending
											</label>
											<label class="custom_radio w-100 mb-4">
												<input type="radio" name="sort">
												<span class="checkmark"></span> Descending
											</label>
                                            <router-link to="/admin/doctor-list">
											<button type="submit" class="btn w-100 btn-primary">Apply</button>
                                            </router-link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Doctor List -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Doctors</h5>
										</div>
										<div class="col-auto d-flex flex-wrap">
											<div class="form-custom me-2">
												<div id="tableSearch"  class="dataTables_wrapper"></div>
											</div>
											<div class="multipleSelection">
												<div class="selectBox">
													<p class="mb-0 me-2"><i class="feather-filter me-1"></i> Filter By Speciality </p>
													<span class="down-icon"><i class="feather-chevron-down"></i></span>
												</div>						  
												<div id="checkBoxes">
													<form>
														<p class="lab-title">Specialities</p>
														<div class="selectBox-cont">
															<label class="custom_check w-100">
																<input type="checkbox" name="year" checked>
																<span class="checkmark"></span> Urology
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="year">
																<span class="checkmark"></span> Neurology
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="year">
																<span class="checkmark"></span> Orthopedic
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="year">
																<span class="checkmark"></span> Cardiologist
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="year">
																<span class="checkmark"></span> Dentist
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="year">
																<span class="checkmark"></span> Gynacologist
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="year">
																<span class="checkmark"></span> Pediatrist
															</label>
															<label class="custom_check w-100">
																<input type="checkbox" name="year">
																<span class="checkmark"></span> Orthopedic
															</label>
														</div>
                                                        <router-link to="/admin/doctor-list">
														<button type="submit" class="btn w-100 btn-primary">Apply</button>
                                                        </router-link>
													</form>
												</div>
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
												   <th>Doctor</th>
												   <th>Specialities</th>
												   <th>Member Since</th>
												   <th>Number of Appointments</th>
												   <th>Total Income</th>
												   <th>Account Status</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in doctorlist" :key="item.id">
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
							
							<div id="tablepagination"  class="dataTables_wrapper"></div>
						</div>
					</div>
					<!-- /Doctor List -->
				</div>
			</div>
			<!-- /Page Wrapper -->
			
			<doctormodal></doctormodal>
          
        </div>
</template>
<script>
    import doctorlist from '../../../../assets/json/admin/doctorlist.json';
    import util from '../../../../assets/utils/util'
    const images = require.context('../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
	import Vue from 'vue'
	export default {
	  data() {
	  return {
        doctorlist
	  }
	  },
	  components: {
	 
	  },
	  mounted() {
        util.datatable('#data-table')
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
        },
	}
  </Script>
  