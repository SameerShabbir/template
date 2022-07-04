<template>
<!-- Payment Accordion -->
								<div class="accordion-item">
									<div class="accordion-header" id="paymentOne">
										<div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
											<label class="toggle-switch" for="email1">
												<input type="checkbox" class="toggle-switch-input" id="email1" checked>
												<span class="toggle-switch-label">
													<span class="toggle-switch-indicator"></span>
												</span>
											</label>
											<span class="accord-title">Stripe</span>
										</div>
									</div>
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="paymentOne" data-bs-parent="#payment">
										<div class="accordion-body p-0">
											<div class="payment-item">
												<div class="row align-items-center">
													<div class="col-md-2 text-right">
														<h6 class="head-title">Stripe Option</h6>
													</div>
													<div class="col-md-4">
														<label class="custom_radio w-100">
															<input type="radio" name="del_acc" checked>
															<span class="checkmark"></span> Live
														</label>
														<label class="custom_radio w-100">
															<input type="radio" name="del_acc">
															<span class="checkmark"></span> Sandbox
														</label>
													</div>
												</div>
											</div>
											<div class="payment-item">
												<div class="row align-items-center">
													<div class="col-md-2 text-right">
														<h6 class="head-title">Gateway Name</h6>
													</div>
													<div class="col-md-4">
														<div class="form-group mb-0">
															<input type="text" class="form-control" value="Stripe">
														</div>
													</div>
												</div>
											</div>
											<div class="payment-item">
												<div class="row align-items-center">
													<div class="col-md-2 text-right">
														<h6 class="head-title">API Key</h6>
													</div>
													<div class="col-md-4">
														<div class="form-group mb-0">
															<input type="text" class="form-control" value="pk_live_Hu79b4EVkFuCkEXNrLVQ7JTv000ibhh2NX">
														</div>
													</div>
												</div>
											</div>
											<div class="payment-item">
												<div class="row align-items-center">
													<div class="col-md-2 text-right">
														<h6 class="head-title">Rest Key</h6>
													</div>
													<div class="col-md-4">
														<div class="form-group mb-0">
															<input type="text" class="form-control" value="sk_live_juEOItnRuTNTkHuijyJCdSdt">
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- /Payment Accordion -->
								
								<!-- Payment Accordion -->
								<div class="accordion-item">
									<div class="accordion-header" id="paymentOnes">
										<div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOnes">
											<label class="toggle-switch" for="email2">
												<input type="checkbox" class="toggle-switch-input" id="email2">
												<span class="toggle-switch-label">
													<span class="toggle-switch-indicator"></span>
												</span>
											</label>
											<span class="accord-title">Razorpay</span>
										</div>
									</div>
									<div id="collapseOnes" class="accordion-collapse collapse" aria-labelledby="paymentOnes" data-bs-parent="#payment">
										<div class="accordion-body p-0">
											<div class="payment-item">
												<div class="row align-items-center">
													<div class="col-md-2 text-right">
														<h6 class="head-title">Stripe Option</h6>
													</div>
													<div class="col-md-4">
														<label class="custom_radio w-100">
															<input type="radio" name="razor" checked>
															<span class="checkmark"></span> Live
														</label>
														<label class="custom_radio w-100">
															<input type="radio" name="razor">
															<span class="checkmark"></span> Sandbox
														</label>
													</div>
												</div>
											</div>
											<div class="payment-item">
												<div class="row align-items-center">
													<div class="col-md-2 text-right">
														<h6 class="head-title">Gateway Name</h6>
													</div>
													<div class="col-md-4">
														<div class="form-group mb-0">
															<input type="text" class="form-control" value="Stripe">
														</div>
													</div>
												</div>
											</div>
											<div class="payment-item">
												<div class="row align-items-center">
													<div class="col-md-2 text-right">
														<h6 class="head-title">API Key</h6>
													</div>
													<div class="col-md-4">
														<div class="form-group mb-0">
															<input type="text" class="form-control" value="pk_live_Hu79b4EVkFuCkEXNrLVQ7JTv000ibhh2NX">
														</div>
													</div>
												</div>
											</div>
											<div class="payment-item">
												<div class="row align-items-center">
													<div class="col-md-2 text-right">
														<h6 class="head-title">Rest Key</h6>
													</div>
													<div class="col-md-4">
														<div class="form-group mb-0">
															<input type="text" class="form-control" value="sk_live_juEOItnRuTNTkHuijyJCdSdt">
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- /Payment Accordion -->
</template>