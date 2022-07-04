<template>
<div class="col-lg-8">
							<div class="card">
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Recent Patient Activity</h5>
										</div>
										<div class="col-auto d-flex">
											<div class="bookingrange btn btn-white btn-sm">
												<div class="cal-ico">
													<span>Select Date</span>
													<i class="feather-chevron-down ms-1"></i>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-body p-0">				
									<div class="table-responsive">									
										<table class="table table-borderless hover-table">
											<thead class="thead-light">
												<tr>
												   <th>ID</th>
												   <th>Patient</th>
												   <th>Disease</th>
												   <th>Member since </th>
												   <th>Status</th>
												   <th class="text-right"></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-07.jpg" alt="User Image"></router-link>
															<a href="javascript:void(0);" class="user-name">Bess Twishes <span class="text-muted">Male, 40 Years Old</span></a>
														</h2>
													</td>
													<td><span class="disease-name">Allergies & Asthma</span></td>
													<td>
														<span class="text-yellow user-name">New Patient</span>
														<span class="d-block">23 Nov 2020</span>
													</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Enabled</span></td>
													<td class="text-right">
														<i class="feather-chevron-right"></i>
													</td>
												</tr>
												<tr>
													<td>#8774</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-04.jpg" alt="User Image"></router-link>
															<a href="javascript:void(0);" class="user-name">Bess Twishes <span class="text-muted">Female,30 Years Old</span></a>
														</h2>
													</td>
													<td><span class="disease-name">Sleep Problem</span></td>
													<td>
														<span class="text-danger user-name">Old Patient</span>
														<span class="d-block">23 Nov 2020</span>
													</td>
													<td><span class="badge bg-badge-grey text-danger"><i class="fas fa-circle me-1"></i> Disabled</span></td>
													<td class="text-right">
														<i class="feather-chevron-right"></i>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-02.jpg" alt="User Image"></router-link>
															<a href="javascript:void(0);" class="user-name">Abdul Aziz Lazis <span class="text-muted">Male, 25 Years Old</span></a>
														</h2>
													</td>
													<td><span class="disease-name">Tooth Pain</span></td>
													<td>
														<span class="text-danger user-name">Old Patient</span>
														<span class="d-block">23 Nov 2020</span>
													</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Enabled</span></td>
													<td class="text-right">
														<i class="feather-chevron-right"></i>
													</td>
												</tr>
												<tr>
													<td>#4546</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" src="../../../../assets/admin_img/profiles/avatar-05.jpg" alt="User Image"></router-link>
															<a href="javascript:void(0);" class="user-name">Alex Siauw <span class="text-muted">Male, 29 Years Old</span></a>
														</h2>
													</td>
													<td><span class="disease-name">Pain  on knee</span></td>
													<td>
														<span class="text-yellow user-name">New Patient</span>
														<span class="d-block">23 Nov 2020</span>
													</td>
													<td><span class="badge bg-badge-grey text-success"><i class="fas fa-circle me-1"></i> Enabled</span></td>
													<td class="text-right">
														<i class="feather-chevron-right"></i>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
</template>