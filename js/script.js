$(document).ready(function () {
    var inputval = $(".form-control").val();
    let arrayOfTodos = [];
    $(".add").click(function () {
        var inputval = $(".form-control").val();
        if (inputval != "") {
            addTodoToArray(inputval);
                //removing text after we are done writing
                $(".form-control").val("");
        }
    });
    function addTodoToArray(todotext){
        const todo = {
            id: Math.floor(Math.random()*1000),
            title: "---Task---",
            description: todotext,
            isDone : false,
            point: 1,
            date : Date.now(),
        };

        //now pushing todo into the array of todos
        arrayOfTodos.push(todo);
        //now displaying the tasks
        displayTodos(arrayOfTodos);

    }
    
    function displayTodos(arrayOfTodos){
        //Emptying todo list ul
        $(".todo-list").innerHTML = "";
        //now looping over the array
        arrayOfTodos.forEach((todo) => {
         let div = document.createElement("div");
         div.className = "todo";
         div.appendChild(document.createTextNode(todo.description));
         
         //create delete button
         
         let span = document.createElement("span");
         span.className = "remove";
         span.append(document.createTextNode("Delete"));
         //Append Button to main div
         div.append(span);
         console.log(div);
        })
    } 
});
