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
                        <img src="../../../assets/admin_img/logo.png" class="img-fluid" alt="Logo">
                    </div>
                    <h3>Getting Started</h3>
                    <p class="account-subtitle">Register with email</p>
                                
                    <Form class="register" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                        <div class="form-group form-focus focused">
                            <Field name="email" type="text" class="form-control" placeholder="Email" :class="{ 'is-invalid': errors.email }" />
                            <label class="focus-label"> Email</label>
                            <div class="invalid-feedback">{{errors.email}}</div>
                            <div class="emailshow text-danger" id="email"></div>
                        </div>
                        <div class="form-group form-focus focused password-icon">
                            <Field name="password" type="password" class="form-control pass-input" placeholder="Password" :class="{ 'is-invalid': errors.password }" />
                            <label class="focus-label">Enter Password</label>
                            <div class="invalid-feedback">{{errors.password}}</div>
                            <div class="emailshow text-danger" id="password"></div>
                        </div>
                        <div class="form-group form-focus focused password-icon">
                            <Field name="confirmpassword" type="password" class="form-control pass-input" placeholder="Confirm Password" :class="{ 'is-invalid': errors.confirmpassword }" />
                            <label class="focus-label">Confirm Password</label>
                            <div class="invalid-feedback">{{errors.confirmpassword}}</div>
                            <div class="emailshow text-danger" id="confirmpassword"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-12">
                                    <label class="custom_check mr-2 mb-0"> I agree to the <a href="javascript:void(0);" class="text-primary"> terms of service</a> and <a href="javascript:void(0);" class="text-primary">privacy policy</a>
                                        <input type="checkbox" name="radio">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                        <div class="dont-have">Already have an account? <router-link to="/pharmacyadmin/login">Login</router-link></div>
                        <div class="login-or">
                            <span class="or-line"></span>
                            <p class="span-or">or login with </p>
                        </div>
                        <!-- Social Login -->
                        <div class="social-login">
                            <a href="javascript:void(0);"><img src="../../../assets/pharmacy_img/icon/google.png" class="img-fluid" alt="Logo"></a>
                            <a href="javascript:void(0);"><img src="../../../assets/pharmacy_img/icon/facebook.png" class="img-fluid" alt="Logo"></a>
                            <a href="javascript:void(0);"><img src="../../../assets/pharmacy_img/icon/twitter.png" class="img-fluid" alt="Logo"></a>
                        </div>
                        <!-- /Social Login -->
                    </form>
                </div>
            </div>
            <!-- /Login -->
            
        </div>
        
    </div>
</div>
<!-- /Main Wrapper -->
</template>
<script>
import Vue from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { Form, Field } from 'vee-validate';
import { router } from '../../../router';
import VueRouter from 'vue-router'
import * as Yup from 'yup';
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
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmpassword: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Confirm password is required'),
        });
      const onSubmit = (values) => {   
      if(values.password === values.confirmpassword) {
      let Rawdata = localStorage.getItem('storedData');
      let Pdata= [];
      Pdata = JSON.parse(Rawdata);    
       const Eresult = Pdata.find(({ email }) => email == values.email);  
       if(Eresult){ 
        document.getElementById("email").innerHTML = "This email are already exist"
       } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push('/pharmacyadmin/index')
          localStorage.setItem('storedData', jsonData);
        } 
      }  else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching"
      }
    };
        return {
            schema,
            onSubmit
        };

    }
	}
  </Script>
  