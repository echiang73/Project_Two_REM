



module.exports = function(sequelize, DataTypes) {
  var Exercise_template = sequelize.define("Exercise_template", {
  
      workout_type: DataTypes.STRING,
      exercise_name: DataTypes.STRING,
      exer_img_url1: DataTypes.STRING,
      exer_img_url2: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      repetitions: DataTypes.STRING,
      sets: DataTypes.INTEGER
  });

  Exercise_template.associate = function(models) {
    // Associating exercise  with user history
    
    Exercise_template.hasMany(models.User_history);
  };
  return Exercise_template;
};


