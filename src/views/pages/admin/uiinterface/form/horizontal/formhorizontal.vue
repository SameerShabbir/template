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
								<h3 class="page-title">Horizontal Form</h3>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Form Horizontal -->
					<div class="row">
						<div class="col-xl-6 d-flex">
							<div class="card flex-fill">
								<div class="card-header">
									<h4 class="card-title">Basic Form</h4>
								</div>
								<div class="card-body">
									<form action="#">
										<div class="form-group row">
											<label class="col-lg-3 col-form-label">First Name</label>
											<div class="col-lg-9">
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="form-group row">
											<label class="col-lg-3 col-form-label">Last Name</label>
											<div class="col-lg-9">
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="form-group row">
											<label class="col-lg-3 col-form-label">Email Address</label>
											<div class="col-lg-9">
												<input type="email" class="form-control">
											</div>
										</div>
										<div class="form-group row">
											<label class="col-lg-3 col-form-label">Username</label>
											<div class="col-lg-9">
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="form-group row">
											<label class="col-lg-3 col-form-label">Password</label>
											<div class="col-lg-9">
												<input type="password" class="form-control">
											</div>
										</div>
										<div class="form-group row">
											<label class="col-lg-3 col-form-label">Repeat Password</label>
											<div class="col-lg-9">
												<input type="password" class="form-control">
											</div>
										</div>
										<div class="text-end">
											<button type="submit" class="btn btn-primary">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<addressformhorizontal></addressformhorizontal>
					</div>
					<twocolumnhorizontal></twocolumnhorizontal>
					<threecolumnhorizontal></threecolumnhorizontal>
					<!-- /Form Horizontal -->
					
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
  