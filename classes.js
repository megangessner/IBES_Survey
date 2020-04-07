class Step {
	constructor(head, body, button, loaderFunc, stepName, stepNum) {
		this.head = head; // this is the title
		this.body = body; // this is information below title
		this.button = button; // button text
		this.name = stepName; // name of step
		this.num = stepNum; // step number
		this.loadTask = loaderFunc; // function that loads the step
		this.completed = false;
	}

	loadStepText() {
		$("#head").text(this.head);
		$("#body").html(this.body);
		$("#button").text(this.button);

		$("#informationPopup").show();

		return;
	}
}

class PyramidMap {
	constructor(numCols, rowArray, headerArray) {

		var mapContainer = $("<div></div>").css({'position':'relative'});
		var map = $("<div></div>").css({'display':'flex','justify-content':'center','position':'relative'});
		$(mapContainer).append(map);


		for (var i=0; i<numCols; i++) {
			var col = $("<div></div>").css({'display':'flex','flex-direction':'column'});
			var header = $("<h3></h3>").text(headerArray[i]).css({'text-align':'center'});
			$(map).append(col);
			$(col).append(header);
			for (var j=0; j<rowArray[i]; j++){
				var cell = $("<div></div>").css({'height':75, 'width':100, 'border':'1px black solid'}).attr({"class":"droptarget"});
				$(col).append(cell);
			}
		}

		this.map = mapContainer;
	}
}