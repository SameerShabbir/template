<template>
<!-- Specialities Section -->
<section class="specialities-section">
    <div class="shapes">
        <img src="../../../../../assets/img/shapes/shape-3.png" alt="" class="img-fluid shape-3">
        <img src="../../../../../assets/img/shapes/shape-4.png" alt="" class="img-fluid shape-4">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="section-heading bg-area aos" data-aos="fade-up">
                    <h2>Browse by Specialities</h2>
                    <p>Find experienced doctors across all specialties</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 aos" data-aos="fade-up" v-for="item in sevenbrowse" :key="item.id">
                <div class="specialist-card d-flex">
                    <div class="specialist-img">
                        <img :src="loadImg(item.img)" alt="" class="img-fluid">
                    </div>
                    <div class="specialist-info">
                        <a href="javascript:void(0);"><h4>{{item.name}}</h4></a>
                        <p>{{item.title1}}</p>
                    </div>
                    <div class="specialist-nav ms-auto">
                        <a href="javascript:void(0);"><i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Specialities Section -->
</template>
<script>
    import sevenbrowse from '../../../../../assets/json/Index/sevenbrowse.json'
    const images = require.context('../../../../../assets/img/category', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
        
        },
        data() {
            return {
                sevenbrowse: sevenbrowse
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>