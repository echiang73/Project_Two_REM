var myChart = document.getElementById("myChart").getContext("2d");

$("#nav-analytics-tab").on("click", function(){
   
    $.ajax({
        url: "/api/history",
        context: document.body,
        success: function (res) {

            var setNumber = 0;
            var xAxisData = [];
            var yAxisData = [];
            var yAxisDataUpper = [];
            var yAxisDataLower = [];
            var yAxisDataCardio = [];
            


            // console.log( res );
            // console.log( res [0].Exercise.workout_type);
            // console.log( res [0].Exercise.exercise_name);
            // console.log( res [0].date_completed);
            // console.log( res [0].sets_1);
            // console.log( res [0].sets_2);
            // console.log( res [0].sets_3);
            // console.log( res [0].sets_4);
            // console.log( res [0].sets_5);





            //Create the data for the x axis

            for (var i = 0; i < res.length; i++) {

                var formattedDate = moment(res[i].date_completed).format("ddd, MMM Do");

                xAxisData[i] = formattedDate;

            }

            //Create the data for the y axis

            for (var i = 0; i < res.length; i++) {

                if (res[i].sets_1 == true) {
                    setNumber = setNumber + 1;
                }
                if (res[i].sets_2 == true) {
                    setNumber = setNumber + 1;
                }
                if (res[i].sets_3 == true) {
                    setNumber = setNumber + 1;
                }
                if (res[i].sets_4 == true) {
                    setNumber = setNumber + 1;
                }
                if (res[i].sets_5 == true) {
                    setNumber = setNumber + 1;
                }
                yAxisData[i] = setNumber;
                setNumber = 0;

            }


            console.log(xAxisData);
            console.log(yAxisData);
            console.log(res);
            
            console.log(res[0].Exercise_template.workout_type);

            //Parse out y axis data into upper body, lower body, and cardio

            for (var i=0;i<xAxisData.length;i++){

                if (res[i].Exercise_template.workout_type == "Upper Body")
                { 
                    yAxisDataUpper[i]=yAxisData[i];
                    yAxisDataLower[i]= 0;
                    yAxisDataCardio[i]=0;
                   
                }
                if (res[i].Exercise_template.workout_type == "Lower Body")
                { 
                    yAxisDataUpper[i]=0;
                    yAxisDataLower[i]=yAxisData[i];
                    yAxisDataCardio[i]=0;

                }
                if (res[i].Exercise_template.workout_type == "Core/Cardio")
                { 
                    yAxisDataUpper[i]=0;
                    yAxisDataLower[i]=0;
                    yAxisDataCardio[i]=yAxisData[i];

                }


            }

            console.log(yAxisDataUpper);
            console.log(yAxisDataLower);
            console.log(yAxisDataCardio);
            //Create a new object
            var userProgressChart = new Chart("myChart", {
                type: "bar", //bar, horizontalBar, pie, line, doughnut, radar, polarArea
                data: {
                    labels: xAxisData,
                    datasets: [{
                        label: "Upper Body",
                        data: yAxisDataUpper,
                        

                        backgroundColor:[

                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)'

                
                            // 'rgba(54, 162, 235, 0.6)',
                
                            // 'rgba(255, 206, 86, 0.6)',
                
                            // 'rgba(75, 192, 192, 0.6)',
                
                            // 'rgba(153, 102, 255, 0.6)',
                
                            // 'rgba(255, 159, 64, 0.6)',
                
                            // 'rgba(255, 99, 132, 0.6)'
                
                          ],
                
                          borderWidth:1,
                
                          borderColor:'#777',
                
                          hoverBorderWidth:3,
                
                          hoverBorderColor:'#000'
                
                        
                    },{
                        label: "Lower Body",
                        data: yAxisDataLower,
                        

                        backgroundColor:[

                
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)'
                
                          ],
                
                          borderWidth:1,
                
                          borderColor:'#777',
                
                          hoverBorderWidth:3,
                
                          hoverBorderColor:'#000'
                
                        
                    },{
                        label: "Core/ Cardio",
                        data: yAxisDataCardio,
                        

                        backgroundColor:[

                
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)'
                          
                          ],
                
                          borderWidth:1,
                
                          borderColor:'#777',
                
                          hoverBorderWidth:3,
                
                          hoverBorderColor:'#000'
                
                        
                    }],
                },
                options: {
                    
                    legend: {
                       
                        display: true,
                        text: "this is a string",

                        labels: {
                            fontColor: 'rgb(255, 99, 132)'
                        }
                    },
                       
                    title:{
                        display:true,
                        text:'Workout Progress',
                        fontSize:25
                    },

                    scales: {
                        yAxes: [{
                          scaleLabel: {
                            display: true,
                            labelString: 'Number of Sets'
                          }
                        }],
                        xAxes: [{
                          scaleLabel: {
                            display: true,
                            labelString: 'Workout Date'
                          }
                        }],
                      }
                 
                


                }
            });

        }
    });

  });