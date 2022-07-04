<template>
<!-- Modal -->
			<div class="modal fade contentmodal" id="addModal" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content doctor-profile">
						<div class="modal-header">
							<h3 class="mb-0">Add Category</h3>
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body">
							<form>
								<div class="add-wrap">
									<div class="form-group form-focus">
										<input type="text" class="form-control floating">
										<label class="focus-label">Category Name<span class="text-danger">*</span></label>
									</div>
									<label class="mb-1">Category Image</label>
									<div class="change-photo-btn">
										<div><i class="feather-upload"></i>
										<p>Upload File</p></div>
										<input type="file" class="upload">
										<span class="file-upload-text"></span>
									</div>
									<p class="text-success">Successfully Product image.jpg uploaded</p>
                                    <router-link to="/admin/product-category">
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
							<h3 class="mb-0">Edit Category</h3>
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body">
							<form>
								<div class="add-wrap">
									<div class="form-group form-focus">
										<input type="text" class="form-control floating" value="Neuromodulation">
										<label class="focus-label">Category Name<span class="text-danger">*</span></label>
									</div>
									<label class="mb-1">Category Image</label>
									<div class="change-photo-btn">
										<div><i class="feather-upload"></i>
										<p>Upload File</p></div>
										<input type="file" class="upload">
										<span class="file-upload-text"></span>
									</div>
									<p class="text-success">Successfully Product image.jpg uploaded</p>
                                    <router-link to="/admin/product-category">
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
								<p>“Category”</p>
								<div class="submit-section">
									<router-link to="/admin/product-category" class="btn btn-success me-2">Yes</router-link>
									<a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Modal -->
</template>