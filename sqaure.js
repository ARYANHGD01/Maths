$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
			var length = $(this).val();
			$(this).val("");
			var perimeter = 4 * length
			var area = length * length	
			alert('The perimeter of the square is ' + perimeter);
			alert('The area of the square is ' + area);
	}
});