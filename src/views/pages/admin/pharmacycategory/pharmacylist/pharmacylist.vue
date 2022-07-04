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
										<div class="col-auto custom-list d-flex">
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
														<label class="custom_radio w-100 mb-4">
															<input type="radio" name="sort">
															<span class="checkmark"></span> Descending
														</label>
                                                        <router-link to="/admin/pharmacy-list">
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
												   <th>Pharmacy Name</th>
												   <th>Categories</th>
												   <th>Pharmacy Address</th>
												   <th>Administrator Name</th>
												   <th>Phone number</th>
												   <th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product1.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Community pharmacy</span></a>
														</h2>
													</td>
													<td>Community pharmacy</td>
													<td>96 Red Hawk Road Cyrus, MN 56323</td>
													<td>Patinson</td>
													<td>320-795-8815</td>
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
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product2.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>Hospital Pharmacy</span></a>
														</h2>
													</td>
													<td>Hospital Pharmacy</td>
													<td>3130 Murry Street Princess Anne, VA 23456</td>
													<td>Herald Watson</td>
													<td>913-631-2538</td>
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
													<td>
														<h2 class="table-avatar">														
															<a class="empty-user emp-title" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal">P</a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>The Pill Club Medical</span></a>
														</h2>
													</td>
													<td>Clinical Pharmacy </td>
													<td>3503 Flint Street Saipan, MP 96950</td>
													<td>Sheebha</td>
													<td>816-270-2336</td>
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
													<td>#6765</td>
													<td>
														<h2 class="table-avatar">														
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product4.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>The Pill Club Medical</span></a>
														</h2>
													</td>
													<td>Pills Pharmacy </td>
													<td>3503 Flint Street Saipan, MP 96950</td>
													<td>Richard</td>
													<td>816-270-2336</td>
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
													<td>#4545</td>
													<td>
														<h2 class="table-avatar">														
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" src="../../../../../assets/admin_img/products/product5.jpg" alt="User Image"></a>
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><span>The Pill Club Medical</span></a>
														</h2>
													</td>
													<td>Club Pharmacy </td>
													<td>3503 Flint Street Saipan, MP 96950</td>
													<td>Rehan</td>
													<td>816-270-2336</td>
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
			
			<pharmacylistmodal></pharmacylistmodal>
          
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
  