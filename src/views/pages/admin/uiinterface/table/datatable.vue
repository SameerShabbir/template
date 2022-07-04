<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">Data Tables</h3>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Datatable -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Default Datatable</h4>
									<p class="card-text">
										This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
									</p>
								</div>
								<div class="card-body">
									<div class="table-responsive">
										<table class="datatable table table-stripped" id="data-tables">
											<thead>
												<tr>
													<th>Name</th>
													<th>Position</th>
													<th>Office</th>
													<th>Age</th>
													<th>Start date</th>
													<th>Salary</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in datatable" :key="item.id">
													<td>{{item.name}}</td>
													<td>{{item.position}}</td>
													<td>{{item.office}}</td>
													<td>{{item.age}}</td>
													<td>{{item.startdate}}</td>
													<td>{{item.salary}}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Datatable -->
					
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
    import datatable from '../../../../../assets/json/admin/datatable.json';
    import util from '../../../../../assets/utils/util'
    export default {
        data() {
            return {
                datatable: datatable
            }
        },
        mounted() {
        util.datatable('#data-tables')
        }
    }
    </script>
  