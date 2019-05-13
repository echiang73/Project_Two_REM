
module.exports = function(sequelize, DataTypes) {
    var History = sequelize.define("History", {
   
//History will be plurilized by sequelize.. Maybe?    

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
    History.associate = function(models) {
      // We're saying that a user history should belong to an exercise
      // A workout history can't be created without an exercise due to the foreign key constraint
      History.belongsTo(models.Exercise, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return History;
  };
  