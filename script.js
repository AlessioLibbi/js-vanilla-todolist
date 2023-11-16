const form = document.querySelector('.form');



form.addEventListener('submit', e => {
    e.preventDefault(); //previene l'azione submit de default
    // console.log(e);

    var newTodo = document.getElementById('todo').value;
    var todoList = document.getElementById('todo-listed');
    var dateGetted = document.getElementById('todo-date').value;
    var dataFormed = new Date(dateGetted);
    var dataAmerican = dataFormed.toLocaleString('en-Us', {
        timeZone: 'America/New_York'
    })
    console.log(dataAmerican)
   
   
    getDate()
    console.log(newTodo);

    if (newTodo !== "") {
       
            if (newTodo.includes("urgente") || newTodo.includes("URGENTE")) {

                todoList.innerHTML += `<li class="urgent-todo my-2 task"><p>Aggiunto il ${dataAmerican}</p><span class="todo-text">${newTodo}</span> <i  class='fa-regular fa-trash-can delete toRemove'></i><span><i class="fa-solid fa-check toCheck"</i></span></li>`;
                count();
                svuota()
            } else {
                todoList.innerHTML += `<li class="neutral-todo my-2 task"><p id="data-eng">Aggiunto il ${dataAmerican}</p><span class="todo-text">${newTodo}</span> <i  class='fa-regular fa-trash-can delete toRemove'></i><span><i class="fa-solid fa-check toCheck"</i></span></li>`;
                count();
                svuota()
            }
        



    }


});

// document.createElement
//appendChild
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('toCheck')) {
        var d = new Date();
        var localTime = d.getTime();
        var localOffset = d.getTimezoneOffset() * 60000;
        var utc = localTime + localOffset;
        var offset = -5; // UTC of USA Eastern Time Zone is -05.00
        var usa = utc + (3600000 * offset);
        var usaTimeNow = new Date(usa).toLocaleString();
        console.log(usaTimeNow);
    
        event.target.parentNode.parentNode.classList.add('checked');
        count()
        if(event.target.parentNode.parentNode.classList.contains('checked')) {
            event.target.parentNode.parentNode.innerHTML += `completato alle ${usaTimeNow}`
        }
    }
    if (event.target.classList.contains('toRemove')) {
        event.target.parentNode.outerHTML = "";
        count()
    }
});

function count() {
    var toCheckCounted = document.getElementsByClassName('task');
    var totalTasks = toCheckCounted.length;

    var checkedTasks = document.getElementsByClassName('checked').length;

    document.getElementById('completed-tasks').innerHTML = checkedTasks;
    document.getElementById('total-tasks').innerHTML = totalTasks;

}
function svuota() {
    document.getElementById('todo').value = "";
}

function validate(newTodo) {
    var max_chars = 20;
    var valMessage = document.getElementById('validate-message');
    if (newTodo.value.length < 3 || newTodo.value.length > max_chars) {

        newTodo.value = newTodo.value.substr(0, max_chars);
        valMessage.innerHTML = "Inserisci un todo con almeno 3 caratteri e meno di 20"
        return false
    } else {
        valMessage.innerHTML = "";
        return true
    }

}

function getDate() {
  
}

