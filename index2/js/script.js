window.onload = function() {
	Parse.initialize("W3pQLOnqb2KcacPFZTs1jrzD1AQ9B666KyYpTSy6", "EzIT9bl1K84HWWMsTBByFXICbqRNS4920HBCDADB");
	var description ="";
	var descrip = $("#descriptionText").offset().descrip;
	var nameOfCusNow,bodyDesc,nameCus,compName,seedm,rank,status,city,address,number,numofemp = "";
	function updatePage(nameOfCusNow){
		var rando = Math.floor((Math.random() * 10) + 1);
		var numOf = 30- rando;
		var i = 0;
		var parseInfo = new Parse.Query('customer');
		parseInfo.find({
		  success: function(results) {
		  	for(i = rando; i < 30; i++){
			  	description = results[i];
			  	bodyDesc = description.get('description');
			  	bodyDesc = $("#descriptionText").text(bodyDesc);
			  	bodyDesc = $("#descriptionText").offset().bodyDesc;
			  	scrolleft(bodyDesc);

			  	nameCus = results[i].get('name');
			  	compName = results[i].get('CompanyName');
			  	seedm = results[i].get('SeedM');
			  	rank = results[i].get('Rank');
			  	status = results[i].get('status');
			  	city = results[i].get('city');
			  	address = results[i].get('address');
			  	number = results[i].get('number');
			  	numofemp = results[i].get('numofemp');
			  	puteverythingin(bodyDesc,nameCus,compName,seedm,rank,status,city,address,number,numofemp);
			  }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	};
	function scrolleft(body){
		$("div#descriptionText").animate({right: '250px'},'slow');
	}

	$("#submitNow").click(function(){
		nameOfCusNow = $("#inputNameNow").val();
		$( "#enter-name" ).css( "display", "none" );
		console.log(nameOfCusNow);
		hello(nameOfCusNow);
		$("#nameHolder").text("Hello, "+nameOfCusNow+"! These are the list of start-ups are currently are invested in.");
		updatePage(nameOfCusNow);
	});

	$("#ico-52").click(function(){
		$("#search-bar").focus();
	});

	function puteverythingin(bodyDesc,nameCus,compName,seedm,rank,status,city,address,number,numofemp) {
		$("#content-body").append("<div class='compName'>"+compName+"</div>");
		$("#content-body").append("<div class='rank2'>"+rank+"</div>");
		$("#content-body").append("<div class='numOfEmploees'>Number of Employees: " + numofemp+"</div>");
		$("#content-body").append("<div class='address'>"+address + " ," + city+" " + number+"</div>");
		$("#content-body").append("<div class='seedMM'>Your current seed funding is: " + seedm+"</div>");
		$("#content-body").append("------------------------------------------------------------------------------------------------------------------------------");
	}

	var iname,money ="";
	var rando = Math.floor((Math.random() * 20) + 1);
	function hello(nameOfCusNow){
		// console.log("2");
		var i = 0;
		var parseInfo = new Parse.Query('vc');
		// console.log("3");
		parseInfo.equalTo("iname", nameOfCusNow);
		parseInfo.find({
		  success: function(results) {
		  	for(i = rando; i < 50; i++){
			  	iname = results[i].get('iname');
			  	
			}
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	};

	function appendVC(iname,money){
		$("#content-body").append("<div id='vcName1'>"+iname+" is funding you "+money+".");
	}

	$("#titleV").click(function(){
		$("div#descriptionText").animate({left: "+=500"}, 2000);
	});

	$("#fasdf").click(function(){
		var inputQuery = $("#search-bar").val();
		window.location.href = "http://www.bing.com/search?q="+inputQuery;
	});

};	

// var left = $('#coolDiv').offset().left;


// $("#coolDiv").css({left:left}).animate({"left":"0px"}, "slow");