<template>
<!-- Category Section -->
<section class="section section-category">
    <div class="container">
        <div class="section-header text-center aos" data-aos="fade-up">
            <h2>Browse by Specialities</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-lg-3" v-for="item in browsespecialities" :key="item.id">
                <div class="category-box aos" data-aos="fade-up">
                    <div class="category-image category-image-primary">
                        <img :src="loadImg(item.img)" alt="">
                    </div>
                    <div class="category-content">
                        <h4>{{item.name}}</h4>
                        <span>{{item.name1}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Category Section -->
</template>
<script>
import AOS from 'aos';
    import browsespecialities from '../../../../../assets/json/Index/browsespecialities.json'
    const images = require.context('../../../../../assets/img/category', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			browsespecialities: browsespecialities
		}
	},
    mounted() {
			if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}
},
methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    }
    }
</script>