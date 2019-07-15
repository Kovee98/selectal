var mySelectal = new Selectal('#my-select');

mySelectal.addEventListener('change', function() {
	console.log("selectal has changed to", this.value);
});

document.querySelector('#toggle').addEventListener('click', function() {
	mySelectal.toggleDropdown();
});