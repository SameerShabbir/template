<template>
<!-- browse speciality-->
<section class="browse-section brower-category">
    <div class="container">					
        <div class="row heading-wrapper">
            <div class="col-md-6 aos" data-aos="fade-up">
                <h1>Browse by Specialities</h1>
            </div>
            <div class="col-md-6 text-end aos" data-aos="fade-up">
                <router-link to="/doctor-profile" class="nav-arrow"><i class="fas fa-arrow-right"></i></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2 col-md-3 aos" data-aos="fade-up" v-for="item in ninebrowse" :key="item.id">
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
    </div>
</section>
<!-- /browse speciality-->
</template>
<script>
    import ninebrowse from '../../../../../assets/json/Index/ninebrowse.json'
    const images = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                ninebrowse: ninebrowse
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>