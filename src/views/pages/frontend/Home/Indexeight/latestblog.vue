<template>
<!-- Blogs -->
<section class="latest-blog">
    <div class="container">
        <div class="section-header-three text-center aos" data-aos="fade-up">
            <h2>Our Latest Blogs</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-4 aos" data-aos="fade-up" v-for="item in eightlatestblog" :key="item.id">
                <div class="blog-wrap">
                    <div class="image-holder">
                        <router-link to="/blog-details">
                            <img class="img-fluid" :src="loadImg(item.img)" alt="Post Image">
                        </router-link>
                    </div>
                    <div class="blog-wrap-body">
                        <h3><router-link to="/blog-details">{{item.description}}</router-link></h3>
                        <p>{{item.description1}}</p>
                        <div class="blog-footer">
                            <div class="row row-sm align-items-center">
                                <div class="col-6 text-start">
                                    <router-link to="/blog-details" class="read-txt" tabindex="0">{{item.button}} <i class="fas fa-long-arrow-alt-right"></i></router-link>
                                </div>
                                <div class="col-6 text-end">
                                    <a href="javascript:void(0);" class="cal-txt" tabindex="0"><i class="far fa-calendar-alt"></i> {{item.date}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Blogs -->
</template>
<script>
    import eightlatestblog from '../../../../../assets/json/Index/eightlatestblog.json'
    const images = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                eightlatestblog: eightlatestblog
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>