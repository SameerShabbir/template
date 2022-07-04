<template>
<!-- Clinic Section -->
<section class="clinics-section sevenblog1">
    <div class="shapes">
        <img src="../../../../../assets/img/shapes/shape-1.png" alt="" class="img-fluid shape-1">
        <img src="../../../../../assets/img/shapes/shape-2.png" alt="" class="img-fluid shape-2">
    </div>
    <div class="container">
                <div class="section-heading aos" data-aos="fade-up">
                    <h2>Clinic & Specialities</h2>
                    <p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
                </div>
        <div class="book-slider1 slider clinics aos" data-aos="fade-up">
            <div class="item" v-for="item in sevenspeciality" :key="item.id">
                <div class="clinic-item">
                    <div class="clinics-card">
                        <div class="clinics-img">
                            <img :src="loadImg(item.img)" alt="" class="img-fluid">
                        </div>
                        <div class="clinics-info">
                            <img :src="loadImg1(item.img1)" alt="" class="img-fluid">
                            <a href="javascript:void(0);"><span>{{item.name}}</span></a>
                        </div>
                    </div>
                    <div class="clinics-icon">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Clinic Section -->
</template>
<script>
    import sevenspeciality from '../../../../../assets/json/Index/sevenspeciality.json'
    const images = require.context('../../../../../assets/img/clinic', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/img/category', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
         //book doctor slider
	if($('.book-slider1').length > 0) {
		$('.book-slider1').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 6,
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
                sevenspeciality: sevenspeciality
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