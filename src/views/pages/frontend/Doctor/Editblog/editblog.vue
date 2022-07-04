<template>
    <div class="main-wrapper">

        <layout-doctorheader></layout-doctorheader>

        <breadcrumb27></breadcrumb27>

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
							<div class="doc-review review-listing custom-edit-service">

								<div class="row mb-5">
                                    <div class="col">
                                        <ul class="nav nav-tabs nav-tabs-solid">
                                            <li class="nav-item">
                                                <router-link class="nav-link" to="/doctor-blog">Acitive Blog</router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link class="nav-link" to="/doctor-pending-blog">Pending Blog</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-auto">
                                        <router-link class="btn btn-primary btn-sm" to="/doctor-add-blog"><i class="fas fa-plus me-1"></i> Add Blog</router-link>
                                    </div>
                                </div>
							
								<!-- Edit Blog -->
								<div class="card">
									<div class="card-body">	
										<h3 class="pb-3">Edit Blog</h3>
						
										<editform></editform>

									</div>
								</div>
								<!-- /Edit Blog -->

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

	}
}
</script>