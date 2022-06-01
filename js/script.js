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
    constructor(description, point, is_done) {
      this.id = Math.floor(Math.random()*1000);
      this.title = "---Task---";
      this.description = description;
      this.point = point;
      this.is_done = is_done;
      var d = new Date();
      this.timeCreatedAt= "";
      this.timeCreatedAt+=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();   
    }
  }

  const Todo1 = new Todo(
    "Task 1",
    "Solving the assignment",
    5,
    false
  );
  console.log('id=',Todo1.id);
  console.log('title:',Todo1.title);
  console.log('description: ',Todo1.description);
  console.log('point',Todo1.point);
  console.log('isDone : ',Todo1.is_done);
  console.log('Time create at: ',Todo1.timeCreatedAt);

});
