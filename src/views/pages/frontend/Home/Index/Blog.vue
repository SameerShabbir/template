<template>
	
	<!-- Blog Section -->
		   <section class="section section-blogs">
				<div class="container-fluid">
				
					<!-- Section Header -->
					<div class="section-header text-center aos" data-aos="fade-up">
						<h2>Blogs and News</h2>
						<p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<!-- /Section Header -->
					
					<div class="row blog-grid-row aos" data-aos="fade-up">
						<div class="col-md-6 col-lg-3 col-sm-12" v-for="item in blog" :key="item.id">
						
							<!-- Blog Post -->
							<div class="blog grid-blog">
								<div class="blog-image">
									<router-link to="/blog-details"><img class="img-fluid" :src="loadImg(item.img)" alt="Post Image"></router-link>
								</div>
								<div class="blog-content">
									<ul class="entry-meta meta-item">
										<li>
											<div class="post-author">
												<router-link to="/doctor-profile"><img :src="loadImg1(item.img1)" alt="Post Author"> <span>{{item.name}}</span></router-link>
											</div>
										</li>
										<li><i class="far fa-clock"></i> {{item.date}}</li>
									</ul>
									<h3 class="blog-title"><router-link to="/blog-details">{{item.description}}</router-link></h3>
									<p class="mb-0">{{item.description1}}</p>
								</div>
							</div>
							<!-- /Blog Post -->
							
						</div>
					</div>
					<div class="view-all text-center aos" data-aos="fade-up"> 
						<router-link to="/blog-list" class="btn btn-primary">View All</router-link>
					</div>
				</div>
			</section>
			<!-- /Blog Section -->	
</template>
<script>
    import blog from '../../../../../assets/json/Index/blog.json'
    const images = require.context('../../../../../assets/img/blog', false, /\.png$|\.jpg$/)
	const images1 = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                blog: blog
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