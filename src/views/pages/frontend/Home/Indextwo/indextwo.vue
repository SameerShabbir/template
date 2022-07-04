<template>

    <!-- Main Wrapper -->

		<div class="main-wrapper">
        
        <layout-indextwoheader></layout-indextwoheader>
			  
		<specialities></specialities>

        <indextwobrowserspec></indextwobrowserspec>

        <indextwobestdoctor></indextwobestdoctor>
		   
		<features></features>
			
		<blog></blog>
		
        <layout-footer></layout-footer>

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
}
}
</script>