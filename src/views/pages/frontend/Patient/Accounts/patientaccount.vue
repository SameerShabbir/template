<template>
    <div class="main-wrapper">

        <patientheader></patientheader>

        <breadCrumb46></breadCrumb46>

		<!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    
                   <patientsidebar></patientsidebar>
                    
                    <div class="col-md-7 col-lg-8 col-xl-9">

                        <div class="row">

                            <patientleftheader></patientleftheader>

                            <patientrightheader></patientrightheader>

                        </div>

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body pt-0">
                                    
                                        <!-- Tab Menu -->
                                        <nav class="user-tabs mb-4">
                                            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#pat_accounts" data-bs-toggle="tab">Accounts</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#pat_refundrequest" data-bs-toggle="tab">Doctor Request</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <!-- /Tab Menu -->
                                        
                                        <!-- Tab Content -->
                                        <div class="tab-content pt-0">
                                            
                                            <accounttab></accounttab>
                                            
                                            <refundtab></refundtab>
                                                
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
</template>
<script>
export default {
	mounted() {

	}
}
</script>