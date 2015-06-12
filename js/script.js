function changeBox() 
{
  $('#passinp1').hide();
  $('#passinp2').show().focus();
}
function restoreBox() 
{
	if($('#passinp2').val() == '')
	{
	  $('#passinp1').show();
	  $('#passinp2').hide();
	}
}

function windowSize(){
	var sideHeight = $('.sidebar-in').height();
	var winHeight = $(window).height();
	var winWidth = $(window).width();

	$('.sidebar').removeClass('slide-away');
	$('body').removeClass('fix_body');
	$('.wrap-all > .content').removeClass('slide-away');

	//alert(sideHeight + '     ' + winHeight);
    if ( winHeight<= sideHeight){
       $('body').addClass('side-scroll')
    } else {
       $('body').removeClass('side-scroll')
    }
    
    //
    if(winWidth < 421){
       $('body').removeClass('fix_body');
    }
}


$(document).ready(function() {

		
	/* sidebar scroll-y */
	$(window).on('load resize',windowSize);
	$(window).on('resize',function(){
		$('#ui-datepicker-div').hide();
	});

	/* vertical scroll-bar */

	if ($('.b-v-scroll')[0])
	{
		$('.b-v-scroll').jScrollPane({autoReinitialise:true,showArrows: false, mouseWheelSpeed: 25, verticalDragMinHeight: 20,verticalDragMaxHeight: 20});
	}


	// $('#left_sidebar').mCustomScrollbar({
	// 	axis: 		'y',
	// 	mouseWheel:  true,
	// 	mouseWheel:{ enable: true }
	// });

	if ($('.video-list-items-wrap')[0]){
		$('.video-list-items-wrap').jScrollPane({
			autoReinitialise: 		true,
			showArrows: 			false,
			mouseWheelSpeed: 		25, 
			verticalDragMinHeight: 	20,
			verticalDragMaxHeight: 	20,
			scrollPagePercent:      10
		});
	}

	
	$(window).load(function(){
		$('.videos_array').mCustomScrollbar({
			axis: 'x',
			setWidth: '100%',
			advanced:{autoExpandHorizontalScroll:true}
		});
	});


	/* placeholder */
	$('input[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();

	
	/* input highlight */
	$('.b-autorize .inp input').on('focus', function() {
	  $(this).parent().addClass('i-light');
	}).blur(function() {
	  $(this).parent().removeClass('i-light');
	}).blur();





	// $('.b-autorize .inp input').focus(function() {
	//   $(this).parent().addClass('i-light');
	// }).blur(function() {
	//   $(this).parent().removeClass('i-light');
	// }).blur();

	/* check & radio */
	$('input:checkbox, .checklist input:radio').iCheck({
		 checkboxClass: 'icheckbox_minimal',
		 radioClass: 'iradio_minimal',
		 increaseArea: '0' 
	});
	

	
	$(document).mouseup(function (e)
	{
	   var notifContainer = $('.b-notific');

		if (!notifContainer.is(e.target) // if the target of the click isn't the container...
			&& (notifContainer.has(e.target).length === 0))  // ... nor a descendant of the container
		{ 
			notifContainer.find('.b-notif-list').hide();
			$('.b-notif-label').removeClass('notif-active');
		
		}
	});
	
	/* b-notif popup */
	$('.b-notif-label').click(function() {
			$(this).toggleClass('notif-active');
			$(this).parent().find('.b-notif-list').toggle();
			return false;
	});

	/* slidepanel */
	/* sidebar toggler */
	$('.sidebar-togg').click(function() {
		$('.sidebar').toggleClass('slide-away');
		var close = $('.sidebar').hasClass('slide-away');
		if(!close){
			setTimeout(function() {
				$('.sidebar').find('.jspPane').css('top', '0');
			}, 300);	
		}

		return false;
	});

	$('.wrap-all').click(function() {
		$('.sidebar').removeClass('slide-away');
		setTimeout(function() {
			$('.sidebar').find('.jspPane').css('top', '0');
		}, 500);
		return false;
	});




	/* checkbox switcher */
	$("input.check-switch").switchButton({
	  labels_placement: "right",
	  width: 121,
	  height: 34,
	  button_width: 34,
	  checked: true
	});

	/* datepicker */
	
	//$('.inp-date input').datepicker();

	$( '#date-from' ).datepicker({
      defaultDate: '+1w',
      numberOfMonths: 1,
      showOtherMonths: true,
      selectOtherMonths: true,
	  onClose: function( selectedDate ) {
        $( '#date-to' ).datepicker( 'option', 'minDate', selectedDate );
      }
    });
    $( '#date-to' ).datepicker({
      defaultDate: '+1w',
	  showOtherMonths: true,
      selectOtherMonths: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( '#date-from' ).datepicker( 'option', 'maxDate', selectedDate );
      }
	});
	
	/* progressbar */
	$('.pbar100').progressbar({value: 100});
	$('.pbar75').progressbar({value: 75});
	$('.pbar50').progressbar({value: 50});
	
	$(".progressbar").mousemove(function(e) {
		var offset = $(this).offset();
		var relativeX = (e.pageX - offset.left);
		var relativeY = (e.pageY - offset.top);
		var messagewidth = $('.timing_message').width();
		var messageH = $('.timing_message').height();


		var vis = $('.timing_message').is(":visible");
		console.log('vis ' , vis);
		if( vis ){
			$('.timing_message').fadeIn().css('top', -34-messageH+offset.top + 'px').css('left', e.pageX-25-messagewidth*0.5 + 'px');
		}


	}).mouseleave(function(){
			setTimeout(function(){
			$('.timing_message').hide().removeAttr('style');
			}, 1000);
		});

	$('#mCSB_1_dragger_horizontal').css("background-color", "#FFF").css("background-image", "url(/images/i-check.png)");
	
	$('.b-item').on('click', function(){
		var is_active = $(this).hasClass('active');
		if(is_active) return;
		$('.b-item').removeClass('active');
		$(this).addClass('active');
		console.log('is_active', is_active);
	});

	// hack with link lacation ))
	var goto_togout = $('.b-link-logout').parent();
	if (goto_togout[0]){
		goto_togout.click(function(){
			  window.location = "login_in.html";
		});
	}

	var goto_login = $('input[type="submit"].btn-send');
	if (goto_login[0]){
		goto_login.click(function(){
			  window.location = "index.html";
		});
	}

	var goto_settings = $(".b-link-sett").parent();
	if (goto_settings[0]){
		goto_settings.click(function(){
			  window.location = "settings.html";
		});

		var natr = $('.b-nav-side>.b-item').eq(0);
		var virt = $('.b-nav-side>.b-item').eq(1);
		var StCh = $('.b-nav-side>.b-item').eq(2);

		natr.click(function(){
			window.location = 'nutrition.html';
		});
		virt.click(function(){
			window.location = 'virtual-trainer.html';
		});
		StCh.click(function(){
			window.location = 'step-challenge.html';
		});
	}

	if($('#virt_travel1')[0]){
		$('#virt_travel1').click(function(event){
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			window.location='virtual-trainer.html';
		});
	}
	if($('#virt_travel2')[0]){
		$('#virt_travel2').click(function(event){
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			window.location='virtual-trainer2.html';
		});
	}
	var st_ch_adm = $('.b-nav-side>.b-item').eq(2).find('.b-sub-list li').eq(0);
	var st_ch_edt = $('.b-nav-side>.b-item').eq(2).find('.b-sub-list li').eq(1);
	var st_ch_esd = $('.b-nav-side>.b-item').eq(2).find('.b-sub-list li').eq(2);

	if(st_ch_adm){
		st_ch_adm.click(function(){
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			window.location = 'step-challenge-administrate.html';
		});
	}
	if(st_ch_edt){
		st_ch_edt.click(function(){
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			window.location = 'step-challenge-edit-a-team.html';
		});
	}
	if(st_ch_esd){
		st_ch_esd.click(function(){
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			window.location = 'data-entry.html';
		});
	}

	$('.b-step-edits').click(function(){
		window.location='data-entry-edit.html';
	});

	$('.b-link-zoom-in').on('click',function(){
		_this= $(this);
		var url = _this.data('zoomUrl');
		$('#zoom-wrapper').css('background-image', 'url('+url+')').show('fast');
	});

	$(document).mouseup(function (e) {
	    var container = $("#zoom-wrapper");
	    if (container.has(e.target).length === 0){
	        container.hide();
	    }
	});


















});

