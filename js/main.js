$(function(){
	 //localStorage.clear();
	var i = Number(localStorage.getItem('task-counter')) + 1;
	//var i = 1;
	var j, k, orderList;
	var $task = $("#taskName");
	var $taskList = $("#tasks");
	var order = [];
	orderList = localStorage.getItem('task-orders');

	if(!orderList){
		$("#noErrors").css("display","block");
	}


		// Load todo list

		orderList = orderList ? orderList.split(',') : [];
		for( j = 0, k = orderList.length; j < k; j++) {
			$taskList.append(
				"<li id='" + orderList[j] + "'>"
				+ "<a class='editable' data-split-theme='c'>"
				+ "<img src='t.png' alt='Task' class='ui-li-icon ui-li-thumb'>"
				+ localStorage.getItem(orderList[j])
				+ "</a> <a href='#' class='close' data-icon='delete' data-theme='c'>X</a></li>"
			);
		}
	// Add Task
	$("#addTask").live("tap", function() {
		if($task.val() != ""){
			localStorage.setItem("task-"+i, $task.val());
			localStorage.setItem("task-counter",i);
			$("#noErrors").css("display","none");
			$taskList.append(
				"<li id='task-" + i + "'>"
				+  "<a class='editable' data-split-theme='c'>"
				+  "<img src='t.png' alt='Task' class='ui-li-icon ui-li-thumb'>"
				+ localStorage.getItem("task-" + i)
				+ " </a><a href='#' data-icon='delete' class='close' data-theme='c'>x</a></li>"
			);
			$.mobile.changePage("#TaskView", { transition: "slidedown"});
			listTasks();
			$task.val("");

			i++
		} else {
			alert("please enter a task");
		}
		return false;
	});

	// Remove Task
	$("#tasks li a.close").live("tap", function() {
		//alert($(this).parent().attr("id"));
		localStorage.removeItem($(this).parent().attr("id"));
		 $(this).parent().slideUp('normal', function(){
				$(this).remove();
				listTasks();
			});

		return false;
	});

	function listTasks(){
		var $taskLi = $("#tasks li");
		order.length = 0;

		$taskLi.each(function(){
			var id = $(this).attr("id");
			order.push(id);
		});
		$('ul').listview('refresh');
		localStorage.setItem("task-orders", order.join(","));
	}
});