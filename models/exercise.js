
module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
  
      workout_type: DataTypes.STRING,
      exercise_name: DataTypes.STRING,
      exer_img_url: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      repetitions: DataTypes.STRING,
      sets: DataTypes.INTEGER
  });

  Exercise.associate = function(models) {
    // Associating exercise  with user history
    
    Exercise.hasMany(models.History);
  };
  return Exercise;
};
