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
								<div class="doc-badge me-3">Specialities <span class="ms-1">48</span></div>
								<a href="javascript:void(0);"  data-bs-toggle="modal" data-bs-target="#addModal" class="btn btn-primary btn-add"><i class="feather-plus-square me-1"></i> Add New</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Specialities -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Specialities</h5>
										</div>
										<div class="col-auto d-flex flex-wrap">
											<div class="form-custom me-2">
												<div id="tableSearch"  class="dataTables_wrapper"></div>
											</div>
											<div class="SortBy">
												<div class="selectBoxes order-by">
													<p class="mb-0"><img src="../../../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
													<span class="down-icon"><i class="feather-chevron-down"></i></span>
												</div>						  
												<div id="checkBox">
													<form>
														<p class="lab-title">Order By </p>
														<label class="custom_radio w-100">
															<input type="radio" name="order">
															<span class="checkmark"></span> ID
														</label>
														<label class="custom_radio w-100 mb-4">
															<input type="radio" name="order">
															<span class="checkmark"></span> Date Modified
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
                                                        <router-link to="/admin/specialities">
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
												   <th>SID</th>
												   <th>Product</th>
												   <th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" class="spl-img"><img src="../../../../assets/admin_img/icon/urology.png" class="img-fluid" alt="User Image"></a>
															<a href="javascript:void(0);"><span>Urology</span></a>
														</h2>
													</td>
													<td class="text-end">
														<div class="actions">
															<a class="text-black" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal">
																<i class="feather-edit-3 me-1"></i> Edit
															</a>
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2 me-1"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#8774</td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" class="spl-img"><img src="../../../../assets/admin_img/icon/neurology.png" class="img-fluid" alt="User Image"></a>
															<a href="javascript:void(0);"><span>Neurology</span></a>
														</h2>
													</td>
													<td class="text-end">
														<div class="actions">
															<a class="text-black" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal">
																<i class="feather-edit-3 me-1"></i> Edit
															</a>
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2 me-1"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" class="spl-img"><img src="../../../../assets/admin_img/icon/ortho.png" class="img-fluid" alt="User Image"></a>
															<a href="javascript:void(0);"><span>Orthopedic</span></a>
														</h2>
													</td>
													<td class="text-end">
														<div class="actions">
															<a class="text-black" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal">
																<i class="feather-edit-3 me-1"></i> Edit
															</a>
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2 me-1"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" class="spl-img"><img src="../../../../assets/admin_img/icon/cardio.png" class="img-fluid" alt="User Image"></a>
															<a href="javascript:void(0);"><span>Cardiologist</span></a>
														</h2>
													</td>
													<td class="text-end">
														<div class="actions">
															<a class="text-black" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal">
																<i class="feather-edit-3 me-1"></i> Edit
															</a>
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2 me-1"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" class="spl-img"><img src="../../../../assets/admin_img/icon/dental.png" class="img-fluid" alt="User Image"></a>
															<a href="javascript:void(0);"><span>Dentist</span></a>
														</h2>
													</td>
													<td class="text-end">
														<div class="actions">
															<a class="text-black" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal">
																<i class="feather-edit-3 me-1"></i> Edit
															</a>
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2 me-1"></i> Delete
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
					<!-- /Specialities -->
				</div>
			</div>
			<!-- /Page Wrapper -->
			
			<specialitiesmodal></specialitiesmodal>
          
        </div>
</template>
<script>
	import Vue from 'vue'
	import util from '../../../../assets/utils/util'
	export default {
	  data() {
	  return {
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
	  }
	}
  </Script>
  