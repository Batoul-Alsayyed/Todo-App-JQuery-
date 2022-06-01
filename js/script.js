$(document).ready(function () {
  var count = 0;
  $(".add").click(function () {
    var inputval = $(".form-control").val();
    if (inputval != "") {
      count++;
      $(".todo-list").append(
        '<li><div class="left-cont"><input type="checkbox" id="check-' +
          count +
          '" name=""><label for="check-' +
          count +
          '" ></label><span>' +
          inputval +
          '</span></div><span class="remove"><i class="material-icons">delete</i></span></li>'
      );
    }
    //removing text after we are done writing
    $(".form-control").val("");
  });
  $(document).on("change", 'input[type="checkbox"]', function () {
    if ($(this).is(":checked")) {
      $(this).closest("li").children(".remove").addClass("active");
    } else {
      $(this).closest("li").children(".remove").removeClass("active");
    }
  });
  $(document).on("click", ".remove", function () {
    $(this).parent().remove();
  });

  class Todo {
    constructor(id, title, description, point, is_done, created_at) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.point = point;
      this.is_done = is_done;
      this.created_at = created_at;
    }
  }

  const Todo1 = new Todo(
    "0",
    "Task 1",
    "Solving the assignment",
    5,
    false,
    "1PM"
  );

  console.log(Todo1.id);
});
