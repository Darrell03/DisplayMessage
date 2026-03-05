function init(){
	//add your javascrip between these two lines of code
	function myEventFuntion(){
		var inputText = document.getElementById('entryinput');
		var outputText = document.getElementById('textoutput');
    outputText.textContent = inputText.value;
		alert("Darrell Lee: " + inputText.value);
	}

	var onBtnPush = document.getElementById('entrybutton');
	onBtnPush.addEventListener('click', myEventFuntion);
	onBtnPush.addEventListener('click', function() {
		console.log('I was clicked');
		onBtnPush.style.backgroundColor = '#C00';
		onBtnPush.innerHTML = '<strong>Goodbye</strong>';
	});
}


window.addEventListener('load', init);
