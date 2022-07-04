<template>
<!-- Book Doctors-->
<section class="book-doctor doc-booking">
    <div class="container">					
        <div class="row heading-wrapper">
            <div class="col-md-12 aos" data-aos="fade-up">
                <h1>Book Our Best Doctor</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 aos" data-aos="fade-up">
                <div class="book-slider slider">
                    <div class="profile-widget"  v-for="item in ninebestdoctor" :key="item.id">
                        <router-link to="/doctor-profile">
                            <img :src="loadImg(item.img)" alt="" />
                        </router-link>
                        <div class="pro-content">
                            <div  class="row row-sm">	
                                <div class="col-md-6">							
                                    <span class="amt">{{item.rate}}</span>
                                </div>
                            </div>
                            <div class="provider-info">
                                <h3><router-link to="/doctor-profile">{{item.name}}</router-link></h3>
                                <h5>{{item.name1}} </h5>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">{{item.rate1}}</span>
                                </div>
                                <router-link to="/booking" class="btn book-btn">{{item.button}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Book Doctors-->
</template>
<script>
    import ninebestdoctor from '../../../../../assets/json/Index/ninebestdoctor.json'
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
                ninebestdoctor: ninebestdoctor
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>