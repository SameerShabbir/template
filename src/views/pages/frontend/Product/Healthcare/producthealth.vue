<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadCrumb36></breadCrumb36>
        
		<div class="content">
				<div class="container-fluid">

					<div class="row">
						
                        <productsidebar></productsidebar>
						
						<div class="col-md-7 col-lg-9 col-xl-9">

							<div class="row align-items-center pb-3">	
								<div class="col-md-4 col-12 d-md-block d-none custom-short-by">
									<span class="sort-title">Showing 6 of 98 products</span>
								</div>
								<div class="col-md-8 col-12 d-md-block d-none custom-short-by">
									<div class="sort-by pb-3">
										<span class="sort-title">Sort by</span>
										<span class="sortby-fliter">
											<select class="form-select">
												<option>Select</option>
												<option class="sorting">Rating</option>
												<option class="sorting">Popular</option>
												<option class="sorting">Latest</option>
												<option class="sorting">Free</option>
											</select>
										</span>
									</div>
									<div class="sort-by pb-3">
										<span class="sort-title">Show</span>
										<span class="sortby-fliter">
											<select class="form-select">
												<option>Select</option>
												<option class="sorting">1</option>
												<option class="sorting">2</option>
												<option class="sorting">3</option>
												<option class="sorting">4</option>
												<option class="sorting">5</option>
												<option class="sorting">6</option>
												<option class="sorting">7</option>
												<option class="sorting">8</option>
											</select>
										</span>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-12 col-lg-4 col-xl-4 product-custom" v-for="item in producthealthcare" :key="item.id">
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
											<h3 class="title pb-1">
												<router-link to="/product-description" tabindex="-1">{{item.name}}</router-link> 
											</h3>
											<div class="rating pb-3 mapgridrating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">{{item.rate}}</span>
											</div>
											<div class="row align-items-center">
												<div class="col-lg-6">
													<span class="price">{{item.rate1}}</span>
													<span class="price-strike ms-1">{{item.rate2}}</span>
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
    import producthealthcare from '../../../../../assets/json/Product/producthealthcare.json'
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
                producthealthcare: producthealthcare
            }
        }
    }
    </script>