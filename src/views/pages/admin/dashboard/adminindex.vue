<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid pb-0">
					
					<h4 class="mb-3">Overview</h4>
					
					<overview></overview>
					
					<dashchart></dashchart>
					
					<!-- Today’s  Appointment -->
					<todayappointment></todayappointment>
					<!-- /Today’s  Appointment -->
					
					<div class="row">
						<!-- Recent Activities -->
						<recentactivities></recentactivities>
						<!-- /Recent Activities -->
						
						<!-- Top Doctors -->
                        <topdoctor></topdoctor>
						<!-- /Top Doctors -->
					</div>
					
					<div class="row">
						<!-- Popular by Speciality -->
						<popular></popular>
						<!-- /Popular by Speciality -->
						
						<!-- Consultaion Today -->
						<consultation></consultation>
						<!-- /Consultaion Today -->
						
						<!-- Upcoming Appointments -->
						<upcoming></upcoming>
						<!-- /Upcoming Appointments -->
					</div>
					
					<div class="row">
					
						<!-- Recent Prescriptions -->
						<prescription></prescription>
						<!-- /Recent Prescriptions -->
						
						<!-- Top Countries -->
						<countries></countries>
						<!-- /Top Countries -->
						
						<!-- Doctor Ratings -->
						<ratings></ratings>
						<!-- /Doctor Ratings -->
					</div>
					
				</div>
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
	import Vue from 'vue'
	export default {
	  data() {
	  return {
	  }
	  },
	  components: {
	 
	  },
	  mounted() {
	  },
	}
  </Script>
  