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
								<h3 class="page-title">Input Groups</h3>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Form Input Groups -->
					<div class="row">
						<div class="col-lg-12">
							<forminputexample></forminputexample>
							<forminputsizing></forminputsizing>
							<formcheck></formcheck>
							<forminputaddons></forminputaddons>
							<forminputdropdown></forminputdropdown>
						</div>
					</div>
					<!-- /Form Input Groups -->
					
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
  