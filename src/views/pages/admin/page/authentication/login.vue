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
        
            <!-- Login -->
            <div class="login-wrapper">
                <div class="loginbox">
                    <div class="img-logo">
                        <img src="../../../../../assets/admin_img/logo.png" class="img-fluid" alt="Logo">
                    </div>
                    <h3>Login</h3>
                    <p class="account-subtitle">login to your account to continue</p>
                                
                    <Form class="login" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                        <div class="form-group form-focus focused">
                            <Field name="email" type="text" value="admin@dreamguys.in" class="form-control" :class="{ 'is-invalid': errors.email }" />
							<label class="focus-label">Enter Email</label>
                            <div class="invalid-feedback">{{errors.email}}</div>
							<div class="emailshow text-danger" id="email"></div>
                        </div>
                        <div class="form-group form-focus password-icon focused">
                            <Field name="password" type="password" value="123456" class="form-control pass-input" :class="{ 'is-invalid': errors.password }" /><span class="fa fa-eye-slash toggle-password pt-4"></span>
							<label class="focus-label">Enter Password</label>
                            <div class="invalid-feedback">{{errors.password}}</div>
							<div class="emailshow text-danger" id="password"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label class="custom_check mr-2 mb-0 d-inline-flex"> Remember me  
                                        <input type="checkbox" name="radio">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="col-6 text-end">
                                    <router-link class="forgot-link" to="/admin/forgot-password">Forgot Password ?</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary" type="submit">Login</button>
                        </div>
                        <div class="dont-have">Don't have an account? <router-link to="/admin/register">Sign up</router-link></div>
                        <div class="login-or">
                            <span class="or-line"></span>
                            <p class="span-or">or login with </p>
                        </div>
                        <!-- Social Login -->
                        <div class="social-login">
                            <a href="javascript:void(0);"><img src="../../../../../assets/admin_img/icon/google.png" class="img-fluid" alt="Logo"></a>
                            <a href="javascript:void(0);"><img src="../../../../../assets/admin_img/icon/facebook.png" class="img-fluid" alt="Logo"></a>
                            <a href="javascript:void(0);"><img src="../../../../../assets/admin_img/icon/twitter.png" class="img-fluid" alt="Logo"></a>
                        </div>
                        <!-- /Social Login -->
                    </Form>
                </div>
            </div>
            <!-- /Login -->
            
        </div>
        
    </div>
</div>
<!-- /Main Wrapper -->
</template>
<script>
    import { ref } from 'vue'
	import { router } from '../../../../../router';
	import VueRouter from 'vue-router'
	import { useStore } from 'vuex'
	import { Form, Field } from 'vee-validate';
	import * as Yup from 'yup';
	import Vue from 'vue'
	export default {
	  data() {
	  return {
	  }
	  },
	  components: {
        Form,
		Field,
	  },
	  mounted() {
        if($('.toggle-password').length > 0) {
		$(document).on('click', '.toggle-password', function() {
		  $(this).toggleClass("fa-eye fa-eye-slash");
		  var input = $(".pass-input");
		  if (input.attr("type") == "password") {
			input.attr("type", "text");
		  } else {
			input.attr("type", "password");
		  }
		});
	  }
	  },
      setup() {
	  let users = localStorage.getItem('storedData');
		if (users === null) {
		  let password = [
			{
			  email: 'admin@dreamguys.in',
			  password: '123456',
			},
		  ];
		  const jsonData = JSON.stringify(password);
		  localStorage.setItem('storedData', jsonData);
		}
		 const schema = Yup.object().shape({
				email: Yup.string()
					.required('Email is required')
					.email('Email is invalid'),
				password: Yup.string()
					.min(6, 'Password must be at least 6 characters')
					.required('Password is required'),
			});
		const onSubmit = (values) => {
		document.getElementById("email").innerHTML = ""
		document.getElementById("password").innerHTML = ""
		let data = localStorage.getItem('storedData');
		  var Pdata= JSON.parse(data)
		  const Eresult= Pdata.find(({ email }) => email === values.email);
		 if (Eresult) {
		  if (Eresult.password === values.password) {
		  router.push('/admin/index')  
		  } else {
			  document.getElementById("password").innerHTML = "Incorrect password"
		  }
		} else {
			  document.getElementById("email").innerHTML = "Email is not valid"
		}
			  };
			return {
				schema,
				onSubmit,
			};
	
		}

	}
  </Script>
  