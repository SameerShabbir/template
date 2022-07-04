<template>
<!-- Prescription Tab -->
                                    <div class="tab-pane fade" id="pat_prescriptions">
                                        <div class="card card-table mb-0">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Date </th>
                                                                <th>Name</th>									
                                                                <th>Created by </th>
                                                                <th></th>
                                                            </tr>     
                                                        </thead>
                                                        <tbody>
                                                        
                                                            <tr v-for="item in prescriptiondash" :key="item.id">
                                                                <td>{{item.date}}</td>
                                                                <td>{{item.description}}</td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile"> {{item.name}} <span>{{item.specialist}}</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light me-1">
                                                                            <i class="fas fa-print"></i> Print
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                            <i class="far fa-eye"></i> View
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
                                        import prescriptiondash from '../../../../../assets/json/Patient/prescriptiondash.json'
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
                                                    prescriptiondash: prescriptiondash
                                                }
                                            }
                                        }
                                        </script>