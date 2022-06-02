$(document).ready(function () {
  let arrayOfTodos = [];

  //Add todo
  $(".add").click(function () {
    if ($(".form-control").val() !== "") {
      addTodoToArray($(".form-control").val());
      //removing text after we are done writing
      $(".form-control").val("");
    }
  });
  function addTodoToArray(todotext) {
    const todo = {
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
    });
  }
  function addDataToLocalStorage(arrayOfTodos){
      //
  }
});
