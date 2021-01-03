'use strict';
module.exports = (sequelize, DataTypes) => {
  const Levels = sequelize.define('Levels', {
    level_uuid: DataTypes.STRING,
    level: DataTypes.STRING,
    level_digit: DataTypes.STRING
  }, {});
  Levels.associate = function(models) {
    // associations can be defined here
  };
  return Levels;
};