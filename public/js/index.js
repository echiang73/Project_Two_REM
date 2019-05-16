// Get references to page elements
// var $exerciseText = $("#exercise-text");
// var $exerciseDescription = $("#exercise-description");
// var $submitBtn = $("#submit");

var $set1 = $("#set-1");
var $set2 = $("#set-2");
var $set3 = $("#set-3");
var $set4 = $("#set-4");
var $set5 = $("#set-5");
var $exerciseList = $("#exercise-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExercise: function (exercise) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/exercises",
      data: JSON.stringify(exercise)
    });
  },
  getExercises: function () {
    return $.ajax({
      url: "api/exercises",
      type: "GET"
    });
  },
  deleteExercise: function (id) {
    return $.ajax({
      url: "api/exercises/" + id,
      type: "DELETE"
    });
  }
};

// refreshExercises gets new exercises from the db and repopulates the list
// var refreshExercises = function () {
//   API.getExercises().then(function (data) {
//     var $exercises = data.map(function (exercise) {
//       var $a = $("<a>")
//         .text(exercise.text)
//         .attr("href", "/exercise/" + exercise.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": exercise.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exerciseList.empty();
//     $exerciseList.append($exercises);
//   });
// };

// handleFormSubmit is called whenever we submit a new workout routine
// Save the new workout routine to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   for (i=0; i<5; i++){

  
//     var workoutRoutine = "";
//     workoutRoutine = {
//       user_id: 1,
//       exercise_id:
//       weight:
//       repetitions:
//       sets_1: $set1.val(),
//       sets_2: $set2.val(),
//       sets_3: $set3.val(),
//       sets_4: $set4.val(),
//       sets_5: $set5.val(),
//     };
//     API.saveExercise(workoutRoutine).then(function () {
//       // refreshExercises();
//     });
//   }

//   // if (!(workoutRoutine.text && workoutRoutine.description)) {
//   //   alert("You must enter an workout routine text and description!");
//   //   return;
//   // }

//   // API.saveExercise(workoutRoutine).then(function () {
//   //   // refreshExercises();
//   // });

//   // $exerciseText.val("");
//   // $exerciseDescription.val("");
// };

// handleDeleteBtnClick is called when an exercise's delete button is clicked
// Remove the exercise from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExercise(idToDelete).then(function () {
//     refreshExericess();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exerciseList.on("click", ".delete", handleDeleteBtnClick);


var displayUpperBody = function () {
  $("#log-completed-btn").show();
  API.getExercises().then(function (data) {
    // console.log(data);
    data = data.filter(function (e) {
      return e.workout_type === "Upper Body";
    });
    var $exercises = data.map(function (exercise) {
      var txt1 = $("<h3></h3>").text(exercise.exercise_name + " ")
        .attr("id", "description1");
      var txt2 = $("<p></p>").text("Weight: " + exercise.weight + ", ")
        .append("Reps: " + exercise.repetitions + ", ")
        .append("Sets: " + exercise.sets)
        .attr("id", "description2");

      var $d = $("<div>")
      .append('<img alt="exercise image" src="images/exercise-images/' + exercise.exer_img_url1 + '" id="image1" />')
      .append('<img alt="exercise image" src="images/exercise-images/' + exercise.exer_img_url2 + '" id="image2" />')
      .attr("id", "images1and2");

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": exercise.id
        })
        .append($d)
        .append(txt1, txt2);

      var $div2 = $("<div>")
        .addClass("completeSetBtns");

      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-1')
        .text("Set #1")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
          // console.log(this.value);
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-2')
        .text("Set #2")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-3')
        .text("Set #3")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-4')
        .text("Set #4")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-5')
        .text("Set #5")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);

      $li.append($div2);

      return $li;
    });

    $exerciseList.empty();
    $exerciseList.append($exercises);
  });
};

var displayLowerBody = function () {
  $("#log-completed-btn").show();
  API.getExercises().then(function (data) {
    data = data.filter(function (e) {
      return e.workout_type === "Lower Body";
    });
    var $exercises = data.map(function (exercise) {
      var txt1 = $("<h3></h3>").text(exercise.exercise_name + " ")
        .attr("id", "description1");
      var txt2 = $("<p></p>").text("Weight: " + exercise.weight + ", ")
        .append("Reps: " + exercise.repetitions + ", ")
        .append("Sets: " + exercise.sets)
        .attr("id", "description2");

      var $d = $("<div>")
      .append('<img alt="exercise image" src="images/exercise-images/' + exercise.exer_img_url1 + '" id="image1" />')
      .append('<img alt="exercise image" src="images/exercise-images/' + exercise.exer_img_url2 + '" id="image2" />')
      .attr("id", "images1and2");

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": exercise.id
        })
        .append($d)
        .append(txt1, txt2);

      var $div2 = $("<div>")
        .addClass("completeSetBtns");

      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-1')
        .text("Set #1")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-2')
        .text("Set #2")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-3')
        .text("Set #3")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-4')
        .text("Set #4")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-5')
        .text("Set #5")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);

      $li.append($div2);

      return $li;
    });

    $exerciseList.empty();
    $exerciseList.append($exercises);
  });
};

var displayCoreCardio = function () {
  $("#log-completed-btn").show();
  API.getExercises().then(function (data) {
    data = data.filter(function (e) {
      return e.workout_type === "Core/Cardio";
    });
    var $exercises = data.map(function (exercise) {
      var txt1 = $("<h3></h3>").text(exercise.exercise_name + " ")
        .attr("id", "description1");
      var txt2 = $("<p></p>").text("Weight: " + exercise.weight + ", ")
        .append("Reps: " + exercise.repetitions + ", ")
        .append("Sets: " + exercise.sets)
        .attr("id", "description2");

      var $d = $("<div>")
      .append('<img alt="exercise image" src="images/exercise-images/' + exercise.exer_img_url1 + '" id="image1" />')
      .append('<img alt="exercise image" src="images/exercise-images/' + exercise.exer_img_url2 + '" id="image2" />')
      .attr("id", "images1and2");

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": exercise.id
        })
        .append($d)
        .append(txt1, txt2);

      var $div2 = $("<div>")
        .addClass("completeSetBtns");

      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-1')
        .text("Set #1")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-2')
        .text("Set #2")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-3')
        .text("Set #3")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-4')
        .text("Set #4")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-5')
        .text("Set #5")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
        });
      $div2.append($button);

      $li.append($div2);

      return $li;
    });

    $exerciseList.empty();
    $exerciseList.append($exercises);
  });
};

$("#log-completed-btn").hide();

$("#upper_body").on("click", displayUpperBody);
$("#lower_body").on("click", displayLowerBody);
$("#core_cardio").on("click", displayCoreCardio);
