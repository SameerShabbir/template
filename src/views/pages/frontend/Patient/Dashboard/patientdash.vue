<template>
    <div class="main-wrapper">

        <patientheader></patientheader>

        <breadCrumb45></breadCrumb45>

		<!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    
                    <patientsidebar></patientsidebar>
                    
                    <div class="col-md-7 col-lg-8 col-xl-9">

                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <div class="mb-3">
                                            <img src="../../../../../assets/img/specialities/pt-dashboard-01.png" alt="" width="55">
                                        </div>
                                        <h5>Heart Rate</h5>
                                        <h6>12 <sub>bpm</sub></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <div class="mb-3">
                                            <img src="../../../../../assets/img/specialities/pt-dashboard-02.png" alt="" width="55">
                                        </div>
                                        <h5>Body Temperature</h5>
                                        <h6>18 <sub>C</sub></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <div class="mb-3">
                                            <img src="../../../../../assets/img/specialities/pt-dashboard-03.png" alt="" width="55">
                                        </div>
                                        <h5>Glucose Level</h5>
                                        <h6>70 - 90</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <div class="mb-3">
                                            <img src="../../../../../assets/img/specialities/pt-dashboard-04.png" alt="" width="55">
                                        </div>
                                        <h5>Blood Pressure</h5>
                                        <h6>202/90 <sub>mg/dl</sub></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row patient-graph-col">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Graph Status</h4>
                                    </div>
                                    <div class="card-body pt-2 pb-2 mt-1 mb-1">
                                        <div class="row">
                                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                                                <a href="javascript:void(0);" class="graph-box" data-bs-toggle="modal" data-bs-target="#graph1">
                                                    <div>
                                                        <h4>BMI Status</h4>
                                                    </div>
                                                    <div class="graph-img">
                                                        <img src="../../../../../assets/img/shapes/graph-01.png" alt="">
                                                    </div>
                                                    <div class="graph-status-result mt-3">
                                                        <span class="graph-update-date">Last Update 6d</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                                                    <a href="javascript:void(0);" class="graph-box pink-graph" data-bs-toggle="modal" data-bs-target="#graph2">
                                                        <div>
                                                            <h4>Heart Rate Status</h4>
                                                        </div>
                                                        <div class="graph-img">
                                                            <img src="../../../../../assets/img/shapes/graph-02.png" alt="">
                                                        </div>
                                                        <div class="graph-status-result mt-3">
                                                            <span class="graph-update-date">Last Update 2d</span>
                                                        </div>
                                                    </a>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                                                <a href="javascript:void(0);" class="graph-box sky-blue-graph" data-bs-toggle="modal" data-bs-target="#graph3">
                                                    <div>
                                                        <h4>FBC Status</h4>
                                                    </div>
                                                    <div class="graph-img">
                                                        <img src="../../../../../assets/img/shapes/graph-03.png" alt="">
                                                    </div>
                                                    <div class="graph-status-result mt-3">
                                                        <span class="graph-update-date">Last Update 5d</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                                                <a href="javascript:void(0);" class="graph-box orange-graph" data-bs-toggle="modal" data-bs-target="#graph4">
                                                    <div>
                                                        <h4>Weight Status</h4>
                                                    </div>
                                                    <div class="graph-img">
                                                        <img src="../../../../../assets/img/shapes/graph-04.png" alt="">
                                                    </div>
                                                    <div class="graph-status-result mt-3">
                                                        <span class="graph-update-date">Last Update 3d</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body pt-0">
                            
                                <!-- Tab Menu -->
                                <nav class="user-tabs mb-4">
                                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#pat_appointments" data-bs-toggle="tab">Appointments</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#pat_prescriptions" data-bs-toggle="tab">Prescriptions</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#pat_medical_records" data-bs-toggle="tab"><span class="med-records">Medical Records</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#pat_billing" data-bs-toggle="tab">Billing</a>
                                        </li>
                                    </ul>
                                </nav>
                                <!-- /Tab Menu -->
                                
                                <!-- Tab Content -->
                                <div class="tab-content pt-0">
                                    
                                    <appointmentdash></appointmentdash>
                                    
                                    <prescriptiondash></prescriptiondash>
                                        
                                    <medicalrecorddash></medicalrecorddash>
                                    
                                    <billingdash></billingdash>
                                      
                                </div>
                                <!-- Tab Content -->
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>		
        <!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
    <patientdashmodal></patientdashmodal>
</template>
<script>
export default {
	mounted() {

	}
}
</script>