<template>
        <div class="main-wrapper">

          <layout-headerpharamcy></layout-headerpharamcy>

          <layout-sidebarpharmacy></layout-sidebarpharmacy>

          <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
					
					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col-sm-7 col-auto">
								<h3 class="page-title">Customer Order</h3>
							</div>
						</div>
					</div>
					<!-- /Page Header -->

					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-header border-bottom-0">
									<div class="row align-items-center">
										<div class="col">
											<h5 class="card-title">Customer Order List</h5>
										</div>
										<div class="col-auto custom-list d-flex">
											<div class="form-custom me-2">
												<div id="tableSearch"  class="dataTables_wrapper"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-body p-0">
									<div class="table-responsive">
										<table class="datatable table table-borderless hover-table" id="customerorder">
											<thead class="thead-light">
												<tr>
													<th>Purchase Date</th>
													<th>Medicine Name</th>
													<th>Medicine Category</th>
													<th>Purchase Price</th>
													<th>Quantity</th>
													<th>Supplier</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in customerorder" :key="item.id">
													<td>{{item.date}}</td>
													<td>
														<h2 class="table-avatar">
															<a href="javascript:void(0);"><img class="avatar avatar-img" :src="loadImg(item.img)" alt="User Image"> {{item.name}}</a>
														</h2>
													</td>
													<td>{{item.user}}</td>
													<td>{{item.rate}}</td>
													<td>{{item.amount}}</td>
													<td>{{item.detail}}</td>
													<td class="text-end">
														<div class="actions">
															<a  data-bs-toggle="modal" href="#delete_modal" class="text-danger">
																<i class="feather-trash-2 me-1"></i> Delete
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div id="tablepagination"  class="dataTables_wrapper"></div>
						</div>			
					</div>
				</div>			
			</div>
			<!-- /Page Wrapper -->
			
			<!-- Delete Modal -->
			<div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content doctor-profile">
						<div class="modal-header border-bottom-0 justify-content-end">
							<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
						</div>
						<div class="modal-body">
							<div class="delete-wrap text-center">
								<div class="del-icon"><i class="feather-x-circle"></i></div>
								<h2>Sure you Want to delete</h2>
								<p>“Order”</p>
								<div class="submit-section">
									<router-link to="/pharmacyadmin/product-category" class="btn btn-success me-2">Yes</router-link>
									<a href="javascript:void(0);" class="btn btn-danger" data-bs-dismiss="modal">No</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Delete Modal -->
          
        </div>
</template>
<script>
    import customerorder from '../../../../assets/json/pharmacyadmin/customerorder.json';
    import util from '../../../../assets/utils/util'
    const images = require.context('../../../../assets/pharmacy_img/products', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                customerorder: customerorder
            }
        },
        mounted() {
        util.datatable('#customerorder')
        },
        methods: {
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
            
        },
    }
    </script>
    
  