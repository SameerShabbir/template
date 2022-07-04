<template>
<!-- Appointment Tab -->
                                    <div id="pat_appointments" class="tab-pane fade show active">
                                        <div class="card card-table mb-0">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Doctor</th>
                                                                <th>Appt Date</th>
                                                                <th>Booking Date</th>
                                                                <th>Amount</th>
                                                                <th>Follow Up</th>
                                                                <th>Status</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="item in appointmentprofile" :key="item.id">
                                                                <td>
                                                                    <h2 class="table-avatar">
                                                                        <router-link to="/doctor-profile" class="avatar avatar-sm me-2">
                                                                            <img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image">
                                                                        </router-link>
                                                                        <router-link to="/doctor-profile">{{item.name}} <span>{{item.specialist}}</span></router-link>
                                                                    </h2>
                                                                </td>
                                                                <td>{{item.date}} <span class="d-block text-info">{{item.time}}</span></td>
                                                                <td>{{item.date1}}</td>
                                                                <td>{{item.rate}}</td>
                                                                <td>{{item.date2}}</td>
                                                                <td><span class="badge rounded-pill bg-success-light">{{item.status}}</span></td>
                                                                <td class="text-end">
                                                                    <div class="table-action">
                                                                        <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                            <i class="far fa-edit"></i> Edit
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
                                    <!-- /Appointment Tab -->
</template><script>
    import appointmentprofile from '../../../../../assets/json/Doctor/appointmentprofile.json'
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
            appointmentprofile: appointmentprofile
        }
    }
}
</script>