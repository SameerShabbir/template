<template>
<!-- Modal -->
			<div class="modal fade contentmodal" id="doctorlist" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content doctor-profile">
						<div class="modal-header justify-content-center border-bottom-0">
							<h4 class="modal-title">Doctor Details</h4>
							<button type="button" class="close-btn pos-top" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body">
							<div class="media d-flex align-items-center justify-content-between">
								<div class="flex-shrink-0 d-flex align-items-center">
									<img src="../../../../assets/img/doctors/doctor-09.jpg" alt="" class="doctor">
									<div class="doc-info">											
										<div class="docs-id"> #454445</div>
										<h3>Dr. Rayan miller</h3>
										<p>BDS, MDS - Oral & Maxillofacial Surgery</p>
									</div>	
								</div>
								<div class="media-body">								
									<div class="ratings">
										<p><i class="fas fa-star filled mr-1"></i>4.5</p>
									</div>
								</div>
							</div>
							<div class="member-wrapper">
								<h5>Details</h5>
								<div class="row">
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Member Since</h6>
											<p>Nov 21, 2022</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Speciality</h6>
											<p>Dentist</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Consultation Fees</h6>
											<p>$100 / Consultation</p>
										</div>
									</div>
								</div>                            
							</div>
							<div class="member-wrapper">
								<h5>Personal Information</h5>
								<div class="row">
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Gender</h6>
											<p>Male</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Date of Birth</h6>
											<p>21, Dec 2022</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Location</h6>
											<p>Newyork, USA</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Phone Number</h6>
											<p>+1 5454 2154 4545</p>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="mem-info">
											<h6>Email ID</h6>
											<p>Doctor@Doccure.com</p>
										</div>
									</div>
								</div>                            
							</div>
							<div class="lang-wrap">
								<p>No of Consultation / Cancelled : <span>85/21</span></p>
								<p>Total Income Earned  :  <span>$4,544,784</span></p>
							</div>
							<div class="submit-section">
								<a data-bs-dismiss="modal" data-bs-toggle="modal" href="#editModal" class="btn btn-primary me-2">Edit</a>
								<a data-bs-dismiss="modal" data-bs-toggle="modal" href="#deleteModal" class="btn btn-secondary">Delete Account</a>
							</div>
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
							<h3 class="mb-0">Edit Doctor</h3>
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body">
							<form>
								<div class="add-wrap">
									<div class="form-group form-focus">
										<input type="text" class="form-control floating" value="Dr. Rayan miller">
										<label class="focus-label">Doctor Name <span class="text-danger">*</span></label>
									</div>
									<label class="mb-1">Doctor Image</label>
									<div class="change-photo-btn">
										<div><i class="feather-upload"></i>
										<p>Upload File</p></div>
										<input type="file" class="upload">
										<span class="file-upload-text"></span>
									</div>
									<p class="file-name text-success">Successfully Product image.jpg uploaded <a href="javascript:void(0);" class="text-danger"><i class="feather-x"></i></a></p>
									<div class="form-group">
										<select class="select">
											<option>Select Speciality</option>
											<option>Dentist</option>
											<option selected>Neurology</option>
										</select>
									</div>
									<div class="form-group form-focus">
										<input type="text" class="form-control floating" value="$330.00">
										<label class="focus-label">Consultation Fees <span class="text-danger">*</span></label>
									</div>
									<div class="form-group form-focus">
										<input type="text" class="form-control floating" value="Newyork, USA">
										<label class="focus-label">Location <span class="text-danger">*</span></label>
									</div>
									<div class="form-group form-focus">
										<input type="text" class="form-control floating" value="+1 5454 2154 4545">
										<label class="focus-label">Phone <span class="text-danger">*</span></label>
									</div>
									<div class="submit-section">
                                        <router-link to="/admin/doctor-list">
										<button type="submit" class="btn btn-primary btn-save">Save Changes</button>
                                        </router-link>
									</div>								
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
								<form>
									<div class="del-icon"><i class="feather-x-circle"></i></div>
									<h2>Sure you Want to delete</h2>
									<p>“Doctor”</p>
									<div class="submit-section">
                                        <router-link to="/admin/doctor-list">
										<button type="submit" class="btn btn-success me-2">Yes</button>
                                        </router-link>
										<a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
									</div>	
								</form>								
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Modal -->
</template>