exports.handlers = {
	newDoclet : function(e){
		var types = ["Array", "string"];
		var links = [
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
		];
		var names;
		var newNames;
		var ind;

		//console.log(e.doclet.params);
		if(typeof e.doclet.params !== 'undefined'){
			for(var i = 0, l = e.doclet.params.length; i < l; i++){
				names = e.doclet.params[i].type.names;
				newNames = [];
				for(var y = 0, z = names.length; y < z; y++){
					ind = types.indexOf(names[y]);
					if(~ind){
						console.log(names[y]);
						newNames.push('<a href="' + links[ind] + '"">' + names[y] + '</a>');
					}
					else{
						newNames.push(names[y]);
					}
				}

				e.doclet.params[i].type = newNames;
			}
		}
	}
}