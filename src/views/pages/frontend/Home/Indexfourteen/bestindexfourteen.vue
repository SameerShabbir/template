<template>

<!-- Best Section Five -->
			<section class="best-section-five">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-header section-header-five text-center aos" data-aos="fade-up">
								<h2 class="title-five">Book Our Best Doctor</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6 d-flex aos" data-aos="fade-up" v-for="item in fourteenbookdoctor" :key="item.id">
							<div class="doctors-grid-five w-100">
								<div class="doctors-img-five">
									<router-link to="/doctor-profile">
										<img :src="loadImg(item.img)" alt="" class="img-fluid">
									</router-link>
									<div class="social-info">
										<div class="social-inner">
											<a href="javascript:void(0);" target="_blank"><i class="fab fa-facebook hi-icon"></i></a>
											<a href="javascript:void(0);" target="_blank"><i class="fab fa-linkedin hi-icon"></i></a>
											<a href="javascript:void(0);" target="_blank"><i class="fab fa-instagram hi-icon"></i></a>
											<a href="javascript:void(0);" target="_blank"><i class="fab fa-twitter hi-icon"></i></a>
										</div>
									</div>
								</div>
								<div class="best-doctors-info">
									<h3><router-link to="/doctor-profile">{{item.name}}</router-link></h3>
									<p class="doctor-posting">{{item.name1}}</p>
									<div class="rating mapgridrating">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
										<span class="d-inline-block average-rating">{{item.rate}}</span>
									</div>
									<div class="doctors-btn-five">
										<router-link to="/booking" class="btn w-100">{{item.button}}</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="doctor-see-btn text-center aos" data-aos="fade-up">
						<a href="javascript:void(0);" class="btn btn-six">See All Doctors</a>
					</div>
				</div>
			</section>
			<!-- /Best Section Five -->
</template>
<script>
    import fourteenbookdoctor from '../../../../../assets/json/Index/fourteenbookdoctor.json'
    const images = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                fourteenbookdoctor: fourteenbookdoctor
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>