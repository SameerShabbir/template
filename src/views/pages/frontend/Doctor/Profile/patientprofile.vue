<template>
    <div class="main-wrapper">

        <layout-doctorheader></layout-doctorheader>

        <breadCrumb44></breadCrumb44>

		<!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    
                    <patientprofilesidebar></patientprofilesidebar>

                    <div class="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
                        <div class="card">
                            <div class="card-body pt-0">
                                <div class="user-tabs">
                                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#pat_appointments" data-bs-toggle="tab">Appointments</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#pres" data-bs-toggle="tab"><span>Prescription</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#medical" data-bs-toggle="tab"><span class="med-records">Medical Records</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#billing" data-bs-toggle="tab"><span>Billing</span></a>
                                        </li> 
                                    </ul>
                                </div>
                                <div class="tab-content">
                                    
                                    <appointmentprofile></appointmentprofile>
                                    
                                    <prescriptionprofile></prescriptionprofile>

                                    <medicalprofile></medicalprofile>
                                    
                                    <billingprofile></billingprofile>
                                            
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

    <!-- Add Medical Records Modal -->
		<div class="modal fade custom-modal" id="add_medical_records">
			<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h3 class="modal-title">Medical Records</h3>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
					<form>					
						<div class="modal-body">
							<div class="form-group">
								<label>Date</label>
                                                        <datepicker v-model="startdate"  class="picker" 
                                                        :editable="true"
                                                        :clearable="false" />

							</div>
							<div class="form-group">
								<label>Description ( Optional )</label>
								<textarea class="form-control"></textarea>
							</div>
							<div class="form-group">
								<label>Upload File</label> 
								<input type="file" class="form-control">
							</div>	
							<div class="submit-section text-center">
								<button type="submit" class="btn btn-primary submit-btn">Submit</button>
								<button type="button" class="btn btn-secondary submit-btn" data-bs-dismiss="modal">Cancel</button>							
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Medical Records Modal -->

</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  export default {
     data() {
    return {
      startdate: currentDate
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>
