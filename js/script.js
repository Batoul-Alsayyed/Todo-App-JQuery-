$( document ).ready(function() {
    $(".add").click(function(){
        var inputval = $(".form-control").val();
        if (inputval != ''){
            $(".todo-list").append('<li><div class="left-cont"><input type="checkbox" id="check-1" name=""><label for="check-1"></label><span>Task-1</span></div><span class="remove"><i class="material-icons">delete</i></span></li>');
        }
    })
});