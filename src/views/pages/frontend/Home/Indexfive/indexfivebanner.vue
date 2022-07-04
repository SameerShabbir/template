<template>
    
<!-- Home Banner  -->
<div class="home-banner">
    <div class="dot-slider slider">
        <!-- Banner Images -->
        <div class="profile-widget" v-for="item in fivebanner" :key="item.id">
            <div class="pro-img">
                <a href="javascript:void(0);">
                    <img class="img-fluid" :src="loadImg(item.img)" alt="">
                </a>
            </div>
        </div>
        <!-- /Banner Images -->
    </div>		
    <div class="container">
        <div class="banner-wrapper doc-form aos" data-aos="fade-up">
            <div class="app-form">
                <h2>Search Doctor, <br> <span class="header-highlight">Make an Appointment</span></h2>
                <form action="#" class="doctor-search-form">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <div class="form-group">
                                <div class="form-custom">
                                    <input type="text" class="form-control" value="" placeholder="Search Location">
                                    <i class="far fa-compass"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="form-group">
                                <div class="form-custom">
                                    <input type="text" class="form-control" value="" placeholder="Gender">
                                    <i class="far fa-smile"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-8">
                            <div class="form-group">
                                <div class="form-custom">
                                    <input type="text" class="form-control" value="" placeholder="Department">
                                    <i class="fas fa-user-check"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-4">
                            <router-link to="/search" class="btn banner-btn">MAKE APPOINTMENT</router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>			
<!-- /Home Banner -->
</template>
<script>
    import fivebanner from '../../../../../assets/json/Index/fivebanner.json'
    const images = require.context('../../../../../assets/img/slider', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
            //Home pharmacy slider
	if($('.dot-slider').length > 0) {
		$('.dot-slider').slick({
			dots: true,
			autoplay:false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}
        },
        data() {
            return {
            fivebanner: fivebanner
            }
        },
        methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    }
    }
    </script>