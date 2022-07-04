<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					
					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">Vertical Form</h3>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Form Vertical -->
					<div class="row">
						<formbasicvertical></formbasicvertical>
						<formverticaladdress></formverticaladdress>
					</div>
					
					<twoformvertical></twoformvertical>
					
					<threeformvertical></threeformvertical>
					<!-- /Form Vertical -->
					
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
    export default {
        mounted() {
        }
    }
    </script>
  