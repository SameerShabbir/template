<template>

    <div class="main-wrapper">

        <layout-indexninefooter></layout-indexninefooter>
        
		<indexninebanner></indexninebanner>

		<indexninedoctor></indexninedoctor>
			  
		<indexninespecialities></indexninespecialities>

        <indexninebrowse></indexninebrowse>

        <indexninedoctorfow></indexninedoctorfow>

        <indexninebestdoctor></indexninebestdoctor>

        <indexnineblog></indexnineblog>
		
        <layout-indexnineheader></layout-indexnineheader>
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