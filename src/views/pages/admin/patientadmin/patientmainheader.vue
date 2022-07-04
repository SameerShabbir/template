<template>
<div class="page-header">
						<div class="row align-items-center">
							<div class="col-md-12 d-flex justify-content-end">
								<div class="doc-badge me-3">Total Patients <span class="ms-1">48</span></div>
								<div class="SortBy">
									<div class="selectBoxes order-by">
										<p class="mb-0"><img src="../../../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
										<span class="down-icon"><i class="feather-chevron-down"></i></span>
									</div>						  
									<div id="checkBox">
										<form>
											<p class="lab-title">Specialities</p>
											<label class="custom_radio w-100">
												<input type="radio" name="year">
												<span class="checkmark"></span> Number of Appointment
											</label>
											<label class="custom_radio w-100">
												<input type="radio" name="year">
												<span class="checkmark"></span> Total Income
											</label>
											<label class="custom_radio w-100 mb-4">
												<input type="radio" name="year">
												<span class="checkmark"></span> Ratings
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
											<router-link to="/admin/patient-list">
											<button type="submit" class="btn w-100 btn-primary">Apply</button>
											</router-link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
</template>