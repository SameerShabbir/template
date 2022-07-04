<template>
	<!-- Popular Section -->
			<section class="section section-doctor">
				<div class="container-fluid">
                    <div class="section-header text-center aos" data-aos="fade-up">
                        <h2>Book Our Best Doctor</h2>
                        <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
				   <div class="row">
						<div class="col-lg-12 aos" data-aos="fade-up">
							<div class="doctor-slider slider">
							
								<!-- Doctor Widget -->
								<div class="profile-widget" v-for="item in book" :key="item.id">
									<div class="doc-img">
										<router-link to="/doctor-profile">
											<img class="img-fluid" alt="User Image" :src="loadImg(item.img)">
										</router-link>
										<a href="javascript:void(0)" class="fav-btn">
											<i class="far fa-bookmark"></i>
										</a>
									</div>
									<div class="pro-content">
										<h3 class="title">
											<router-link to="/doctor-profile">{{item.name}}</router-link> 
											<i class="fas fa-check-circle verified"></i>
										</h3>
										<p class="speciality">{{item.name1}}</p>
										<div class="rating mapgridrating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<span class="d-inline-block average-rating">{{item.rating}}</span>
										</div>
										<ul class="available-info">
											<li>
												<i class="fas fa-map-marker-alt"></i> {{item.place}}
											</li>
											<li>
												<i class="far fa-clock"></i> {{item.date}}
											</li>
											<li>
												<i class="far fa-money-bill-alt"></i> {{item.money}}
												<i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i>
											</li>
										</ul>
										<div class="row row-sm">
											<div class="col-6">
												<router-link to="/doctor-profile" class="btn view-btn">View Profile</router-link>
											</div>
											<div class="col-6">
												<router-link to="/booking" class="btn book-btn">Book Now</router-link>
											</div>
										</div>
									</div>
								</div>
								<!-- /Doctor Widget -->
								
							</div>
						</div>
				   </div>
				</div>
			</section>
			<!-- /Popular Section -->
</template>
<script>
import AOS from 'aos';
    import book from '../../../../../assets/json/Index/book.json'
    const images = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			book: book
		}
	},
    mounted() {
			if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}
	
	if($('.doctor-slider').length > 0) {
		$('.doctor-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			variableWidth: true,
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