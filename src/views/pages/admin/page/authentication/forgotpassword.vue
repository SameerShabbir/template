<template>
<!-- Main Wrapper -->
<div class="main-wrapper">
		
    <div class="header d-none">
        <!-- Header Menu -->
        <ul class="nav nav-tabs user-menu">
            <!-- Flag -->
            <li class="nav-item">
                <a href="javascript:void(0);" id="dark-mode-toggle" class="dark-mode-toggle">
                    <i class="feather-sun light-mode"></i><i class="feather-moon dark-mode"></i>
                </a>
            </li>
            <!-- /Flag -->
        </ul>
        <!-- Header Menu -->
    </div>
    
    <div class="row">
    
        <!-- Login Banner -->
        <div class="col-md-6 login-bg">
            <div class="login-banner"></div>
        </div>
        <!-- /Login Banner -->
        
        <div class="col-md-6 login-wrap-bg">		
        
            <!-- Restart Password -->
            <div class="login-wrapper">
                <div class="loginbox">
                    <div class="img-logo">
                        <img src="../../../../../assets/admin_img/logo.png" class="img-fluid" alt="Logo">
                    </div>
                    <h3>Restart Password</h3>
                    <p class="account-subtitle">Enter your email to get a password reset link</p>
                                
                    <form>
                        <div class="form-group form-focus">
                            <input type="email" class="form-control floating">
                            <label class="focus-label">Enter Email</label>
                        </div>
                        <router-link to="/admin/conform-email">
                        <div class="d-grid">
                            <button class="btn btn-primary" type="submit">Restart Password</button>
                        </div>
                        </router-link>
                        <div class="dont-have">Remember your password?  <router-link to="/admin/login">Login</router-link></div>
                    </form>
                </div>
            </div>
            <!-- /Restart Password -->
            
        </div>
        
    </div>
</div>
<!-- /Main Wrapper -->
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
  