<template>
<!-- Book Doctors-->
<section class="book-section">
    <div class="container">
        <div class="section-header-three text-center aos" data-aos="fade-up">
            <h2>Book Our Best Doctor</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up" v-for="item in eightbestdoc" :key="item.id">
                <div class="book-best-doctors">
                    <div class="book-header">
                        <router-link to="/doctor-profile"><img :src="loadImg(item.img)" alt="" class="img-fluid"></router-link>
                        <div class="img-overlay">
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="inner-section">
                            <span class="float-start">{{item.name}}</span>

                            <div class="rating text-end mapgridrating1">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                                <span class="d-inline-block average-ratings">{{item.rating}}</span>
                            </div>
                            <router-link to="/doctor-profile"><h4>{{item.name1}}</h4></router-link>
                            <p>{{item.description}}</p>
                        </div>
                        <div class="row row-sm loc-details">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img :src="loadImg1(item.img1)" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">{{item.place}}</span>
                                        <span class="data-info">{{item.place1}}</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img :src="loadImg2(item.img2)" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">{{item.name2}}</span>
                                        <span class="data-info">{{item.date}}</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img :src="loadImg3(item.img3)" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">{{item.name3}}</span>
                                        <span class="data-info">{{item.name4}}</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);">
                                        <img :src="loadImg4(item.img4)" alt="" />
                                    </a> 
                                    <a href="javascript:void(0);">
                                        <span class="available-info">{{item.name5}}</span>
                                        <span class="data-info">{{item.name6}}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row row-sm align-items-center p-3">
                            <div class="col-6">
                                <router-link to="/doctor-profile" class="amt-txt" tabindex="0">{{item.rate}}</router-link>
                            </div>
                            <div class="col-6">
                                <router-link to="/booking" class="btn book-btn" tabindex="0">{{item.button}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-all-more text-center aos" data-aos="fade-up">	
            <router-link to="/doctor-profile" class="btn btn-primary">View More</router-link>
        </div>
    </div>
</section>
<!-- /Book Doctors-->
</template>
<script>
    import eightbestdoc from '../../../../../assets/json/Index/eightbestdoc.json'
    const images = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    const images2 = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    const images3 = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    const images4 = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                eightbestdoc: eightbestdoc
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
            loadImg1(img1Path) {
                return images1('./' + img1Path).default
            },
            loadImg2(img2Path) {
                return images2('./' + img2Path).default
            },
            loadImg3(img3Path) {
                return images3('./' + img3Path).default
            },
            loadImg4(img4Path) {
                return images4('./' + img4Path).default
            },
        }
    }
    </script>