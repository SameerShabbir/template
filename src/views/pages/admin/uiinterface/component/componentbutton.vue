<template>
<!-- Buttons -->
						<section class="comp-section comp-buttons">
							<div class="section-header">
                                <h3 class="section-title">Buttons</h3>
                                <div class="line"></div>
                            </div>
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">Default Button</h5>
									<button type="button" class="btn btn-primary">Primary</button>
									<button type="button" class="btn btn-secondary ms-1">Secondary</button>
									<button type="button" class="btn btn-success ms-1">Success</button>
									<button type="button" class="btn btn-danger ms-1">Danger</button>
									<button type="button" class="btn btn-warning ms-1">Warning</button>
									<button type="button" class="btn btn-info ms-1">Info</button>
									<button type="button" class="btn btn-light ms-1">Light</button>
									<button type="button" class="btn btn-dark ms-1">Dark</button>
									<button type="button" class="btn btn-link">Link</button>
									<hr>
									<h5 class="card-title">Button Sizes</h5>
									<p>
										<button type="button" class="btn btn-primary btn-lg">Primary</button>
										<button type="button" class="btn btn-secondary btn-lg ms-1">Secondary</button>
										<button type="button" class="btn btn-success btn-lg ms-1">Success</button>
										<button type="button" class="btn btn-danger btn-lg ms-1">Danger</button>
										<button type="button" class="btn btn-warning btn-lg ms-1">Warning</button>
										<button type="button" class="btn btn-info btn-lg ms-1">Info</button>
										<button type="button" class="btn btn-light btn-lg ms-1">Light</button>
										<button type="button" class="btn btn-dark btn-lg">Dark</button>
									</p>
									<p>
										<button type="button" class="btn btn-primary">Primary</button>
										<button type="button" class="btn btn-secondary ms-1">Secondary</button>
										<button type="button" class="btn btn-success ms-1">Success</button>
										<button type="button" class="btn btn-danger ms-1">Danger</button>
										<button type="button" class="btn btn-warning ms-1">Warning</button>
										<button type="button" class="btn btn-info ms-1">Info</button>
										<button type="button" class="btn btn-light ms-1">Light</button>
										<button type="button" class="btn btn-dark">Dark</button>
									</p>
									<p>
										<button type="button" class="btn btn-primary btn-sm">Primary</button>
										<button type="button" class="btn btn-secondary btn-sm ms-1">Secondary</button>
										<button type="button" class="btn btn-success btn-sm ms-1">Success</button>
										<button type="button" class="btn btn-danger btn-sm ms-1">Danger</button>
										<button type="button" class="btn btn-warning btn-sm ms-1">Warning</button>
										<button type="button" class="btn btn-info btn-sm ms-1">Info</button>
										<button type="button" class="btn btn-light btn-sm ms-1">Light</button>
										<button type="button" class="btn btn-dark btn-sm">Dark</button>
									</p>
									<hr>
									<h5 class="card-title">Button Groups</h5>
									<div class="btn-toolbar">
										<div class="btn-group btn-group-lg">
											<button type="button" class="btn btn-primary">Left</button>
											<button type="button" class="btn btn-primary">Middle</button>
											<button type="button" class="btn btn-primary">Right</button>
										</div>
									</div>
									<br>
									<div class="btn-toolbar">
										<div class="btn-group">
											<button type="button" class="btn btn-primary">Left</button>
											<button type="button" class="btn btn-primary">Middle</button>
											<button type="button" class="btn btn-primary">Right</button>
										</div>
									</div>
									<br>
									<div class="btn-toolbar">
										<div class="btn-group btn-group-sm">
											<button type="button" class="btn btn-primary">Left</button>
											<button type="button" class="btn btn-primary">Middle</button>
											<button type="button" class="btn btn-primary">Right</button>
										</div>
									</div>
								</div>
							</div>
							
							<!-- Rounded Button -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Rounded Button</h5>
									<p class="card-text">use <code>.btn-rounded</code> in class <code>.btn</code> class to get Rounded button</p>
								</div>
								<div class="card-body">
									<button type="button" class="btn btn-rounded btn-primary">Primary</button>
									<button type="button" class="btn btn-rounded btn-secondary ms-1">Secondary</button>
									<button type="button" class="btn btn-rounded btn-success ms-1">Success</button>
									<button type="button" class="btn btn-rounded btn-danger ms-1">Danger</button>
									<button type="button" class="btn btn-rounded btn-warning ms-1">Warning</button>
									<button type="button" class="btn btn-rounded btn-info ms-1">Info</button>
									<button type="button" class="btn btn-rounded btn-light ms-1">Light</button>
									<button type="button" class="btn btn-rounded btn-dark">Dark</button>
									<hr>
									<p>use <code>.btn-rounded</code> in class <code>.btn-outline-*</code> class to get Rounded Outline button</p>
									<button type="button" class="btn btn-rounded btn-outline-primary">Primary</button>
									<button type="button" class="btn btn-rounded btn-outline-secondary ms-1">Secondary</button>
									<button type="button" class="btn btn-rounded btn-outline-success ms-1">Success</button>
									<button type="button" class="btn btn-rounded btn-outline-danger ms-1">Danger</button>
									<button type="button" class="btn btn-rounded btn-outline-warning ms-1">Warning</button>
									<button type="button" class="btn btn-rounded btn-outline-info ms-1">Info</button>
									<button type="button" class="btn btn-rounded btn-outline-light ms-1">Light</button>
									<button type="button" class="btn btn-rounded btn-outline-dark">Dark</button>
								</div>
							</div>
							<!-- /Rounded Button -->
							
							<!-- Outline Buttons -->
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Outline Buttons</h5>
									<p class="card-text">Use <code>.btn-outline-*</code> class for outline buttons.</p>
								</div>
								<div class="card-body">
									<div class="row row-sm align-items-center">
										<div class="col-12 col-xl mb-3">Normal</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-primary">Primary</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-secondary">Secondary</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-success">Success</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-warning">Warning</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-danger">Danger</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-info">Info</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-light">Light</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-dark">Dark</button>
										</div>
									</div>
									<div class="row row-sm align-items-center mt-3">
										<div class="col-12 col-xl mb-3">Active</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-primary active">Primary</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-secondary active">Secondary</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-success active">Success</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-warning active">Warning</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-danger active">Danger</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-info active">Info</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-light active">Light</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button type="button" class="btn w-100 btn-outline-dark active">Dark</button>
										</div>
									</div>
									<div class="row row-sm align-items-center mt-3">
										<div class="col-12 col-xl mb-3">Disabled</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button disabled="" type="button" class="btn w-100 btn-outline-primary">Primary</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button disabled="" type="button" class="btn w-100 btn-outline-secondary">Secondary</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button disabled="" type="button" class="btn w-100 btn-outline-success">Success</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button disabled="" type="button" class="btn w-100 btn-outline-warning">Warning</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button disabled="" type="button" class="btn w-100 btn-outline-danger">Danger</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button disabled="" type="button" class="btn w-100 btn-outline-info">Info</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button disabled="" type="button" class="btn w-100 btn-outline-light">Light</button>
										</div>
										<div class="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
											<button disabled="" type="button" class="btn w-100 btn-outline-dark">Dark</button>
										</div>
									</div>
								</div>
							</div>
							<!-- /Outline Buttons -->

							<!-- Progress Button -->
							<div class="card mb-4">
								<div class="card-header">
									<h5 class="card-title">Progress Button</h5>
								</div>
								<div class="card-body">
									<button type="button" class="btn btn-primary"><span class="spinner-border spinner-border-sm me-2" role="status"></span>Primary</button>
									<button type="button" class="btn btn-secondary ms-1"><span class="spinner-border spinner-border-sm me-2" role="status"></span>Secondary</button>
									<button type="button" class="btn btn-success ms-1"><span class="spinner-border spinner-border-sm me-2" role="status"></span>Success</button>
									<button type="button" class="btn btn-danger ms-1"><span class="spinner-border spinner-border-sm me-2" role="status"></span>Danger</button>
									<button type="button" class="btn btn-warning ms-1"><span class="spinner-border spinner-border-sm me-2" role="status"></span>Warning</button>
									<button type="button" class="btn btn-info ms-1"><span class="spinner-border spinner-border-sm me-2" role="status"></span>Info</button>
									<button type="button" class="btn btn-dark"><span class="spinner-border spinner-border-sm me-2" role="status"></span>Dark</button>
								</div>
							</div>
							<!-- /Progress Button -->
						</section>
						<!-- Buttons -->
						
						<!-- Cards -->
						<section class="comp-section comp-cards">
							<div class="section-header">
                                <h3 class="section-title">Cards</h3>
                                <div class="line"></div>
                            </div>
						
							<div class="row">
								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<img alt="Card Image" src="../../../../../assets/admin_img/img-01.jpg" class="card-img-top">
										<div class="card-header">
											<h5 class="card-title mb-0">Card with image and links</h5>
										</div>
										<div class="card-body">
											<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											<a class="card-link" href="javascript:void(0);">Card link</a>
											<a class="card-link" href="javascript:void(0);">Another link</a>
										</div>
									</div>
								</div>

								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<img alt="Card Image" src="../../../../../assets/admin_img/img-01.jpg" class="card-img-top">
										<div class="card-header">
											<h5 class="card-title mb-0">Card with image and button</h5>
										</div>
										<div class="card-body">
											<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											<a class="btn btn-primary" href="javascript:void(0);">Go somewhere</a>
										</div>
									</div>
								</div>

								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<img alt="Card Image" src="../../../../../assets/admin_img/img-01.jpg" class="card-img-top">
										<div class="card-header">
											<h5 class="card-title mb-0">Card with image and list</h5>
										</div>
										<ul class="list-group list-group-flush">
											<li class="list-group-item">Cras justo odio</li>
											<li class="list-group-item">Dapibus ac facilisis in</li>
											<li class="list-group-item">Vestibulum at eros</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h5 class="card-title mb-0">Card with links</h5>
										</div>
										<div class="card-body">
											<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											<a class="card-link" href="javascript:void(0);">Card link</a>
											<a class="card-link" href="javascript:void(0);">Another link</a>
										</div>
									</div>
								</div>

								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h5 class="card-title mb-0">Card with button</h5>
										</div>
										<div class="card-body">
											<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											<a class="btn btn-primary" href="javascript:void(0);">Go somewhere</a>
										</div>
									</div>
								</div>

								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h5 class="card-title mb-0">Card with list</h5>
										</div>
										<ul class="list-group list-group-flush">
											<li class="list-group-item">Cras justo odio</li>
											<li class="list-group-item">Dapibus ac facilisis in</li>
											<li class="list-group-item">Vestibulum at eros</li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											This is my header
										</div>
										<div class="card-body">
											<h5 class="card-title">Special title treatment</h5>
											<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										</div>
										<div class="card-footer text-muted">
											This is my footer
										</div>
									</div>
								</div>

								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<ul role="tablist" class="nav nav-tabs card-header-tabs float-right">
												<li class="nav-item">
													<a href="#tab-1" data-bs-toggle="tab" class="nav-link active">Active</a>
												</li>
												<li class="nav-item">
													<a href="#tab-2" data-bs-toggle="tab" class="nav-link">Link</a>
												</li>
												<li class="nav-item">
													<a href="#tab-3" data-bs-toggle="tab" class="nav-link disabled">Disabled</a>
												</li>
											</ul>
										</div>
										<div class="card-body">
											<div class="tab-content pt-0">
												<div role="tabpanel" id="tab-1" class="tab-pane fade show active">
													<h5 class="card-title">Card with tabs</h5>
													<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<a class="btn btn-primary" href="javascript:void(0);">Go somewhere</a>
												</div>
												<div role="tabpanel" id="tab-2" class="tab-pane fade text-center">
													<h5 class="card-title">Card with tabs</h5>
													<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<a class="btn btn-primary" href="javascript:void(0);">Go somewhere</a>
												</div>
												<div role="tabpanel" id="tab-3" class="tab-pane fade">
													<h5 class="card-title">Card with tabs</h5>
													<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<a class="btn btn-primary" href="javascript:void(0);">Go somewhere</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<ul role="tablist" class="nav nav-pills card-header-pills float-right">
												<li class="nav-item">
													<a href="#tab-4" data-bs-toggle="tab" class="nav-link active">Active</a>
												</li>
												<li class="nav-item">
													<a href="#tab-5" data-bs-toggle="tab" class="nav-link">Link</a>
												</li>
												<li class="nav-item">
													<a href="#tab-6" data-bs-toggle="tab" class="nav-link disabled">Disabled</a>
												</li>
											</ul>
										</div>
										<div class="card-body">
											<div class="tab-content pt-0">
												<div role="tabpanel" id="tab-4" class="tab-pane fade show active">
													<h5 class="card-title">Card with pills</h5>
													<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<a class="btn btn-primary" href="javascript:void(0);">Go somewhere</a>
												</div>
												<div role="tabpanel" id="tab-5" class="tab-pane fade text-center">
													<h5 class="card-title">Card with pills</h5>
													<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<a class="btn btn-primary" href="javascript:void(0);">Go somewhere</a>
												</div>
												<div role="tabpanel" id="tab-6" class="tab-pane fade">
													<h5 class="card-title">Card with pills</h5>
													<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<a class="btn btn-primary" href="javascript:void(0);">Go somewhere</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<!-- /Cards -->
</template>