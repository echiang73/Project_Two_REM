

  module.exports = function(sequelize, DataTypes) {
    var User_history = sequelize.define("User_history", {
   
  //History will be plurilized by sequelize     
  
    user_id: DataTypes.INTEGER,
    date_completed: DataTypes.DATE,
    sets_1: DataTypes.BOOLEAN,
    sets_2: DataTypes.BOOLEAN,
    sets_3: DataTypes.BOOLEAN,
    sets_4: DataTypes.BOOLEAN,
    sets_5: DataTypes.BOOLEAN
    });
    User_history.associate = function(models) {
      // We're saying that a user history should belong to an exercise
      // A workout history can't be created without an exercise due to the foreign key constraint
      User_history.belongsTo(models.Exercise_template, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return User_history;
  };
  