<template>
<!-- Sidebar -->
			<div class="sidebar" id="sidebar">
				<div class="sidebar-inner slimscroll">
				<perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title"><span>Main</span></li>
							<li>
								<router-link to="/admin/index"><i class="feather-grid"></i> <span>Dashboard</span></router-link>
							</li>
							<li v-bind:class="{'active': currentPath == '/admin/past-appointments'}">
								<router-link to="/admin/upcoming-appointments"><i class="feather-calendar"></i> <span>Appointments</span></router-link>
							</li>
							<li>
								<router-link to="/admin/specialities"><i class="feather-package"></i> <span>Specialities</span></router-link>
							</li>
							<li>
								<router-link to="/admin/doctor-list"><i class="feather-user-plus"></i> <span>Doctors</span></router-link>
							</li>
							<li>
								<router-link to="/admin/patient-list"><i class="feather-users"></i> <span>Patients</span></router-link>
							</li>
							<li>
								<router-link to="/admin/ratings"><i class="feather-star"></i> <span>Reviews</span></router-link>
							</li>
							<li>
								<router-link to="/admin/transaction"><i class="feather-credit-card"></i> <span>Transactions</span></router-link>
							</li>     
							<li v-bind:class="{'active':  currentPath == '/admin/sms-gateway' ||  currentPath == '/admin/setting-preference' ||   currentPath == '/admin/setting-notifications' ||  currentPath == '/admin/payment-gateway' ||  currentPath == '/admin/email-settings' || currentPath == '/admin/login-settings'}">
								<router-link to="/admin/settings"><i class="feather-sliders"></i> <span> Settings</span></router-link>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-file-text"></i> <span> Reports</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/admin/appointment-report">Appointment Report</router-link></li>
									<li><router-link to="/admin/income-report">Income Report</router-link></li>
									<li><router-link to="/admin/invoice-report">Invoice Report</router-link></li>
									<li><router-link to="/admin/user-reports">Users Report</router-link></li>
								</ul>
							</li>								
							<li class="menu-title"> 
								<span>Pharmacy</span>
							</li>	
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-file-plus"></i> <span> Pharmacies</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/admin/pharmacy-list">All Pharmacies</router-link></li>
									<li><router-link to="/admin/pharmacy-category">Categories</router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-shopping-cart"></i> <span> Product List</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/admin/product-list">All Products</router-link></li>
									<li><router-link to="/admin/product-category">Categories</router-link></li>
								</ul>
							</li>					
							<li class="menu-title"> 
								<span>Blog</span>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" v-bind:class="{'active': currentPath == '/admin/pending-blog'}"><i class="feather-grid"></i> <span> Blog</span> <span class="menu-arrow"></span></a>
								<ul>
									<li v-bind:class="{'active': currentPath == '/admin/pending-blog'}"><router-link to="/admin/active-blog">Blogs</router-link></li>
									<li><router-link to="/admin/blog-details">Blog Details</router-link></li>
									<li><router-link to="/admin/add-blog">Add Blog</router-link></li>
									<li><router-link to="/admin/edit-blog">Edit Blog</router-link></li>
								</ul>
							</li>					
							<li class="menu-title"> 
								<span>Pages</span>
							</li>
							<li v-bind:class="{'active': currentPath == '/admin/profile'}"> 
								<router-link to="/admin/add-profile"><i class="feather-user"></i> <span>Profile</span></router-link>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-lock"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/admin/login"> Login </router-link></li>
									<li><router-link to="/admin/register"> Register </router-link></li>
									<li><router-link to="/admin/forgot-password"> Forgot Password </router-link></li>
									<li><router-link to="/admin/lock-screen"> Lock Screen </router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-book-open"></i> <span> Error Pages </span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/admin/error-404">404 Error </router-link></li>
									<li><router-link to="/admin/error-500">500 Error </router-link></li>
								</ul>
							</li>
							<li> 
								<router-link to="/admin/blank-page"><i class="feather-clipboard"></i> <span>Blank Page</span></router-link>
							</li>
							<li class="menu-title"> 
								<span>UI Interface</span>
							</li>
							<li> 
								<router-link to="/admin/components"><i class="feather-pocket"></i> <span>Components</span></router-link>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-file-minus"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/admin/form-basic-inputs">Basic Inputs </router-link></li>
									<li><router-link to="/admin/form-input-groups">Input Groups </router-link></li>
									<li><router-link to="/admin/form-horizontal">Horizontal Form </router-link></li>
									<li><router-link to="/admin/form-vertical"> Vertical Form </router-link></li>
									<li><router-link to="/admin/form-mask">Form Mask </router-link></li>
									<li><router-link to="/admin/form-validation">Form Validation </router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-align-justify"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/admin/tables-basic">Basic Tables </router-link></li>
									<li><router-link to="/admin/data-tables">Data Table </router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-life-buoy"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><a href="javascript:void(0);"><span>Level 2</span></a></li>
											<li class="submenu">
												<a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
												<ul style="display: none;">
													<li><a href="javascript:void(0);">Level 3</a></li>
													<li><a href="javascript:void(0);">Level 3</a></li>
												</ul>
											</li>
											<li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0);"> <span>Level 1</span></a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</perfect-scrollbar>
				</div>
			</div>
			<!-- /Sidebar -->
</template>
<script>
    import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
  import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
  import feather from 'feather-icons'
  export default {
components: {
           PerfectScrollbar ,
      },
mounted() {
	  if($('.floating').length > 0 ){
		$('.floating').on('focus blur', function (e) {
		$(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
    $('#sidebar-menu a').on('click', function (e) {
      if ($(this).parent().hasClass('submenu')) {
        e.preventDefault();
      }
      if (!$(this).hasClass('subdrop')) {
        $('ul', $(this).parents('ul:first')).slideUp(350);
        $('a', $(this).parents('ul:first')).removeClass('subdrop');
        $(this).next('ul').slideDown(350);
        $(this).addClass('subdrop');
      } else if ($(this).hasClass('subdrop')) {
        $(this).removeClass('subdrop');
        $(this).next('ul').slideUp(350);
      }
    });
    $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

  },
  computed: {
	currentPath() {
				return this.$route.name;
			},

    },
data() {
    return {
      settings: {
suppressScrollX: true,
},
      activeClass: 'active',
    };
            //  isactive : true
  },
  methods: {
  scrollHanle(evt) {
    console.log(evt)
  }
},
}
</script>
<style>
  .scroll-area {
    position: relative;
    margin: auto;
    height: calc(100vh - 60px);
    background-color: transparent !important;
}
.sidebar-menu ul li a.active {
  color: #0CE0FF;
}
.sidebar-menu ul ul a.active {
  color: #20e3ff;
  text-decoration: unset;
  background-color: unset;
}
</style>