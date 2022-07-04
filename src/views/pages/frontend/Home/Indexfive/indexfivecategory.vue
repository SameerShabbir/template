<template>

<!-- Category Section -->
<section class="category-sec">
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="item in fivecategory" :key="item.id">
                <div class="set-category aos" data-aos="fade-up">
                    <div class="d-flex align-items-center">
                        <div class="img-holder">
                            <a href="javascript:void(0);"><img :src="loadImg(item.img)" alt="" /></a>
                        </div>
                        <div class="info-holder">
                            <h3>{{item.name}}</h3>
                            <p>{{item.name1}}</p>
                            <router-link to="/booking" class="book-now">Book Now <i class="fas fa-long-arrow-alt-right"></i></router-link>
                        </div>
                    </div>
                    <h1>01</h1>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Category Section -->
</template>
<script>
        import fivecategory from '../../../../../assets/json/Index/fivecategory.json'
        const images = require.context('../../../../../assets/img/icons', false, /\.png$|\.jpg$/)
        export default {
            data() {
            return {
                fivecategory: fivecategory
            }
        },
        mounted() {
    },
    methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
        }
    </script>