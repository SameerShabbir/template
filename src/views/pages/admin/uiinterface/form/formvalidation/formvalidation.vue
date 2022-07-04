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
								<h3 class="page-title">Form Validation</h3>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<div class="row">
						<div class="col-sm-12">
						
							<!-- Custom Boostrap Validation -->
							<formcustomvalidation></formcustomvalidation>
							<!-- /Custom Boostrap Validation -->
							
							<!-- Default Browser Validation -->
							<defaultformvalidation></defaultformvalidation>
							<!-- /Default Browser Validation -->

							<!-- Server Side Validation -->
							<serverformvalidation></serverformvalidation>
							<!-- /Server Side Validation -->
							
							<!-- Supported Elements -->
							<formvalidationsupport></formvalidationsupport>
							<!-- /Supported Elements -->
							
							<!-- Validation Tooltips -->
							<formvalidationtooltip></formvalidationtooltip>
							<!-- /Validation Tooltips -->
							
						</div>
					</div>
					
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
  