<template>
<div class="about-page">
    <div class="main-wrapper">

        <layout-header></layout-header>

		<breadcrumb></breadcrumb>
        
		<!-- Page Content -->
            <section class="about-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <a href="javascript:voide(0);" class="about-titile mb-4">About Doccure</a>
                            <h3 class="mb-4">Company Profile</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta luctus est interdum pretium. Fusce id tortor fringilla, suscipit turpis ac, varius ex. Cras vel metus ligula. Nam enim ligula, bibendum a iaculis ut, cursus id augue. Proin vitae purus id tortor vehicula scelerisque non in libero.</p>
                            <p class="mb-0">Nulla non turpis sit amet purus pharetra sollicitudin. Proin rutrum urna ut suscipit ullamcorper. Proin sapien felis, dignissim non finibus eget, luctus vel purus. Pellentesque efficitur congue orci ornare accumsan. Nullam ultrices libero vel imperdiet scelerisque. Donec vel mauris eros.</p>
                        </div>
                        <div class="col-md-6">                            
                        </div>
                    </div>
                </div>
            </section>
 
			<category></category>
            
            <available></available>

			<specialities></specialities>

            <testimonial></testimonial>

			<!-- /Page Content -->
		
        <layout-footer></layout-footer>

    </div>
    </div>
</template>
<script>
import AOS from 'aos';
export default {
	mounted() {
		if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}
    if($('.specialities-slider').length > 0) {
		$('.specialities-slider').slick({
			dots: true,
			autoplay:false,
			infinite: true,
			variableWidth: true,
			prevArrow: false,
			nextArrow: false
		});
	}
	},
    data() {
        return {

        }
    }
}
</script>