<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadCrumb39></breadCrumb39>
        
		<div class="content">
				<div class="container-fluid">

					<div class="row">
						
                        <productsidebar></productsidebar>
						
						<div class="col-md-7 col-lg-9 col-xl-9">

							<productheader></productheader>

							<div class="row">
								<div class="col-md-12 col-lg-4 col-xl-4 product-custom" v-for="item in productall" :key="item.id">
	                                <div class="profile-widget">
										<div class="doc-img">
											<router-link to="/product-description" tabindex="-1">
												<img class="img-fluid" alt="Product image" :src="loadImg(item.img)">
											</router-link>
											<a href="javascript:void(0)" class="fav-btn" tabindex="-1">
												<i class="far fa-bookmark"></i>
											</a>
										</div>
										<div class="pro-content">
											<h3 class="title pb-4">
												<router-link to="/product-description" tabindex="-1">{{item.name}}</router-link> 
											</h3>
											<div class="row align-items-center">
												<div class="col-lg-6">
													<span class="price">{{item.rate}}</span>
													<span class="price-strike">{{item.price}}</span>
												</div>
												<div class="col-lg-6 text-end">
													<router-link to="/cart" class="cart-icon"><i class="fas fa-shopping-cart"></i></router-link>
												</div>
											</div>
										</div>
									</div>		
                            	</div>
                             </div>
                             <div class="col-md-12 text-center">
                             	<a href="javascript:void(0);" class="btn book-btn1 mb-4">Load More</a>
                         	</div>
						</div>
					</div>
				</div>
			</div>
		
        <layout-footer></layout-footer>
    </div>
</template>
<script>
    import productall from '../../../../../assets/json/Pharmacy/productall.json'
    const images = require.context('../../../../../assets/img/products', false, /\.png$|\.jpg$/)
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
                productall: productall
            }
        }
    }
    </script>