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
                        <div class="col-sm-12">
                            <h3 class="page-title">Invoice Reports</h3>
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
                                        <h5 class="card-title">Invoice Reports List</h5>
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
                                    <table class="datatable table table-borderless hover-table" id="pharmacyinvoicereport">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Invoice Number</th>
                                                <th>Medicine Name</th>
                                                <th>Total Amount</th>
                                                <th>Created Date</th>
                                                <th class="text-center">Status</th>
                                                <th class="text-end">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in pharmacyinvoicereport" :key="item.id">
                                                <td><router-link to="/pharmacyadmin/invoice">{{item.no}}</router-link></td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="javascript:void(0);"><img class="avatar avatar-img" :src="loadImg(item.img)" alt="User Image"> Abilify</a>
                                                    </h2>
                                                </td>
                                                <td>{{item.rate}}</td>
                                                <td>{{item.date}}</td>
                                                <td class="text-center">
                                                    <span class="badge rounded-pill bg-success inv-badge">{{item.status}}</span>
                                                </td>
                                                <td class="text-end">
                                                    <div class="actions">
                                                        <a class="text-black" data-bs-toggle="modal" href="#edit_specialities_details">
                                                            <i class="feather-edit-3 me-1"></i> Edit
                                                        </a>
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
        
        
        <!-- Edit Details Modal -->
        <div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                <div class="modal-content doctor-profile">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Invoice Report</h5>
                        <button type="button" class="close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="feather-x-circle"></i></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row form-row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Invoice Number</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Medicine Image</label>
                                        <div class="custom-file" id="customFile2">
                                            <label class="custom-file-upload">
                                                <input type="file" id="site_logo1" name="site_logo1">
                                                <span class="file-upload-text"></span>
                                                <span class="change-user">
                                                    Choose File
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Medicine Name</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Total Amount</label>
                                        <input type="text"  class="form-control">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Status <span class="text-danger">*</span></label>
                                        <select class="form-select form-control" name="category" required=""> 
                                            <option value="1" selected="selected">Paid</option>
                                            <option value="2">Unpaid</option>
                                            <option value="3">Pending</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Created Date</label>
                                        <input type="text"  class="form-control">
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
                            <p>“Invoice Report”</p>
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
    import pharmacyinvoicereport from '../../../../assets/json/pharmacyadmin/pharmacyinvoicereport.json';
    import util from '../../../../assets/utils/util'
    const images = require.context('../../../../assets/pharmacy_img/products', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                pharmacyinvoicereport: pharmacyinvoicereport
            }
        },
        mounted() {
        util.datatable('#pharmacyinvoicereport')
        },
        methods: {
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
            
        },
    }
    </script>
    
  