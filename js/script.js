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
    
});
