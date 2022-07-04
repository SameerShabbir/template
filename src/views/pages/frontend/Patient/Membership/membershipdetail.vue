<template>
    <div class="main-wrapper">

        <patientheader></patientheader>

        <breadCrumb49></breadCrumb49>

		<!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    
                    <patientsidebar></patientsidebar>
                    
                    <div class="col-md-7 col-lg-8 col-xl-9">

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card card-table mb-0">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Plan Name</th>
                                                                <th>Type</th>
                                                                <th class="text-center">Amount</th>
                                                                <th>Start Date</th>
                                                                <th>End Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="item in membershipdetail" :key="item.id">
                                                                <td>{{item.no}}</td>
                                                                <td>{{item.planname}}</td>
                                                                <td>{{item.type}}</td>
                                                                <td class="text-center">{{item.amount}}</td>
                                                                <td>{{item.startdate}}</td>
                                                                <td>{{item.enddate}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
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