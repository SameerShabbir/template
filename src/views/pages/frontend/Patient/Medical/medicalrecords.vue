<template>
    <div class="main-wrapper">

        <patientheader></patientheader>

       <breadCrumb50></breadCrumb50>

		<!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    
                    <patientsidebar></patientsidebar>
                    
                    <div class="col-md-7 col-lg-8 col-xl-9">

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body pt-0">
                                    
                                        <!-- Tab Menu -->
                                        <nav class="user-tabs mb-4">
                                            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#pat_medicalrecords" data-bs-toggle="tab">Medical Records</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#pat_prescription" data-bs-toggle="tab">Prescription</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <!-- /Tab Menu -->
                                        
                                        <!-- Tab Content -->
                                        <div class="tab-content pt-0">
                                            
                                            <medicalcontent></medicalcontent>
                                            
                                            <prescriptiontab></prescriptiontab>
                                                
                                        </div>
                                        <!-- Tab Content -->
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>		
        <!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
    <!-- Medical Records Modal -->
        <div class="modal fade custom-modal custom-medicalrecord-modal" id="add_medical_records_modal" style="display: none;" data-select2-id="add_medical_records_modal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Medical Records</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
                    </div>
                    <form id="medical_records_form" enctype="multipart/form-data">          
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label>Title Name</label>
                                        <input type="text" name="description" class="form-control" placeholder="Enter Title Name">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label>Patient</label>
                                        <select class="form-select">
                                            <option>Myself</option>
                                            <option>Child_1</option>
                                            <option>Self</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Hospital Name</label>
                                        <input type="text" name="hospital" class="form-control" placeholder="Enter name here..">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Upload</label>
                                        <div class="upload-medical-records">
                                            <input class="form-control" type="file" name="user_file" id="user_files_mr">
                                            <div class="upload-content dropzone">
                                                <div class="text-center">
                                                    <div class="upload-icon mb-2"><img src="../../../../../assets/img/upload-icon.png" alt=""></div>
                                                    <h5>Drag &amp; Drop</h5>
                                                    <h6>or <span class="text-danger">Browse</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>Symptoms</label>
                                        <input type="text" data-role="tagsinput" class="input-tags form-control" value="Fever, Fatigue" name="services" id="services">
                                    </div> 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label>Date</label>
                                        <div class="form-group">
                                            <input type="date" class="form-control" name="tratment_date" id="tratment_date">
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-4">
                                <div class="submit-section text-center">
                                    <button type="submit" id="medical_btn" class="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
		<!-- /Medical Records Modal -->
</template>
<script>
import membershipdetail from '../../../../../assets/json/Patient/membershipdetail.json'
export default {
	mounted() {

	},
    data() {
        return {
            membershipdetail: membershipdetail
        }
    }
}
</script>