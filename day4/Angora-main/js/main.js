// For Nav Links
$('.navbar-nav li').click(function(){
    $(this).find('a').addClass('link-active');
    $(this).siblings().find('a').removeClass('link-active');
});
/*Start Nav Bar */
let aboutOffset = $('#About').offset().top;

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();

    if(wScroll > aboutOffset){
        $('#main-nav').css("backgroundColor" , "rgba(0,0,0,0.5)");

    }
    else{
        $('#main-nav').css("backgroundColor" , "transparent");
    }
})
/*End Nav Bar */


/*Go for Sections with Smooth scroll */

$("a[href^= '#']").click(function(e){
    let aHref = $(e.target).attr('href');
    let secOffset = $(aHref).offset().top;
    $('body , html').animate({scrollTop:secOffset} , 1000);
})

/* End */

/* For button toTop */ 
let forAbout = $('#About').offset().top;

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();

    if(wScroll > forAbout - 500){
        $('#toTop').fadeIn(500);
        // for skills bars
        $('.progr-one').css("width",'80%');
        $('.progr-two').css("width",'95%');
        $('.progr-three').css("width",'70%');
        $('.progr-four').css("width",'85%');
    }
    else{
        $('#toTop').fadeOut(500);
    }
})

$('#toTop').click(function(){   
    $('body , html').animate({scrollTop:0} , 1500);
})
/* End button toTop */ 

/* For Loading Screen */
$(document).ready(function(){

    let colorBoxWidth = $(".colors-box").innerWidth();
    $('#optionsBox').animate({left:`-${colorBoxWidth}`}, 0);

    $('#spinner').fadeOut(1000 ,() => {
        $('#spinner').parent().fadeOut(2000 , ( ) => {
            $('.loading').remove();
            $('body').css( "overflow-y","auto" );
        }) 
    });

    // slick
    // $('.center').slick({
    //     centerMode: true,
    //     autoplay:true,
    //     focusOnChange:true,
    //     centerPadding: '60px',
    //     slidesToShow: 4,
    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 3
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   });
})







/* End Loading Screen */

/* For OptionsBox */

$('#toggleBtn').click(function(){
    let colorBoxWidth = $(".colors-box").innerWidth();

    if($('#optionsBox').css("left") == "0px"){
        $('#optionsBox').animate({left:`-${colorBoxWidth}`}, 1000);
    }
    else{
        $('#optionsBox').animate({left:`0px`}, 1000);
    }
})
let colorItem = $(".color-item");
colorItem.eq(0).css("backgroundColor" , "#f25454");
colorItem.eq(1).css("backgroundColor" , "#4e9cb5");
colorItem.eq(2).css("backgroundColor" , "#24bca4");
colorItem.eq(3).css("backgroundColor" , "#46cad7");
colorItem.eq(4).css("backgroundColor" , "#c86f98");

colorItem.eq(5).css("backgroundColor" , "#ee8f67");
colorItem.eq(6).css("backgroundColor" , "#e4d20c");
colorItem.eq(7).css("backgroundColor" , "#6b798f");


colorItem.click(function(e){
    let bgColor = $(e.target).css("backgroundColor");
    $("i").css("color" , bgColor);
})
/* End OptionsBox */


/* Form Validation */
let userNameInput = document.getElementById('userName'); 
let userPhoneInput = document.getElementById('userPhone'); 
let userEmailInput = document.getElementById('userEmail'); 
let messageInput = document.getElementById('message');
/* hold Spans */
let userNameReqError = document.getElementById('userNameReq');  
let userEmailReqError = document.getElementById('userEmailReq');  
let userPhoneReqError = document.getElementById('userPhoneReq');  
let messageReqError = document.getElementById('messageReq'); 

let Btn = document.getElementById('btnSubmit');

// User Name
function validateUserName(){
    let regex = /^([A-z ]{3,15})$/;
    
    if(regex.test(userNameInput.value) == true){
        Btn.disabled =!1;
        userNameInput.classList.add('is-valid');
        userNameInput.classList.remove('is-invalid');
        userNameReqError.classList.add('d-none');
        return true;
    }
    else{
        Btn.disabled =!0;
        userNameInput.classList.add('is-invalid');
        userNameInput.classList.remove('is-valid');
        userNameReqError.classList.remove('d-none');
        
        return false;
    }
}
userNameInput.addEventListener('keyup',function () {
    validateUserName();
})

// User Email
function validateUserEmail(){
    let regex = /^([A-z][.A-z]{2,15}[0-9]{0,4}@(gmail|yahoo|outlook).com)$/;
    if(regex.test(userEmailInput.value) == true){
        Btn.disabled =!1;
        userEmailInput.classList.add('is-valid');
        userEmailInput.classList.remove('is-invalid');
        userEmailReqError.classList.add('d-none');
        return true;
    }
    else{
        Btn.disabled =!0;
        userEmailInput.classList.add('is-invalid');
        userEmailInput.classList.remove('is-valid');
        userEmailReqError.classList.remove('d-none');
        
        return false;
    }
}
userEmailInput.addEventListener('keyup',function () {
    validateUserEmail();
})

// User Phone
function validateUserPhone(){
    let regex = /^(010|011|012)[0-9]{8}$/;
    if(regex.test(userPhoneInput.value) == true){
        Btn.disabled =!1;
        userPhoneInput.classList.add('is-valid');
        userPhoneInput.classList.remove('is-invalid');
        userPhoneReqError.classList.add('d-none');
        return true;
    }
    else{
        Btn.disabled =!0;
        userPhoneInput.classList.add('is-invalid');
        userPhoneInput.classList.remove('is-valid');
        userPhoneReqError.classList.remove('d-none');
        
        return false;
    }
}
userPhoneInput.addEventListener('keyup',function () {
    validateUserPhone();
})

// User Message
function validateUserMessage(){
    let regex = /^([A-z ]{2,200})$/;
    
    if(regex.test(messageInput.value) == true){
        Btn.disabled =!1;
        messageInput.classList.add('is-valid');
        messageInput.classList.remove('is-invalid');
        messageReqError.classList.add('d-none');
        return true;
    }
    else{
        Btn.disabled =!0;
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
        messageReqError.classList.remove('d-none');
        
        return false;
    }
}
messageInput.addEventListener('keyup',function () {
    validateUserMessage();
})
// Submit
let Form = document.getElementById('form');

document.getElementById('ContactUs').addEventListener('click',function () {
    Form.addEventListener('submit',function(e){
        e.preventDefault();
    
        if(validateUserName() == true && validateUserEmail() == true && validateUserPhone() == true && validateUserMessage() == true){
            Btn.disabled =!1;
        }
        else{
            Btn.disabled=!0;
        }
    })
});

