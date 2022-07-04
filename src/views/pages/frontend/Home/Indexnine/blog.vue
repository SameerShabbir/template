<template>
<!-- Blog Section-->
<section class="blogs-section blog-container">
    <div class="container">	
        <div class="row heading-wrapper">
            <div class="col-md-6 aos" data-aos="fade-up">
                <h1>Our Latest Blog</h1>
            </div>
            <div class="col-md-6 text-end aos" data-aos="fade-up">
                <router-link to="/blog-list" class="nav-arrow"><i class="fas fa-arrow-right"></i></router-link>
            </div>
        </div>		
        <div class="row">						
            <div class="col-md-6 col-lg-3 aos" data-aos="fade-up" v-for="item in nineblog" :key="item.id">
                <div class="blog-wrapper">
                    <div class="wrap-image">
                        <router-link to="/blog-details">
                            <img :src="loadImg(item.img)" alt="" />
                        </router-link>
                    </div>
                    <div class="wrap-content">
                        <p class="date-cart">{{item.no}} <span>{{item.date}}</span></p>
                        <div class="d-flex">
                            <div class="post-author">
                                <router-link to="/doctor-profile">
                                    <img :src="loadImg1(item.img1)" alt="Post Author"> 
                                    <span>{{item.name}}</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="wrap-content-body">
                            <h3><router-link to="/blog-details">{{item.name1}}</router-link></h3>
                            <p>{{item.description}}</p>
                            <span class="sp-title">{{item.name2}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
    </div>
</section>
<!-- /Blog Section-->
</template>
<script>
    import nineblog from '../../../../../assets/json/Index/nineblog.json'
    const images = require.context('../../../../../assets/img/blog', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                nineblog: nineblog
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