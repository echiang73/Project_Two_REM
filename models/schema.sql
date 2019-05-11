-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

DROP DATABASE IF EXISTS exercise_db;

CREATE DATABASE exercise_db;

USE exercise_db;

CREATE TABLE exercise_template(

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
workout_type VARCHAR(100) NOT NULL,
exercise_name VARCHAR(100) NOT NULL,
exer_img_url VARCHAR(100),
weight INT NOT NULL,
repetitions INT NOT NULL,
sets INT NOT NULL
);

CREATE TABLE user_history(

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
exercise_id INT NOT NULL,
weight INT NOT NULL,
repetitions INT NOT NULL,
sets_1 BOOLEAN NOT NULL,
sets_2 BOOLEAN NOT NULL,
sets_3 BOOLEAN NOT NULL,
sets_4 BOOLEAN NOT NULL,
sets_5 BOOLEAN NOT NULL
);

-- Seed.sql where user_id=1 is default for dynamically displaying exercise
INSERT INTO exercise_template
(workout_type, exercise_name, weight, repetitions, sets)
VALUES
("Upper Body", "Pullups", 0, 10, 5),
("Upper Body", "Bench Press", 135, 10, 5),
("Upper Body", "Overhead Press", 80, 10, 5),
("Upper Body", "Tricep Extensions", 25, 10, 5),
("Upper Body", "Bicep Curls", 30, 10, 5),
("Lower Body", "Squats", 100, 10, 5),
("Lower Body", "Dead Lift", 150, 10, 5),
("Lower Body", "Dumbbell Lunge", 50, 10, 5),
("Lower Body", "Leg Press", 150, 10, 5),
("Lower Body", "Leg Curls", 50, 10, 5),
("Core/Cardio", "Crunch", 40, 10, 5),
("Core/Cardio", "Air Bike", 0, 10, 5),
("Core/Cardio", "Plank", 0, 10, 5),
("Core/Cardio", "Burpees", 0, 10, 5),
("Core/Cardio", "Jumping Jacks", 0, 10, 5);