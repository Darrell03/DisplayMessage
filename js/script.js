function init(){
	//add your javascrip between these two lines of code
	function myEventFuntion(){
		var e4 = document.getElementById('entryinput');
		e4.value = ": Hello World";
		alert("Darrell Lee:" + e4.value);
	}

	var d4 = document.getElementById('entrybutton');
	d4.addEventListener('click', myEventFuntion);
	d4.addEventListener('click', function() {
		console.log('I was clicked');
		d4.style.backgroundColor = '#C00';
		d4.innerHTML = '<strong>Goodbye</strong>';
	});
}


window.addEventListener('load', init);
