// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };
module.exports = function(sequelize, DataTypes) {
    var History = sequelize.define("History", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        user_id: DataTypes.INTEGER,
        date_completed: DataTypes.DATE,
        exercise_id: DataTypes.STRING,
        weight: DataTypes.INTEGER,
        repetitions: DataTypes.STRING,
        sets_1: DataTypes.BOOLEAN,
        sets_2: DataTypes.BOOLEAN,
        sets_3: DataTypes.BOOLEAN,
        sets_4: DataTypes.BOOLEAN,
        sets_5: DataTypes.BOOLEAN
    });
    return History;
  };
  