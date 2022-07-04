<template>
<!-- Best Doctor Section -->
<section class="our-doctors-section sevenblog">
    <div class="container">
                <div class="section-heading aos" data-aos="fade-up">
                    <h2>Clinic & Specialities</h2>
                    <p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
                </div>
        <div class="book-slider slider our-doctors aos" data-aos="fade-up">
            <div class="item" v-for="item in sevenclinic" :key="item.id">
                <div class="our-doctors-card">
                    <div class="doctors-header">
                        <a href="javascript:void(0);"><img :src="loadImg(item.img)" alt="" class="img-fluid"></a>
                        <div class="img-overlay">
                            <span>{{item.rate}}</span>
                        </div>
                    </div>
                    <div class="doctors-body">
                        <div class="rating mapgridrating1">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <span class="d-inline-block average-ratings">{{item.rating}}</span>
                        </div>
                        <router-link to="/doctor-profile"><h4>{{item.name}}</h4></router-link>
                        <p>{{item.title}}</p>
                        <div class="location d-flex">
                            <p><i class="fas fa-map-marker-alt"></i> {{item.place}}</p>
                            <p class="ms-auto"><i class="fas fa-user-md"></i> {{item.place1}}</p>
                        </div>
                        <div class="row row-sm">
                            <div class="col-6">
                                <router-link to="/doctor-profile" class="btn view-btn" tabindex="0">{{item.button}}</router-link>
                            </div>
                            <div class="col-6">
                                <router-link to="/booking" class="btn book-btn" tabindex="0">{{item.button1}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Best Doctor Section -->
</template>
<script>
    import sevenclinic from '../../../../../assets/json/Index/sevenclinic.json'
    const images = require.context('../../../../../assets/img/doctors', false, /\.png$|\.jpg$/)
    export default {
        mounted() {
        
        },
        data() {
            return {
                sevenclinic: sevenclinic
            }
        },
        methods:{
            loadImg(imgPath) {
                return images('./' + imgPath).default
            },
        }
    }
    </script>