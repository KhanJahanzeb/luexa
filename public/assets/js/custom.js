// Stop Inspect Element

// $(document).keydown(function(e){
//     if(e.which === 123){

//        return false;
//        alert('not allowed');

//     }

// });

// document.onkeydown = function(e) {
//         if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
//             alert('not allowed');
//         }
//         return false;
// };

// Stop Inspect Element


$(document).ready(function() {

    $('.close-cybr').on('click', function() {
        $(".cyber-popup").hide();
        $(".black-layout").hide();
    });

    if (readCookie("cookie_accepted") == "1") {
        $(".cyber-popup").hide();
        $(".black-layout").hide();
    } else {
        $(".cyber-popup").show();
        $(".black-layout").show();
        $('body').addClass('cookie-space');
        $('.cybr-btn').click(function() {
            $('body').removeClass('cookie-space');
            $('.cyber-popup').fadeOut();
            $('.black-layout').fadeOut();
            createCookie("cookie_accepted", 1, 365);
        });
    }


    $('.side-bar-sm-frm.rght-open').on('click', function() {
        $(".popup-slide.popup-slide-rght").addClass('active');
    });

    $('.side-bar-sm-frm.lft-open').on('click', function() {
        $(".popup-slide.popup-slide-lft").addClass('active');
    });

    $('.popup-slide-close').on('click', function() {
        $(".popup-slide").removeClass('active');
    });

    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 300) {
                $('.side-bar-sm-frm').addClass('show');
            } else {
                $('.side-bar-sm-frm').removeClass('show');
            }

        });
    });



});

/* Countdown Start */

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 01 * 36 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

/* Countdown End */

if ($(window).width() < 1025) {
    $(".top-nav").addClass('responsive');
}

$(document).ready(function() {
    $('#layer-one').mouseParallax({
        moveFactor: 5
    });
    $('#layer-two').mouseParallax({
        moveFactor: 10
    });
    $('#layer-three').mouseParallax({
        moveFactor: 15
    });


    $('.disclaimer-sec p:first-child').on('click', function() {
        $(this).toggleClass('active');
        $('.disclaimer-sec p:last-child').slideToggle();
    });

    $('.open-form-footr').click(function() {
        $('.open-form-slide').slideToggle();
        $(this).toggleClass('active');
    });
});

var str = location.href.toLowerCase();
$(".top-nav>ul>li>a").each(function() {
    if (str.indexOf(this.href.toLowerCase()) > -1) {
        $(".top-nav ul li.active_nav").removeClass("active_nav");
        $(this).parent().addClass("active_nav");
    }
});

var str = location.href.toLowerCase();
$("ul.sub-nav-bg li a").each(function() {
    if (str.indexOf(this.href.toLowerCase()) > -1) {
        $("ul.sub-nav-bg li.active_nav").removeClass("active_nav");
        $(this).parent().addClass("active_nav");
    }
});

$('a.btn-drpdwn').on('click', function() {
    $(this).closest('.dropdown-parent').find('ul.dropdown').slideToggle();
    $(this).toggleClass('caret-up');
});

$('.custm-frm-slide').on('click', function() {
    $('.request-proposal-sec').slideToggle();
});

$('.slideform-open').on('click', function() {
    $('.slideform').toggleClass("activeslide");
    $('body').toggleClass("ovr-hddn");
});

$('.slidefrm-close').on('click', function() {
    $('.slideform').removeClass("activeslide");
    $('body').removeClass("ovr-hddn");
});

$('.slidefrm-inner1').on('click', function() {
    $('.slideform').removeClass("activeslide");
    $('body').removeClass("ovr-hddn");
});

// $(function() {
//   var $win = $(window); // or $box parent container
//   var $box = $(".slidefrm-inner");

//   $win.on("click.Bst", function(event) {
//     if (
//       $box.has(event.target).length == 0 && //checks if descendants of $box was clicked
//       !$box.is(event.target) //checks if the $box itself was clicked
//     ) {
//       $('.slideform.activeslide').removeClass('activeslide');
//     } else {
//     }
//   });
// });

// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//      //>=, not <=
//     if (scroll >= 500) {
//         //clearHeader, not clearheader - caps H
//         $("header").addClass("stick");
//     }
//     else{
//         $("header").removeClass("stick");
//     }
// });

$("header").addClass("StickyHeader");

$(function() {
    $("header").before($(".StickyHeader").clone().addClass("stick"));
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $('.StickyHeader.stick').addClass('slideDown');
        } else {
            $('.StickyHeader.stick').removeClass('slideDown');
        }

    });
});

// $('.slide-toggle').click(function(){
//     // $('.portf-slid-btn.pink-more-btn').text('View More');
//     $('.slide-down-slider .dsply-none').slideToggle();
//   }); 

size_li = $(".slide-down-slider .dsply-none").size();
x = 0;
$('.slide-down-slider .dsply-none:lt(' + x + ')').show();
$('.slide-toggle').click(function() {
    if ($(".slide-down-slider .dsply-none.last").is(":hidden")) {
        x = (x + 1 <= size_li) ? x + 1 : size_li;
        $('.slide-down-slider .dsply-none:lt(' + x + ')').slideDown();
    } else {
        $('.slide-down-slider .dsply-none').slideUp();
    }
});


$('.leadfrm').on('click', function() {
    var leadsource = $(this).attr('rel');
    if (leadsource != '' && leadsource != undefined) {
        $('.popup-layout5 input[name="leadsource"]').val(leadsource);
    }
    $('.popup-layout5').fadeIn();
    var thisrel = $(this).attr('rel');
    $('#popupform input#popuppackage').val(thisrel);
    $(".popup-header h3").text("Get In Touch");
    $(".popup-header p").text("Tell us about your business and we'll get back to you shortly");
});

$('.pack-sec .pack-ordernow').on('click', function() {
    $('.popup-layout1').fadeIn();
    var packtitle = $(this).closest('li').find(".pack-title ").html();
    var packprice = $(this).closest('li').find(".pack-price h4").html();
    var thisrel = $(this).attr('rel');
    // 	  var thisamount = $(this).attr('amount');
    $('#popupform input#popuppackage').val(thisrel);
    var type = $(this).attr('type');
    var amount = $(this).attr('amount');
    $('input[name="package_name"]').val(packtitle);
    $('input[name="package_cost"]').val(amount);
    $('input[name="package_cat"]').val(type);


    // 	  $('#popupform input#popuppackage').val(thisamount);
    $(".popup-header h3").append(packtitle);
    $(".popup-header p").append("In Just <span>" + packprice + "</span>");

});

$('.pck-details').click(function() {

    $(".package_html").empty();
    var package_html = $(this).closest('.pkg-active').find('.pack-features').text();
    var package_html_val = $.trim(package_html);
    var package_html_val_pas = "";

    if (package_html_val !== "") {
        package_html_val_pas = package_html_val;
    } else {
        package_html_val_pas = `4 Unique Logo Design Concepts
                                    5 Revisions
                                    Free Color Options
                                    24-48 Hours Turnaround Time
                                    100% Money Back Guarantee`;
    }
    $(".package_html").val(package_html_val_pas);

    // console.log(package_html_val_pas);

});



$('.popup-btn-open').on('click', function() {
    var packageid = $(this).attr('rel');
    $('.popup-layout3').fadeIn();
    $('.popup-layout3 #popuppackage').val(packageid);
});

$('table.comapare-box tr td .special-ordernow2').on('click', function() {
    if ($(this).parent().hasClass("pack-one")) {
        $('th').removeClass('active');
        $('th.pack-one').addClass('active');
    }
    if ($(this).parent().hasClass("pack-two")) {
        $('th').removeClass('active');
        $('th.pack-two').addClass('active');
    }
    if ($(this).parent().hasClass("pack-three")) {
        $('th').removeClass('active');
        $('th.pack-three').addClass('active');
    }
    if ($(this).parent().hasClass("pack-four")) {
        $('th').removeClass('active');
        $('th.pack-four').addClass('active');
    }
    if ($(this).parent().hasClass("pack-five")) {
        $('th').removeClass('active');
        $('th.pack-five').addClass('active');
    }
    if ($(this).parent().hasClass("pack-six")) {
        $('th').removeClass('active');
        $('th.pack-six').addClass('active');
    }
    $('.popup-layout1').fadeIn();
    var packtitle = $('th.active').find(".pack-title").html();
    var packprice = $('th.active').find(".pack-price h4").html();
    var thisrel = $(this).attr('rel');
    $('#popupform input#popuppackage').val(thisrel);
    $(".popup-header h3").append(packtitle);
    $(".popup-header p").append("In Just <span>" + packprice + "</span>");
});

$('.popup-close').on('click', function() {
    $('.popup-layout').fadeOut();
    $(".popup-header h3").html("");
    $(".popup-header p").html("");
});

$('.special-packg-sec.pack-detail .pack-ordernow').on('click', function() {
    $('.popup-layout1').fadeIn();
    var packtitle = $(this).closest('li').find(".pack-title").html();
    var packprice = $(this).closest('li').find(".pack-price h4").html();
    var thisrel = $(this).attr('rel');
    $('#popupform input#popuppackage').val(thisrel);
    $(".popup-header h3").append(packtitle);
    $(".popup-header p").append("In Just <span>" + packprice + "</span>");

});

$('.pack-ordernow1').on('click', function() {
    $('.popup-layout2').fadeIn();
    var packtitle = $(this).closest('li').find(".animation-title h4").html();
    var packprice = $(this).closest('li').find(".costing-final span").html();
    var thisrel = $(this).attr('rel');
    $('#popupform input#popuppackage').val(thisrel);
    $(".popup-header h3").append(packtitle);
    $(".popup-header p").append("Starting From <span>$" + packprice + "</span>");
});

$('.banner-sec.sm-bann a.pack-ordernow').on('click', function() {
    $('.popup-layout1').fadeIn();
    var packtitle = $('ul.special-pkg li .pack-title').html();
    var packprice = $("ul.special-pkg li .pack-price h4").html();
    var thisrel = $(this).attr('rel');
    $('#popupform input#popuppackage').val(thisrel);
    $(".popup-header h3").append(packtitle);
    $(".popup-header p").append("In Just <span>" + packprice + "</span>");
});

$('.bann-price a.blue-btn, section.special-packg-sec.all-in-pkg a.orange-btn').on('click', function() {
    $('.popup-layout1').fadeIn();
    var packtitle = $('section.special-packg-sec.all-in-pkg h2').html();
    var packprice = $(".bann-price .new-price").html();
    var thisrel = $(this).attr('rel');
    $('#popupform input#popuppackage').val(thisrel);
    $(".popup-header h3").append(packtitle);
    $(".popup-header p").append("In Just <span>" + packprice + "</span>");
});

$('.special-ordernow').on('click', function() {
    $('.popup-layout1').fadeIn();
    var packtitle = $(this).closest('.special-branding').find("h2").html();
    var packprice = $(this).closest('.special-branding').find(".price").html();
    var thisrel = $(this).attr('rel');
    $('#popupform input#popuppackage').val(thisrel);
    $(".popup-header h3").append(packtitle);
    $(".popup-header p").append("In Just <span>" + packprice + "</span>");
});
$('.popup-close').on('click', function() {
    $('.popup-layout1').fadeOut();
    $(".popup-header h3").html("");
    $(".popup-header p").html("");
});
// Process/steps tabs (Home, Website, Branding, Ecommerce, Mobile, About, Seo,
// Crm all share this exact markup). This used to switch panels by string-
// matching each <li>'s id attribute against a ".processN" class on both
// ul.process-ul and the target .process-tabs panel — which only works when a
// page's step ids are literally "process1".."process6" (true on Home/Seo/Crm)
// and silently does nothing on Website/Branding/Ecommerce/Mobile/About, whose
// ids are prefixed ("wprocess1", "bprocess1", "eprocess1", "mprocess1",
// "aprocess1") to stay unique across a page that also has other numbered
// ids — clicking a step there never matched any ".process-tabs" panel, so the
// content silently never changed. Rewritten to use each step's position
// among its own siblings instead of its id/class string, so it works
// regardless of what a given page's ids happen to be, and is scoped to the
// specific .process-ul/.process-content pair being clicked (rather than
// $('.process-tabs') globally) so multiple instances on one page wouldn't
// interfere with each other either.
function lxProcessGoTo($ul, $target) {
    var $steps = $ul.children('.prc-all');
    var index = $steps.index($target);
    if (index < 0 || $target.hasClass('active')) return;
    var $content = $ul.siblings('.process-content');
    var $panels = $content.find('.process-tabs');
    $ul.addClass('process-animate');
    $steps.removeClass('active');
    $target.addClass('active');
    $panels.removeClass('active');
    $panels.eq(index).fadeIn('slow').addClass('active');
    $content.find('.arrow-left').toggleClass('disable', index === 0);
    $content.find('.arrow-right').toggleClass('disable', index === $steps.length - 1);
    setTimeout(function() {
        $ul.removeClass('process-animate');
    }, 500);
}

$('ul.process-ul').on('click', '.prc-all', function() {
    lxProcessGoTo($(this).closest('ul.process-ul'), $(this));
});

$('.process-arrows').on('click', '.arrow-left', function() {
    var $ul = $(this).closest('.process-content').siblings('ul.process-ul');
    var $prev = $ul.children('.prc-all.active').prev('.prc-all');
    if ($prev.length) lxProcessGoTo($ul, $prev);
});

$('.process-arrows').on('click', '.arrow-right', function() {
    var $ul = $(this).closest('.process-content').siblings('ul.process-ul');
    var $next = $ul.children('.prc-all.active').next('.prc-all');
    if ($next.length) lxProcessGoTo($ul, $next);
});

$('.inds-toggle').on('click', function() {
    $('.inds-toggle').html('Expand to View More');
    $('ul.idustries-ul-slide-toggle').slideToggle('slow');
    $('.inds-toggle').toggleClass('chng-html');
    $('.inds-toggle.chng-html').html('Close');
});

$('.concept-sldr-txt').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    asNavFor: '.concept-sldr-img'
});
$('.concept-sldr-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.concept-sldr-txt',
    dots: false,
    arrows: true,
    focusOnSelect: true
});

$('.award-sldr').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    dots: false,
    responsive: [{
            breakpoint: 812,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.one-time-slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
    speed: 1000,
    dots: false,
    fade: true
});

$('#service').change(function() {
    var thistype = $(this).children('option:checked').attr('rel');
    // alert(thistype);

});

if ($('.industry-portf1').length > 0) {
    var loc = window.location.hash.substr(1);
    if ($('.industry-portf .col-lg-4').hasClass(loc) == true) {
        $('.' + loc).fadeIn('slow');
        $('#industryswitch').val(loc);
    } else {
        $('.industry-portf .col-lg-4').fadeIn('slow');
    }


    $(function() {
        $('#industryswitch').change(function() {
            $('.industry-portf .col-lg-4').fadeOut('fast');
            $('.' + $(this).val()).fadeIn('slow');
        });
    });
}
// $('.industry-portf1').each(function(){
// 	var datatab =$(this).find('.col-lg-4').attr('data-tab');
// 	$(this).find('[class=".'+ datatab + '"]').addClass('active');
// })
// var attribute = $('.industry-portf .col-lg-4').attr('data-tab');
// alert($('.industry-portf1 .col-lg-4',this).attr('data-tab'));
// // alert(attribute);
// if(loc == attribute){
// 	$("."+attribute).addClass('tab-txt');
// }
// if(loc == attribute){

// }
// if(loc != ($('.industry-portf .col-lg-4').hasClass(loc))){
// 	$(this).addClass('abc');
// }
// var abc = $('.industry-portf .col-lg-4').hasClass(actv).toString().addClass('abc');
// $('.industry-portf .col-lg-4').each(function(){
//     if($('.industry-portf .col-lg-4').hasClass(loc)) {
//     	$(this).addClass('abc');
//     } 
// });


// if(loc == abc){
// 	$('.industry-portf .col-lg-4').hasClass(abc).addClass('abc');
// }
// if(loc == "sports"){

// 	$('ul.tabs li').removeClass('current');
// 	$('.tab-content').removeClass('current');

// 	$(this).addClass('current');
// 	$("#"+tab_id).addClass('current');
// if(loc == "sports"){
// 	$('.industry-portf>div').fadeOut();
// 	$('.industry-portf .sports').fadeIn(); 
// }

// if(loc == "website"){
// $('ul.tabs li.tab-link').removeClass('current'); 
// $('ul.tabs li.tab-link.tab2').addClass('current');
// $('.tab .tab-content').removeClass('current');
// $('.tab #tab-2').addClass('current');
// }

// if(loc == "advertising"){
// $('ul.tabs li.tab-link').removeClass('current'); 
// $('ul.tabs li.tab-link.tab4').addClass('current');
// $('.tab .tab-content').removeClass('current');
// $('.tab #tab-4').addClass('current');
// }

// if(loc == "video"){
// $('ul.tabs li.tab-link').removeClass('current'); 
// $('ul.tabs li.tab-link.tab3').addClass('current');
// $('.tab .tab-content').removeClass('current');
// $('.tab #tab-3').addClass('current');
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function presignuphomeform() {
//     var thename = $('#homeform #name').val();
//     var theemail = $('#homeform #email').val();
  
//     var thephone = $('#homeformcountry').val() + "-" + $('#homeform input[type="tel"]').val();
//     var theservice = $('#homeform #service').val();
//     var domain_url = 'https://www.logogenies.com/';

//     $.ajax({
//         type: "POST",
//         url: domain_url + 'crm/include/presignup.php',
//         data: {
//             name: thename,
//             email: theemail,
//             phone: thephone,
//             type: 'homeform',
//             service: theservice
//         },
//         success: function(data) {
            
//         }
//     });

// }

$(function() {

    $('#homeform #email, #homeform #phoneNum').change(function() {
        presignuphomeform();
    });


    // 	$('#popupform').submit( function(e){
    // 	e.preventDefault();
    // 	var code = $('#popupform').find('#popupcountrycode').val();
    // // 	var url_check = window.location.href;
    // 	/*alert(code);
    //     alert($('#countrycode').val(code));*/
    // 	$(this).find('.uptownloader').show();
    // 	var name = $('#popupform input#name').val();
    // 	var email = $('#popupform input#email').val();
    // 	var phone = $('#popupform input#phoneNum2').val();
    // 	var gclid =  $('#popupform input[name="gclid"]').val();
    // 	var countrycode = code;
    // 	var thepackage = $('#popupform input#popuppackage').val();
    // 	var domain_url = `${location.protocol}//${location.host}`;
    // // 	var domain_url = url_check;
    // // 	console.log(nameVal, emailVal, phoneVal, thepackageVal,domain_urlVal);

    // 	$.ajax({
    //     type: "POST",
    //     url: domain_url+'/crm/include/signup.php',
    //     data: {name: name, email:email, phone:phone,countrycode:countrycode, thepackage:thepackage,gclid:gclid},
    //     success: function(data) {
    //                 $('#popupform').find('.uptownloader').hide();
    //                 if(data=='error'){
    //         			$('.packageformsubmit').after('<div class="alreadyerror"> Something Went Wron Please Try Again.</div>');
    //         		} else if(data=='exists') {
    //         			$('.packageformsubmit').after('<div class="alreadyerror"> You are already a member. <a href="https://www.logogenies.com/crm">Click Here</a> to sign in.</div>');
    //         		} else {
    //         		    window.location.replace(data);
    //         		}
    //             }
    //             });



    // 	});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // $('.popupformbusiness').submit(function(e) {
    //     e.preventDefault();
    //     var code = $('#popupform').find('#popupcountrycode').val();
    //     $(this).find('.uptownloader').show();
    //     var name = $('.popupformbusiness input#name').val();
    //     var email = $('.popupformbusiness input#email').val();
    //     var phone = $('.popupformbusiness input#phoneNum2').val();
    //     var countrycode = code;
    //     var thepackage = $('.popupformbusiness input#popuppackage').val();
    //     var domain_url = 'https://www.crestlogodesign.com/';
    //     $.ajax({
    //         type: "POST",
    //         url: domain_url + 'crm/include/signup.php',
    //         data: {
    //             name: name,
    //             email: email,
    //             phone: phone,
    //             countrycode: countrycode,
    //             thepackage: thepackage
    //         },
    //         success: function(data) {
    //             $('#popupform').find('.uptownloader').hide();
    //             if (data == 'error') {
    //                 $('.packageformsubmit').after('<div class="alreadyerror"> Something Went Wron Please Try Again.</div>');
    //             } else if (data == 'exists') {
    //                 $('.packageformsubmit').after('<div class="alreadyerror"> You are already a member. <a href="https://www.logogenies.com/crm">Click Here</a> to sign in.</div>');
    //             } else {
    //                 window.location.replace(data);
    //             }
    //         }
    //     });



    // });

});

$(document).ready(function() {
    $('.popdynamic').click(function() {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();
        $('.LoginPopup').addClass('price-margin');

        var packtitle = $(this).closest('.pckg').find(" .title").html();
        var packprice = $(this).closest('.pckg').find(".price .amount").html();



        var thisrel = $(this).attr('rel');
        var type = $(this).attr('type');
        $('input[name="pkg_key"]').val(thisrel);
        $('input[name="package_name"]').val(packtitle);
        $('input[name="package_cost"]').val(packprice);
        $('input[name="package_cat"]').val(type);

        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic h3 span").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });
});

// var $svg = $('.draw-line svg').drawsvg({
//       duration: 2000,
//       easing: 'linear'
//     });
// $svg.drawsvg('animate');


$('.double-slidr-sync').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    asNavFor: '.double-slidr'
});
$('.double-slidr').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.double-slidr-sync',
    dots: false,
    autoplay: true,
    draggable: false,
    infinite: false,
    vertical: true,
    focusOnSelect: true
});

$('.testi-slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.banner-slider').slick({
    fade: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.ban-sec-slider').slick({
    fade: false,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.reviews-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
            breakpoint: 813,
            settings: {
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.portfolio-slider ul').slick({
    dots: false,
    lazyLoad: 'ondemand',
    arrows: true,
    slidesToShow: 4,
    rows: 2,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 4000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 813,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                rows: 1,
            }
        }
    ]
});

$('.ban-btm-logos ul').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
            breakpoint: 1025,
            settings: {
                lazyLoad: 'ondemand',
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 812,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});


$(function() {
    $("#faq-accord").accordion({
        heightStyle: "content"
    });
});




$(function() {
    var filterList = {
        init: function() {
            // MixItUp plugin
            // https://mixitup.io
            $('#packageslist').mixItUp({
                //targetSelector: '.portfolio.all',
                selectors: {
                    target: '.package',
                    filter: '.filter3'
                },
                load: {
                    filter: '.logopack'
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});

$(function() {
    var filterList = {
        init: function() {
            // MixItUp plugin
            // https://mixitup.io
            $('#portfolio').mixItUp({
                //targetSelector: '.portfolio.all',
                selectors: {
                    target: '.portfolio-tar',
                    filter: '.filter4'
                },
                load: {
                    filter: '.logoport'
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) { // If page is scrolled more than 50px
        $('.sidebar-fix-box').fadeIn(200); // Fade in the arrow
    } else {
        $('.sidebar-fix-box').fadeOut(200); // Else fade out the arrow
    }
});

$('.return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});


// .pack-spec-scroll (the feature list inside every pricing card) used to get
// wrapped in the mCustomScrollbar plugin here. The plugin only reskins the
// scrollbar chrome — the actual scrolling comes from the plain CSS
// max-height/overflow-y rule on .pack-features (see lunexa-visuals.css) — and on
// mobile that plugin's JS-measured wrapper is exactly the kind of thing that can
// desync from the real content height. Dropped in favor of the native scrollbar,
// which also means touch devices get normal momentum scrolling for free.



// sticky header



$(document).ready(function() {


    //$('#country-codes').each( function(){
    //	 $(this).children("option:selected").text($("#country-codes").val());
    //	});
    //	
    //	
    //	$('.country-codes').each( function(){
    //	 $(this).children("option:selected").text($(".country-codes").val());
    //	});



    $('#homeform').submit(function(e) {

        $('#homeform').find('.alert-error').hide();
        $(this).find('.newuptownloader').show();
        var code = $('#homeform').find('#popupformcountry').val();
        var countrycode = code;
        var name = $('#homeform input#name').val();
        var email = $('#homeform input#email').val();
        var phone = $('#homeform #phoneNum2').val();
        var countrycode = code;
        var service = $('#homeform select#service').children('option:checked').attr('rel');
        var servicetype = $('#homeform select#service').children('option:checked').attr('rel');
        var domain_url = 'https://www.logogenies.com/';
        /*	alert(name);
        	alert(email);
        	alert(phone);
        	alert(service);
        	*/



        $.ajax({
            type: "POST",
            url: domain_url + 'crm/include/homeform.php',
            data: {
                name: name,
                email: email,
                phone: phone,
                countrycode: code,
                service: service,
                servicetype: servicetype
            },
            success: function(data) {

                $('#homeform').find('.uptownloader').hide();
                if (data == 'Message has been sent') {
                    window.location.replace("https://www.logogenies.com/crm/dashboard/newproject.php?type=" + servicetype + "&firstsignup=1");
                } else if (data == "exists") {

                    $('#homeform').after('<div class="alert-error"> We already have a customer with same email id. <a href="https://www.logogenies.com/crm">Click Here </a>to Login</div>');
                } else {
                    //	  alert(data);
                    $('#homeform').after('<div class="alert-error"> Something went wrong, please try again</div>');
                }

            }
        });
        return false;
    });




    //change the integers below to match the height of your upper dive, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.
    $(window).scroll(function() {

        //  console.log($(window).scrollTop());

        if ($(window).scrollTop() > 550) {
            $('#header').addClass('navbar-sticky');
        }

        if ($(window).scrollTop() < 551) {
            $('#header').removeClass('navbar-sticky');
        }
    });



    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


});

$(document).ready(function() {
    $('#popupcountrycode').val("+1");
    $('#countrycode').val("+1");
    $('.countrycode').val("+1");
    $('#homeformcountry').change(function() {
        var thisval = $(this).children('option:selected').val();
        var thiscode = $(this).children('option:selected').attr('data-abbr');

        $('#countrycode').val("+" + thisval);
        if (thiscode == 'CA') {
            $(this).siblings('span').removeClass();
            $(this).siblings('span').addClass('fgca');
        } else {

            $(this).siblings('span').removeClass();
            $(this).siblings('span').addClass('fg' + thisval);
        }
    });
    $('#popupformcountry').change(function() {
        var thisval = $(this).children('option:selected').val();
        var thiscode = $(this).children('option:selected').attr('data-abbr');

        $('#popupcountrycode').val("+" + thisval);

        if (thiscode == 'CA') {
            $(this).siblings('span').removeClass();
            $(this).siblings('span').addClass('fgca');
        } else {
            $(this).siblings('span').removeClass();
            $(this).siblings('span').addClass('fg' + thisval);
        }
    });





    $('.countrylist').change(function() {
        var thisval = $(this).children('option:selected').val();
        var thiscode = $(this).children('option:selected').attr('data-abbr');

        $('#countrycode').val("+" + thisval);
        $('.countrycode').val("+" + thisval);

        if (thiscode == 'CA') {
            $(this).siblings('span').removeClass();
            $(this).siblings('span').addClass('fgca');
        } else {
            $(this).siblings('span').removeClass();
            $(this).siblings('span').addClass('fg' + thisval);
        }
    });







    $('.menu-link').bigSlide();

    //	var topOfOthDiv = $(".concept-sec").offset().top - 300;

    var topOfOthDiv = 10;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= topOfOthDiv) {
            $(".concept-sec").addClass("thisActive");
        } else {
            $(".concept-sec").removeClass("thisActive");
        }
    });





});




// portfolio popup
$("[data-fancybox]").fancybox({
    protect: true,
    wheel: false,
    scrollwheel: true,
    buttons: [
        //'zoom',
        //'thumbs',
        'close'
    ]
});

if ($(window).width() > 768) {
    $(".pack-list > li").hover(
        function() {
            $(this).addClass("pkg-active").siblings().removeClass("pkg-active");
        },
        function() {
            //$(".pack-list > li:nth-child(2)").addClass("pkg-active").siblings().removeClass("pkg-active");
            $('.always-active').addClass("pkg-active").siblings().removeClass("pkg-active")
        }
    );


}

$('.pack-list > li').hover(function() {
    $(document).bind('mousewheel DOMMouseScroll', function() {
        stopWheel();
    });
}, function() {
    $(document).unbind('mousewheel DOMMouseScroll');
});

function stopWheel(e) {
    if (!e) { /* IE7, IE8, Chrome, Safari */
        e = window.event;
    }
    if (e.preventDefault) { /* Chrome, Safari, Firefox */
        e.preventDefault();
    }
    e.returnValue = false; /* IE7, IE8 */
}

// document.getElementsByClassName("normal-offer-pack").onwheel = function() {myFunction()};

// function myFunction() {
// 	alert('abc');
//     // $( ".pack-features #mCSB_1_scrollbar_vertical" ).scroll();
// }

// $('.normal-offer-pack').bind('mousewheel', function(e){
//     if(e.originalEvent.wheelDelta /120 > 0) {
//         $(".mCustomScrollBox").animate({ scrollTop: $('.mCustomScrollBox').prop("scrollHeight")}, 1000);
//     }
//     else{
//         $(".mCustomScrollBox").animate({ scrollTop: $('.mCustomScrollBox').prop("scrollHeight")}, 1000);
//     }
// });

$('a.btn-drpdwn').on('click', function() {
    $(this).parent('li').siblings('ul.dropdown').slideToggle();
    $(this).toggleClass('active');
});

$('a.nav-btn').on('click', function() {
    $('.top-nav.responsive').toggleClass('active');
    $(".hdr-top-links+.clearfix").toggleClass('responsive');
    $('a.nav-btn').toggleClass('active');
});

$('.hdr-top-links+.clearfix').on('click', function() {
    $('.top-nav.responsive').toggleClass('active');
    $(".hdr-top-links+.clearfix").toggleClass('responsive');
    $('a.nav-btn').toggleClass('active');
});


if ($(window).width() < 1026) {



}

if ($(window).width() < 824) {

    $('.draw-line ul.phlsphy-cls').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 480,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 4000,
            }
        }]
    });

    // ul.type-ul (the 3-4 "feature/type" cards used on nearly every page) used to get
    // Slick-carousel-converted here. Slick sets each slide's pixel width from the
    // container's width at the moment this runs; on a freshly-mounted React page that
    // width can still be settling (webfont swap, etc.), so the cards ended up
    // inconsistently sized with adjacent cards peeking in at the edges instead of a
    // clean stack. Replaced with a plain CSS grid (see lunexa-visuals.css's
    // ".type-ul" mobile/tablet rules) — a 3-4 item list doesn't need a carousel, and
    // a static grid can't desync from the container the way a JS-measured one can.

    $('ul.features-ul li').removeClass('bounceInLeft');
    $('.str-brand-sec li').removeClass('growIn');

    $('ul.features-ul').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    });

    $('ul.idustries-ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.ftr-links h4').click(function() {
        if ($(this).hasClass('active') == false) {
            $('.ftr-links ul').slideUp();
            $(this).siblings('.ftr-links ul').slideToggle();
            $('.ftr-links h4').removeClass('active');
            $(this).toggleClass('active');
        } else if ($(this).hasClass('active') == true) {
            $('.ftr-links ul').slideUp();
            $('.ftr-links h4').removeClass('active');
        }
    });

    $('.whyus-list').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.str-brand-sec ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.style-guide-sec ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.guarantee-ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.animationport .portfolio-box').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.brandingport ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        centerMode: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.websiteport ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        centerMode: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

}