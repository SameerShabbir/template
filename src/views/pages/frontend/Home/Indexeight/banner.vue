<template>
<!-- Home Banner -->
			<section class="section-search-3">
				<div class="container">
					<div class="banner-info">
						<div class="row align-items-center">
							<div class="col-lg-4">
								<div class="header-banner aos" data-aos="fade-up">
									<h2>Search Doctor, <br> <span class="header-highlight">Make an Appointment</span></h2>
									<p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
								</div>
							</div>
							<div class="col-lg-8">
								<div class="doctor-search aos" data-aos="fade-up">
									<div class="doctor-form">
										<form action="#" class="doctor-search-form trans">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<div class="form-custom">
															<input type="text" class="form-control" value="" placeholder="Search Location">
															<i class="far fa-compass"></i>
														</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="form-group">
														<div class="form-custom">
															<input type="text" class="form-control" value="" placeholder="Gender">
															<i class="far fa-smile"></i>
														</div>
													</div>
												</div>
												<div class="col-md-7">
													<div class="form-group">
														<div class="form-custom">
															<input type="text" class="form-control" value="" placeholder="Department">
															<i class="fas fa-user-check"></i>
														</div>
													</div>
												</div>
												<div class="col-md-5">
													<router-link to="/search" class="btn banner-btn">MAKE APPOINTMENT</router-link>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Home Banner -->
</template>