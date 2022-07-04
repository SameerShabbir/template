<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadCrumb42></breadCrumb42>
        
		<!-- Page Content -->
        <div class="content">
            <div class="container">

                <detailwidget></detailwidget>
                
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
                        
                            <overviewdetail></overviewdetail>
                            
                            <locationdetail></locationdetail>
                            
                            <reviewdetail></reviewdetail>
                            
                            <businessdetail></businessdetail>
                            
                        </div>
                    </div>
                </div>
                <!-- /Doctor Details Tab -->

            </div>
        </div>		
        <!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
    <!-- Voice Call Modal -->
		<div class="modal fade call-modal" id="voice_call">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<!-- Outgoing Call -->
						<div class="call-box incoming-box">
							<div class="call-wrapper">
								<div class="call-inner">
									<div class="call-user">
										<img alt="User Image" src="../../../../../assets/img/doctors/doctor-thumb-02.jpg" class="call-avatar">
										<h4>Dr. Darren Elder</h4>
										<span>Connecting...</span>
									</div>							
									<div class="call-items">
										<a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
										<router-link to="/voice-call" class="btn call-item call-start"><i class="material-icons">call</i></router-link>
									</div>
								</div>
							</div>
						</div>
						<!-- Outgoing Call -->

					</div>
				</div>
			</div>
		</div>
		<!-- /Voice Call Modal -->
		
		<!-- Video Call Modal -->
		<div class="modal fade call-modal" id="video_call">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
					
						<!-- Incoming Call -->
						<div class="call-box incoming-box">
							<div class="call-wrapper">
								<div class="call-inner">
									<div class="call-user">
										<img class="call-avatar" src="../../../../../assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
										<h4>Dr. Darren Elder</h4>
										<span>Calling ...</span>
									</div>							
									<div class="call-items">
										<a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
										<router-link to="/video-call" class="btn call-item call-start"><i class="material-icons">videocam</i></router-link>
									</div>
								</div>
							</div>
						</div>
						<!-- /Incoming Call -->
						
					</div>
				</div>
			</div>
		</div>
		<!-- Video Call Modal -->
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