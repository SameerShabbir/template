<template>
    <div class="main-wrapper">

        <patientheader></patientheader>

        <breadCrumb47></breadCrumb47>

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
                                                                <th>Order Id</th>
                                                                <th>Pharmacy Name</th>
                                                                <th class="text-center">Quantity</th>
                                                                <th class="text-center">Amount</th>
                                                                <th>Payment Gateway</th>
                                                                <th>Status</th>
                                                                <th>Order date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="item in orderlist" :key="item.id">
                                                                <td>{{item.no}}</td>
                                                                <td><router-link to="/invoice-view">{{item.invoiceno}}</router-link></td>
                                                                <td>{{item.pharmacyname}}</td>
                                                                <td class="text-center">{{item.quantity}}</td>
                                                                <td class="text-center">{{item.amount}}</td>
                                                                <td>{{item.payment}}</td>
                                                                <td><span class="badge badge-primary">{{item.status}}</span></td>
                                                                <td>11 Nov 2019 <span class="d-block text-info">{{item.date}}</span></td>
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
import orderlist from '../../../../../assets/json/Patient/orderlist.json'
export default {
	mounted() {

	},
    data() {
        return {
            orderlist: orderlist
        }
    }
}
</script>