<template>
<!-- Appoinment -->
		<section class="appoinment-section" id="appointments">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="appoinment-wrapper">
							<div class="appoinment-box aos" data-aos="fade-up">
								<form>
									<div class="row">
										<div class="col-lg-6 col-md-12">
											<div class="form-group appoinment-location">
												<i class="feather-search"></i> <input type="text" class="form-control" placeholder="Search Doctors, Clinics, Etc ...">
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="appoinment-right">
												<div class="form-group appoinment-location">
													<i class="feather-map-pin"></i> <input type="text" class="form-control" placeholder="Search location">
												</div>
												<div class="form-group">
                                                    <router-link to="/search">
													<button type="submit" class="btn appoinment-btn">
														<i class="feather-search"></i>
													</button>
                                                    </router-link>
                                                    <router-link to="/search">
													<button type="submit" class="btn appoinment-search-btn">
														<i class="feather-sliders me-2"></i> Advanced Search
													</button>
                                                    </router-link>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="appointment-bg">
				<div class="custom-contain">
					<div class="row">
						<div class="col-xl-5 col-lg-4 col-md-12 aos" data-aos="fade-up">
							<div class="appointment-left">
								<img src="../../../../../assets/img/appoinment-img.png" class="img-fluid" alt="">
							</div>
						</div>
						<div class="col-xl-7 col-lg-8 col-md-12">
							<div class="row justify-content-center">
								<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
									<div class="appointment-grid w-100">
										<div class="appointment-icon icon-primary">
											<i class="fas fa-bed"></i>
										</div>
										<div class="appointment-info">
											<router-link to="/search" class="appointment-link">Visit a Doctor</router-link>
											<p>We hire the best specialists to deliver top-notch diagnostic services for you.</p>
											<router-link to="/search" class="btn appointment-read-btn">Read More <i class="fas fa-arrow-right ms-2"></i></router-link>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
									<div class="appointment-grid w-100">
										<div class="appointment-icon icon-green">
											<i class="fas fa-tablets"></i>
										</div>
										<div class="appointment-info">
											<router-link to="/pharmacy-search" class="appointment-link">Find a Pharmacy</router-link>
											<p>We provide the a wide range of medical services, so every person could have the opportunity.</p>
											<router-link to="/pharmacy-search" class="btn appointment-read-btn">Read More <i class="fas fa-arrow-right ms-2"></i></router-link>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
									<div class="appointment-grid w-100">
										<div class="appointment-icon icon-red">
											<i class="fas fa-vial"></i>
										</div>
										<div class="appointment-info">
											<a href="javascript:void(0);" class="appointment-link">Find a Lab</a>
											<p>We use the first-class medical equipment for timely diagnostics of various diseases.</p>
											<a href="javascript:void(0);" class="btn appointment-read-btn">Coming Soon <i class="fas fa-arrow-right ms-2"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-4 col-md-4 d-flex aos" data-aos="fade-up">
									<div class="appointment-schedule w-100">
										<h2 class="schedule-title">Schedule</h2>
										<ul>
											<li><span>Monday – Friday</span> 8.00 – 13.00</li>
											<li><span>Saturday</span> 8.00 – 15.00</li>
											<li><span>Sunday</span> 8.00 – 18.00</li>
										</ul>
									</div>
								</div>
								<div class="col-lg-8 col-md-8 d-flex aos" data-aos="fade-up">
									<div class="appointment-request w-100">
										<h2 class="schedule-title text-white">REQUEST AN APPOINTMENT</h2>
										<div class="d-flex align-items-center">
											<div class="appointment-img-holder">
												<img src="../../../../../assets/img/phone-call.png" alt="">
											</div>
											<div class="appointment-info-holder">
												<p>Call us on</p>
												<h2>+1 (208) 567 0707</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- /Appoinment -->
</template>