<template>
 <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
               <div class="stickyside">     
                        <!-- Search Filter -->
                        <div class="card search-filter">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Search Filter</h4>
                            </div>
                            <div class="card-body">
                            <div class="filter-widget">
                                <label>Location</label>
                                <input type="text" class="form-control" placeholder="Select Location">
                            </div>
                            <div class="filter-widget">
                                <h4>Categories</h4>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="gender_type">
                                        <span class="checkmark"></span> Popular
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="gender_type">
                                        <span class="checkmark"></span> Latest
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="gender_type">
                                        <span class="checkmark"></span> Ratings
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="gender_type">
                                        <span class="checkmark"></span> Availability
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="gender_type" checked>
                                        <span class="checkmark"></span> Open 24 Hrs
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="gender_type">
                                        <span class="checkmark"></span> Home Delivery
                                    </label>
                                </div>
                            </div>
                            
                                <div class="btn-search">
                                    <button type="button" class="btn w-100">Search</button>
                                </div>	
                            </div>
                        </div>
                        <!-- /Search Filter -->
               </div>         
                    </div>
</template>