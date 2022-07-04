<template>
    <div class="main-wrapper">

        <layout-doctorheader></layout-doctorheader>

        <breadcrumb25></breadcrumb25>

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
						
							<basicinformation></basicinformation>
							
							<clinicinfo></clinicinfo>
							
							<pricing></pricing>
						 
							<education></education>
							
							<membership></membership>
							
							<div class="submit-section submit-btn-bottom">
								<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
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

}
</script>