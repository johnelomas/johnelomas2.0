function addNewBadge() {
	var newItems = document.querySelectorAll("[data-modified-date]");
	var today = new Date();
	
	if (newItems.length > 0) {
		for(let i = 0; i < newItems.length; i++) {
			let itemDate = Date.parse(newItems[i].getAttribute("data-modified-date"));
			let seconds = Math.abs(today - itemDate) / 1000;
			let days = Math.floor(seconds / (60 * 60 * 24));			
			if (days <= 30) {doAddNewBadge(newItems[i]);}
		}
	}
}

function doAddNewBadge(nodeSource) {
	var newElement = document.createElement("span");
	newElement.innerHTML = "NEW";
	newElement.className += "badge badge-success";
	nodeSource.appendChild(newElement);;
}