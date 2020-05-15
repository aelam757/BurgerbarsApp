$(document).ready(function() {

    $(() => {
      $(".change-devoured").on("click", function (event) {
        const id = $(this).data("id");
        const newlyDevoured = $(this).data("newlyDevoured");
        $.ajax(`/api/burger/${id}`, {
          type: "PUT",
        }).then(
          () => {
            location.reload();
          }
        );
      });
    });
  
      $(".create-form").on("submit", function (event) {
          event.preventDefault();
          const newBurger = {
            name: $("#ca").val().trim()
          };
          $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
          }).then(
            (data) => {
              console.log("POST Request finished");
              console.log(data);
              location.reload();
            }
          );
        });
  
  });