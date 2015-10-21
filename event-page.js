(function(){
    $(document).ready(function(){
    	var lineHeight = $('.imageContainer').height();
    	var counter = 0;
    	var arr = ['images/img1.jpg','images/img2.jpg','images/img3.jpg','images/img4.jpg','images/img5.jpg'];
    	var monthArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    	var dayArr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    	
    	var date = new Date();
		var day = dayArr[date.getDay()];
		var month = monthArr[date.getMonth()];
		var year = date.getFullYear();
		var currentDate =  date.getDate();
		var todayDateString = day + ", " + month +" "+ currentDate +" "+ year;

		var tomDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
		var tomDay = dayArr[tomDate.getDay()];
		var tomMonth = monthArr[tomDate.getMonth()];
		var tomYear = tomDate.getFullYear();
		var tomCurrentDate =  tomDate.getDate();
		var tomorrowDateString = tomDay + ", " + tomMonth+" " + tomCurrentDate +" "+ tomYear;
		var filterByDate = 'Filter By Dates';
		var paidString = 'Paid';
		var freeString = 'Free';
		var filterByPrice = 'Filter By Price';
    	$('.dateFilterToggleText').on('click',function(){
			$('.filterMenu').toggle();
			$(this).find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
			$('.priceMenu').hide();
		});
		$('.priceFilterToggleText').on('click',function(){
			$('.priceMenu').toggle();
			$(this).find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
			$('.filterMenu').hide();
		});
		$('.menuItem').on('click',function(){
			
			
			if ($(this).hasClass("menuItemToday")) {
 				console.log(todayDateString);
 				$('.dateFilterText').html(todayDateString);
 				
 				$('.filterMenu').hide();
 				$('.dateFilterToggleText').find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
		   	}  
		   	else if ($(this).hasClass("menuItemTomorrow")) {
 				console.log(tomorrowDateString);
 				$('.dateFilterText').html(tomorrowDateString);
 				$('.filterMenu').hide();
 				$('.dateFilterToggleText').find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
		   	}  
		   	else if ($(this).hasClass("clearDate")) {
 				$('.dateFilterText').html(filterByDate);
 				$('.filterMenu').hide();
 				$('.dateFilterToggleText').find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
		   	}   	
		   	else if ($(this).hasClass("menuItemPaid")) {
 				$('.priceFilterText').html(paidString);
 				$('.priceMenu').hide();
 				$('.priceFilterToggleText').find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
		   	}  
		   	else if ($(this).hasClass("menuItemFree")) {
 				$('.priceFilterText').html(freeString);
 				$('.priceMenu').hide();
 				$('.priceFilterToggleText').find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
		   	}
		   	else if ($(this).hasClass("clearPrice")) {
 				$('.priceFilterText').html(filterByPrice);
 				$('.priceMenu').hide();
 				$('.priceFilterToggleText').find('.fa').toggleClass("fa-chevron-down fa-chevron-up");
		   	}   	
		});
    	
		
    	//var autoMove = window.setInterval(right,5000);
    	$('.imageNavigateButton1, .imageNavigateButton2').css('line-height',lineHeight+'px');
    	$($('.thumBut')[0]).css('opacity',1);
    	function imageReplaceFade(){
    		var image = $('.sliderImg');
  			image.fadeOut('1000', function () {
        		image.attr('src', arr[counter]);
        		image.fadeIn(1000);
    		});
    	};
    	function thumbNailBorder(number){
    		//	window.clearInterval(autoMove);
    		var arrThumb = $('.thumBut');
    		for(var i=0;i<arrThumb.length;i++){
    			if($(arrThumb[i]).data('number')==number){
    				$(arrThumb[i]).css('opacity',1);
    				$(arrThumb[i]).siblings().css('opacity',0.2);
    			}
    		}
    		//	autoMove = window.setInterval(right,5000);	
    	}
    	function left(){
  			//	window.clearInterval(autoMove);
  			if(counter == 0){
  				counter = arr.length-1;
  			}
  			else{
  				counter = counter - 1;	
  			}
  			imageReplaceFade();
  			thumbNailBorder(counter);
    		//	autoMove = window.setInterval(right,5000);	
  			
  		};
  		function right(){
  			
  			if(counter == arr.length-1){
  				counter = 0;
  			}
  			else{
  				counter = counter + 1;	
  			}
			imageReplaceFade();
    		thumbNailBorder(counter);
 		 	
 		 	
  		};
    	$('.thumBut').click(function(){
    		counter = $(this).data('number');
    		imageReplaceFade();
    		thumbNailBorder($(this).data('number'));
    		
    	});
  		$('#rightBut').click(right);
  		$('#leftBut').click(left);
  		$( "#hiddenField" ).datepicker({
      		showOn: "button",
        	buttonText: "Calender",
        	showButtonPanel: true
    	});
		
	});
		
})();