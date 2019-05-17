// Get references to page elements
// var $exerciseText = $("#exercise-text");
// var $exerciseDescription = $("#exercise-description");
var $submitBtn = $("#log-completed-btn");

// var $set1 = $("#set-1");
// var $set2 = $("#set-2");
// var $set3 = $("#set-3");
// var $set4 = $("#set-4");
// var $set5 = $("#set-5");
var $exerciseList = $("#exercise-list");

var currentDateTime = "";

function timeStamp() {
  // currentDateTime = ""; // clear variable
  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1 // January is 0!
  var year = currentDate.getFullYear()
  var time = currentDate.toLocaleTimeString().slice(0,8)
  currentDateTime = (year + "-" + month + "-" + day + " " + time)
};

// Keep track of count in order to select exercise ID!
var exercise_id_count = 0;
var exercise_object_count = 1;
// var exercise_id_count = "";
// var setExerciseCount = function(workoutType){
//   if (workoutType === "Upper Body") {
//     exercise_id_count = 1;
//   }
//   else if (workoutType === "Lower Body") {
//     exercise_id_count = 6;
//   }
//   else {
//     exercise_id_count = 11;
//   }
// }

var exerciseObject1 = { 
  // exercise_name: null,
  user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false, createdAt: null, updatedAt: null
}
var exerciseObject2 = { 
  // exercise_name: null,
  user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
}
var exerciseObject3 = { 
  // exercise_name: null,
  user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
}
var exerciseObject4 = { 
  // exercise_name: null,
  user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
}
var exerciseObject5 = { 
  // exercise_name: null,
  user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
}

// The API object contains methods for each kind of request we'll make
var API = {
  saveExercise: function (exercise) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/exercises/completedworkout", // change from "api/exercises"
      data: JSON.stringify(exercise)
    });
  },
  getExercises: function () {
    return $.ajax({
      url: "api/exercises",
      type: "GET"
    });
  }
};

// handleFormSubmit is called whenever we submit a new workout routine
// Save the new workout routine to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();
  console.log("Trying to submit the completed workout to database!");

  // if (!(workoutRoutine.text && workoutRoutine.description)) {
  //   alert("You must enter an workout routine text and description!");
  //   return;
  // }

  API.saveExercise(exerciseObject1).then(function () {
    // refreshExercises();
  });
  // API.saveExercise(exerciseObject2).then(function () {});
  // API.saveExercise(exerciseObject3).then(function () {});
  // API.saveExercise(exerciseObject4).then(function () {});
  // API.saveExercise(exerciseObject5).then(function () {});
  // $exerciseText.val("");
  // $exerciseDescription.val("");
};

var displayExercise = function (workoutType) {
  $("#log-completed-btn").show();
  exercise_id_count = 0; // reset count so can update if change workoutType
  API.getExercises().then(function (data) {
    
    data = data.filter(function (e) {
      return e.workout_type === workoutType;
    });
    // console.log(data);
    timeStamp();

      var $exercises = data.map(function (exercise) {
      
      exerciseObject=['exerciseObject' + exercise_object_count];
      // exerciseObject.exercise_name = data[exercise_id_count].exercise_name;
      exerciseObject.user_id = 1;
      exerciseObject.date_completed = currentDateTime;
      exerciseObject.exercise_id = data[exercise_id_count].id; // id is primary key for exercise_template and foreign key for exercise_id in history table 
      exerciseObject.weight = data[exercise_id_count].weight;
      exerciseObject.repetitions = data[exercise_id_count].repetitions;
      exerciseObject.sets_1 = false;
      exerciseObject.sets_2 = false;
      exerciseObject.sets_3 = false;
      exerciseObject.sets_4 = false;
      exerciseObject.sets_5 = false;
      exerciseObject.createdAt = "2019-05-16 01:00:00";
      exerciseObject.updatedAt = "2019-05-16 01:00:00";
      
      console.log("----------------------");
      // console.log("Exercise Name: " + exerciseObject.exercise_name);
      console.log("User ID: " + exerciseObject.user_id);
      console.log("Date completed: " + exerciseObject.date_completed);
      console.log("Exercise ID: " + exerciseObject.exercise_id);
      console.log("Weight: " + exerciseObject.weight);
      console.log("Reps: " + exerciseObject.repetitions);
      console.log("Set #1: " + exerciseObject.sets_1);
      console.log("Set #2: " + exerciseObject.sets_2);
      console.log("Set #3: " + exerciseObject.sets_3);
      console.log("Set #4: " + exerciseObject.sets_4);
      console.log("Set #5: " + exerciseObject.sets_5);

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
        // .on("click", function(){
        //   $(this).toggleClass("clickedBtn");
        //   $(this).val = !$(this).val;
        //   console.log(this.value);
        // });
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

      // console.log(exercise_id_count);
      // exercise_id_count ++; // increase exercise count to track next exercise that is looped/mapped
      exercise_id_count++;

      return $li;
    });

    $exerciseList.empty();
    $exerciseList.append($exercises);
  });
};

$("#log-completed-btn").hide();

$(document).ready(function(){
  $("#upper_body").click(function(){
    displayExercise("Upper Body");
  });
  $("#lower_body").click(function(){
    displayExercise("Lower Body");
  });
  $("#core_cardio").click(function(){
    displayExercise("Core/Cardio");
  });
});

// Add event listeners to the submit completed workout
$submitBtn.on("click", handleFormSubmit);