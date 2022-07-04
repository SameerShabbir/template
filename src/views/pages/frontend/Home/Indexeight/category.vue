<template>
<!-- category select-->
			<section class="doctor-category">
				<div class="container">
					<div class="row">
						<div class="col-md-4 aos" data-aos="fade-up" v-for="item in eightcategory" :key="item.id">
							<div class="pop-box">
								<div class="top-section">
									<div class="cat-icon">
										<i class="fas fa-procedures"></i>
									</div>
								</div>
								<div class="body-section">
									<h3>{{item.name}}</h3>
									<p>{{item.name1}}</p>
									<router-link to="/booking" class="btn book-btn" tabindex="0">{{item.button}}</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /category select-->
</template>
<script>
    import eightcategory from '../../../../../assets/json/Index/eightcategory.json'
    export default {
        data() {
            return {
                eightcategory: eightcategory
            }
        }
    }
    </script>