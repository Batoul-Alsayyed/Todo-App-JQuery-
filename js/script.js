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
  
    
});
