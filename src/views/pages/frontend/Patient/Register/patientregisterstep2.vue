<template>
    
    <div class="account-page">

    <div class="main-wrapper">

    <!-- Page Content -->
			<div class="content login-page pt-0">
				<div class="container-fluid">
					
					<!-- Register Content -->
					<div class="account-content">
						<div class="row align-items-center">
							<div class="login-right">
								<div class="inner-right-login">
									<div class="login-header">
										<div class="logo-icon">
											<img src="../../../../../assets/img/logo.png" alt="">
										</div>
										<div class="step-list">
											<ul>
												<li><a href="javascript:void(0);" class="active-done">1</a></li>
												<li><a href="javascript:void(0);" class="active">2</a></li>
												<li><a href="javascript:void(0);">3</a></li>
												<li><a href="javascript:void(0);">4</a></li>
												<li><a href="javascript:void(0);">5</a></li>
											</ul>
										</div>
										<form id="personal_details" enctype="multipart/form-data">  
					                    	<div class="text-start mt-2">
						                        <h4 class="mt-3">Select Your Gender</h4>
						                    </div>
						                    <div class="select-gender-col">
						                    	<div class="row">
						                    		<div class="col-6 pe-0">
						                    			<input type="radio" id="test1" name="gender" value="Male">
    													<label for="test1">
    														<span class="gender-icon"><img src="../../../../../assets/img/icons/male.png" alt=""></span>
    														<span>Male</span>
    													</label>
						                    		</div>
						                    		<div class="col-6 ps-2">
						                    			<input type="radio" id="test2" name="gender" value="Female">
    													<label for="test2">
    														<span class="gender-icon"><img src="../../../../../assets/img/icons/female.png" alt=""></span>
    														<span>Female</span>
    													</label>
						                    		</div>
						                    	</div>
						                    </div>
						                    <div class="pregnant-col pt-4">
						                    	<div>
						                            <div class="remember-me-col d-flex justify-content-between">
						                            	<span class="mt-1">Are you Pregnant</span>
						                                <label class="custom_check">
                                                            <input type="checkbox" class="" id="is_registered" name="pregnant" value="1">
                                                            <span class="checkmark"></span>
						                                </label>
						                            </div>
						                        </div>
						                    </div>
						                    <div class="step-process-col mt-4">
							                    <div class="form-group" id="preg_div" style="display: none;">
							                    	<label>Pregnancy Term</label>
							                    	<select class="form-select form-control" id="preg_term" name="preg_term" tabindex="-1" aria-hidden="true">
							                    		<option selected="" value="">Select Your Pregnancy Month</option>
							                    		<option value="1">1</option>
							                    		<option value="2">2</option>
							                    		<option value="3">3</option>
							                    		<option value="4">4</option>
							                    		<option value="5">5</option>
							                    		<option value="6">6</option>
							                    		<option value="">7</option>
							                    		<option value="8">8</option>
							                    		<option value="9">9</option>
							                    		<option value="10">10</option>
							                    	</select>
							                    </div>
							                    <div class="form-group">
							                    	<label>Your Weight</label>
							                    	<div class="row">
							                    		<div class="col-7 pe-0">
							                    			<input type="text" class="form-control" name="weight" value="" id="weight">
							                    		</div>
							                    		<div class="col-5 ps-2">
							                    			<select class="form-select form-control" id="weight_unit" name="weight_unit">
									                    		<option value="kg">Kg</option>
									                    	</select>
							                    		</div>
							                    	</div>
							                    </div>
							                    <div class="form-group">
							                    	<label>Your Height</label>
							                    	<div class="row">
							                    		<div class="col-7 pe-0">
							                    			<input type="text" class="form-control" id="height">
							                    		</div>
							                    		<div class="col-5 ps-2">
							                    			<select class="form-select form-control" id="height_unit" name="height_unit" tabindex="-1" aria-hidden="true">
									                    		<option value="cm">cm</option>
									                    		<option value="ft">ft</option>
									                    	</select>
							                    		</div>
							                    	</div>
							                    </div>
							                    <div class="form-group">
							                    	<label>Your Age</label>
							                    	<input type="text" name="age" value="" class="form-control" id="age">
							                    </div>
							                    <div class="form-group">
							                    	<label>Blood Type</label>
							                    	<select class="form-select form-control" id="blood_group" name="blood_group" tabindex="-1" aria-hidden="true">
							                    		<option value="">Select your blood group</option>
														<option value="A-">A-</option>
														<option value="A+">A+</option>
														<option value="B-">B-</option>
														<option value="B+">B+</option>
														<option value="AB-">AB-</option>
														<option value="AB+">AB+</option>
														<option value="O-">O-</option>
														<option value="O+">O+</option>
							                    	</select>
							                    </div>
							                    <div class="form-group">
							                    	<label>Heart Rate</label>
							                    	<select class="form-select form-control" id="heart_rate" name="heart_rate" tabindex="-1" aria-hidden="true">
							                    		<option value="">Select Your Heart Rate</option>
							                    		<option value="1">1</option>
							                    		<option value="2">2</option>
							                    	</select>
							                    </div>
							                    <div class="form-group">
							                    	<label>Blood Pressure</label>
							                    	<select class="form-select form-control" id="bp" name="bp" tabindex="-1" aria-hidden="true">
							                    		<option value="">Select Your Blood Pressure</option>
							                    		<option value="1">1</option>
							                    		<option value="2">2</option>
							                    	</select>
							                    </div>
							                    <div class="form-group">
							                    	<label>Glucose Level</label>
							                    	<select class="form-select form-control" id="glucose" name="glucose" tabindex="-1" aria-hidden="true">
							                    		<option value="">Select Your Glucose Level</option>
							                    		<option value="1">1</option>
							                    		<option value="2">2</option>
							                    	</select>
							                    </div>
							                    <div class="form-group">
							                    	<label>Allergies</label>
							                    	<input type="text" class="form-control" value="" id="allergies" name="allergies">
							                    </div>
							                    <div class="checklist-col pregnant-col">
						                            <div class="remember-me-col d-flex justify-content-between">
						                            	<span class="mt-1">Do you have any pre-exisiting conditions?</span>
						                                <label class="custom_check">
                                                            <input type="checkbox" class="" name="cancer" id="cancer" onclick="show_cancer()" value="1">
                                                            <span class="checkmark"></span>
						                                </label>
						                            </div>
						                            <div class="remember-me-col" id="cancer_div" style="display:none">
						                            	<div class="condition_input">
                                                            <input type="text" id="conditions" name="conditions[]" class="form-control" placeholder="">
                                                        </div>
						                                <a href="javascript:void(0);" class="add_condition"><i class="fa fa-plus"></i></a>
						                            </div>
						                            <div class="remember-me-col d-flex justify-content-between">
						                            	<span class="mt-1">Are you currently taking any medication</span>
						                                <label class="custom_check">
                                                            <input type="checkbox" class="" name="medicine" id="medicine" onclick="show_medicine()" value="1">
                                                            <span class="checkmark"></span>
						                                </label>
						                            </div>
						                            <div class="remember-me-col" id="medicine_div" style="display:none">
						                            	<div class="medicine_input">
                                                            <input type="text" id="medicine_name" name="medicine_name[]" value="" class="form-control" placeholder="Enter medicine_name">
                                                            <input type="text" value="" id="dosage" name="dosage[]" class="form-control" placeholder="Enter dosage">
                                                        </div>
						                            	<a href="javascript:void(0);" class="add_medicine"><i class="fa fa-plus"></i></a>
						                            </div>
						                        </div>
						                	</div>
					                        <div class="mt-5">
					                        	<router-link to="/patient-register-step3" class="btn btn-primary w-100 btn-lg login-btn step2_submit">continue </router-link>
					                        </div>
				                        </form>
									</div>
								</div>
								<div class="login-bottom-copyright">
									<span>© 2022 Doccure. All rights reserved.</span>
								</div>
							</div>
						</div>
					</div>
					<!-- /Register Content -->

				</div>

			</div>		
			<!-- /Page Content -->

    </div>

    </div>

</template>

<script>
export default {
	mounted() {
//Increment Decrement Numberes
var quantitiy=0;
$('.quantity-right-plus').click(function(e){
     e.preventDefault();
     var quantity = parseInt($('#quantity').val());        
         $('#quantity').val(quantity + 1);
 });

  $('.quantity-left-minus').click(function(e){
     e.preventDefault();
     var quantity = parseInt($('#quantity').val());
         if(quantity>0){
             $('#quantity').val(quantity - 1);
         }
 });

  //Cart Click
  $("#cart").on("click", function(o) {
      o.preventDefault();
     $(".shopping-cart").fadeToggle();
     $(".shopping-cart").toggleClass('show-cart');
   });
 //Increment Decrement value
 $('.inc.button').click(function(){
    var $this = $(this),
        $input = $this.prev('input'),
        $parent = $input.closest('div'),
        newValue = parseInt($input.val())+1;
    $parent.find('.inc').addClass('a'+newValue);
    $input.val(newValue);
    newValue += newValue;
});
$('.dec.button').click(function(){
    var $this = $(this),
        $input = $this.next('input'),
        $parent = $input.closest('div'),
        newValue = parseInt($input.val())-1;
    console.log($parent);
    $parent.find('.inc').addClass('a'+newValue);
    $input.val(newValue);
    newValue += newValue;
});

// Signup Profile
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#prof-avatar').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
$("#profile_image").change(function() {
    readURL(this);
});



$('a.smooth-menu').on('click', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top});
    e.preventDefault();
});

 // Home Banner Two Slider Arrow Position 

 var window_width = $(window).outerWidth();
 var container_width = $('.container').outerWidth();
 var full_width = window_width - container_width
 var right_position_value = full_width / 2
 $('.banner-two-slider .slider-counter').css('right', right_position_value);
 $('.banner-two-slider .slick-next').css('right', right_position_value + 10);
 $('.banner-two-slider .slick-prev').css('right', right_position_value + 150);

 // Home Banner Three Slider Arrow Position 

 var window_width = $(window).outerWidth();
 var container_width = $('.container').outerWidth();
 var full_width = window_width - container_width
 var right_position_value = full_width / 2
 $('.home-three-slider .owl-dots').css('right', right_position_value - 150);
 $('.home-three-slider .owl-next').css('right', right_position_value + 10);
 $('.home-three-slider .owl-prev').css('right', right_position_value + 150);
	},
    data() {
        return {

        }
    }
}
</script>