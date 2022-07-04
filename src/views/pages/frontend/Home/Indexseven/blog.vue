<template>
<!-- Blog Section -->
			<section class="our-blog-section sevenblog">
				<div class="container">
							<div class="section-heading aos" data-aos="fade-up">
								<h2>Blogs and News</h2>
								<p>Read Professional Articles and Latest Articles</p>
							</div>
					<div class="book-slider slider blogs aos" data-aos="fade-up">
						<div class="item" v-for="item in sevenblog" :key="item.id">
							<div class="our-blogs">
								<div class="blogs-img">
									<router-link to="/blog-details"><img :src="loadImg(item.img)" alt="" class="img-fluid"></router-link>
									<div class="blogs-overlay d-flex">
										<img :src="loadImg1(item.img1)" alt="" class="img-fluid">
											<span class="blogs-writter">{{item.name}}</span>
									</div>
								</div>
								<div class="blogs-info">
									<span>{{item.name1}}</span>
									<router-link to="/blog-details"><h4>{{item.title}}</h4></router-link>
									<p>{{item.description}}</p>
									<span class="blogs-time"><i class="far fa-clock"></i> {{item.date}}</span>
								</div>
								<div class="blogs-nav">
									<router-link to="/blog-details" class="blogs-btn">{{item.button}}</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Blog Section -->
</template>
<script>
    import sevenblog from '../../../../../assets/json/Index/sevenblog.json'
    const images = require.context('../../../../../assets/img', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
          //book doctor slider
	if($('.book-slider').length > 0) {
		$('.book-slider').slick({
			dots: false,
			autoplay:false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}
        },
        data() {
            return {
                sevenblog: sevenblog
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