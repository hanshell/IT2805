
window.onload=function(){
	document.getElementById('addTodo').addEventListener("click", function() {
		addTask();
		document.getElementById("todo").value="";
	});
	document.getElementById('clearMarked').addEventListener("click", function(){
		clearTasks();
	});
}
function addTask(){
	listElement=document.createElement("li");
	ul_list=document.getElementById("task-list");
	field_value=document.getElementById("todo").value;

	task_checkbox=document.createElement("input");
	task_checkbox.type="checkbox";
	task_checkbox.name="tasks[]";
	task_checkbox.value=field_value;
	task_checkbox.id="tasks"

	listElement.innerHTML=field_value;
	listElement.appendChild(task_checkbox);
	ul_list.appendChild(listElement);
}
function clearTasks(){
	var list=document.getElementById("task-list");
	var tasks=list.getElementsByTagName("li");
	var checkboxStatus=document.getElementsByName("tasks[]");
	for (var i = 0; i < checkboxStatus.length; i++) {
		if(checkboxStatus[i].checked){
			list.removeChild(tasks[i]);
			clearTasks();
		}
	};
}