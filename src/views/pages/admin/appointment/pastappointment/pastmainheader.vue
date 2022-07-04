<template>
<!-- Page Header -->
					<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<ul class="list-links">
									<li><router-link to="/admin/upcoming-appointments">Upcoming Appointments <span>(48)</span></router-link></li>
									<li class="active"><router-link to="/admin/past-appointments">Past Appointments <span>(98)</span></router-link></li>
								</ul>
							</div>
							<div class="col-auto">
								<div class="bookingrange btn btn-white btn-sm">
									<div class="cal-ico">
										<i class="feather-calendar mr-1"></i>
										<span>Select Date</span>
									</div>
									<div class="ico">
										<i class="fas fa-chevron-left"></i>
										<i class="fas fa-chevron-right"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
</template>