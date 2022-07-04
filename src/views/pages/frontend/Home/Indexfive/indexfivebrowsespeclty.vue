<template>
    
<!-- /Browse by Specialities -->
<section class="browse-speciality">
    <div class="container">
        <div class="sec-header aos" data-aos="fade-up">
            <h2>Browse by Specialities</h2>
            <span class="bottom-border"></span>
        </div>
        <div class="row">
            <div class="col-md-12 aos" data-aos="fade-up">
                <div class="browse-slider slider">
                    <div class="profile-widget browse-widget" v-for="item in fivebrowsespeciality" :key="item.id">
                        <img :src="loadImg(item.img)" alt="" />
                        <div class="overlay">
                            <img :src="loadImg1(item.img1)" alt="" />
                            <h3>{{item.name}}</h3>
                            <router-link to="/doctor-profile" class="arrows"><i class="fas fa-long-arrow-alt-right"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Browse by Specialities -->
</template>
<script>
    import fivebrowsespeciality from '../../../../../assets/json/Index/fivebrowsespeciality.json'
    const images = require.context('../../../../../assets/img/icons', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/img/icons', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
        //browse slider
	if($('.browse-slider').length > 0) {
		$('.browse-slider').slick({
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
                fivebrowsespeciality: fivebrowsespeciality
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