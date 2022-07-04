<template>
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadCrumb32></breadCrumb32>
        
		<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
						
                        <div class="stickyside">

                        <searchsidebar></searchsidebar>

                        </div>
							
						</div>
						
						<div class="col-md-12 col-lg-8 col-xl-9">

							<!-- Doctor Widget -->
							<div class="card" v-for="item in search" :key="item.id">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<router-link to="/doctor-profile">
													<img :src="loadImg(item.img)" class="img-fluid" alt="User Image">
                                                </router-link>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><router-link to="/doctor-profile">{{item.name}}</router-link></h4>
												<p class="doc-speciality">{{item.description}}</p>
												<h5 class="doc-department"><img src="../../../../../assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">{{item.specialist}}</h5>
												<div class="rating mapgridrating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">{{item.rating}}</span>
												</div>
												
												<div class="clinic-details">
													<p class="doc-location"><i class="fas fa-map-marker-alt"></i> {{item.place}}</p>
													<ul class="clinic-gallery">
														<li class="me-1">
															<a class="fancystyle" data-fancybox="gallery">
																<img src="../../../../../assets/img/features/feature-01.jpg" alt="Feature">
															</a>
														</li>
														<li class="me-1">
															<a class="fancystyle" data-fancybox="gallery">
																<img  src="../../../../../assets/img/features/feature-02.jpg" alt="Feature">
															</a>
														</li>
														<li class="me-1">
															<a class="fancystyle" data-fancybox="gallery">
																<img src="../../../../../assets/img/features/feature-03.jpg" alt="Feature">
															</a>
														</li>
														<li>
															<a class="fancystyle" data-fancybox="gallery">
																<img src="../../../../../assets/img/features/feature-04.jpg" alt="Feature">
															</a>
														</li>
													</ul>
												</div>
												<div class="clinic-services">
													<span>{{item.name1}}</span>
													<span> {{item.name2}}</span>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<li><i class="far fa-thumbs-up"></i> {{item.rate}}</li>
													<li><i class="far fa-comment"></i> 17 {{item.feed}}</li>
													<li><i class="fas fa-map-marker-alt"></i> {{item.place1}}</li>
													<li><i class="far fa-money-bill-alt"></i> {{item.rate1}} <i class="fas fa-info-circle" data-bs-toggle="tooltip" title="Lorem Ipsum"></i> </li>
												</ul>
											</div>
											<div class="clinic-booking">
												<router-link class="view-pro-btn" to="/doctor-profile">View Profile</router-link>
												<router-link class="apt-btn" to="/booking">Book Appointment</router-link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Doctor Widget -->

							<div class="load-more text-center">
								<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>	
							</div>	
						</div>
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
		
        <layout-footer></layout-footer>
    </div>
</template>
<script>
    import search from '../../../../../assets/json/Patient/search.json'
    const images = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
    
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        },
        data() {
            return {
                search: search
            }
        }
    }
    </script>