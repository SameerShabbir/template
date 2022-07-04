<template>
<!-- Prescription Tab -->
                                            <div class="tab-pane fade" id="pat_prescription">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>Date</th>
                                                                        <th>Name</th>
                                                                        <th>Doctor</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="item in prescriptiontab" :key="item.id">
                                                                        <td>{{item.no}}</td>
                                                                        <td>{{item.date}} <span class="d-block text-info">{{item.time}}</span></td>
                                                                        <td>{{item.companyname}}</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                                    <img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image">
                                                                                </router-link>
                                                                                <router-link to="/doctor-profile">{{item.name}} <span>{{item.specialist}}</span></router-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light me-1">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                                
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                                    <i class="fas fa-print"></i> Print
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
                                            <!-- /Prescription Tab -->
</template>
<script>
    import prescriptiontab from '../../../../../assets/json/Patient/prescriptiontab.json'
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
                prescriptiontab: prescriptiontab
            }
        }
    }
    </script>