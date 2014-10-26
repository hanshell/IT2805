
window.onload=function() {
	document.getElementById("sort-button-1").addEventListener("click", function(){
		sortByColumn(0);
	});
	document.getElementById("sort-button-2").addEventListener("click", function(){
		sortByColumn(1);
	});
	document.getElementById("sort-button-3").addEventListener("click", function(){
		sortByColumn(2);
	});
}
function sortByColumn(columnnr){
	allElements=document.getElementById('the-table-body');
	
	var rows=allElements.children;

	var data=[];

	for (var i = 0; i < rows.length; i++) {
		data.push(rows[i]);
	};
	while(allElements.firstChild){
		allElements.removeChild(allElements.firstChild);
	}

	column=[];
	for (var i = 0; i < data.length; i++) {
		var row=data[i].children;
		column.push(row[columnnr]);
	};
	columndata=convertToColumndata(column).sort();
	var sortedArray=[];
	
	for (var i = 0; i < data.length; i++) {
		var counter=0;
		while(sortedArray.length<5){
			if(data[counter].children[columnnr].innerHTML==columndata[i]){
				sortedArray.push(data[counter]);
				counter=0;
				break;
			}
			else{
				counter+=1;
			}
		}
	};
	for (var i = 0; i < sortedArray.length; i++) {
		allElements.appendChild(sortedArray[i]);
		console.log(sortedArray[i].innerHTML);
	};
}
function convertToColumndata(column){
	columndata=[];
	for (var i = 0; i < column.length; i++) {
		columndata.push(column[i].innerHTML);
	};
	return columndata;
}