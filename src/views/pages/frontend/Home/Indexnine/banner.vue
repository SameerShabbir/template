<template>
<!-- Home Banner -->
<section class="home-search-section">
    <div class="container">
        <div class="wrapper-content">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="doctor-search">
                        <div class="banner-header aos" data-aos="fade-up">
                            <h2>Search Doctor, <br> <span class="highlighter">Make an Appointment</span></h2>
                        </div>
                        <div class="doctor-form aos" data-aos="fade-up">
                            <form action="#" class="doctor-search-form">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-custom">
                                                <input type="text" class="form-control" value="" placeholder="Location">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div class="form-custom">
                                                <input type="text" class="form-control" value="" placeholder="Gender">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div class="form-custom">
                                                <select class="form-select form-control">
                                                    <option>Select Department</option>
                                                    <option>Pharmacy</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <router-link to="/search" class="btn banner-btn mt-3">MAKE APPOINTMENT</router-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 aos" data-aos="fade-up">
                    <img src="../../../../../assets/img/doctor-banner1.png" class="img-fluid dr-img" alt="" >
                </div>
            </div>
        </div>
    </div>
</section>
<!-- /Home Banner -->
</template>