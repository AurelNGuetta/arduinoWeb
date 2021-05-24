// Calculator for converting Miles to Kilometers



$(document).ready(function() {
TweenLite.to(needle, 2, {rotation:-31,  transformOrigin:"bottom right"});
TweenLite.to(needle2, 2, {rotation:-31,  transformOrigin:"bottom right"});

 	// select current content in input boxes on click
	$("input[type='text']").on("click", function () {
	   $(this).select();
	});

	//clear kilometers value when miles is selected
	$("#miles").focus(function(){
		$("#kilometers").val('');
	});
	//Right Motor chart
	$("#miles2").focus(function(){
		$("#kilometers2").val('');
	});

	//clear miles value when kilometers is selected
	$("#kilometers").focus(function(){
		$("#miles").val('');
	});
	//Right Motor chart
	$("#kilometers2").focus(function(){
		$("#miles2").val('');
	});
/* 
	// convert miles to kilometers
	$('#miles').keyup(function() {
		var mi = $(this).val();
		var	miNum = parseInt(mi) * 1.6093;
		//make sure kmNum is a number then output
		if ( (mi <= 75) && !isNaN(miNum) ){
            var speedMi = miNum * 2 - 31;	
            $('#numbers').css('text-align', 'center');  
            $('#kilometers').val(miNum.toFixed(2));	
            $('#numbers').html(miNum.toFixed(0)); 
            $('#mi-km').html('Kilometers');
	   } else if (!isNaN(miNum)){ 
	   		var speedMi = 215;
	   		$('#numbers').css('text-align', 'right');
	   		$('#kilometers').val(miNum.toFixed(2));	
            $('#numbers').html(miNum.toFixed(0)); 
            $('#mi-km').html('Kilometers');  	
	   } else { 
	   		$('#miles').val('');
	   		$('#kilometers').val('');
	   		$('#numbers').html('');	
	   		$("#errmsg").html("Numbers Only").show().fadeOut(1600);
	   }
	
		var needle = $("#needle");    
		TweenLite.to(needle, 2, {rotation:speedMi,  transformOrigin:"bottom right"});
	});
 */
	// convert kilometers to miles
	$('#kilometers').keyup(function() {
		var km = $(this).val();
		// var	kmNum = parseInt(km) * 0.62137;
		var	kmNum = parseInt(km);
		//make sure kmNum is a number then output
		if ( (km <= 195) && !isNaN(kmNum) ){
            var speedKm = kmNum * 2 - 31;
            $('#numbers').css('text-align', 'center');  
            $('#miles').val(kmNum.toFixed(2));
     		$('#numbers').html(kmNum.toFixed(0));
     	 	$('#mi-km').html('Km');	  	 
	   } else if (!isNaN(kmNum)){ 
	   		var speedKm= 215;
	   		$('#numbers').css('text-align', 'right');  	
	   		$('#miles').val(kmNum.toFixed(2));
     		$('#numbers').html(kmNum.toFixed(0));
     	 	$('#mi-km').html('Km');	  	 
	   } else {
	   		$('#miles').val('');
	   		$('#kilometers').val('');
	   		$('#numbers').html('');	
	   		$("#errmsg").html("Numbers Only").show().fadeOut(1600);
	   }
	   
	  /*  
	// convert kilometers to miles
	$('#kilometers').keyup(function() {
		var km = $(this).val();
		var	kmNum = parseInt(km) * 0.62137;
		//make sure kmNum is a number then output
		if ( (km <= 195) && !isNaN(kmNum) ){
            var speedKm = kmNum * 2 - 31;
            $('#numbers').css('text-align', 'center');  
            $('#miles').val(kmNum.toFixed(2));
     		$('#numbers').html(kmNum.toFixed(0));
     	 	$('#mi-km').html('Miles');	  	 
	   } else if (!isNaN(kmNum)){ 
	   		var speedKm= 215;
	   		$('#numbers').css('text-align', 'right');  	
	   		$('#miles').val(kmNum.toFixed(2));
     		$('#numbers').html(kmNum.toFixed(0));
     	 	$('#mi-km').html('Miles');	  	 
	   } else {
	   		$('#miles').val('');
	   		$('#kilometers').val('');
	   		$('#numbers').html('');	
	   		$("#errmsg").html("Numbers Only").show().fadeOut(1600);
	   }
        */
       	var needle = $("#needle");
        TweenLite.to(needle, 2, {rotation:speedKm,  transformOrigin:"bottom right"});    
	});
	
	// convert kilometers to miles
	$('#kilometers2').keyup(function() {
		var km = $(this).val();
		// var	kmNum = parseInt(km) * 0.62137;
		var	kmNum = parseInt(km);
		//make sure kmNum is a number then output
		if ( (km <= 195) && !isNaN(kmNum) ){
			var speedKm = kmNum * 2 - 31;
			$('#numbers2').css('text-align', 'center');  
			$('#miles2').val(kmNum.toFixed(2));
				$('#numbers2').html(kmNum.toFixed(0));
				$('#mi-km2').html('Km');	  	 
		} else if (!isNaN(kmNum)){ 
				var speedKm= 215;
				$('#numbers2').css('text-align', 'right');  	
				$('#miles2').val(kmNum.toFixed(2));
				$('#numbers2').html(kmNum.toFixed(0));
				$('#mi-km2').html('Km');	  	 
		} else {
				$('#miles2').val('');
				$('#kilometers2').val('');
				$('#numbers2').html('');	
				$("#errmsg2").html("Numbers Only").show().fadeOut(1600);
		}
		var needle2 = $("#needle2");
		TweenLite.to(needle2, 2, {rotation:speedKm,  transformOrigin:"bottom right"});    
	});
	
});