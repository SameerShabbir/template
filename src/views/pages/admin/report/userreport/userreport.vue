<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid content-wrap">
					
					<!-- User Reports -->
					<div class="row">
						<div class="col-sm-12">
							
                            <userheader></userheader>
							
							<div class="card">
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">User Reports</h5>
										</div>
										<div class="col-auto d-flex">
											<div class="form-custom me-2">
												<div id="tableSearch"  class="dataTables_wrapper"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-body p-0">				
									<div class="table-responsive">									
										<table class="datatable table table-borderless hover-table" id="data-table">
											<thead class="thead-light">
												<tr>
												   <th>ID</th>
												   <th>Patient Name</th>
												   <th>Number of Appointments</th>
												   <th>Total Amount</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in userreport" :key="item.id">
													<td>{{item.idno}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile"><img class="avatar avatar-img" :src="loadImg(item.img)" alt="User Image"></router-link>
															<router-link to="/admin/profile"><span class="user-name">{{item.name}}</span></router-link>
														</h2>
													</td>
													<td>{{item.amt}}</td>
													<td>{{item.rate}}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
					
							<div id="tablepagination"  class="dataTables_wrapper"></div>
			
						</div>
					</div>
					<!-- /User Reports -->
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
    import userreport from '../../../../../assets/json/admin/userreport.json';
    import util from '../../../../../assets/utils/util'
    const images = require.context('../../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
	import Vue from 'vue'
	export default {
	  data() {
	  return {
        userreport: userreport
	  }
	  },
	  components: {
	 
	  },
	  mounted() {
        util.datatable('#data-table')

	//Checkbox Select
	
	if($('.multipleSelection').length > 0) {
		var show = true;
		var checkboxes = document.getElementById("checkBoxes");
		$('.selectBox').on("click", function() {
			
			if (show) {
				checkboxes.style.display = "block";
				show = false;
			} else {
				checkboxes.style.display = "none";
				show = true;
			}
		});
		
	}

	//Checkbox Select
	
	if($('.SortBy').length > 0) {
		var show = true;
		var checkbox1 = document.getElementById("checkBox");
		$('.selectBoxes').on("click", function() {
			
			if (show) {
				checkbox1.style.display = "block";
				show = false;
			} else {
				checkbox1.style.display = "none";
				show = true;
			}
		});		
	}
	  },
      methods: {
            loadImg(imgPath) {
                return images('./' + imgPath).default
            }
            
        },
	}
  </Script>
  