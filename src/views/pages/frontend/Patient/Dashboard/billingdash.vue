<template>
<!-- Billing Tab -->
                                    <div id="pat_billing" class="tab-pane fade">
                                        <div class="card card-table mb-0">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Invoice No</th>
                                                                <th>Doctor</th>
                                                                <th>Amount</th>
                                                                <th>Paid On</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr v-for="item in billingdashboard" :key="item.id">
                                                                <td>
                                                                    <router-link to="/invoice-view">{{item.invoiceno}}</router-link>
                                                                </td>
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">{{item.name}} <span>{{item.specialist}}</span></router-link>
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
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Billing Tab -->
</template><script>
    import billingdashboard from '../../../../../assets/json/Patient/billingdashboard.json'
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
                billingdashboard: billingdashboard
            }
        }
    }
    </script>