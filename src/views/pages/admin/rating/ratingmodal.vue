<template>
<!-- Modal -->
			<div class="modal fade contentmodal" id="Ratings" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content doctor-profile">
						<div class="modal-header justify-content-center border-bottom-0">
						<div>
							<h4 class="modal-title">Rating Details</h4>
							<button type="button" class="close-btn pos-top" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						</div>
						<div class="modal-body">
							<div class="rating-wrapper mb-2">
								<h5>Consultation ID</h5>
								<p>#454445</p>           
								<h5>Reviews</h5>
								<div class="ratings mb-3">
									<i class="far fa-star filled"></i>
									<i class="far fa-star filled"></i>
									<i class="far fa-star filled"></i>
									<i class="far fa-star filled"></i>
									<i class="far fa-star"></i>
								</div>        
								<h5>Description</h5>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                 
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
							<form>
								<div class="delete-wrap text-center">
									<div class="del-icon"><i class="feather-x-circle"></i></div>
									<h2>Sure you Want to delete</h2>
									<p>“Rating”</p>
									<div class="submit-section">
                                    <router-link to="/admin/ratings">
										<button type="submit" class="btn btn-success me-2">Yes</button>
                                        </router-link>
										<a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
									</div>								
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /Modal -->
</template>