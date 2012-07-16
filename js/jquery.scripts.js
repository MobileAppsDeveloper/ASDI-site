

$(function() { // bof document ready fn, short code for: $(document).ready(function() {

	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There are no Items in Local Storage so default data was added.");
			autoFillData();
		}




		//Write Data from Local Storage to the Browser

		//var makeDiv = document.createElement('div');
		var makeDiv = $("div");

		makeDiv.setAttribute("id", "items");
		makeDiv.setAttribute("class", "content-primary");
		var makeList = document.createElement('ul'); // main unorder list



		makeList.setAttribute("data-role", "listview");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		displayMyData('items'); //Safety to make sure it displays

		document.getElementById('myjSonList').appendChild(makeDiv);
		displayMyData('items'); //Safety to make sure it displays


		for (var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li'); // upper
			var linksLi = document.createElement('div'); // div to contain the edit and delete buttons
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert the string from Local Storage value back to an object by using JSON.parse
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('div'); // inner unorder list
			makeli.appendChild(makeSubList);
			getImage(obj.group[1], makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('p'); // inner bullet
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi); // Create our edit and delete buttons or links for each item in local storage.
		}
	}

});  // eof document ready fn

