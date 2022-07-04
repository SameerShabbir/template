<template>
<div class="card">
								<div class="card-header">
									<h5 class="card-title">Supported elements</h5>
									<p class="card-text">Form validation styles are also available for bootstrap custom form controls.</p>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-sm">
											<form class="was-validated">
												<div class="custom-control form-check mb-3">
													<input type="checkbox" class="form-check-input" id="customControlValidation1" required>
													<label class="form-check-label" for="customControlValidation1">Check this custom checkbox</label>
													<div class="invalid-feedback">Example invalid feedback text</div>
												</div>
												<div class="custom-control form-check">
													<input type="radio" class="form-check-input" id="customControlValidation2" name="radio-stacked" required>
													<label class="form-check-label" for="customControlValidation2">Toggle this custom radio</label>
												</div>
												<div class="custom-control form-check mb-3">
													<input type="radio" class="form-check-input" id="customControlValidation3" name="radio-stacked" required>
													<label class="form-check-label" for="customControlValidation3">Or toggle this other custom radio</label>
													<div class="invalid-feedback">More example invalid feedback text</div>
												</div>
												<div class="form-group">
													<select class="form-select" required>
														<option value="">Open this select menu</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
													<div class="invalid-feedback">Example invalid custom select feedback</div>
												</div>

												<div class="form-group">
													<input type="file" class="form-control" id="validatedCustomFile" required>
													<div class="invalid-feedback">Example invalid custom file feedback</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
</template>