<template>
    <div class="main-wrapper">

      <layout-headerpharamcy></layout-headerpharamcy>

      <layout-sidebarpharmacy></layout-sidebarpharmacy>

      <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">

					<!-- Page Header -->
					<div class="page-header">
						<div class="row d-flex justify-content-between align-items-center">
							<div class="col-sm-7 col-auto">
								<h3 class="page-title">Product List</h3>
							</div>
							<div class="col-sm-5 col">
								<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#addproduct" class="btn btn-primary btn-add float-end d-flex justify-content-between align-items-center"><i class="feather-plus-square me-1"></i> Add New</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Product List -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Product List</h5>
										</div>
										<div class="col-auto d-flex flex-wrap">
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
												   <th>Product Name</th>
												   <th>Price</th>
												   <th>Date</th>
												   <th class="text-end">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in productlist" :key="item.id">
													<td>{{item.no}}</td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editModal"><img class="avatar avatar-img" :src="loadImg(item.img)" alt="User Image"> {{item.name}}</a>
														</h2>
													</td>
													<td>{{item.rate}}</td>
													<td>{{item.date}}</td>
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
					<!-- /Product List -->
				</div>
			</div>
			<!-- /Page Wrapper -->
			
			<!-- Modal -->
			<div class="modal fade contentmodal" id="addproduct" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content doctor-profile">
						<div class="modal-header">
							<h3 class="mb-0">Add Product</h3>
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body">
							<form>
								<div class="add-wrap">
									<div class="form-group form-focus">
										<input type="text" class="form-control floating">
										<label class="focus-label">Product Name <span class="text-danger">*</span></label>
									</div>
									<div class="form-group">
										<vue-select :options="category" />
									</div>
									<div class="form-group form-focus">
										<input type="text" class="form-control floating">
										<label class="focus-label">Price <span class="text-danger">*</span></label>
									</div>
									<div class="change-photo-btn">
										<div><i class="feather-upload"></i>
										<p>Upload File</p></div>
										<input type="file" class="upload">
										<span class="file-upload-text"></span>
									</div>
									<p class="file-name text-success">Successfully Product image.jpg uploaded <a href="javascript:void(0);" class="text-danger"><i class="feather-x"></i></a></p>
									<router-link to="/pharmacyadmin/product-list">
                                    <div class="submit-section">
										<button type="submit" class="btn btn-primary btn-save">Save Changes</button>
									</div>
                                    </router-link>								
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /Modal -->
			
			<!-- Modal -->
			<div class="modal fade contentmodal" id="editModal" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content doctor-profile">
						<div class="modal-header">
							<h3 class="mb-0">Edit Product</h3>
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body">
							<form>
								<div class="add-wrap">
									<div class="form-group form-focus">
										<input type="text" class="form-control floating" value="Safi Natural">
										<label class="focus-label">Product Name <span class="text-danger">*</span></label>
									</div>
									<div class="form-group">
										<vue-select :options="category1" />
									</div>
									<div class="form-group form-focus">
										<input type="text" class="form-control floating" value="$330.00">
										<label class="focus-label">Price <span class="text-danger">*</span></label>
									</div>
									<div class="change-photo-btn">
										<div><i class="feather-upload"></i>
										<p>Upload File</p></div>
										<input type="file" class="upload">
										<span class="file-upload-text"></span>
									</div>
									<p class="file-name text-success">Successfully Product image.jpg uploaded <a href="javascript:void(0);" class="text-danger"><i class="feather-x"></i></a></p>
									<router-link to="/pharmacyadmin/product-list">
                                    <div class="submit-section">
										<button type="submit" class="btn btn-primary btn-save">Save Changes</button>
									</div>			
                                    </router-link>					
								</div>
							</form>
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
								<p>“Product List”</p>
								<div class="submit-section">
									<router-link to="/pharmacyadmin/product-list" class="btn btn-success me-2">Yes</router-link>
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
    import productlist from '../../../../assets/json/pharmacyadmin/productlist.json';
    import util from '../../../../assets/utils/util'
    const images = require.context('../../../../assets/pharmacy_img/products', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                productlist: productlist,
				category: ["Select Category", "Pharmacy", "Hospital"],
				category1: ["Select Category", "surgical systems", "Neuromodulation"]
            }
        },
        mounted() {
        util.datatable('#data-table')
		if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
        },
        methods: {
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
            
        },
    }
    </script>

