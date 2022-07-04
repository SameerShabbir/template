<template>
<div class="row">
						<div class="col-md-12">
							<ul class="list-links">
								<li><router-link to="/admin/settings">General Settings</router-link></li>
								<li><router-link to="/admin/login-settings">Login Settings</router-link></li>
								<li><router-link to="/admin/setting-preference">Preferences</router-link></li>
								<li><router-link to="/admin/setting-notifications">Notification</router-link></li>
								<li><router-link to="/admin/email-settings">Email Settings</router-link></li>
								<li><router-link to="/admin/payment-gateway">Payment Gateway</router-link></li>
								<li><router-link to="/admin/sms-gateway">SMS Gateway</router-link></li>
							</ul>
						</div>
					</div>
</template>
<script>
  export default {
components: {
      },
mounted() {
  },
  computed: {
	currentPath() {
				return this.$route.name;
			},

    },
data() {
    return {
      activeClass: 'active',
    };
  },
}
</script>
<style>
.list-links li a.active {
    background: #FFFFFF;
    border: 1px solid #0CE0FF;
    color: #1B5A90;
}
</style>