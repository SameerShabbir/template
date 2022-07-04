<template>
<!-- Prescription Item -->
									<div class="card card-table">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center">
													<thead>
														<tr>
															<th style="min-width: 200px">Name</th>
															<th style="min-width: 80px;">Quantity</th>
															<th style="min-width: 80px">Days</th>
															<th style="min-width: 100px;">Time</th>
															<th style="min-width: 80px;"></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<input class="form-control" type="text">
															</td>
															<td>
																<input class="form-control" type="text">
															</td>
															<td>
																<input class="form-control" type="text">
															</td>
															<td>
																<div class="form-check form-check-inline">
																	<label class="form-check-label">
																		<input class="form-check-input" type="checkbox"> Morning
																	</label>
																</div>
																<div class="form-check form-check-inline">
																	<label class="form-check-label">
																		<input class="form-check-input" type="checkbox"> Afternoon
																	</label>
																</div>
																<div class="form-check form-check-inline">
																	<label class="form-check-label">
																		<input class="form-check-input" type="checkbox"> Evening
																	</label>
																</div>
																<div class="form-check form-check-inline">
																	<label class="form-check-label">
																		<input class="form-check-input" type="checkbox"> Night
																	</label>
																</div>
															</td>
															<td>
																<a href="javascript:void(0);" class="btn bg-danger-light trash"><i class="far fa-trash-alt"></i></a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<!-- /Prescription Item -->
</template>