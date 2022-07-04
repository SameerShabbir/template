<template>
<!-- Clinic and Specialities -->
<section class="clinic-section">
    <div class="container">
        <div class="sec-header aos" data-aos="fade-up">
            <h2>Clinic and Specialities</h2>
            <span class="bottom-border"></span>
        </div>
        <div class="row">
            
            <div class="col-md-12 aos" data-aos="fade-up">
                <div class="clinic-slider slider">
                    <div class="profile-widget" v-for="item in fivespecialities" :key="item.id">
                        <div class="brower-box">
                            <a href="javascript:void(0);">
                                <img class="img-fluid" alt="User Image" :src="loadImg(item.img)">
                                <img class="img-fluid hover" alt="" :src="loadImg1(item.img1)">
                            </a>
                            <h4>{{item.name}}</h4>
                            <p>{{item.no}} <span>{{item.name1}}</span></p>
                            <router-link to="/doctor-profile" class="arrow"><i class="fas fa-chevron-right"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Clinic and Specialities -->
</template>
<script>
    import fivespecialities from '../../../../../assets/json/Index/fivespecialities.json'
    const images = require.context('../../../../../assets/img/icons', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/img/icons', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
        //clinic slider
	if($('.clinic-slider').length > 0) {
		$('.clinic-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			rows: 2,
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
						slidesToShow: 3
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
                fivespecialities: fivespecialities
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
            loadImg1(img1Path) {
                return images1('./' + img1Path).default
            },
        }
    }
    </script>