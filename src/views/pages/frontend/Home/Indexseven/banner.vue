<template>
<!-- Home Banner -->
			<section class="doctor-search-section">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6">
							<div class="doctor-search">
								<div class="banner-header aos" data-aos="fade-up">
									<h2>Search Doctor, <br> Make an Appointment</h2>
								</div>
								<div class="doctor-form aos" data-aos="fade-up">
									<form action="#" class="doctor-search-form">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label>Location</label>
													<div class="form-custom">
														<input type="text" class="form-control" value="">
														<i class="far fa-compass"></i>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Gender</label>
													<div class="form-custom">
														<input type="text" class="form-control" value="">
														<i class="far fa-smile"></i>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label>Department</label>
													<div class="form-custom">
														<input type="text" class="form-control" value="">
														<i class="fas fa-user-check"></i>
													</div>
												</div>
											</div>
											<div class="col-md-12">
												<router-link to="/search" class="btn banner-btn mt-3">MAKE APPOINTMENT</router-link>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<img src="../../../../../assets/img/doctor-banner.png" class="img-fluid dr-img" alt="" >
						</div>
					</div>
				</div>
			</section>
			<!-- /Home Banner -->
</template>