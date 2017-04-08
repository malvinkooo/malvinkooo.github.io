var tasks = [];
if(localStorage.app) {
	tasks = JSON.parse(localStorage.app);
	tasks.forEach(function(item){
		var li = $('#item-template').html().replace('task-text', item.title);
		var $li = $(li);

		if(item.isDone) {
			$li.addClass('task-done');
		}
		$('ul').append($li);
	});
}
$('#add').click(function() {
	var task = $('#new').val();
	var li = $('#item-template').html().replace('task-text', task);

	tasks.push({
		title: task,
		isDone: false
	});
	$('ul').append(li);

	localStorage['app'] = JSON.stringify(tasks);
});

$('ul').on('click', '.remove', function(e){
	e.preventDefault();

	var index = $(this).parent().index();
	tasks.splice(index, 1);
	$(this).parent().remove();


	localStorage['app'] = JSON.stringify(tasks);
	
});

$('ul').on('click', '.done', function(e){
	e.preventDefault();

	$(this).parent().toggleClass('task-done');
	var index = $(this).parent().index();
	tasks[index].isDone = !tasks[index].isDone;

	localStorage['app'] = JSON.stringify(tasks);
});