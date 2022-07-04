<template>
        <div class="main-wrapper">

          <layout-headerpharamcy></layout-headerpharamcy>

          <layout-sidebarpharmacy></layout-sidebarpharmacy>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					
					<!-- Add Product -->					
					<div class="row">
						<div class="col-md-8">
							<h5 class="mb-3">Edit Supplier</h5>
							<form method="post" class="supplier-form">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group form-focus">
											<input type="text" class="form-control floating">
											<label class="focus-label">Name <span class="text-danger">*</span></label>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group form-focus">
											<input type="email" class="form-control floating">
											<label class="focus-label">Email <span class="text-danger">*</span></label>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group form-focus">
											<input type="text" class="form-control floating">
											<label class="focus-label">Phone <span class="text-danger">*</span></label>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group form-focus">
											<input type="text" class="form-control floating">
											<label class="focus-label">Company <span class="text-danger">*</span></label>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group form-focus">
											<textarea class="form-control bg-grey floating"></textarea>
											<label class="focus-label">Address <span class="text-danger">*</span></label>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<div class="change-photo-btn  bg-grey">
												<div>
													<i class="feather-upload"></i>
													<p>Upload File</p>
												</div>
												<input type="file" class="upload">
											</div>
										</div>
									</div>
									<div class="col-md-4">
											<button type="submit" class="btn btn-primary save-btn">Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<!-- /Add Product -->
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
	import Vue from 'vue'
	export default {
	  data() {
	  return {
		category: ["Category", "Family Care", "Cancer", "Fitness & Wellness", "Hair care", "Skin care", "Neoplasms", "Women's Care", "Sleep disorders", "Baby care"]
	  }
	  },
	  components: {
	 
	  },
	  mounted() {
	  }
	}
  </Script>
  