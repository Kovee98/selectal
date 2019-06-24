var mySelectal = new Selectal('#my-select');

var hoverZone = document.querySelector('#first');
hoverZone.addEventListener('mouseover', function() {
	mySelectal.toggleDropdown();
});