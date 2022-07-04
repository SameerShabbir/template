<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid content-wrap">
					
					<!-- Change Password -->
					<div class="row">
						<div class="col-md-12">
							<ul class="list-links mb-4">
								<li><router-link to="/admin/account-settings">Account Settings</router-link></li>
								<li class="active"><router-link to="/admin/change-password">Change Password</router-link></li>
							</ul>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12">
							<div class="acc-wrap">
								<h6>Change Password</h6>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							</div>
							<div class="row">
								<div class="col-md-4">
									<div class="form-group form-focus">
										<input type="password" class="form-control floating">
										<label class="focus-label">Current Password</label>
									</div>
									<div class="form-group form-focus">
										<input type="password" class="form-control floating">
										<label class="focus-label">New Password</label>
									</div>
									<div class="form-group form-focus">
										<input type="password" class="form-control floating">
										<label class="focus-label">Verify Password</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row mt-auto">
						<div class="col-md-12">
							<div class="submit-sec">
								<button type="submit" class="btn btn-primary">Save Changes</button>
								<button class="btn btn-secondary">Cancel</button>
							</div>
						</div>
					</div>
					<!-- /Change Password -->
					
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
	  }
	}
  </Script>
  