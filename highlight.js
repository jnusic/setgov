
	var body = document.getElementsByTagName('p');

     var keyItems = [ 
        	"campaign",
        	"finance",
        	"campaign",
        	"financing",
        	"Campaign",
        	"donation",
        	"Finance",
        	"donation",
        	"donations",
        	"food",
        	"water",
        	"Water",
        	'rain',
        	'Rain',
        	'state',
        	'parents',
        	'local',
        	'school',
        	'board',
        	'Education',
        	'state',
        	'green',
        	'Everglades',
        	'Florida',
        	'climate',
        	'criminal',
        	'justice',
        	'justices',
        	'Criminal',
        	'justices',
        	'jail',
        	'time',
        	'immigration',
        	'reform',
        	'Immigration',
        	'reform',
        	'immigrants',
        	'illegal',
        	'border',
        	'wall',
        	'lgbt',
        	'LGBT',
        	'rights',
        	'equality',
        	'voting',
        	'process',
        	'voting',
        	'rights',
        	'delegates',
        	'women',
        	'Women',
        	'equality',
        	'senior',
        	'citizens',
        	'Medicare',
        	'Obamacare',
        	'Social',
        	'Security',
        	'national'
    ]

    var length = body.length;

    for(var t=0;t<length ; t++){
        var currentDiv = body[t].innerHTML;
        var currentText = body[t].innerText;

         for(var z=0;z<keyItems.length;z++){

            if( currentText.search(keyItems[z]) > 0){
                currentDiv = currentDiv.replace(new RegExp(keyItems[z],'g'), `<span style="background-color:#313542; color: white" >`+keyItems[z]+`</span>`);
                body[t].innerHTML = currentDiv
            }
        }
    }







     