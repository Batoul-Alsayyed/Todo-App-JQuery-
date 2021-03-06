  let arrayOfTodos = [];
  //check if there are todos in the local storage
  //if so load them
  //otherwise nothing isloaded
   if(localStorage.getItem("todos")){
       arrayOfTodos = JSON.parse(localStorage.getItem("todos"));
       //console.log('hell')
   }

   getDataFromLocalStorage();

  //Add todo
  $(".add").click(function () {
    if ($(".form-control").val() !== "") {
      addTodoToArray($(".form-control").val());
      //removing text after we are done writing
      $(".form-control").val("");
    }
  });

  //clicking on delete element
  $( ".todos").click(function( event ) {
    if(event.target.classList.contains("del")){
        //from local storage as well
        deleteTodo(event.target.parentElement.getAttribute("data-id"));
        event.target.parentElement.remove();
    }

    if(event.target.classList.contains("todo")) {
        //Toggle completed for the task 
        toggleStatusTodo(event.target.getAttribute("data-id"))
        // Toggle done class
        event.target.classList.toggle("done");
    }
  });
  
  function addTodoToArray(todotext) {
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: "---Task---",
      description: todotext,
      isDone: false,
      point: 1,
      date: Date.now(),
    };

    //now pushing todo into the array of todos
    arrayOfTodos.push(todo);
    //now displaying the tasks
    displayTodos(arrayOfTodos);
    //Add tasks to local storage
    addDataToLocalStorage(arrayOfTodos);
  }

  function displayTodos(arrayOfTodos) {
    //Emptying todo list div
    $(".todos").innerHTML = "";
    //now looping over the array
    arrayOfTodos.forEach((todo) => {
      //create main div
      let div = document.createElement("div");
      div.className = "todo";
      //check if task is done
      if (todo.isDone){
          div.className = "todo done";
      }
      div.setAttribute("data-id", todo.id);
      div.appendChild(document.createTextNode(todo.description));
      //create delete button
      let span = document.createElement("span");
      span.className = "del";
      span.appendChild(document.createTextNode("delete"));
      //append button to main div
      div.appendChild(span);
      //add todo div to main todos div 
      $(".todos").append(div);
      console.log(arrayOfTodos);
    });
  }
  function addDataToLocalStorage(arrayOfTodos){
      window.localStorage.setItem("todos",JSON.stringify(arrayOfTodos));
  }
  function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("todos");
    if (data){
        let todos = JSON.parse(data);
        //Adding todos that are in local storage
        displayTodos(todos);
    }
}

function deleteTodo(todoId){
    // for (var i = 0; i<arrayOfTodos.length; i++){
    //     console.log(`${arrayOfTodos[i].id} === ${todoId}`);
    // }
    arrayOfTodos = arrayOfTodos.filter((todo) => todo.id != todoId);
    addDataToLocalStorage(arrayOfTodos);
}

function toggleStatusTodo(todoId){
     for (var i = 0; i<arrayOfTodos.length; i++){
         if(arrayOfTodos[i].id === todoId){
             arrayOfTodos[i].isDone == false ?  (arrayOfTodos[i].isDone == true) : (arrayOfTodos[i].isDone == false); 
         }
     }
     addDataToLocalStorage(arrayOfTodos);

}
