<template>
    <div class="main-wrapper">

        <layout-doctorheader></layout-doctorheader>

        <breadCrumb52></breadCrumb52>

		<!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                    
                    <div class="stickyside">

                    <doctorsidebar></doctorsidebar>

                    </div>

                    </div>
                    <div class="col-md-7 col-lg-8 col-xl-9">
                        <div class="card card-table">
                            <div class="card-body">
                            
                                <!-- Invoice Table -->
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Invoice No</th>
                                                <th>Patient</th>
                                                <th>Amount</th>
                                                <th>Paid On</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in invoice" :key="item.id">
                                                <td>
                                                    <router-link to="/invoice-view">{{item.invoiceno}}</router-link>
                                                </td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <router-link to="/patient-profile" class="avatar avatar-sm me-2">
                                                            <img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image">
                                                        </router-link>
                                                        <router-link to="/patient-profile">{{item.name}} <span>{{item.nameno}}</span></router-link>
                                                    </h2>
                                                </td>
                                                <td>{{item.rate}}</td>
                                                <td>{{item.date}}</td>
                                                <td class="text-end">
                                                    <div class="table-action">
                                                        <router-link to="/invoice-view" class="btn btn-sm bg-info-light me-1">
                                                            <i class="far fa-eye"></i> View
                                                        </router-link>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                            <i class="fas fa-print"></i> Print
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- /Invoice Table -->
                                
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
    import invoice from '../../../../../assets/json/Doctor/invoice.json'
    const images = require.context('../../../../../assets/img/patients', false, /\.png$|\.jpg$/)
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
                invoice: invoice
            }
        }
    }
    </script>