<template>
<!-- Blog Section Five -->
			<section class="blog-section-five">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-header section-header-five text-center aos" data-aos="fade-up">
								<h2 class="title-five">Our Latest Blogs</h2>
							</div>
						</div>
					</div>

					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6 d-flex aos" data-aos="fade-up" v-for="item in fourteenblog" :key="item.id">
							<div class="blog-grid-five w-100">
								<div class="blog-five-img">
									<router-link to="/blog-details">
										<img :src="loadImg(item.img)" class="img-fluid blog-details-img" alt="">
									</router-link>
									<div class="blog-item-info">
										<div class="blog-news-date">
											<router-link to="/blog-details">
												<i class="feather-calendar me-2"></i>
												<span>{{item.date}}</span>
											</router-link>
										</div>
										<div class="blog-doctors-profile">
											<router-link to="/blog-details">
												<img :src="loadImg1(item.img1)" alt="" class="me-2"> 
												<span>{{item.name}}</span>
											</router-link>
										</div>
									</div>
								</div>
								<div class="blog-info-five">
									<h3 class="blog-news-title">
										<router-link to="/blog-details">{{item.description}}</router-link>
									</h3>
									<p>{{item.description1}}</p>
									<router-link to="/blog-details" class="read-news">{{item.button}}</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="blog-five-btn aos" data-aos="fade-up">
								<router-link to="/blog-details" class="btn btn-six">View More</router-link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Blog Section Five -->
</template>
<script>
    import fourteenblog from '../../../../../assets/json/Index/fourteenblog.json'
    const images = require.context('../../../../../assets/img/blog', false, /\.png$|\.jpg$/)
	const images1 = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                fourteenblog: fourteenblog
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