<template>
        <div class="main-wrapper">

          <layout-headerpharamcy></layout-headerpharamcy>

          <layout-sidebarpharmacy></layout-sidebarpharmacy>

         <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid pb-0">
					
					<h4 class="mb-3">Overview</h4>
					
					<widgetpharmacy></widgetpharmacy>
					
					<div class="row">
						
						<appointmentchart></appointmentchart>
						
						<incomechart></incomechart>

					</div>
					
					<div class="row">
						<!-- Recent Activities -->
						<div class="col-lg-12">
							<div class="card">
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Latest Customers</h5>
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
												   <th>#</th>
												   <th>Name</th>
												   <th>Address</th>
												   <th>Telephone</th>
												   <th>Email</th>
												   <th class="text-end">Date added</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in pharmacydashboard" :key="item.id">
													<td>01</td>
													<td><router-link to="/pharmacyadmin/profile">Ruby Perrin</router-link></td>
													<td>takrakka</td>
													<td>+54 1245463984</td>
													<td>rubyperring@example.com</td>
													<td class="text-end">April 14, 2022</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<!-- /Recent Activities -->
					</div>
					
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>  
<script>
    import pharmacydashboard from '../../../../assets/json/pharmacyadmin/pharmacydashboard.json';
    export default {
        data() {
            return {
                pharmacydashboard: pharmacydashboard
            }
        },
        mounted() {
        }
    }
    </script>