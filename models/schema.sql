DROP DATABASE IF EXISTS exercise_db;

CREATE DATABASE exercise_db;

USE exercise_db;

CREATE TABLE Exercise_template(

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
workout_type VARCHAR(30) NOT NULL,
exercise_name VARCHAR(50) NOT NULL,
exer_img_url1 VARCHAR(30),
exer_img_url2 VARCHAR(30),
weight INT NOT NULL,
repetitions INT NOT NULL,
sets INT NOT NULL
);

CREATE TABLE User_history(

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
weight INT NOT NULL,
repetitions INT NOT NULL,
sets_1 BOOLEAN NOT NULL,
sets_2 BOOLEAN NOT NULL,
sets_3 BOOLEAN NOT NULL,
sets_4 BOOLEAN NOT NULL,
sets_5 BOOLEAN NOT NULL
);

-- Seed.sql where user_id=1 is default for dynamically displaying exercise
INSERT INTO Exercise_template
(workout_type, exercise_name, exer_img_url1, exer_img_url2, weight, repetitions, sets, createdAt, UpdatedAt)
VALUES
("Upper Body", "Pullups", "pullup1.jpg", "pullup2.jpg", 0, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Upper Body", "Bench Press", "bench-press1.jpg", "bench-press2.jpg", 135, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Upper Body", "Overhead Press", "overhead-press1.jpg", "overhead-press2.jpg", 80, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Upper Body", "Tricep Extensions", "tricep-extension1.jpg", "tricep-extension2.jpg", 25, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Upper Body", "Bicep Curls", "bicep-curl1.jpg", "bicep-curl2.jpg", 30, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Lower Body", "Squats", "squat1.jpg", "squat2.jpg", 100, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Lower Body", "Dead Lift", "dead-lift1.jpg", "dead-lift2.jpg", 150, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Lower Body", "Dumbbell Lunge", "dumbbell-lunge1.jpg", "dumbbell-lunge2.jpg", 50, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Lower Body", "Leg Press", "leg-press1.jpg", "leg-press2.jpg", 150, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Lower Body", "Leg Curls", "leg-curl1.jpg", "leg-curl2.jpg", 50, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Core/Cardio", "Crunch", "crunch1.jpg", "crunch2.jpg", 40, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Core/Cardio", "Air Bike", "airbike1.jpg", "airbike2.jpg", 0, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Core/Cardio", "Plank", "plank1.jpg", "plank2.jpg", 0, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Core/Cardio", "Burpees", "burpees1.jpg", "burpees2.jpg", 0, 10, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00"),
("Core/Cardio", "Jump Rope", "jump-rope1.jpg", "jump-rope2.jpg", 0, 100, 5, "2019.05.13 00:00:00", "2019.05.13 00:00:00");

UPDATE Exercise_template SET
exer_img_url = "pullup1.jpg"
WHERE id=1;