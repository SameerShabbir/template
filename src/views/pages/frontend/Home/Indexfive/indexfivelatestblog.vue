<template>

<!-- Blog Section-->
<section class="blogs-section">
    <div class="container">			
        <div class="sec-header aos" data-aos="fade-up">
            <h2>Our Latest Blogs</h2>
            <span class="bottom-border"></span>
        </div>		
        <div class="row">
            <div class="col-md-6 col-lg-3" v-for="item in fivelatestblog" :key="item.id">
                <div class="blog-wrapper aos" data-aos="fade-up">
                    <div class="wrap-image">
                        <router-link to="/blog-details">
                            <img :src="loadImg(item.img)" alt="" />
                        </router-link>
                    </div>
                    <div class="wrap-content">
                        <div class="d-flex">
                            <span class="sp-title">{{item.name}}</span>
                            <div class="post-author">
                                <router-link to="/doctor-profile">
                                    <img :src="loadImg1(item.img1)" alt="Post Author"> 
                                    <span>{{item.name1}}</span>
                                </router-link>
                            </div>
                            <p class="date-cart">{{item.no}} <span>{{item.date}}</span></p>
                        </div>
                        <div class="wrap-content-body">
                            <h3><router-link to="/blog-details">{{item.detail}}</router-link></h3>
                            <p>{{item.description}}</p>
                            <router-link to="/blog-details" class="read-txt">{{item.button}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>						
        <div class="row justify-content-center">
            <div class="col-md-12 text-center aos" data-aos="fade-up">
                <router-link to="/blog-details" class="view-btn view-btn-light d-inline-block">View More</router-link>
            </div>
        </div>		
    </div>
</section>
<!-- /Blog Section-->
</template>
<script>
    import fivelatestblog from '../../../../../assets/json/Index/fivelatestblog.json'
    const images = require.context('../../../../../assets/img/blog', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                fivelatestblog: fivelatestblog
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