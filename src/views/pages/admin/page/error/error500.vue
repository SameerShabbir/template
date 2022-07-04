<template>
<div class="error-page" style="height: 100vh;">
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
    
    <!-- Error 505 -->
    <div class="error-box">
        <img src="../../../../../assets/admin_img/505.png" class="img-fluid" alt="505">
        <h2>Oops! This Page is Not Found.</h2>
        <p>The requested page dose not exist.</p>
        <router-link to="/admin/index" class="btn btn-primary"><i class="feather-home me-2"></i>Back to Home</router-link>
    </div>
    <!-- /Error 505 -->
        
</div>
<!-- /Main Wrapper -->
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
  