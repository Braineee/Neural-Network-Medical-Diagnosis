'use strict';
module.exports = (sequelize, DataTypes) => {
  const Symptoms = sequelize.define('Symptoms', {
    symptom_uuid: DataTypes.STRING,
    symptom_id: DataTypes.STRING,
    symptom_name: DataTypes.STRING,
    symptom_description: DataTypes.STRING
  }, {});
  Symptoms.associate = function(models) {
    // associations can be defined here
  };
  return Symptoms;
};