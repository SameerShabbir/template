<template>
<!-- Medical Records Tab -->
                                            <div id="pat_medicalrecords" class="tab-pane fade show active">
                                                <div class="text-end">		
                                                    <a href="javascript:void(0);" class="add-new-btn" data-bs-toggle="modal" data-bs-target="#add_medical_records_modal">Add Medical Records</a>
                                                </div>
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>Name</th>
                                                                        <th>Date</th>
                                                                        <th>Description</th>
                                                                        <th>Attachment</th>
                                                                        <th>Orderd By</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="item in medicalcontent" :key="item.id">
                                                                        <td>{{item.no}}</td>
                                                                        <td>{{item.name}}</td>
                                                                        <td>{{item.date}} <span class="d-block text-info">{{item.time}}</span></td>
                                                                        <td>{{item.companyname}}</td>
                                                                        <td>
                                                                            <a href="javascript:void(0);" title="Download attachment" class="btn btn-primary btn-sm"> <i class="fa fa-download"></i></a>
                                                                        </td>
                                                                        <td>{{item.status}}</td>
                                                                        <td>
                                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                <i class="far fa-trash-alt"></i> 
                                                                            </a>
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
    import medicalcontent from '../../../../../assets/json/Patient/medicalcontent.json'
    export default {
        mounted() {
    
        },
        data() {
            return {
                medicalcontent: medicalcontent
            }
        }
    }
    </script>