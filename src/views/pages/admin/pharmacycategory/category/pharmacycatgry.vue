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
								<div class="doc-badge me-3">Total Pharmacies <span class="ms-1">48</span></div>
								<a href="javascript:void(0);" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addModal"><i class="feather-plus-square me-1"></i> Add New</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Pharmacy List -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Pharmacy List</h5>
										</div>
										<div class="col-auto d-flex">
											<div class="form-custom me-2">
												<div id="tableSearch"  class="dataTables_wrapper"></div>
											</div>
											<div class="SortBy">
												<div class="selectBoxes order-by">
													<p class="mb-0"><img src="../../../../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
													<span class="down-icon"><i class="feather-chevron-down"></i></span>
												</div>						  
												<div id="checkBox">
													<form>
														<p class="lab-title">Order By </p>
														<label class="custom_radio w-100">
															<input type="radio" name="sort">
															<span class="checkmark"></span> ID
														</label>
														<label class="custom_radio w-100">
															<input type="radio" name="sort">
															<span class="checkmark"></span> Date Created
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
														<router-link to="/admin/pharmacy-category">
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
												   <th>Icons</th>
												   <th>Category </th>
												   <th>Date</th>
												   <th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>#4546</td>
													<td><img class="img-fluid" src="../../../../../assets/admin_img/icon/icon-01.png" alt="User Image"></td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product1.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Community pharmacy</span></a>
														</h2>
													</td>
													<td>12/20/2022</td>
													<td class="text-end">
														<div class="actions">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
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
													<td><img class="img-fluid" src="../../../../../assets/admin_img/icon/icon-02.png" alt="User Image"></td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product2.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Hospital Pharmacy</span></a>
														</h2>
													</td>
													<td>12/20/2022</td>
													<td class="text-end">
														<div class="actions">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
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
													<td><img class="img-fluid" src="../../../../../assets/admin_img/icon/icon-03.png" alt="User Image"></td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product3.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Clinical Pharmacy</span></a>
														</h2>
													</td>
													<td>12/20/2022</td>
													<td class="text-end">
														<div class="actions">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
																<i class="feather-edit-3 me-1"></i> Edit
															</a>
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2 me-1"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#5656</td>
													<td><img class="img-fluid" src="../../../../../assets/admin_img/icon/icon-01.png" alt="User Image"></td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product4.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Pills pharmacy</span></a>
														</h2>
													</td>
													<td>12/20/2022</td>
													<td class="text-end">
														<div class="actions">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
																<i class="feather-edit-3 me-1"></i> Edit
															</a>
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2 me-1"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#5543</td>
													<td><img class="img-fluid" src="../../../../../assets/admin_img/icon/icon-02.png" alt="User Image"></td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product5.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Hospital Pharmacy</span></a>
														</h2>
													</td>
													<td>12/20/2022</td>
													<td class="text-end">
														<div class="actions">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal" class="text-black">
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
					<!-- /Pharmacy List -->
				</div>
			</div>
			<!-- /Page Wrapper -->
			
			<pharmacymodal></pharmacymodal>
          
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
  