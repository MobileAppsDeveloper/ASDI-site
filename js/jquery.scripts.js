
$(function(){
	//Create select field element and populate with options
	function makeCats() {
		var formTag = document.getElementsByTagName("form"),  //formTag is an array of all the form tags.
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for (var i=0, j=mediaGroups.length; i<j; i++) {
			var makeOption = document.createElement('option');
			var optText = mediaGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
});