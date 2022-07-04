<template>
    <div class="main-wrapper">

        <patientheader></patientheader>

		<breadcrumb14></breadcrumb14>
        
		<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						
                        <patientsidebar></patientsidebar>
						
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col-md-12 col-lg-6">
										
											<!-- Change Password Form -->
											<form>
												<div class="form-group">
													<label>Old Password</label>
													<input type="password" class="form-control">
												</div>
												<div class="form-group">
													<label>New Password</label>
													<input type="password" class="form-control">
												</div>
												<div class="form-group">
													<label>Confirm Password</label>
													<input type="password" class="form-control">
												</div>
												<div class="submit-section">
													<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
												</div>
											</form>
											<!-- /Change Password Form -->
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>		
			<!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
</template>

<script>
export default {
	mounted() {

	},
    data() {
        return {

        }
    }
}
</script>