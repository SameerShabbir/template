<template>
<!-- Accounts Tab -->
                                                <div id="pat_accounts" class="tab-pane fade show active">
                                                    <div class="card card-table mb-0">
                                                        <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table table-hover table-center mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Date</th>
                                                                            <th>Doctor Name</th>
                                                                            <th class="text-center">Amount</th>
                                                                            <th>Status</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="item in accounttab" :key="item.id">
                                                                            <td>{{item.date}} <span class="d-block text-info">{{item.time}}</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                                        <img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor-profile">{{item.name}} <span>{{item.specialist}}</span></router-link>
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
</template>
<script>
    import accounttab from '../../../../../assets/json/Patient/accounttab.json'
    const images = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
    
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        },
        data() {
            return {
                accounttab: accounttab
            }
        }
    }
    </script>