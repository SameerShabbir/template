<template>
<!-- Doctor Widget -->
					<div class="card">
						<div class="card-body">
							<div class="doctor-widget">
								<div class="doc-info-left">
									<div class="doctor-img">
										<img src="../../../../../assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image">
									</div>
									<div class="doc-info-cont">
										<h4 class="doc-name">Dr. Darren Elder</h4>
										<p class="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
										<p class="doc-department"><img src="../../../../../assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</p>
										<div class="rating mapgridrating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(35)</span>
										</div>
										<div class="clinic-details">
											<p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA - <a href="javascript:void(0);">Get Directions</a></p>
											<ul class="clinic-gallery">
												<li>
													<a class="me-1 fancystyle" data-fancybox="gallery">
														<img src="../../../../../assets/img/features/feature-01.jpg" alt="Feature">
													</a>
												</li>
												<li>
													<a class="me-1 fancystyle" data-fancybox="gallery">
														<img  src="../../../../../assets/img/features/feature-02.jpg" alt="Feature Image">
													</a>
												</li>
												<li>
													<a class="me-1 fancystyle" data-fancybox="gallery">
														<img src="../../../../../assets/img/features/feature-03.jpg" alt="Feature">
													</a>
												</li>
												<li>
													<a class="fancystyle" data-fancybox="gallery">
														<img src="../../../../../assets/img/features/feature-04.jpg" alt="Feature">
													</a>
												</li>
											</ul>
										</div>
										<div class="clinic-services">
											<span>Dental Fillings</span>
											<span>Teeth Whitneing</span>
										</div>
									</div>
								</div>
								<div class="doc-info-right">
									<div class="clini-infos">
										<ul>
											<li><i class="far fa-thumbs-up"></i> 99%</li>
											<li><i class="far fa-comment"></i> 35 Feedback</li>
											<li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
											<li><i class="far fa-money-bill-alt"></i> $100 per hour </li>
										</ul>
									</div>
									<div class="doctor-action">
										<a href="javascript:void(0)" class="btn btn-white fav-btn">
											<i class="far fa-bookmark"></i>
										</a>
										<router-link to="/chat" class="btn btn-white msg-btn">
											<i class="far fa-comment-alt"></i>
										</router-link>
										<a href="javascript:void(0)" class="btn btn-white call-btn" data-bs-toggle="modal" data-bs-target="#voice_call">
											<i class="fas fa-phone"></i>
										</a>
										<a href="javascript:void(0)" class="btn btn-white call-btn" data-bs-toggle="modal" data-bs-target="#video_call">
											<i class="fas fa-video"></i>
										</a>
									</div>
									<div class="clinic-booking">
										<router-link class="apt-btn" to="/booking">Book Appointment</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Doctor Widget -->
</template>