<template>

<!-- Available Features-->
<section class="aval-features">
    <div class="custom-contain">
        <div class="row">
            <div class="col-lg-5 col-md-6 feature aos" data-aos="fade-up">
                <div class="info-box">
                    <h2>Availabe Features in Our Clinic</h2>
                    <p>Meet our Experts & Book Online</p>
                    <router-link to="/doctor-profile" class="view-btn">View More</router-link>
                </div>
            </div>
            <div class="col-lg-7 col-md-6 ps-0 aos" data-aos="fade-up">
                <div class="aval-slider slider">
                    <div class="aval-widget" v-for="item in fiveavailablefeature" :key="item.id">
                        <div class="features-img">
                            <img :src="loadImg(item.img)" alt="" />
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Available Features-->
</template>
<script>
    import fiveavailablefeature from '../../../../../assets/json/Index/fiveavailablefeature.json'
    const images = require.context('../../../../../assets/img/clinic', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
        //avalable features slider
	if($('.aval-slider').length > 0) {
		$('.aval-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 2
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
                fiveavailablefeature: fiveavailablefeature
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>