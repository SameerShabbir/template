<template>
<!-- Home Banner -->
			<section class="section section-search">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center aos" data-aos="fade-up">
							<h1>Search Doctor, Make an Appointment</h1>
							<p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
						</div>
                         
						<!-- Search -->
						<div class="search-box aos" data-aos="fade-up">
							<form>
								<div class="form-group search-location">
									<input type="text" class="form-control" placeholder="Search Location">
									<span class="form-text">Based on your Location</span>
								</div>
								<div class="form-group search-info">
									<input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc">
									<span class="form-text">Ex : Dental or Sugar Check up etc</span>
								</div>
                                <router-link to="/search">
								<button type="submit" class="btn btn-primary search-btn mt-0"><i class="fas fa-search"></i> <span>Search</span></button>
							    </router-link>
                             </form>
						</div>
						<!-- /Search -->
						
					</div>
				</div>
			</section>
			<!-- /Home Banner -->            
</template>

<script>
export default {
       mounted() {
},
    }
</script>