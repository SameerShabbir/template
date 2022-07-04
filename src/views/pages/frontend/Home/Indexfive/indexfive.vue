<template>
    <div class="main-wrapper">

    
        <layout-indexfiveheader></layout-indexfiveheader>

        <indexfivebanner></indexfivebanner>
			  
		<indexfivecategory></indexfivecategory>
		  
		<indexfivespecialities></indexfivespecialities>

        <indexfivebrowsespeclty></indexfivebrowsespeclty>
		   
		<indexfiveselect></indexfiveselect>
			
		<indexfivebookdoctor></indexfivebookdoctor>

        <indexfiveavailablefeature></indexfiveavailablefeature>

        <indexfivelatestblog></indexfivelatestblog>
		
        <layout-indexfivefooter></layout-indexfivefooter>
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