// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };
module.exports = function(sequelize, DataTypes) {
  var Exercise_template = sequelize.define("Exercise_template", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
      workout_type: DataTypes.STRING,
      exercise_name: DataTypes.STRING,
      exer_img_url1: DataTypes.STRING,
      exer_img_url2: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      repetitions: DataTypes.STRING,
      sets: DataTypes.INTEGER
  },{
    freezeTableName: true
  });
  return Exercise_template;
};
