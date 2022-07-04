<template>
    <div class="main-wrapper">

        <layout-doctorheader></layout-doctorheader>

        <breadCrumb34></breadCrumb34>

		<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						
						<div class="stickyside">

						<doctorsidebar></doctorsidebar>

						</div>	
							
						</div>

						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="doc-review review-listing">
							
								<!-- Review Listing -->
								<ul class="comments-list">
								
									<reviewcomment></reviewcomment>
									
									<reviewlive></reviewlive>
									
									<!-- Comment List -->
									<li>
										<div class="comment">
											<img class="avatar rounded-circle" alt="User Image" src="../../../../../assets/img/patients/patient8.jpg">
											<div class="comment-body">
												<div class="meta-data">
													<span class="comment-author">Daniel Griffing</span>
													<span class="comment-date">Reviewed on 1 Nov 2019</span>
													<div class="review-count rating">
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
														<i class="fas fa-star filled"></i>
													</div>
												</div>
												<p class="comment-content">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit,
													sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
													Ut enim ad minim veniam, quis nostrud exercitation.
													Curabitur non nulla sit amet nisl tempus
												</p>
												<div class="comment-reply">
													<a class="comment-btn" href="javascript:void(0);">
														<i class="fas fa-reply"></i> Reply
													</a>
													<p class="recommend-btn">
														<span>Recommend?</span>
														<a href="javascript:void(0);" class="like-btn">
															<i class="far fa-thumbs-up"></i> Yes
														</a>
														<a href="javascript:void(0);" class="dislike-btn">
															<i class="far fa-thumbs-down"></i> No
														</a>
													</p>
												</div>
											</div>
										</div>
									</li>
									<!-- /Comment List -->
									
								</ul>
								<!-- /Comment List -->
								
							</div>
						</div>
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
		
        <layout-footer></layout-footer>
        
    </div>

</template>

<script>
export default {
	mounted() {

	},
    data() {
        return {

        }
    }
}
</script>