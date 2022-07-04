<template>
<!-- Doctor Details Tab -->
					<div class="card">
						<div class="card-body pt-0">
						
							<!-- Tab Menu -->
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<a class="nav-link active" href="#doc_overview" data-bs-toggle="tab">Overview</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#doc_locations" data-bs-toggle="tab">Locations</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#doc_reviews" data-bs-toggle="tab">Reviews</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#doc_business_hours" data-bs-toggle="tab">Business Hours</a>
									</li>
								</ul>
							</nav>
							<!-- /Tab Menu -->
							
							<!-- Tab Content -->
							<div class="tab-content pt-0">
							
								<overviewcontent></overviewcontent>
								
								<locationcontent></locationcontent>
								
								<reviewcontent></reviewcontent>
								
								<businesshour></businesshour>
								
							</div>
						</div>
					</div>
					<!-- /Doctor Details Tab -->
</template>