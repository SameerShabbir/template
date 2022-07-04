<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					
					<div class="comp-sec-wrapper">
					
						<componentavatar></componentavatar>
						
						<!-- Alerts -->
						<section class="comp-section">
							<div class="section-header">
                                <h3 class="section-title">Alerts</h3>
                                <div class="line"></div>
                            </div>
							<div class="card">
								<div class="card-body">
									<div class="alert alert-primary alert-dismissible fade show" role="alert">
										<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
									<div class="alert alert-secondary alert-dismissible fade show" role="alert">
										<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
									<div class="alert alert-success alert-dismissible fade show" role="alert">
										<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
									<div class="alert alert-danger alert-dismissible fade show" role="alert">
										<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
									<div class="alert alert-warning alert-dismissible fade show" role="alert">
										<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
									<div class="alert alert-info alert-dismissible fade show" role="alert">
										<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
									<div class="alert alert-light alert-dismissible fade show" role="alert">
										<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
									<div class="alert alert-dark alert-dismissible fade show" role="alert">
										<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
								</div>
							</div>
						</section>
						<!-- /Alerts -->
						
						<!-- Breadcrumbs -->
						<section class="comp-section">
							<div class="section-header">
                                <h3 class="section-title">Breadcrumbs</h3>
                                <div class="line"></div>
                            </div>
							<div class="card">
								<div class="card-body">
									<nav aria-label="breadcrumb">
										<ol class="breadcrumb">
											<li class="breadcrumb-item active" aria-current="page">Home</li>
										</ol>
									</nav>
									<nav aria-label="breadcrumb">
										<ol class="breadcrumb">
											<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
											<li class="breadcrumb-item active" aria-current="page">Products</li>
										</ol>
									</nav>
									<nav aria-label="breadcrumb">
										<ol class="breadcrumb mb-0">
											<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
											<li class="breadcrumb-item"><a href="javascript:void(0);">Products</a></li>
											<li class="breadcrumb-item active" aria-current="page">Accessories</li>
										</ol>
									</nav>
								</div>
							</div>
						</section>
						<!-- /Breadcrumbs -->
						
						<componentbutton></componentbutton>
						
						<componentdropdown></componentdropdown>

						<componentpagination></componentpagination>
						
						<!-- Progress -->
						<section class="comp-section">
							<div class="section-header">
                                <h3 class="section-title">Progress</h3>
                                <div class="line"></div>
                            </div>
							<div class="progress-example card">
								<div class="card-header">
									<h5 class="card-title">Large Progress Bars</h5>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div>
												<div class="progress progress-lg">
													<div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-lg">
													<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-lg">
													<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-lg">
													<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-lg">
													<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-lg">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="progress-example card">
								<div class="card-header">
									<h5 class="card-title">Default Progress Bars</h5>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div class="progress">
												<div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="progress-example card">
								<div class="card-header">
									<h5 class="card-title">Medium Progress Bars</h5>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div>
												<div class="progress progress-md">
													<div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-md">
													<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-md">
													<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-md">
													<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-md">
													<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-md">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="progress-example card">
								<div class="card-header">
									<h5 class="card-title">Small Progress Bars</h5>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div>
												<div class="progress progress-sm">
													<div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-sm">
													<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-sm">
													<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-sm">
													<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-sm">
													<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-sm">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="progress-example card">
								<div class="card-header">
									<h5 class="card-title">Extra Small Progress Bars</h5>
								</div>
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-md-6">
											<div>
												<div class="progress progress-xs">
													<div class="progress-bar w-75" role="progressbar" style="width: 10%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-xs">
													<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-xs">
													<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-xs">
													<div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
												<div class="progress progress-xs">
													<div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="progress progress-xs">
												<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<!-- /Progress -->
						
						<componenttab></componenttab>

						<componenttypography></componenttypography>
					
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
	  },
	}
  </Script>
  