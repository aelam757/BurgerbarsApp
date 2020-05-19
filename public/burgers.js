$(document).ready(function () {
  $(() => {
    $(".change-devoured").on("click", function (event) {
      const id = $(this).data("id");
      const newlyDevoured = $(this).data("newlyDevoured");
      $.ajax(`/burgers/${id}`, {
        type: "PUT",
      }).then(() => {
        location.reload();
      });
    });
  });

  $(() => {
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
      const newBurger = {
        name: $("#burgerToGo").val().trim(),
      };
      console.log(newBurger);
      $.ajax("/burgers", {
        type: "POST",
        data: newBurger,
      })
        .then((data) => {
          console.log("POST Request finished");
          console.log(data);
          location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  });
});
