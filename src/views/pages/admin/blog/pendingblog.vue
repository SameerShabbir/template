<template>
        <div class="main-wrapper">

          <layout-headeradmin></layout-headeradmin>

          <layout-sidebaradmin></layout-sidebaradmin>

          <!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					
					<!-- Blog List -->
					<div class="row">
						<div class="col-md-9">
							<ul class="list-links mb-4">
								<li><router-link to="/admin/active-blog">Active Blog</router-link></li>
								<li class="active"><router-link to="/admin/pending-blog">Pending Blog</router-link></li>
							</ul>
						</div>
						<div class="col-md-3 text-md-end">
							<router-link to="/admin/add-blog" class="btn btn-primary btn-blog mb-3">Add Blog</router-link>
						</div>
					</div>
					
					<div class="row">
						
						<!-- Blog Post -->
						<div class="col-md-6 col-xl-4 col-sm-12 d-flex" v-for="item in activeblog" :key="item.id">
							<div class="blog grid-blog flex-fill">
								<div class="blog-image">
									<router-link to="/admin/blog-details"><img class="img-fluid" :src="loadImg(item.img)" alt="Post Image"></router-link>
									<div class="fav-btn">
										<img src="../../../../assets/admin_img/icon/eye-icon.png" alt="icon"> {{item.eyeno}}
									</div>
								</div>
								<div class="blog-content">
									<ul class="entry-meta meta-item">
										<li>
											<div class="post-author">
												<router-link to="/admin/profile">
													<img :src="loadImg1(item.img1)" alt="Post Author"> 
													<span>
														<span class="post-title">{{item.name}}</span>
														<span class="post-date"><i class="far fa-clock"></i>  {{item.date}}</span>
													</span>
												</router-link>
											</div>
										</li>
									</ul>
									<h3 class="blog-title"><router-link to="/admin/blog-details">{{item.title}}</router-link></h3>
									<p>{{item.description}}</p>
								</div>
                                <div class="row">
									<div class="col"><router-link to="/admin/edit-blog" class="text-success"><i class="feather-edit-3 me-1"></i> Edit</router-link></div>
									<div class="col text-end">
										<label class="toggle-switch justify-content-end" for="blog3">
											<input type="checkbox" class="toggle-switch-input" id="blog3" checked>
											<span class="toggle-switch-label">
												<span class="toggle-switch-indicator"></span>
											</span> 
											<span class="active-text ms-1">Active</span>
										</label>
									</div>
								</div>
							</div>										
						</div>
						<!-- /Blog Post -->
						
					</div>
					
					<!-- Pagination -->
					<div class="row ">
						<div class="col-md-12">
							<div class="pagination-tab mt-md-5 d-flex justify-content-center">
								<ul class="pagination mb-0">
									<li class="page-item disabled">
										<a class="page-link" href="javascript:void(0);" tabindex="-1"><i class="feather-chevron-left mr-2"></i>Previous</a>
									</li>
									<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
									<li class="page-item active">
										<a class="page-link" href="javascript:void(0);">2 <span class="sr-only">(current)</span></a>
									</li>
									<li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
									<li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
									<li class="page-item">
										<a class="page-link" href="javascript:void(0);">Next<i class="feather-chevron-right ml-2"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Pagination -->
					
				</div>
				<!-- /Blog List -->
				
			</div>
			<!-- /Page Wrapper -->
          
        </div>
</template>
<script>
    import activeblog from '../../../../assets/json/admin/activeblog.json';
    const images = require.context('../../../../assets/admin_img/blog', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
	import Vue from 'vue'
	export default {
	  data() {
	  return {
      activeblog
	  }
	  },
	  components: {
	 
	  },
	  mounted() {
	  },
      methods: {
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
            loadImg1(imgPath) {
                return images1('./' + imgPath).default
            },
            
        },
	}
  </Script>
  