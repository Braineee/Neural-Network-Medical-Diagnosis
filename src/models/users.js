'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM('Male', 'Female'),
    address: DataTypes.TEXT,
    is_verified: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    profile_is_complete: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};