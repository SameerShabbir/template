<template>

	<!-- Clinic and Specialities -->
			<section class="section section-specialities">
				<div class="container-fluid">
					<div class="section-header text-center aos" data-aos="fade-up">
						<h2>Clinic and Specialities</h2>
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="row justify-content-center">
						<div class="col-md-9 aos" data-aos="fade-up">
							<!-- Slider -->
							<div class="specialities-slider slider">
							
								<!-- Slider Item -->
								<div class="speicality-item text-center" v-for="item in specialities" :key="item.id">
									<div class="speicality-img">
										<img :src="loadImg(item.img)" class="img-fluid" alt="Speciality">
										<span><i class="fa fa-circle" aria-hidden="true"></i></span>
									</div>
									<p>{{item.name}}</p>
								</div>	
								<!-- /Slider Item -->
								
							</div>
							<!-- /Slider -->
							
						</div>
					</div>
				</div>   
			</section>	 
			<!-- Clinic and Specialities -->
</template>
<script>
import specialities from '../../../../../assets/json/Index/specialities.json'
const images = require.context('../../../../../assets/img/specialities', false, /\.png$|\.jpg$/)
export default {
	mounted() {
    if($('.specialities-slider').length > 0) {
		$('.specialities-slider').slick({
			dots: true,
			autoplay:false,
			infinite: true,
			variableWidth: true,
			prevArrow: false,
			nextArrow: false
		});
	}
	},
    data() {
        return {
	    specialities: specialities
        }
    },
	methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
}
</script>