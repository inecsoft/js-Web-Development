// var json_data = [
//     {
//         'userid': 1,
//         'id': 1,
//         'title': 'delectu aut autem.',
//         'completed': false
//     },
//     {
//         'userid': 1,
//         'id': 2,
//         'title': 'laboro aut autem.',
//         'completed': false
//     },
//     {
//         'userid': 1,
//         'id': 3,
//         'title': 'start mesing aut autem.',
//         'completed': false
//     },
//     {
//         'userid': 1,
//         'id': 4,
//         'title': 'what that hell.',
//         'completed': false
//     },
//     {
//         'userid': 1,
//         'id': 5,
//         'title': 'salseando el find the semana.',
//         'completed': false
//     },
//     {
//         'userid': 1,
//         'id': 6,
//         'title': 'creativity is what matters.',
//         'completed': false
//     },
//     {
//         'userid': 1,
//         'id': 7,
//         'title': 'I am invensible!',
//         'completed': false
//     },
//     {
//         'userid': 1,
//         'id': 8,
//         'title': 'walking on the street.',
//         'completed': false
//     },
//     {
//         'userid': 1,
//         'id': 9,
//         'title': 'working hard to see the long term venefit.',
//         'completed': false
//     },

// ];

var json_data = JSON.parse( localStorage.getItem('json_data'));
var myList = document.getElementById("todo-list");

if (json_data) {
    json_data.forEach(element => {
        newTodo(element.title);
    });
}


registerEventListeners();
function  registerEventListeners () {
    var closeButtons = document.getElementsByClassName("delete");
    for ( var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', deleteTodo, false);
    }  
}

function deleteTodo() {
    var li = this.parentElement;
    myList.removeChild(li);
}

function newTodo() {
    var inputVal = document.getElementById("todoTitle").ariaValueMax;
    var listItem = document.createElement("li");
    listItem.appendChild(
        document.createTextNode(inputVal)
    )
    var deleteLink = document.createElement("a");

    deleteLink.href = "#";
    deleteLink.className = "btn btn-sm btn-danger m-1 delete";
    deleteLink.appendChild(
        document.createTextNode("Delete")
    );
    listItem.appendChild(deleteLink);
    myList.appendChild(listItem);
    registerEventListeners();
    console.log("new todo added");
    console.log(listItem);
    
}

function storeTodoLocal(todoTitle) {
    // retrive and parse existing json form localstorage
    var json_temp = JSON.parse( localStorage.getItem('json_data'));
    if (!json_temp) {
        json_temp = [];
    }
    // add new todo object to Json
    json_temp.push({
        "title": todoTitle,
        "completed": false
    });
    //log updated json to console
    console.log(json_temp);
    //stringigy update json and store back in localStorage
    localStorage.setItem('json_data',
    JSON.stringigy(json_temp));
}