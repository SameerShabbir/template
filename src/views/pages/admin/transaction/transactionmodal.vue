<template>
<!-- Modal -->
			<div class="modal fade contentmodal" id="transaction" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content doctor-profile">
						<div class="modal-header border-bottom-0 justify-content-end pb-0">
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body pt-0">
							<div class="rating-wrapper">
								<form>
									<h4 class="text-center mb-4">Transaction Details</h4>
									<div class="row">
										<div class="col-sm-4">
											<div class="mem-info">
												<h6>Consultation ID </h6>
												<p>#454445</p>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="mem-info">
												<h6>Paid On </h6>
												<p>14 Nov 2022 05:30 PM</p>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="mem-info">
												<h6>Payment Mode</h6>
												<p>Online</p>
											</div>
										</div>  
										<div class="col-sm-4">
											<div class="mem-info">
												<h6>Consultation Fees</h6>
												<p>$300.00</p>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="mem-info">
												<h6>Tax Fees</h6>
												<p>$30.00</p>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="mem-info">
												<h6>Total Fees</h6>
												<p>$300.00</p>
											</div>
										</div>  									
									</div> 
                                    <router-link to="/admin/transaction">
									<div class="submit-section">
										<button type="submit" class="btn btn-primary btn-download">Download Invoice</button>
									</div>		
                                    </router-link>
								</form>
							</div>
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
								<p>“Transaction”</p>
								<div class="submit-section">
									<router-link to="/admin/transaction" class="btn btn-success me-2">Yes</router-link>
									<a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Modal -->
</template>
