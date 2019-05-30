# TRAINr :muscle:

Exercise is an important part of life, but keeping up with a workout routine isn't easy with our busy lives. Paper workout logs or Excel spreadsheets help track your workout, but do not allow for easy analysis of your workout progress. TRAINr is your personal workout tracker platform app that takes care of all that plus more, to keep you motivated and stick to your workout routine. TRAINr provides guidance on exercises, keeps track of your completed workout, and stores the information seamlessly in a database with instant access to your workout performance in graphs, all while you listen to streaming music to keep you pumped up.

## Instructions
Navigate to https://project-rem.herokuapp.com and click on one of the 5 tabs.  Click on the Routine tab, if you wish to read information about various workout exercises or fitness programs for starters. If you are ready to start working out and want to listen to some music while you work out, click on the Spotify tab and enter your Spotify user login/password to listen to more than just 30 sec samples. Since the user-interface was designed with tab features, you can continuously use the features of each tab, such as streaming Spotify music, without the page reloading. Now click on the Workout tab and select one of the three preset workout exercises (Upper body, Lower body, or Core/Cardio) and 5 specific exercises will be dynamically displayed.  Follow the repetitions, sets, and weight to use (if needed) and track your workout by clicking on each of the "Set#" buttons as you complete an exercise set.  Once you are done with each exercise, continue to the next exercise and repeat the process by click on the "Set#" buttons to track your workout.  Once you complete all of the exercise for the day, click on the "Log Completed Workout" button to submit your workout routine to a remote database.  Now you can view the history of your progress by going to the Analysis tab which will dynamically generate bargraph(s). The final tab of "Fitbit Stats" is currently under development, but will eventually allow you to sync your Fitbit account to populate your biostatistics data so you can compare your workout routine with the captured biostat gathered from your Fitbit devices (i.e. heartrate, calories burned, weight, body fat, etc).

## Download/Clone App to Run Locally
If you wish to clone or download the code from GitHub to run on the localhost for your own use, make sure you replace "null" with your own MySQL password under the development password in the `config.json` file. Then copy the `schema.sql` data and input it into your MySQL Workbench by creating the exercise_db database first.  Then use bash/terminal and type npm install to download the required node modules.  Next, run the app server.js in node by typing node server.js (or nodemon server.js if nodemon is globally installed already), which will create two MySQL tables in the exercise_db database.  Finally, go back to MySQL Workbench and execute the exercise_template table so the exercise routines can be pre-populated into the database. If you don't use nodemon server.js, you will need to restart the program by entering node server.js in bash/terminal.  Now open http://localhost:8000 in your browser to run the app.

## Technical overview
This full-stack application utilizes the Model/View/Controller (MVC) design pattern in which the Controller serve as the interface to handle the logic and routing between Model or the application database core and View to dynamically render HTML content in response to the user/client requests. Specifically, the app is built with Node.js, Express.js, and Handlebars to handle the logic and to route the client requests to MySQL database (mysql2) using Sequelize (Object Relational Mapping - ORM) to retrive information to dynamically build HTML pages to display the content back to the client.  To run the server codes, the app is deployed live on Heroku with JawsDB remote database.  The user-interface was designed to utilize tab features so that the user can use the features of each tab, such as streaming Spotify music, without the page reloading.

## Built with or topics covered
* HTML5
* CSS3
* JavaScript
* jQuery
* Model View Controller (MVC)
* Object Relational Mapping (ORM)
* Sequelize ORM
* Express.js
    * HTTP Requests (GET, POST)
    * Routes and static content
    * Handlebars engine integration
* Node.js
    * Backend API calls
* Handlebars Templates and Layouts
* Node Package Manager (npm)
* Media queries
* MySQL/JawsDB
* Heroku deployment

## npm packages: 
* [Express] (https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node to handle routing.
* [Express-Handlebars] (https://www.npmjs.com/package/express-handlebars) - A view engine that utilizes logicless Mustache templating language for Express that keep the view and the code separated.
* [sequelize] (https://www.npmjs.com/package/sequelize) - A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
* [mysql2] (https://www.npmjs.com/package/mysql2) - A MySQL client for Node.js with focus on performance and support use of Sequelize.
* [DotEnv] (https://www.npmjs.com/package/dotenv) - Dotenv store your sensitive credentials and load in environment variables in .env file to merge into your process.env runtime variables. :closed_lock_with_key:

#### Directory structure
All the recommended files and directories should look like the following structure:

```
.
├── config
│   ├── config.json
│
├── models
│   ├── exercise.js
│   ├── history.js
│   ├── index.js
│   └── schema.sql
│
├── models
│   ├── burger.js
│   └── index.js
│
├── node_modules
│
├── package.json
│
├── public
│   └── assets
│       ├── images
│       │    ├── mainBackground.jpg
│       │    └── exercise-images
│       ├── js
│       │    ├── index.js
│       │    └── progress.js
│       ├── src
│       │    └── bootstrap-input-spinner.js
│       └── styles
│            └── styles.css
│
├── routes
│   └── apiRoutes.js
│   └── htmlRoutes.js
│
├── test
│   └── canary.test.js
│
├── server.js
│
└── views
    ├── 404.handlebars
    ├── index.handlebars
    ├── layouts
    │    └── main.handlebars
    └── partials
        └── exercises
                └── exercise-block.handlebars
```

## Team Effort
This full-stack app is developed by Eddie Chiang, Max Jackson, and Ryan Grady.
* Eddie was responsible for writing the database code (API GET routes) for each workout exercise, the API POST Routes to send new data to server, Spotify streaming, managing the kanban schedule.
* Max was responsible for writing the front-end html, static page routing, and generate chart.js bar graph.
* Ryan was responsible for writing the one-to-many (user/exercise) association for the User_history table and API GET routes to display the chart.js bar graph.

## Links
* Click on the deployed app on Heroku!
https://project-rem.herokuapp.com/

* Click on the GitHub link to view code!
https://github.com/echiang73/Project_Two_REM


## Here are the previews of the web application:

![](public/images/webpreview.gif "gif")
