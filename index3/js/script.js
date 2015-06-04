window.onload = function() {
	Parse.initialize("W3pQLOnqb2KcacPFZTs1jrzD1AQ9B666KyYpTSy6", "EzIT9bl1K84HWWMsTBByFXICbqRNS4920HBCDADB");
	var description ="";
	var descrip = $("#descriptionText").offset().descrip;
	var nameOfCusNow,bodyDesc,nameCus,compName,seedm,rank,status,city,address,number,numofemp = "";

	$("#check-analytics-cont").click(function(){
		$("#inputAmt").css("display","inline");
	});

	$("#buttonF").click(function(){
		recordIn();
	 	function recordIn(){
			var userInfo = Parse.Object.extend('req');
			var parseInfo = new userInfo();
			var amount = $("#inputF").val();
			parseInfo.set('funding', amount);
	        parseInfo.set('name',nameOfCusNow);
			parseInfo.save().then(
				function(object) {
					console.log("Success; made object ", object.id);
					alert("Request sent");
					$("#inputAmt").css("display","none");
				},
				function(err) { 
					console.log("FAIL");
					console.log(err);
				}
			);
		}
	});
	function updatePage(nameOfCusNow){
		var i = 0;
		var parseInfo = new Parse.Query('customer');
		parseInfo.equalTo("name", nameOfCusNow);
		parseInfo.find({
		  success: function(results) {
		  	for(i = 0; i < results.length; i++){
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
		updatePage(nameOfCusNow);
	});

	$("#ico-52").click(function(){
		$("#search-bar").focus();
	});

	function puteverythingin(bodyDesc,nameCus,compName,seedm,rank,status,city,address,number,numofemp) {
		$("#nameHolder").text("Hello, "+nameCus+"!");
		$("#compName").text(compName);
		$("#rank").text(rank);
		$("#numOfEmploees").text("Number of Employees: " + numofemp);
		$("#address").text(address + " ," + city+" " + number);
		$("#seedMM").text("Your current seed funding is: " + seedm);
	}

	var iname,money ="";

	$("#ico-32").click(function(){
		var rando = Math.floor((Math.random() * 20) + 1);
		var numOf = 50- rando;
		$("#content-body").append("<div id='vcTitle'>List of VCs and their funding:</div>");
		$("#content-body").append("<div id='vcNum1'>"+numOf +" VCs are funding you.</div>");

		// console.log("dfasdfasdf");
		hello();
		function hello(){
			// console.log("2");
			var i = 0;
			var parseInfo = new Parse.Query('vc');
			// console.log("3");
			parseInfo.find({
			  success: function(results) {
			  	for(i = rando; i < 50; i++){
				  	iname = results[i].get('iname');
				  	money = results[i].get('money');
				  	appendVC(iname,money);
				  	console.log(iname);
				}
			  },
			  error: function(error) {
			    alert("Error: " + error.code + " " + error.message);
			  }
			});
		};
	});
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