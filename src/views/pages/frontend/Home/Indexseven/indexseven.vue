<template>
   <!-- Main Wrapper -->

		<div class="main-wrapper">
        
        <layout-indexsevenheader></layout-indexsevenheader>

        <indexsevenbanner></indexsevenbanner>

        <indexsevenspecialities></indexsevenspecialities>

        <indexsevenbrowse></indexsevenbrowse>

        <indexsevenclinic></indexsevenclinic>

        <indexsevenfeatures></indexsevenfeatures>

        <indexsevenblog></indexsevenblog>

        <layout-indexsevenfooter></layout-indexsevenfooter>

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