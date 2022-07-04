<template>
<!-- browse speciality-->
<section class="browse-section">
    <div class="container">
        <div class="section-header-three text-center aos" data-aos="fade-up">
            <h2>Browse by Specialities</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up" v-for="item in browspec" :key="item.id">
                <div class="brower-box">
                    <div>
                        <div class="brower-img">
                            <img :src="loadImg(item.img)" alt=""/>
                        </div>
                        <h4>{{item.name}}</h4>
                        <p>{{item.no}} <span>{{item.name1}}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-all-more text-center aos" data-aos="fade-up">	
            <router-link to="/doctor-profile" class="btn btn-primary">View More</router-link>
        </div>
    </div>
</section>
<!-- /browse speciality-->
</template>
<script>
    import browspec from '../../../../../assets/json/Index/browspec.json'
    const images = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                browspec: browspec
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>