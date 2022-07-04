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
								<div class="doc-badge me-3">Total Transactions <span class="ms-1">48</span></div>
								<div class="SortBy">
									<div class="selectBoxes order-by">
										<p class="mb-0"><img src="../../../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
										<span class="down-icon"><i class="feather-chevron-down"></i></span>
									</div>						  
									<div id="checkBox">
										<form>
											<p class="lab-title">Order By </p>
											<label class="custom_radio w-100">
												<input type="radio" name="sort">
												<span class="checkmark"></span> Invoice Number
											</label>
											<label class="custom_radio w-100">
												<input type="radio" name="sort">
												<span class="checkmark"></span> Total Amount
											</label>
											<label class="custom_radio w-100 mb-4">
												<input type="radio" name="sort">
												<span class="checkmark"></span> ID
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
                                            <router-link to="/admin/transaction">
											<button type="submit" class="btn w-100 btn-primary">Apply</button>
                                        </router-link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Transaction List -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Transaction</h5>
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
												   <th>Date</th>
												   <th>Total Amount</th>
												   <th></th>
												   <th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>#4546</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0001</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Bess Twishes</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$330.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
													<td class="text-end">
														<div class="actions">
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#8774</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0002</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-04.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Bess Twishes</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$330.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
													<td class="text-end">
														<div class="actions">
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0003</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Abdul Aziz Lazis</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$330.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
													<td class="text-end">
														<div class="actions">
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0004</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Alex Siauw</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$330.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
													<td class="text-end">
														<div class="actions">
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0005</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Gobbs Siauw</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$330.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
													<td class="text-end">
														<div class="actions">
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0006</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-11.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Deborah</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$330.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
													<td class="text-end">
														<div class="actions">
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0007</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-03.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Sofia</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$330.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
													<td class="text-end">
														<div class="actions">
															<a class="text-danger" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#deleteModal">
																<i class="feather-trash-2"></i> Delete
															</a>															
														</div>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction"><span class="text-primary user-name">INV 0008</span></a></td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">Paul</span></router-link>
														</h2>
													</td>
													<td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
													<td>$330.00</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Paid</span></td>
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
					<!-- /Transaction List -->
				</div>
			</div>
			<!-- /Page Wrapper -->
			
			<transactionmodal></transactionmodal>
          
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
  