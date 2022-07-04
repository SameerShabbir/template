<template>
<!-- News Section -->
		<section class="news-section">
			<div class="container">
				<div class="section-header text-center aos" data-aos="fade-up">
					<h2 class="color-primary">Let’s See Our Latest News</h2>
					<p class="sub-title color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
				<div class="row justify-content-center">
					<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
						<div class="grid-news w-100">
							<div class="news-image">
								<router-link to="/blog-details">
									<img class="img-fluid" src="../../../../../assets/img/blog/blog-11.jpg" alt="News Image">
                                </router-link>
							</div>
							<div class="news-content">
								<ul>
									<li>
										<div class="news-date">
											<a href="javascript:void(0);">
												<i class="feather-calendar me-2"></i>
												<span>4 Dec 2021</span>
											</a>
										</div>
									</li>
									<li>
										<div class="news-date">
											<a href="javascript:void(0);" class="news-light-btn">
												<i class="feather-tag me-2"></i>
												<span>Heath Care</span>
											</a>
										</div>
									</li>
								</ul>
								<h3 class="news-title">
									<router-link to="/blog-details">How to handle patient body in MRI</router-link>
								</h3>
								<p>
									<router-link to="/blog-details">Read News</router-link>
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
						<div class="grid-news w-100">
							<div class="news-image">
								<router-link to="/blog-details">
									<img class="img-fluid" src="../../../../../assets/img/blog/blog-12.jpg" alt="News Image">
                                </router-link>
							</div>
							<div class="news-content">
								<ul>
									<li>
										<div class="news-date">
											<a href="javascript:void(0);">
												<i class="feather-calendar me-2"></i>
												<span>10 Dec 2021</span>
											</a>
										</div>
									</li>
									<li>
										<div class="news-date">
											<a href="javascript:void(0);" class="news-light-btn">
												<i class="feather-tag me-2"></i>
												<span>Surgery</span>
											</a>
										</div>
									</li>
								</ul>
								<h3 class="news-title">
									<router-link to="/blog-details">Doccure – Making your clinic painless visit?</router-link>
								</h3>
								<p>
									<router-link to="/blog-details">Read News</router-link>
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
						<div class="grid-news w-100">
							<div class="news-image">
								<router-link to="/blog-details">
									<img class="img-fluid" src="../../../../../assets/img/blog/blog-13.jpg" alt="News Image">
                                </router-link>
							</div>
							<div class="news-content">
								<ul>
									<li>
										<div class="news-date">
											<a href="javascript:void(0);">
												<i class="feather-calendar me-2"></i>
												<span>15 Dec 2021</span>
											</a>
										</div>
									</li>
									<li>
										<div class="news-date">
											<a href="javascript:void(0);" class="news-light-btn">
												<i class="feather-tag me-2"></i>
												<span>General</span>
											</a>
										</div>
									</li>
								</ul>
								<h3 class="news-title">
									<router-link to="/blog-details">Benefits of consulting with an Online Doctor</router-link>
								</h3>
								<p>
									<router-link to="/blog-details">Read News</router-link>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="blog-details-btn text-center">
					<router-link to="/blog-details" class="btn view-more">View More <i class="fas fa-arrow-right ms-2"></i></router-link>
				</div>
			</div>
		</section>
		<!-- /News Section -->
</template>