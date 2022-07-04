<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadCrumb38></breadCrumb38>
        
		<!-- Page Content -->
			<div class="content">
				<div class="container">

					<div class="row">
						<div class="col-md-6 col-lg-7">
							<div class="card">
								<div class="card-header">
									<h3 class="card-title">Billing details</h3>
								</div>
								<div class="card-body">
								
									<checkoutform></checkoutform>
									
								</div>
							</div>
							
						</div>
						
                        <checkoutsidbar></checkoutsidbar>
						
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