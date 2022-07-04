<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid content-wrap">
					
					<!-- Settings -->
					<settingsidebar></settingsidebar>
					
					<div class="row">
						<div class="col-md-12">
							<div class="setting-wrap">
								<h6>Payment Gateway </h6>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div class="accordion setting-accordion" id="payment">
							
								<paymentaccordion></paymentaccordion>
								
								<paymentaccordion1></paymentaccordion1>
								
								<!-- Payment Accordion -->
								<div class="accordion-item">
									<div class="accordion-header">
										<div class="accordion-button">
											<label class="toggle-switch" for="email5">
												<input type="checkbox" class="toggle-switch-input" id="email5">
												<span class="toggle-switch-label">
													<span class="toggle-switch-indicator"></span>
												</span>
											</label>
											<span class="accord-title">Cash on Delivery</span>
										</div>
									</div>
								</div>
								<!-- /Payment Accordion -->
								
							</div>
						</div>
					</div>
					<div class="row mt-auto">
						<div class="col-md-12">
							<div class="submit-sec">
								<button class="btn btn-primary">Save Changes</button>
								<button class="btn btn-secondary">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
	import Vue from 'vue'
	export default {
	  data() {
	  return {
	  }
	  },
	  components: {
	 
	  },
	  mounted() {
	  }
	}
  </Script>
  