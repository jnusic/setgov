window.addEventListener('load', function () {

		var ctx = document.getElementById('clients').getContext('2d');


	var XAxisDates = [];
	var rubioValue = [];
	var murphyValue = [];
	var undecidedValue = [];

	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange=function() {
	    if (this.readyState == 4 && this.status == 200) {
	   	  var data = this.responseText
	   	  //console.log(data);
		  var jsonResponse = JSON.parse(data);
		  
		  for (var i = 99; i > 0; i--) {
		  	XAxisDates[i] = jsonResponse.estimates_by_date[i].date;
		  	rubioValue[i] = jsonResponse.estimates_by_date[i].estimates[0].value;
		  	murphyValue[i] = jsonResponse.estimates_by_date[i].estimates[1].value;
		  	undecidedValue[i] = jsonResponse.estimates_by_date[i].estimates[2].value;
		  };

	    }
	  };
	  xhttp.open("GET","http://elections.huffingtonpost.com/pollster/api/charts/2016-florida-senate-rubio-vs-murphy.json", true);
	  xhttp.send();

	console.log(XAxisDates);
	var fixedAxis = XAxisDates.reverse;
	console.log(XAxisDates.reverse().reverse());
	console.log(rubioValue);
	console.log(murphyValue);

	var testArr = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	console.log(testArr);

	var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: XAxisDates,
	    datasets: [{
	      label: 'Rubio',
	      data: rubioValue
	    }, {
	      label: 'Murphy',
	      data: murphyValue
	    }, {
	    	label: 'Undecided',
	    	data: undecidedValue
	    }]
	  }
	});

	var switch_color = document.getElementById('candidate_switch').className;
	var color;
	var colorHex;
	if (switch_color=="icon_container left red") {
			color = "red";
			colorHex = "#F44336";
	} else {
			color = "blue";
			colorHex = "#1E88E5";
	};

	var seg2 = document.getElementById('seg2').style.borderColor = colorHex;
	var selectedsSegment = document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;


    var segmentArray = document.getElementsByClassName('segment');
    var arr = [].slice.call(segmentArray);
	
	for (var i = 0; i < segmentArray.length; i++) {
		arr[i].onclick = segmentedLogic;
	};

	var candidate_switch = document.getElementById('candidate_switch');
	candidate_switch.onclick = candidateSwitchLogic;






	function candidateSwitchLogic(element) {
		var currentColor = element.srcElement.className;
		console.log(currentColor);

		var switch_color = document.getElementById('candidate_switch').className;
		var color;
		var colorHexBlue = "#1E88E5";
		var colorHexRed = "#F44336";

		if (currentColor == "icon_container left red") {
			candidate_switch.className = "icon_container left blue";
			document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHexBlue;
			document.getElementById('seg2').style.borderColor = "#1E88E5";
			document.getElementsByClassName('top_body red')[0].className = "top_body blue";
			document.getElementsByClassName('icon_container right red')[0].className = "icon_container right blue";
			document.getElementsByClassName('icon_container right red')[0].className = "icon_container right blue";
			document.getElementsByClassName('segment_container red')[0].className = "segment_container blue";
			document.getElementsByClassName('segment_controller red')[0].className = "segment_controller blue";
			document.getElementsByClassName('segment_title red')[0].className = "segment_title blue";
			document.getElementsByClassName('segment_body red')[0].className = "segment_body blue";
		} else {
			candidate_switch.className = "icon_container left red";
			document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHexRed;
			document.getElementById('seg2').style.borderColor = "#F44336";
			document.getElementsByClassName('top_body blue')[0].className = "top_body red";
			document.getElementsByClassName('icon_container right blue')[0].className = "icon_container right red";
			document.getElementsByClassName('icon_container right blue')[0].className = "icon_container right red";
			document.getElementsByClassName('segment_container blue')[0].className = "segment_container red";
			document.getElementsByClassName('segment_controller blue')[0].className = "segment_controller red";
			document.getElementsByClassName('segment_title blue')[0].className = "segment_title red";
			document.getElementsByClassName('segment_body blue')[0].className = "segment_body red";

		}

		console.log(candidate_switch.className);
	};







	function segmentedLogic(element) {
		var clickedId = element.srcElement.id;
		var switch_color = document.getElementById('candidate_switch').className;
		var color;
		var colorHex;
		if (switch_color=="icon_container left red") {
			color = "red";
			colorHex = "#F44336";
		} else {
			color = "blue";
			colorHex = "#1E88E5";
		}

		if (clickedId == "seg3") {
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = " ";
			document.getElementById('seg1').className = "segment";
			document.getElementById('seg2').className = "segment";
			document.getElementById('seg1').style.backgroundColor = "initial";
			document.getElementById('seg2').style.backgroundColor = "initial";
			element.srcElement.className = "segment default";

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "Election Platform"
			document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;
		};

		if (clickedId == "seg2") {
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = " ";
			document.getElementById('seg1').className = "segment";
			document.getElementById('seg3').className = "segment";
			document.getElementById('seg1').style.backgroundColor = "initial";
			document.getElementById('seg3').style.backgroundColor = "initial";
			element.srcElement.className = "segment default";

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "General Election Info."
			document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;
		};

		if (clickedId == "seg1") {
			document.getElementsByClassName("segment_icon fa fa-money fa-lg")[0].id = "selected";
			document.getElementsByClassName("segment_icon fa fa-list fa-lg")[0].id = " ";
			document.getElementsByClassName("segment_icon fa fa-info fa-lg")[0].id = " ";
			document.getElementById('seg2').className = "segment";
			document.getElementById('seg3').className = "segment";
			document.getElementById('seg2').style.backgroundColor = "initial";
			document.getElementById('seg3').style.backgroundColor = "initial";
			element.srcElement.className = "segment default";

			document.getElementsByClassName("segment_title_text")[0].innerHTML = "Latest Live Poll"
			document.getElementsByClassName('segment default')[0].style.backgroundColor = colorHex;
		}; 
  	}
})








