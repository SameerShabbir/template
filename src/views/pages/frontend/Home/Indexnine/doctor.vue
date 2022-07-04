<template>
 <!-- Facilities Sections-->
			<section class="facility-section">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-7 col-md-6 aos" data-aos="fade-up">
							<img src="../../../../../assets/img/shapes/blog-img01.png" alt="" class="operat-img" />
						</div>
						<div class="col-lg-5 col-md-6">
							<div class="visit-doctor aos" data-aos="fade-up" v-for="item in ninedoctor" :key="item.id">
								<div class="inner-details">
									<div class="count">
										<h1>{{item.no}}</h1>
									</div>
									<div class="info">
										<h1>{{item.name}}</h1>
										<p>{{item.description}}</p>
										<router-link to="/booking">{{item.button}} <i class="fas fa-long-arrow-alt-right"></i> </router-link>
									</div>
									<img :src="loadImg(item.img)" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Facilities Sections-->
</template>
<script>
    import ninedoctor from '../../../../../assets/json/Index/ninedoctor.json'
    const images = require.context('../../../../../assets/img/icons', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                ninedoctor: ninedoctor
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>