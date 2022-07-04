<template>
   <!-- Main Wrapper -->

		<div class="main-wrapper">
        
        <layout-indexlevenheader></layout-indexlevenheader>

        <bannerindexleven></bannerindexleven>
		
        <lookingindexleven></lookingindexleven>

        <bestdocindexleven></bestdocindexleven>

		<feaindexleven></feaindexleven>

        <highserviceindexleven></highserviceindexleven>

        <blogindexleven></blogindexleven>

        <layout-indexlevenfooter></layout-indexlevenfooter>

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
	},
    data() {
        return {

        }
    }
}
</script>