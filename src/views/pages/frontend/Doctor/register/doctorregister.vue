<template>

<div class="account-page">

    <div class="main-wrapper">

        <layout-header></layout-header>

		<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-8 offset-md-2">
						
							<!-- Account Content -->
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src="../../../../../assets/img/login-banner.png" class="img-fluid" alt="Login Banner">	
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Doctor Register <router-link to="/register">Not a Doctor?</router-link></h3>
										</div>
										
										<!-- Register Form -->
										<form>
											<div class="form-group form-focus">
												<input type="text" class="form-control floating">
												<label class="focus-label">Name</label>
											</div>
											<div class="form-group form-focus">
												<input type="text" class="form-control floating">
												<label class="focus-label">Mobile Number</label>
											</div>
											<div class="form-group form-focus">
												<input type="password" class="form-control floating">
												<label class="focus-label">Create Password</label>
											</div>
											<div class="text-end">
												<router-link class="forgot-link" to="/login">Already have an account?</router-link>
											</div>
                                            <router-link to="/doctor-register-step1">
											<button class="btn btn-primary w-100 btn-lg login-btn" type="submit">Signup</button>
                                            </router-link>
											<div class="login-or">
												<span class="or-line"></span>
												<span class="span-or">or</span>
											</div>
											<div class="row form-row social-login">
												<div class="col-6">
													<a href="javascript:void(0);" class="btn btn-facebook w-100"><i class="fab fa-facebook-f me-1"></i> Login</a>
												</div>
												<div class="col-6">
													<a href="javascript:void(0);" class="btn btn-google w-100"><i class="fab fa-google me-1"></i> Login</a>
												</div>
											</div>
										</form>
										<!-- /Register Form -->
										
									</div>
								</div>
							</div>
							<!-- /Account Content -->
								
						</div>
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
		
        <layout-footer></layout-footer>
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