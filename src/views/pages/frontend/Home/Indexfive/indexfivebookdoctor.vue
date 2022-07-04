<template>
<!-- Book Doctors-->
<section class="book-doctor">
    <div class="container">					
        <div class="sec-header aos" data-aos="fade-up">
            <h2>Book Our Best Doctor</h2>
            <span class="bottom-border"></span>
        </div>
        <div class="row">
            <div class="col-md-12 aos" data-aos="fade-up">
                <div class="book-slider slider">
                    <div class="profile-widget" v-for="item in fivebookdoctor" :key="item.id">
                        <router-link to="/doctor-profile">
                            <img :src="loadImg(item.img)" alt="" />
                        </router-link>
                        <div class="pro-content">
                            <div  class="row row-sm">	
                                <div class="col-md-6">							
                                    <span class="amt">{{item.rate}}</span>
                                </div>
                                <div class="col-md-6 text-end">
                                    <a href="javascript:void(0);" class="star"><i class="fas fa-star"></i></a>	
                                </div>
                            </div>
                            <div class="provider-info">
                                <h3><router-link to="/doctor-profile">{{item.name}}</router-link></h3>
                                <div>
                                    <h5>{{item.specialist}} </h5>
                                    <div class="rating">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="d-inline-block average-rating">{{item.rating}}</span>
                                    </div>
                                </div>
                                <a href="javascript:void(0);" class="side-arrow">
                                    <i class="fas fa-chevron-right"></i>
                                </a>
                                <div class="content-info">
                                    <ul class="available-info">
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i> {{item.place}}
                                        </li>
                                        <li>
                                            <i class="far fa-clock"></i> {{item.place1}}
                                        </li>
                                    </ul>
                                    <div class="row row-sm">
                                        <div class="col-6">
                                            <a href="javascript:void(0);" class="btn view-btn" tabindex="0">{{item.button1}}</a>
                                        </div>
                                        <div class="col-6">
                                            <router-link to="/booking" class="btn book-btn book-btn-light" tabindex="0">{{item.button2}}</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-4 aos" data-aos="fade-up">
            <div class="col-md-12 text-center">
                <router-link to="/doctor-profile" class="view-btn view-btn-light d-inline-block">View More</router-link>
            </div>
        </div>
    </div>
</section>
<!-- /Book Doctors-->
</template>
<script>
    import fivebookdoctor from '../../../../../assets/json/Index/fivebookdoctor.json'
    const images = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
         //book doctor slider
	if($('.book-slider').length > 0) {
		$('.book-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
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
                fivebookdoctor: fivebookdoctor
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>