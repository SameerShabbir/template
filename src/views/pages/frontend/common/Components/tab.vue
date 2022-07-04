<template>
<!-- Tabs -->
						<section class="comp-section">
							<div class="comp-header">
                                <h3 class="comp-title">Tabs</h3>
                                <div class="line"></div>
                            </div>
							<div class="row">
								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Basic tabs</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs">
												<li class="nav-item"><a class="nav-link active" href="#basictab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#basictab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#basictab3" data-bs-toggle="tab">Messages</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="basictab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="basictab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="basictab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Basic justified tabs</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-justified">
												<li class="nav-item"><a class="nav-link active" href="#basic-justified-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#basic-justified-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item dropdown">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">Dropdown</a>
													<div class="dropdown-menu dropdown-menu-end">
														<a class="dropdown-item" href="#basic-justified-tab3" data-bs-toggle="tab">Dropdown 1</a>
														<a class="dropdown-item" href="#basic-justified-tab4" data-bs-toggle="tab">Dropdown 2</a>
													</div>
												</li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="basic-justified-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="basic-justified-tab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="basic-justified-tab3">
													Tab content 3
												</div>
												<div class="tab-pane" id="basic-justified-tab4">
													Tab content 4
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Top line tabs</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-tabs-top">
												<li class="nav-item"><a class="nav-link active" href="#top-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#top-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#top-tab3" data-bs-toggle="tab">Messages</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="top-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="top-tab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="top-tab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Top line justified</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-tabs-top nav-justified">
												<li class="nav-item"><a class="nav-link active" href="#top-justified-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#top-justified-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#top-justified-tab3" data-bs-toggle="tab">Messages</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="top-justified-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="top-justified-tab2">
													Tab content 2
												</div>

												<div class="tab-pane" id="top-justified-tab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Bottom line tabs</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-tabs-bottom">
												<li class="nav-item"><a class="nav-link active" href="#bottom-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#bottom-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#bottom-tab3" data-bs-toggle="tab">Messages</a></li>
											</ul>

											<div class="tab-content">
												<div class="tab-pane show active" id="bottom-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="bottom-tab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="bottom-tab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Bottom line justified</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
												<li class="nav-item"><a class="nav-link active" href="#bottom-justified-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#bottom-justified-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#bottom-justified-tab3" data-bs-toggle="tab">Messages</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="bottom-justified-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="bottom-justified-tab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="bottom-justified-tab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Solid tabs</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-tabs-solid">
												<li class="nav-item"><a class="nav-link active" href="#solid-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-tab3" data-bs-toggle="tab">Messages</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="solid-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="solid-tab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="solid-tab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Solid justified</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-tabs-solid nav-justified">
												<li class="nav-item"><a class="nav-link active" href="#solid-justified-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-justified-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-justified-tab3" data-bs-toggle="tab">Messages</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="solid-justified-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="solid-justified-tab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="solid-justified-tab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Solid Rounded</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
												<li class="nav-item"><a class="nav-link active" href="#solid-rounded-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-rounded-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-rounded-tab3" data-bs-toggle="tab">Messages</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="solid-rounded-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="solid-rounded-tab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="solid-rounded-tab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Rounded justified</h4>
										</div>
										<div class="card-body">
											<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
												<li class="nav-item"><a class="nav-link active" href="#solid-rounded-justified-tab1" data-bs-toggle="tab">Home</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-rounded-justified-tab2" data-bs-toggle="tab">Profile</a></li>
												<li class="nav-item"><a class="nav-link" href="#solid-rounded-justified-tab3" data-bs-toggle="tab">Messages</a></li>
											</ul>
											<div class="tab-content">
												<div class="tab-pane show active" id="solid-rounded-justified-tab1">
													Tab content 1
												</div>
												<div class="tab-pane" id="solid-rounded-justified-tab2">
													Tab content 2
												</div>
												<div class="tab-pane" id="solid-rounded-justified-tab3">
													Tab content 3
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<!-- /Tabs -->

						<!-- Typography -->
						<section class="comp-section">
							<div class="comp-header">
                                <h3 class="comp-title">Typography</h3>
                                <div class="line"></div>
                            </div>

							<div class="row">
								<div class="col-md-12">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Headings</h4>
										</div>
										<div class="card-body">
											<h1>h1. Bootstrap heading</h1>
											<h2>h2. Bootstrap heading</h2>
											<h3>h3. Bootstrap heading</h3>
											<h4>h4. Bootstrap heading</h4>
											<h5>h5. Bootstrap heading</h5>
											<h6>h6. Bootstrap heading</h6>
										</div>
									</div>
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Blockquotes</h4>
										</div>
										<div class="card-body">
											<blockquote>
												<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
											</blockquote>
											<blockquote class="blockquote mb-0">
												<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
											</blockquote>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h4 class="card-title">Text element</h4>
										</div>
										<div class="card-body">
											<p>You can use the mark tag to <mark>highlight</mark> text.</p>
											<p><del>This line of text is meant to be treated as deleted text.</del></p>
											<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
											<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
											<p><u>This line of text will render as underlined</u></p>
											<p><small>This line of text is meant to be treated as fine print.</small></p>
											<p><strong>This line rendered as bold text.</strong></p>
											<p><em>This line rendered as italicized text.</em></p>
											<p class="text-monospace mb-0">This is in monospace</p>
										</div>
									</div>
								</div>
								<div class="col-md-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h4 class="card-title">Coloured Link</h4>
										</div>
										<div class="card-body">
											<p class="text-primary">.text-primary</p>
											<p class="text-secondary">.text-secondary</p>
											<p class="text-success">.text-success</p>
											<p class="text-danger">.text-danger</p>
											<p class="text-warning">.text-warning</p>
											<p class="text-info">.text-info</p>
											<p class="text-light bg-dark">.text-light</p>
											<p class="text-dark">.text-dark</p>
											<p class="text-muted">.text-muted</p>
											<p class="text-white bg-dark mb-0">.text-white</p>
										</div>
									</div>
								</div>
								<div class="col-md-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h4 class="card-title">Coloured text</h4>
										</div>
										<div class="card-body">
											<p><a href="javascript:void(0);" class="text-primary">Primary link</a></p>
											<p><a href="javascript:void(0);" class="text-secondary">Secondary link</a></p>
											<p><a href="javascript:void(0);" class="text-success">Success link</a></p>
											<p><a href="javascript:void(0);" class="text-danger">Danger link</a></p>
											<p><a href="javascript:void(0);" class="text-warning">Warning link</a></p>
											<p><a href="javascript:void(0);" class="text-info">Info link</a></p>
											<p><a href="javascript:void(0);" class="text-light bg-dark">Light link</a></p>
											<p><a href="javascript:void(0);" class="text-dark">Dark link</a></p>
											<p><a href="javascript:void(0);" class="text-muted">Muted link</a></p>
											<p><a href="javascript:void(0);" class="text-white bg-dark mb-0">White link</a></p>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h4 class="card-title">Bullet Lists</h4>
										</div>
										<div class="card-body">
											<ul class="mb-0">
												<li>Lorem ipsum dolor sit amet</li>
												<li>Consectetur adipiscing elit</li>
												<li>Integer molestie lorem at massa</li>
												<li>Facilisis in pretium nisl aliquet</li>
												<li>Nulla volutpat aliquam velit
													<ul>
														<li>Phasellus iaculis neque</li>
														<li>Purus sodales ultricies</li>
														<li>Vestibulum laoreet porttitor sem</li>
														<li>Ac tristique libero volutpat at</li>
													</ul>
												</li>
												<li>Faucibus porta lacus fringilla vel</li>
												<li>Aenean sit amet erat nunc</li>
												<li>Eget porttitor lorem</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="col-md-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h4 class="card-title">Bullet Lists</h4>
										</div>
										<div class="card-body">
											<ol class="mb-0">
												<li>Lorem ipsum dolor sit amet</li>
												<li>Consectetur adipiscing elit</li>
												<li>Integer molestie lorem at massa</li>
												<li>Facilisis in pretium nisl aliquet</li>
												<li>Nulla volutpat aliquam velit
													<ul>
														<li>Phasellus iaculis neque</li>
														<li>Purus sodales ultricies</li>
														<li>Vestibulum laoreet porttitor sem</li>
														<li>Ac tristique libero volutpat at</li>
													</ul>
												</li>
												<li>Faucibus porta lacus fringilla vel</li>
												<li>Aenean sit amet erat nunc</li>
												<li>Eget porttitor lorem</li>
											</ol>
										</div>
									</div>
								</div>
								<div class="col-md-4 d-flex">
									<div class="card flex-fill">
										<div class="card-header">
											<h4 class="card-title">Unstyled Lists</h4>
										</div>
										<div class="card-body">
											<ul class="list-unstyled mb-0">
												<li>Lorem ipsum dolor sit amet</li>
												<li>Consectetur adipiscing elit</li>
												<li>Integer molestie lorem at massa</li>
												<li>Facilisis in pretium nisl aliquet</li>
												<li>Nulla volutpat aliquam velit
													<ul>
														<li>Phasellus iaculis neque</li>
														<li>Purus sodales ultricies</li>
														<li>Vestibulum laoreet porttitor sem</li>
														<li>Ac tristique libero volutpat at</li>
													</ul>
												</li>
												<li>Faucibus porta lacus fringilla vel</li>
												<li>Aenean sit amet erat nunc</li>
												<li>Eget porttitor lorem</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</section>
						<!-- /Typography -->
</template>