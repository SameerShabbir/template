<template>
<!-- Modals -->
						<section class="comp-section">
							<div class="comp-header">
                                <h3 class="comp-title">Modals</h3>
                                <div class="line"></div>
                            </div>
                            <div class="card">
                            	<div class="card-header">
									<h4 class="card-title">Modal components</h4>
								</div>
                            	<div class="card-body">
                            		<p>Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
                            		<div class="modal-1 static-modal" tabindex="-1" role="dialog">
	                                    <div class="modal-dialog mb-2" role="document">
	                                        <div class="modal-content">
	                                            <div class="modal-header">
	                                                <h5 class="modal-title mt-0">Modal title</h5>
	                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	                                            </div>
	                                            <div class="modal-body">
	                                                <p>Modal body text goes here.</p>
	                                            </div>
	                                            <div class="modal-footer">
	                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	                                                <button type="button" class="btn btn-primary">Save changes</button>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
                            	</div>
                            </div>

                            <div class="card">
                            	<div class="card-header">
									<h4 class="card-title">Basic Modal</h4>
								</div>
                            	<div class="card-body">
	              					<!-- Simple demo-->
					                <button class="btn btn-primary me-1" type="button" data-bs-toggle="modal" data-original-title="test" data-bs-target="#exampleModal">Simple</button>
				                    <!-- Scrolling long content-->
				                    <button class="btn btn-primary me-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalLong" data-original-title="" title="">Scrolling long content</button>
				                    <!-- Vertically centered modal-->
				                    <button class="btn btn-primary me-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" data-original-title="" title="">Vertically centered</button>
				                    <!-- Tooltips and popovers modal-->
				                    <button class="btn btn-primary me-1" type="button" data-bs-toggle="modal" data-bs-target="#tooltipmodal" data-original-title="" title="">Tooltips and popovers</button>
				                    <!-- Using the grid modal-->
				                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#grid-modal" data-original-title="" title="">Using the grid</button>
				                </div>
                            </div>
                 

                            <div class="card">
                            	<div class="card-header">
									<h4 class="card-title">Varying modal content</h4>
								</div>
                            	<div class="card-body btn-showcase">
			                    	<button class="btn btn-primary me-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalfat" data-whatever="@mdo" data-original-title="" title="">Open modal for @mdo</button>
			                    	<button class="btn btn-primary me-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalmdo" data-whatever="@fat" data-original-title="" title="">Open modal for @fat</button>
			                    	<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalgetbootstrap" data-whatever="@getbootstrap" data-original-title="" title="">Open modal for @getbootstrap</button>
			                  </div>
                            </div>

                            <div class="card">
                            	<div class="card-header">
									<h4 class="card-title">Sizes modal</h4>
								</div>
								<div class="card-body">
									<!-- Extra Large modal -->
									<button type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target=".bd-example-modal-xl">Extra large modal</button>

				                    <!-- Large modal-->
				                    <button class="btn btn-primary me-1" type="button" data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg" data-original-title="" title="">Large modal</button>
				                    	
				                    <!-- Small modal-->
				                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target=".bd-example-modal-sm" data-original-title="" title="">Small modal</button>
			                  	</div>
							</div>

                        </section>
						<!-- /Modals -->

						<!-- Pagination -->
						<section class="comp-section">
							<div class="comp-header">
                                <h3 class="comp-title">Pagination</h3>
                                <div class="line"></div>
                            </div>
								<div class="card">
								<div class="card-body">
									<div>
										<ul class="pagination">
											<li class="page-item disabled">
												<a class="page-link" href="javascript:void(0);" tabindex="-1">Previous</a>
											</li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
											<li class="page-item active">
												<a class="page-link" href="javascript:void(0);">2 <span class="visually-hidden">(current)</span></a>
											</li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
											<li class="page-item">
												<a class="page-link" href="javascript:void(0);">Next</a>
											</li>
										</ul>
									</div>
									<div>
										<ul class="pagination">
											<li class="page-item">
												<a class="page-link" href="javascript:void(0);" aria-label="Previous">
													<span aria-hidden="true">&laquo;</span>
													<span class="visually-hidden">Previous</span>
												</a>
											</li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
											<li class="page-item">
												<a class="page-link" href="javascript:void(0);" aria-label="Next">
													<span aria-hidden="true">&raquo;</span>
												<span class="visually-hidden">Next</span>
												</a>
											</li>
										</ul>
									</div>
									<div>
										<ul class="pagination pagination-lg">
											<li class="page-item disabled">
												<a class="page-link" href="javascript:void(0);" tabindex="-1">Previous</a>
											</li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
											<li class="page-item active">
												<a class="page-link" href="javascript:void(0);">2 <span class="visually-hidden">(current)</span></a>
											</li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
											<li class="page-item">
												<a class="page-link" href="javascript:void(0);">Next</a>
											</li>
										</ul>
									</div>
									
									<div>
										<ul class="pagination pagination-sm mb-0">
											<li class="page-item disabled">
												<a class="page-link" href="javascript:void(0);" tabindex="-1">Previous</a>
											</li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
											<li class="page-item active">
												<a class="page-link" href="javascript:void(0);">2 <span class="visually-hidden">(current)</span></a>
											</li>
											<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
											<li class="page-item">
												<a class="page-link" href="javascript:void(0);">Next</a>
											</li>
										</ul>
									</div>
								</div>
								</div>
						</section>
						<!-- /Pagination -->
</template>