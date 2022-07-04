<template>

    <div class="main-wrapper multi-optn">

        <layout-indexeightheader></layout-indexeightheader>
        
		<indexeightbanner></indexeightbanner>

		<indexeightcategory></indexeightcategory>
			  
		<indexeightepecialities></indexeightepecialities>
		  
		<indexbrowspec></indexbrowspec>
		   
		<indexdoctorsec></indexdoctorsec>
			
		<indexbestdoc></indexbestdoc>

		<indexlatestblog></indexlatestblog>
		
        <layout-indexeightfooter></layout-indexeightfooter>
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