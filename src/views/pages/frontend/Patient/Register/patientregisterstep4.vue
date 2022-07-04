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
                                    <li><a href="javascript:void(0);" class="active-done">2</a></li>
                                    <li><a href="javascript:void(0);" class="active-done">3</a></li>
                                    <li><a href="javascript:void(0);" class="active">4</a></li>
                                    <li><a href="javascript:void(0);">5</a></li>
                                </ul>
                            </div>
                            <form method="post" id="famil_age">
                                <div class="text-start mt-2">
                                    <p>Add age of the each members</p>
                                    <h4 class="mt-3">Age</h4>
                                </div>
                                <div class="step-process-col mt-4">
                                    <div class="form-group">
                                        <label>Child_1 Age</label>
                                        <input type="text" class="form-control" id="Child_1_age" name="Child_1_age">
                                    </div>
                                    <div class="form-group">
                                        <label>Child_1 Image</label>
                                        <input type="file" class="form-control" id="Child_1_image" name="Child_1_image">
                                    </div>
                                    <div class="form-group">
                                        <label>Spouse Age</label>
                                        <input type="text" class="form-control" id="spouse_age" name="spouse_age">
                                    </div>
                                    <div class="form-group">
                                        <label>Spouse Image</label>
                                        <input type="file" class="form-control" id="spouse_file" name="spouse_file">
                                    </div>
                                    <div class="form-group">
                                        <label>Father</label>
                                        <input type="text" class="form-control" id="father_age" name="father_age">
                                    </div>
                                    <div class="form-group">
                                        <label>Father Image</label>
                                        <input type="file" class="form-control" id="father_file" name="father_file">
                                    </div>
                                    <div class="form-group">
                                        <label>Mother</label>
                                        <input type="text" class="form-control" id="mother_age" name="mother_age">
                                    </div>
                                    <div class="form-group">
                                        <label>Mother Image</label>
                                        <input type="file" class="form-control" id="mother_file" name="mother_file">
                                    </div>
                                </div>
                                <div class="mt-5">
                                    <router-link to="/patient-register-step5" class="btn btn-primary w-100 btn-lg login-btn step4_submit">continue </router-link>
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