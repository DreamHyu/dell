var GroupFactory = (function(){
	
	var orders = [
		'A','B','C','D','E','F','G','H','I','J','K','L','M','N'
	];
	
	function generateRandomGroups(groupCount,nameCount,histoCount){
		console.log("generateRandomGroups:"+groupCount+","+nameCount+","+histoCount)
		var groups = [],i;
		for(i = 0; i < groupCount; i++){
			groups[i] = {
				groupname : '小组' + orders[Math.floor(Math.random()*orders.length)],
				names: generateRandomNames(nameCount),
				histos: generateRandomHistos(histoCount,nameCount)
			}
		}
		return groups
	}
	function generateRandomNames(count){
		var names = [],j;
		for(j = 0; j < count; j++){
			names[j] = '客服' + orders[Math.floor(Math.random()*orders.length)]
		}
		return names;
	}
	function generateRandomHistos(count,nameCount){
		var histos = [],k;
		for(k = 0; k < count; k++){
			histos[k] = {
				type: '类型' + orders[Math.floor(Math.random()*orders.length)],
				values: generateRandomValues(nameCount)
			}
		}
		return histos;
	}
	function generateRandomValues(count){
		var values = [],m;
		for(m = 0; m < count; m++){
			values[m] = Math.floor(Math.random()*100)
		}
		return values;
	}
	
	return {
	    get: generateRandomGroups
	}
})();
