<template>
<div class="app-listing">
								<div class="custom-list">
									<div class="SortBy">
										<div class="selectBoxes order-by">
											<p class="mb-0"><img src="../../../../../assets/admin_img/icon/sort.png" class="me-2" alt="icon"> Order by </p>
											<span class="down-icon"><i class="feather-chevron-down"></i></span>
										</div>						  
										<div id="checkBox">
											<form>
												<p class="lab-title">Order By </p>
												<label class="custom_radio w-100">
													<input type="radio" name="order">
													<span class="checkmark"></span> ID
												</label>
												<label class="custom_radio w-100">
													<input type="radio" name="order">
													<span class="checkmark"></span> Amount
												</label>
												<label class="custom_radio w-100">
													<input type="radio" name="order">
													<span class="checkmark"></span> Date
												</label>
												<label class="custom_radio w-100">
													<input type="radio" name="order">
													<span class="checkmark"></span> Number of Appointments
												</label>
												<p class="lab-title">Sort By</p>
												<label class="custom_radio w-100">
													<input type="radio" name="sort">
													<span class="checkmark"></span> Ascending
												</label>
												<label class="custom_radio w-100 mb-3">
													<input type="radio" name="sort">
													<span class="checkmark"></span> Descending
												</label>
                                                <router-link to="/admin/user-reports">
												<button type="submit" class="btn w-100 btn-primary">Apply</button>
                                                </router-link>
											</form>
										</div>
									</div>
								</div>
								<div class="import-list">
									<a href="javascript:void(0);"><i class="feather-download"></i> Import</a>
								</div>
							</div>
</template>