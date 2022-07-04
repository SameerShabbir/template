<template>
 <!-- Doctor Widget -->
                <div class="card">
                    <div class="card-body">
                        <div class="doctor-widget">
                            <div class="doc-info-left">
                                <div class="doctor-img1">
                                    <router-link to="/pharmacy-details">
                                        <img src="../../../../../assets/img/medical-img1.jpg" class="img-fluid" alt="User Image">
                                    </router-link>
                                </div>
                                <div class="doc-info-cont">
                                    <h4 class="doc-name mb-2"><router-link to="/pharmacy-details">Medlife Medical</router-link></h4>
                                    <div class="rating mb-2 mapgridrating">
                                        <span class="badge badge-primary">4.0</span>
                                        <i class="fas fa-star filled ms-1"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="d-inline-block average-rating">(17)</span>
                                    </div>
                                    <div class="clinic-details">
                                        <div class="clini-infos pt-3">
                                    
                                        <p class="doc-location mb-2"><i class="fas fa-phone-volume me-1"></i> 320-795-8815</p>
                                        <p class="doc-location mb-2 text-ellipse"><i class="fas fa-map-marker-alt me-1"></i> 96 Red Hawk Road Cyrus, MN 56323 </p>
                                        <p class="doc-location mb-2"><i class="fas fa-chevron-right me-1"></i> Chemists, Surgical Equipment Dealer</p>
                                        
                                        <p class="doc-location mb-2"><i class="fas fa-chevron-right me-1"></i> Opens at 08.00 AM</p>
                                    
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="doc-info-right d-flex align-items-center justify-content-center">
                                <div class="clinic-booking">
                                    <router-link class="view-pro-btn" to="/chat">Send Message</router-link>
                                    <a class="apt-btn" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#voice_call">Call Now</a>
                                    <router-link to="/product-all" class="view-pro-btn">Browse Products</router-link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!-- /Doctor Widget -->
</template>