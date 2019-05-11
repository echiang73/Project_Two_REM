// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };
module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    id: {
      DataType: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
      workout_type: DataTypes.STRING,
      exercise_name: DataTypes.STRING,
      exer_img_url: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      repetitions: DataTypes.STRING,
      sets: DataTypes.INTEGER
  });
  return Exercise;
};
