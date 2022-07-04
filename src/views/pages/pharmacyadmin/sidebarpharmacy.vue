<template>
<!-- Sidebar -->
			<div class="sidebar" id="sidebar">
				<div class="sidebar-inner">
                    <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title"><span>Main</span></li>
							<li>
								<router-link to="/pharmacyadmin/index"><i class="feather-home"></i> <span>Dashboard</span></router-link>
							</li>

							<li class="submenu">
								<a href="javascript:void(0);" v-bind:class="{'active': currentPath == '/pharmacyadmin/edit-product'}"><i class="feather-shopping-cart"></i> <span> Products</span> <span class="menu-arrow"></span></a>
								<ul>
									<li v-bind:class="{'active': currentPath == '/pharmacyadmin/edit-product'}"><router-link to="/pharmacyadmin/products">Products</router-link></li>
									<li><router-link to="/pharmacyadmin/add-product">Add Product</router-link></li>
									<li><router-link to="/pharmacyadmin/product-list">Product List</router-link></li>
									<li><router-link to="/pharmacyadmin/outstock">Out Stock</router-link></li>
									<li><router-link to="/pharmacyadmin/expired">Expired</router-link></li>
								</ul>
							</li>
							<li>
								<router-link to="/pharmacyadmin/categories"><i class="feather-layout"></i> <span>Categories</span></router-link>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" v-bind:class="{'active': currentPath == '/pharmacyadmin/edit-purchase'}"><i class="feather-star"></i> <span> Purchase</span> <span class="menu-arrow"></span></a>
								<ul>
									<li v-bind:class="{'active': currentPath == '/pharmacyadmin/edit-purchase'}"><router-link to="/pharmacyadmin/purchase">Purchase</router-link></li>
									<li><router-link to="/pharmacyadmin/add-purchase">Add Purchase</router-link></li>
									<li><router-link to="/pharmacyadmin/order">Orders</router-link></li>
								</ul>
							</li>
							<li>
								<router-link to="/pharmacyadmin/sales"><i class="feather-activity"></i> <span>Sales</span></router-link>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);" v-bind:class="{'active': currentPath == '/pharmacyadmin/edit-supplier'}"><i class="feather-user"></i> <span> Supplier</span> <span class="menu-arrow"></span></a>
								<ul>
									<li v-bind:class="{'active': currentPath == '/pharmacyadmin/edit-supplier'}"><router-link to="/pharmacyadmin/supplier">Supplier</router-link></li>
									<li><router-link to="/pharmacyadmin/add-supplier">Add Supplier</router-link></li>
								</ul>
							</li>	
							<li> 
								<router-link to="/pharmacyadmin/transactions-list"><i class="feather-credit-card"></i> <span> Transaction</span></router-link>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="feather-file-text"></i> <span> Reports</span> <span class="menu-arrow"></span></a>
								<ul>
									<li><router-link to="/pharmacyadmin/invoice">Invoice</router-link></li>
									<li><router-link to="/pharmacyadmin/invoice-report">Invoice Reports</router-link></li>
								</ul>
							</li>	
							<li class="menu-title"> 
								<span>Pages</span>
							</li>				
							<li> 
								<router-link to="/pharmacyadmin/profile"><i class="feather-user"></i> <span>Profile</span></router-link>
							</li>
							<li> 
								<router-link to="/pharmacyadmin/settings"><i class="feather-sliders"></i> <span>Settings</span></router-link>
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
  text-decoration: underline;
  background-color: unset;
}
</style>