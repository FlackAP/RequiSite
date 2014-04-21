define(['underscore', 'jquery'], function() {

  	var showName = function(n) {
   		var temp = _.template("Hello <%= name %>");
   		$("body").append(temp({name: n}));
  	};

  	return {
    	showName: showName
  	};

 });	

