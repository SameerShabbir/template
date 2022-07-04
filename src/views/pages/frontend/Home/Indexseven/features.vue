<template>
    <!-- Clinic Features Section -->
                <section class="clinic-features-section sevenblog2">
                    <div class="container">
                                <div class="section-heading aos" data-aos="fade-up">
                                    <h2>Availabe Features in Our Clinic</h2>
                                    <p>Meet our Experts & Book Online</p>
                                </div>
                        <div class="book-slider2 slider clinic-feature aos" data-aos="fade-up">
                            <div class="item" v-for="item in sevenfeature" :key="item.id">
                                <div class="clinic-features">
                                    <img :src="loadImg(item.img)" alt="" class="img-fluid">
                                </div>
                                <div class="clinic-feature-overlay">
                                    <a href="javascript:void(0);" class="img-overlay">{{item.name}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- /Clinic Features Section -->
    </template>
    <script>
        import sevenfeature from '../../../../../assets/json/Index/sevenfeature.json'
        const images = require.context('../../../../../assets/img/clinic', false, /\.png$|\.jpg$/)
        export default {
            mounted() {
             //book doctor slider
        if($('.book-slider2').length > 0) {
            $('.book-slider2').slick({
                dots: false,
                autoplay:false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 992,
                        settings: {
                            slidesToShow: 3
                          }
                },
                {
                    breakpoint: 800,
                        settings: {
                            slidesToShow: 3
                          }
                },
                {
                    breakpoint: 776,
                        settings: {
                            slidesToShow: 2
                          }
                },
                {
                    breakpoint: 567,
                        settings: {
                            slidesToShow: 1
                        }
                }]
            });
        }
            },
            data() {
                return {
                    sevenfeature: sevenfeature
                }
            },
            methods:{
                loadImg(imgPath) {
                    return images('./' + imgPath).default
                },
            }
        }
        </script>