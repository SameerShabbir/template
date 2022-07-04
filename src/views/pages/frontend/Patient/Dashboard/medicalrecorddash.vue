<template>
<!-- Medical Records Tab -->
                                    <div id="pat_medical_records" class="tab-pane fade">
                                        <div class="card card-table mb-0">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Date </th>
                                                                <th>Description</th>
                                                                <th>Attachment</th>
                                                                <th>Created</th>
                                                                <th></th>
                                                            </tr>     
                                                        </thead>
                                                        <tbody>
                                                        
                                                            <tr v-for="item in medicalrecorddash" :key="item.id">
                                                                <td><a href="javascript:void(0);">{{item.no}}</a></td>
                                                                <td>{{item.date}}</td>
                                                                <td>{{item.specialist}}</td>
                                                                <td><a href="javascript:void(0);">{{item.file}}</a></td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">{{item.name}} <span>{{item.description}}</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-info-light me-1">
                                                                            <i class="far fa-eye"></i> View
                                                                        </a>
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
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
                                    <!-- /Medical Records Tab -->
</template>
<script>
    import medicalrecorddash from '../../../../../assets/json/Patient/medicalrecorddash.json'
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
                medicalrecorddash: medicalrecorddash
            }
        }
    }
    </script>