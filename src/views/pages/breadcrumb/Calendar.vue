<template>
<!-- Breadcrumb -->
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
									<li class="breadcrumb-item active" aria-current="page">Calendar</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">Calendar</h2>
						</div>
						<div class="col-auto text-end float-end ms-auto">
							<a href="javascript:void(0);" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#add_event">Create Event</a>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
</template>