<template>
<!-- Clinic & Speciality-->
<section class="clinic-speciality">
    <div class="container">
        <div class="row heading-wrapper">
            <div class="col-md-6 aos" data-aos="fade-up">
                <h1>Clinic & Specialities</h1>
            </div>
            <div class="col-md-6 text-end aos" data-aos="fade-up">
                <router-link to="/doctor-profile" class="nav-arrow"><i class="fas fa-arrow-right"></i></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-lg-3 aos" data-aos="fade-up" v-for="item in ninespecialities" :key="item.id">
                <div class="clinic-wrap">
                    <div class="clinic-img">
                        <img :src="loadImg(item.img)" alt="" />
                    </div>
                    <div class="wrapper-overlay">
                        <img :src="loadImg1(item.img1)" alt="" />
                        <h3>{{item.name}}</h3>
                        <div class="row row-sm">
                            <div class="col-6">
                                <p>{{item.no}} <span>{{item.name1}}</span></p>
                            </div>
                            <div class="col-6">
                                <p class="blue">{{item.no1}} <span>{{item.name2}}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Clinic & Speciality-->
</template>
<script>
    import ninespecialities from '../../../../../assets/json/Index/ninespecialities.json'
    const images = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    const images1 = require.context('../../../../../assets/img/icons', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                ninespecialities: ninespecialities
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