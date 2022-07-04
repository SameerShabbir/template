<template>
    <div class="main-wrapper">

        <layout-doctorheader></layout-doctorheader>

        <breadcrumb3></breadcrumb3>

		<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						
						<div class="stickyside">

						<billingsidebar></billingsidebar>

						</div>	
							
						</div>

						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title mb-0">Add Prescription</h4>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-sm-6">
											<div class="biller-info">
												<h4 class="d-block">Dr. Darren Elder</h4>
												<span class="d-block text-sm text-muted">Dentist</span>
												<span class="d-block text-sm text-muted">Newyork, United States</span>
											</div>
										</div>
										<div class="col-sm-6 text-sm-end">
											<div class="billing-info">
												<h4 class="d-block">1 November 2019</h4>
												<span class="d-block text-muted">#INV0001</span>
											</div>
										</div>
									</div>
									
									<!-- Add Item -->
									<div class="add-more-item text-end">
										<a href="javascript:void(0);"><i class="fas fa-plus-circle"></i> Add Item</a>
									</div>
									<!-- /Add Item -->
									
									<prescriptiontable></prescriptiontable>
									
									<!-- Signature -->
									<div class="row">
										<div class="col-md-12 text-end">
											<div class="signature-wrap">
												<div class="signature">
													Click here to sign
												</div>
												<div class="sign-name">
													<p class="mb-0">( Dr. Darren Elder )</p>
													<span class="text-muted">Signature</span>
												</div>
											</div>
										</div>
									</div>
									<!-- /Signature -->
									
									<!-- Submit Section -->
									<div class="row">
										<div class="col-md-12">
											<div class="submit-section">
												<button type="submit" class="btn btn-primary submit-btn">Save</button>
												<button type="reset" class="btn btn-secondary submit-btn">Clear</button>
											</div>
										</div>
									</div>
									<!-- /Submit Section -->
									
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