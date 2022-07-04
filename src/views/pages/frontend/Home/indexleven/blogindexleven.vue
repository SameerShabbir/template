<template>
	<!-- Blog News Section -->
			<section class="blog-news-section">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-header aos" data-aos="fade-up">
								<h2 class="color-primary">Blogs and News</h2>
								<p class="color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
							<div class="blog-news-grid w-100">
								<div class="blog-news-img">
									<router-link to="/blog-details">
										<img src="../../../../../assets/img/blog/blog-01.jpg" class="img-fluid" alt="">
									</router-link>
									<div class="overlay"></div>
									<div class="blog-news-date">
										<router-link to="/blog-details">
											<i class="feather-calendar me-2"></i>
											<span>10 Dec 2021</span>
										</router-link>
									</div>
								</div>
								<h3 class="blog-news-title">
									<router-link to="/blog-details">How to handle patient body in MRI</router-link>
								</h3>
								<div>
									<router-link to="/blog-details" class="blog-news-arrows">
										<i class="fas fa-arrow-right"></i>
									</router-link>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
							<div class="blog-news-grid w-100">
								<div class="blog-news-img">
									<router-link to="/blog-details">
										<img src="../../../../../assets/img/blog/blog-02.jpg" class="img-fluid" alt="">
									</router-link>
									<div class="overlay"></div>
									<div class="blog-news-date">
										<router-link to="/blog-details">
											<i class="feather-calendar me-2"></i>
											<span>18 Dec 2021</span>
										</router-link>
									</div>
								</div>
								<h3 class="blog-news-title">
									<router-link to="/blog-details">Doccure – Making your clinic painless visit?</router-link>
								</h3>
								<div>
									<router-link to="/blog-details" class="blog-news-arrows">
										<i class="fas fa-arrow-right"></i>
									</router-link>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up">
							<div class="blog-news-grid w-100">
								<div class="blog-news-img">
									<router-link to="/blog-details">
										<img src="../../../../../assets/img/blog/blog-04.jpg" class="img-fluid" alt="">
									</router-link>
									<div class="overlay"></div>
									<div class="blog-news-date">
										<router-link to="/blog-details">
											<i class="feather-calendar me-2"></i>
											<span>25 Dec 2021</span>
										</router-link>
									</div>
								</div>
								<h3 class="blog-news-title">
									<router-link to="/blog-details">Benefits of consulting with an Online Doctor</router-link>
								</h3>
								<div>
									<router-link to="/blog-details" class="blog-news-arrows">
										<i class="fas fa-arrow-right"></i>
									</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="high-btn aos" data-aos="fade-up">
								<router-link to="/blog-details" class="btn btn-two">View More</router-link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Blog News Section -->
</template>