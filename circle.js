$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
			var radius = $(this).val();
			$(this).val("");
			var area = Math.PI*radius*radius
			var circumference = 2*Math.PI*radius
			alert('The area of the circle is ' + area);
			alert('The circumference of the circle is ' + circumference);
	}
});