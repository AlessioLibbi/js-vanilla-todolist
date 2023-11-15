const form = document.querySelector('.form');



form.addEventListener('submit', e => {
    e.preventDefault(); //previene l'azione submit de default
    // console.log(e);

    var newTodo = document.getElementById('todo').value;
    var todoList = document.getElementById('todo-listed');
   
   console.log(newTodo);
   if(newTodo !== "") {
    todoList.innerHTML += `<li class="neutral-todo my-2 task"><span class="todo-text">${newTodo}</span> <i  class='fa-regular fa-trash-can delete toRemove'></i><span><i class="fa-solid fa-check toCheck"</i></span></li>`;
    count();
   }
});

// document.createElement
//appendChild
window.addEventListener('click', function(event){
	if(event.target.classList.contains('toCheck')){
		event.target.parentNode.parentNode.classList.add('checked');
        count()
	}	
    if(event.target.classList.contains('toRemove')){
		event.target.parentNode.outerHTML = "";
        count()
	}	
});

function count() {
    var toCheckCounted = document.getElementsByClassName('task');
    var totalTasks = toCheckCounted.length;

    var checkedTasks = document.getElementsByClassName('checked').length;

    document.getElementById('completed-tasks').innerHTML= checkedTasks;
    document.getElementById('total-tasks').innerHTML= totalTasks;

}


