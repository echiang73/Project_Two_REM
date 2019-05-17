// Get references to page elements
// var $exerciseText = $("#exercise-text");
// var $exerciseDescription = $("#exercise-description");
var $submitBtn = $("#log-completed-btn");

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

var passThis = [];

var data = [
  // { 
  //   // exercise_name: null,
  //   user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  //   sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
  // },{ 
  //   // exercise_name: null,
  //   user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  //   sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
  // },{ 
  //   // exercise_name: null,
  //   user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  //   sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
  // },{ 
  //   // exercise_name: null,
  //   user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  //   sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
  // },{ 
  //   // exercise_name: null,
  //   user_id: null, date_completed: null, exercise_id: null, weight: null, repetitions: null,
  //   sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
  // }
];

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
  console.log("HERE")
  console.log(passThis);
  API.saveExercise(passThis).then(function () {
    // refreshExercises();
  });
  // $exerciseText.val("");
  // $exerciseDescription.val("");
};

var displayExercise = function (workoutType) {
  $("#log-completed-btn").show();
  // window.location.href='#nav-analytics'; 
  exercise_id_count = 0; // reset count so can update if change workoutType
  API.getExercises().then(function (results) {
    
    data = results.filter(function (e) {
      return e.workout_type === workoutType;
    });
    timeStamp();
    passThis = data.map(function (e) {
      return { 
          user_id: 1, date_completed: currentDateTime, ExerciseTemplateId: e.id,
          sets_1: false, sets_2: false, sets_3: false, sets_4: false, sets_5: false
      }
    });
    console.log(passThis);

      var $exercises = data.map(function (exercise) {
      
      // data=['data' + exercise_object_count];
      // data.exercise_name = data[exercise_id_count].exercise_name;
      data[exercise_id_count].user_id = 1;
      data[exercise_id_count].date_completed = currentDateTime;
      // data[exercise_id_count].ExerciseTemplateId = data[exercise_id_count].id; // id is primary key for exercise_template and foreign key for exercise_id in history table 
      // data[exercise_id_count].weight = data[exercise_id_count].weight;
      // data[exercise_id_count].repetitions = data[exercise_id_count].repetitions;
      data[exercise_id_count].sets_1 = false;
      data[exercise_id_count].sets_2 = false;
      data[exercise_id_count].sets_3 = false;
      data[exercise_id_count].sets_4 = false;
      data[exercise_id_count].sets_5 = false;
      data[exercise_id_count].ExerciseTemplateId = data[exercise_id_count].id; // id is primary key for exercise_template and foreign key for exercise_id in history table 
      // exerciseObject[exercise_id_count].createdAt = "2019-05-16 01:00:00";
      // exerciseObject[exercise_id_count].updatedAt = "2019-05-16 01:00:00";
      
      console.log("----------------------");
      // console.log("Exercise Name: " + exerciseObject[exercise_id_count].exercise_name);
      console.log("User ID: " + data[exercise_id_count].user_id);
      console.log("Date completed: " + data[exercise_id_count].date_completed);
      console.log("Exercise Template ID: " + data[exercise_id_count].ExerciseTemplateId);
      // console.log("Weight: " + data[exercise_id_count].weight);
      // console.log("Reps: " + data[exercise_id_count].repetitions);
      console.log("Set #1: " + data[exercise_id_count].sets_1);
      console.log("Set #2: " + data[exercise_id_count].sets_2);
      console.log("Set #3: " + data[exercise_id_count].sets_3);
      console.log("Set #4: " + data[exercise_id_count].sets_4);
      console.log("Set #5: " + data[exercise_id_count].sets_5);

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
        .attr("exer_tag", exercise_id_count)
        .text("Set #1")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
          console.log(this.value);
          console.log($(this).attr("exer_tag"));
          passThis[$(this).attr("exer_tag")].sets_1 = true;
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
        .attr("exer_tag", exercise_id_count)
        .text("Set #2")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
          passThis[$(this).attr("exer_tag")].sets_2 = true;
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-3')
        .attr("exer_tag", exercise_id_count)
        .text("Set #3")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
          passThis[$(this).attr("exer_tag")].sets_3 = true;
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-4')
        .attr("exer_tag", exercise_id_count)
        .text("Set #4")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
          passThis[$(this).attr("exer_tag")].sets_4 = true;
        });
      $div2.append($button);
      var $button = $("<button>")
        .addClass("btn btn-danger completeSet")
        .attr('id', 'set-5')
        .attr("exer_tag", exercise_id_count)
        .text("Set #5")
        .val("False")
        .on("click", function(){
          $(this).addClass("clickedBtn").val("True");
          passThis[$(this).attr("exer_tag")].sets_5 = true;
        });
      $div2.append($button);

      $li.append($div2);

      // console.log(exercise_id_count);
      // exercise_id_count ++; // increase exercise count to track next exercise that is looped/mapped
      exercise_id_count++;

      return $li;
    });
    // console.log("Weight for exercise x: " + data[4].weight);
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