<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadcrumb8></breadcrumb8>
        
		<!-- Page Content -->
			<div class="content">
				<div class="container">
				
					<div class="row">
						<div class="col-lg-8 col-md-12">
						
							<div class="row blog-grid-row">
								<div class="col-md-6 col-sm-12" v-for="item in bloggrid" :key="item.id">
								
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
											<h3 class="blog-title"><router-link to="/blog-details">{{item.title}}</router-link></h3>
											<p class="mb-0">{{item.description}}</p>
										</div>
									</div>
									<!-- /Blog Post -->
									
								</div>

							</div>
							
							<!-- Blog Pagination -->
							<div class="row">
								<div class="col-md-12">
									<div class="blog-pagination">
										<nav>
											<ul class="pagination justify-content-center">
												<li class="page-item disabled">
													<a class="page-link" href="javascript:void(0);" tabindex="-1"><i class="fas fa-angle-double-left"></i></a>
												</li>
												<li class="page-item">
													<a class="page-link" href="javascript:void(0);">1</a>
												</li>
												<li class="page-item active">
													<a class="page-link" href="javascript:void(0);">2 <span class="visually-hidden">(current)</span></a>
												</li>
												<li class="page-item">
													<a class="page-link" href="javascript:void(0);">3</a>
												</li>
												<li class="page-item">
													<a class="page-link" href="javascript:void(0);"><i class="fas fa-angle-double-right"></i></a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<!-- /Blog Pagination -->
							
						</div>
						
						<blogsidebar></blogsidebar>
						
					</div>
				</div>
			</div>	
			<!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
</template>
<script>
import bloggrid from '../../../../../assets/json/Blog/bloggrid.json'
const images = require.context('../../../../../assets/img/blog', false, /\.png$|\.jpg$/)
const images1 = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
export default {
	mounted() {

	},
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
		loadImg1(img1Path) {
            return images1('./' + img1Path).default
        },
    },
    data() {
        return {
		bloggrid: bloggrid
        }
    }
}
</script>