<template>
<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Past Appointments</h5>
										</div>
										<div class="col-auto d-flex">
											<form>
												<div class="multipleSelection">
													<div class="selectBox">
														<p class="mb-0"><i class="feather-filter me-1"></i> Filter</p>
														<span class="down-icon"><i class="feather-chevron-down"></i></span>
													</div>					  
													<div id="checkBoxes">
														<div class="form-custom">
															<input type="text" class="form-control bg-grey" placeholder="Search by Patient">
															<i class="fas fa-search"></i>
														</div>
														<div class="form-custom">
															<input type="text" class="form-control bg-grey" placeholder="Search by Doctor">
															<i class="fas fa-search"></i>
														</div>
														<p class="lab-title">Consultation Type</p>
														<label class="custom_check w-100">
															<input type="checkbox" name="year">
															<span class="checkmark"></span> Video Call
														</label>
														<label class="custom_check w-100">
															<input type="checkbox" name="year">
															<span class="checkmark"></span> Audio Call
														</label>
														<label class="custom_check w-100">
															<input type="checkbox" name="year">
															<span class="checkmark"></span> Chat
														</label>
                                                        <router-link to="/admin/past-appointments">
														<button type="submit" class="btn w-100 btn-primary">Apply</button>
                                                        </router-link>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
</template>