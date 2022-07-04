<template>
    <div class="chat-page">
    <div class="main-wrapper">

        <patientheader></patientheader>

		<!-- Page Content -->
			<div class="content" style="min-height: 296.6px !important;">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-12">
							<div class="chat-window">
							
								<chatleft></chatleft>
							
								<chatright></chatright>
								
							</div>
						</div>
					</div>
					<!-- /Row -->

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
										<h4>Darren Elder</h4>
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
										<h4>Darren Elder</h4>
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