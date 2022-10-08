let changeColor = document.getElementById('changecolor'); // select header
let clickMe = document.getElementById('clickme'); // select button
let writeColor = document.getElementById('writecolor'); // select input 
let body = document.body; // select document body


//  when button is clicked, background of the page changes
clickMe.addEventListener("click", function() {
	
  	body.style.backgroundColor = writeColor.value;
	changeColor.style.color = 'white';
	changeColor.innerHTML = "";
 
	
	if(writeColor.value === ''){
		alert('Please Fill In Your Favorite Color!!!');
		changeColor.style.color = 'black';
		return changeColor.innerHTML = 'Try To Fill In Your Favorite Color';
	}else if ( writeColor.value === 'white'){
		changeColor.style.color = 'black';
	}else if(writeColor.value === 'black'){
		changeColor.style.color = 'white';
	}else if( writeColor.value === ''){
		changeColor.style.color = 'black';
	}
	
	
	writeColor.value = '';
	
});

