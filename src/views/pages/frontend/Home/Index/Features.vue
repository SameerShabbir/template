<template>
	
   <!-- Availabe Features -->
		   <section class="section section-features">
				<div class="container-fluid">
				   <div class="row">
						<div class="col-md-5 features-img aos" data-aos="fade-up">
							<img src="../../../../../assets/img/features/feature.png" class="img-fluid" alt="Feature">
						</div>
						<div class="col-md-7">
							<div class="section-header aos" data-aos="fade-up">	
								<h2 class="mt-2">Availabe Features in Our Clinic</h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
							</div>	
							<div class="features-slider slider aos" data-aos="fade-up">
								<!-- Slider Item -->
								<div class="feature-item text-center" v-for="item in feature" :key="item.id">
									<img :src="loadImg(item.img)" class="img-fluid" alt="Feature">
									<p>{{item.name}}</p>
								</div>
								<!-- /Slider Item -->
							</div>
						</div>
				   </div>
				</div>
			</section>		
			<!-- /Availabe Features -->
</template>
<script>
import feature from '../../../../../assets/json/Index/feature.json'
const images = require.context('../../../../../assets/img/features', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
		feature: feature
		}
	},
    mounted() {
if($('.features-slider').length > 0) {
		$('.features-slider').slick({
			dots: true,
			infinite: true,
			centerMode: true,
			slidesToShow: 3,
			speed: 500,
			variableWidth: true,
			arrows: false,
			autoplay:false,
			responsive: [{
				  breakpoint: 992,
				  settings: {
					slidesToShow: 1
				  }

			}]
		});
	}
},
methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    }
    }
</script>