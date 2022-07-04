<template>
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
                                                    <a class="nav-link" href="#pat_refundrequest" data-bs-toggle="tab">Patients Refund Request</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <!-- /Tab Menu -->
                                        
                                        <!-- Tab Content -->
                                        <div class="tab-content pt-0">
                                            
                                            <!-- Accounts Tab -->
                                            <div id="pat_accounts" class="tab-pane fade show active">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Date</th>
                                                                        <th>Patient Name</th>
                                                                        <th class="text-center">Amount</th>
                                                                        <th>Status</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="item in account" :key="item.id">
                                                                        <td>{{item.date}} <span class="d-block text-info">{{item.time}}</span></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <router-link to="/patient-profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"></router-link>
                                                                                <router-link to="/patient-profile">{{item.name}} <span>{{item.nameno}}</span></router-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-center">{{item.rate}}</td>
                                                                        <td><span class="badge rounded-pill bg-success-light">{{item.status}}</span></td>
                                                                        <td class="text-end">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light me-1">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                                
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light me-1">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- /Accounts Tab -->
                                            
                                            <!-- Refund Request Tab -->
                                            <div class="tab-pane fade" id="pat_refundrequest">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Date</th>
                                                                        <th>Patient Name</th>
                                                                        <th class="text-center">Amount</th>
                                                                        <th>Status</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="item in account" :key="item.id">
                                                                        <td>{{item.date}} <span class="d-block text-info">{{item.time}}</span></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <router-link to="/patient-profile" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"></router-link>
                                                                                <router-link to="/patient-profile">{{item.name}} <span>{{item.nameno}}</span></router-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-center">{{item.rate}}</td>
                                                                        <td><span class="badge rounded-pill bg-success-light">{{item.status}}</span></td>
                                                                        <td class="text-end">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light me-1">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                                
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light me-1">
                                                                                    <i class="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                    <i class="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- /Refund Request Tab -->
                                                
                                        </div>
                                        <!-- Tab Content -->
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
</template>
<script>
    import account from '../../../../../assets/json/Doctor/account.json'
    const images = require.context('../../../../../assets/img/patients', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			account: account
		}
	},
    mounted() {

},
methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    }
    }
</script>