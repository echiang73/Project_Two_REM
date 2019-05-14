// Get references to page elements
var $exerciseText = $("#exercise-text");
var $exerciseDescription = $("#exercise-description");
var $submitBtn = $("#submit");
var $exerciseList = $("#exercise-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExercise: function(exercise) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/exercises",
      data: JSON.stringify(exercise)
    });
  },
  getExercises: function() {
    return $.ajax({
      url: "api/exercises",
      type: "GET"
    });
  },
  deleteExercise: function(id) {
    return $.ajax({
      url: "api/exercises/" + id,
      type: "DELETE"
    });
  }
};

// refreshExercises gets new exercises from the db and repopulates the list
var refreshExercises = function() {
  API.getExercises().then(function(data) {
    var $exercises = data.map(function(exercise) {
      var $a = $("<a>")
        .text(exercise.text)
        .attr("href", "/exercise/" + exercise.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": exercise.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exerciseList.empty();
    $exerciseList.append($exercises);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var exercise = {
    text: $exerciseText.val().trim(),
    description: $exerciseDescription.val().trim()
  };

  if (!(exercise.text && exercise.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExercise(exercise).then(function() {
    refreshExercises();
  });

  $exerciseText.val("");
  $exerciseDescription.val("");
};

// handleDeleteBtnClick is called when an exercise's delete button is clicked
// Remove the exercise from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExercise(idToDelete).then(function() {
    refreshExericess();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exerciseList.on("click", ".delete", handleDeleteBtnClick);

// $("upper_body").on("click", handleFormSubmit);

// $("#upper_body").click(function(e){
//   e.preventDefault();
//   alert("Upper!");
//   });
//   $("#lower_body").click(function(e){
//   e.preventDefault();
//   alert("Lower!");
//   });
//   $("#core_cardio").click(function(e){
//   e.preventDefault();
//   alert("Core!");
//   });