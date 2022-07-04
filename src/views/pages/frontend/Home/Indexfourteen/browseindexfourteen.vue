<template>
<!-- Browse Section Five -->
			<section class="browse-section-five">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="section-header section-header-five text-center aos" data-aos="fade-up">
								<h2 class="title-five">Browse by Specialities</h2>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3 col-md-6 aos" data-aos="fade-up" v-for="item in fourteenspecialities" :key="item.id">
							<div class="specialist-card-five d-flex hvr-bounce-to-right">
								<div class="specialist-img-five">
									<img :src="loadImg(item.img)" alt="" class="img-fluid">
								</div>
								<div class="specialist-info">
									<a href="javascript:void(0);">{{item.name}}</a>
								</div>
								<div class="specialist-nav-five ms-auto">
									<a href="javascript:void(0);"><i class="feather-arrow-right"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Browse Section Five -->
</template>
<script>
    import fourteenspecialities from '../../../../../assets/json/Index/fourteenspecialities.json'
    const images = require.context('../../../../../assets/img/icons', false, /\.png$|\.jpg$|\.svg$/)
    export default {
        data() {
            return {
                fourteenspecialities: fourteenspecialities
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>