<template>
    <div>
        <div class="main-wrapper">

          <layout-headerpharamcy></layout-headerpharamcy>

          <layout-sidebarpharmacy></layout-sidebarpharmacy>

          <!-- Page Wrapper -->
          <div class="page-wrapper">
            <div class="content container-fluid">
            
                <!-- Page Header -->
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12 col-auto">
                            <h3 class="page-title">Sales</h3>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->

                <div class="row">
                    <div class="col-md-12">
                    
                        <!-- Recent Orders -->
                        <div class="card">
                            <div class="card-header border-bottom-0">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h5 class="card-title">Sales List</h5>
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
                                    <table class="datatable table table-borderless hover-table" id="sales">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Invoice No</th>
                                                <th>Medicine Name</th>
                                                <th>Total Price</th>
                                                <th>Date</th>
                                                <th class="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in sales" :key="item.id">
                                                <td>{{item.no}}</td>
                                                <td>{{item.user}}</td>
                                                <td>{{item.rate}}</td>
                                                <td>{{item.date}}</td>
                                                <td class="text-end">
                                                    <div class="actions">
                                                        <a class="text-black" data-bs-toggle="modal" href="#edit_invoice_report">
                                                            <i class="feather-edit-3 me-1"></i> Edit
                                                        </a>
                                                        <router-link class="text-black" to="/pharmacyadmin/invoice">
                                                            <i class="fas fa-file-alt me-1"></i> Invoice
                                                        </router-link>
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
                        <!-- /Recent Orders -->
                        
                    </div>
                </div>
            </div>			
        </div>
        <!-- /Page Wrapper -->

        </div>

        <!-- Edit Details Modal -->
		<div class="modal fade" id="edit_invoice_report" aria-hidden="true" role="dialog">
			<div class="modal-dialog modal-dialog-centered" role="document" >
				<div class="modal-content doctor-profile">
					<div class="modal-header">
						<h5 class="modal-title">Edit Invoice Report</h5>
						<button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="row form-row">
								<div class="col-md-6">
									<div class="form-group">
										<label>Invoice Number</label>
										<input type="text" class="form-control" value="20169998">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Medicine Name</label>
										<input type="text" class="form-control" value="Abilify">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Total Amount</label>
										<input type="text" class="form-control" value="$150.00">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label>Created Date</label>
										<input type="text" class="form-control" value="14-5-2020">
									</div>
								</div>
							</div>
							<button type="submit" class="btn btn-primary w-100">Save Changes</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Details Modal -->
		
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
							<p>“Sales”</p>
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
    import sales from '../../../assets/json/pharmacyadmin/sales.json';
    import util from '../../../assets/utils/util'
    export default {
        data() {
            return {
                sales: sales
            }
        },
        mounted() {
        util.datatable('#sales')
        }
    }
    </script>
    
  