<template>
<!-- Clinic Section -->
<section class="clinic-specialities">
    <div class="container">
        <div class="section-header-three text-center aos" data-aos="fade-up">
            <h2>Clinic & Specialities</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 aos" data-aos="fade-up" v-for="item in eightspecialities" :key="item.id">
                <div class="special-box text-center">
                    <div class="special-body">
                        <img :src="loadImg(item.img)" alt=""/>
                        <h4>{{item.name}}</h4>
                        <router-link to="/booking" class="spc-book">{{item.name1}} <i class="fas fa-caret-right"></i> </router-link>
                    </div>
                    <div class="row row-sm special-footer">
                        <div class="col-6 text-start">
                            <a href="javascript:void(0);" class="doc-count">{{item.no}} <span>{{item.name2}}</span></a>
                        </div>
                        <div class="col-6 text-end">
                            <a href="javascript:void(0);" class="clin-count">{{item.no1}} <span>{{item.name3}}</span></a>
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
<!-- /Clinic Section -->
</template>
<script>
    import eightspecialities from '../../../../../assets/json/Index/eightspecialities.json'
    const images = require.context('../../../../../assets/img/shapes', false, /\.png$|\.jpg$/)
    export default {
        data() {
            return {
                eightspecialities: eightspecialities
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>