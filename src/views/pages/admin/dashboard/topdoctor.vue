<template>
						<div class="col-lg-4">
							<div class="card">
								<div class="card-header">
									<div class="row">
										<div class="col">
											<h5 class="card-title">Top Doctors</h5>
										</div>
									</div>
								</div>
								<div class="card-body p-0">
									<div class="table-responsive">
										<table class="table doc-table">
											<tbody>
												<tr>
													<td>
														<h2 class="table-avatar">
															<router-link class="avatar-pos avatar-online" to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></router-link>
															<a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Rayan</span> <span class="tab-subtext">Gyanoclogist</span></a>
														</h2>
													</td>
													<td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.5</span></td>
													<td class="text-right"><span class="text-muted">200 Patients</span></td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<router-link class="avatar-pos avatar-online" to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-10.jpg" alt="User Image"></router-link>
															<a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Bea</span> <span class="tab-subtext">Dentist</span></a>
														</h2>
													</td>
													<td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.9</span></td>
													<td class="text-right"><span class="text-muted">180 Patients</span></td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<router-link class="avatar-pos avatar-offline" to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-11.jpg" alt="User Image"></router-link>
															<a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Monroe</span> <span class="tab-subtext">Hair Specialities</span></a>
														</h2>
													</td>
													<td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.8</span></td>
													<td class="text-right"><span class="text-muted">160 Patients</span></td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<router-link class="avatar-pos avatar-offline" to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-13.jpg" alt="User Image"></router-link>
															<a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Lester</span> <span class="tab-subtext">Orthopaedics</span></a>
														</h2>
													</td>
													<td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.7</span></td>
													<td class="text-right"><span class="text-muted">140 Patients</span></td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<router-link class="empty-user" to="/admin/profile"><i class="feather-user"></i> </router-link>
															<a href="javascript:void(0);" class="user-name"><span class="text-muted">Dr. Clint</span> <span class="tab-subtext">Neurology</span></a>
														</h2>
													</td>
													<td><span class="table-rating"><i class="fas fa-star me-2"></i> 4.6</span></td>
													<td class="text-right"><span class="text-muted">120 Patients</span></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
</template>