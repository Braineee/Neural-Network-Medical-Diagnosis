'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'Levels', 
        [
          {
            level_uuid: 'd43fd0c8-cb27-4fa9-a2db-641c3f37bbd2',
            level: 'Sever',
            level_digit: '1'
          },
          {
            level_uuid: '2da93a90-28e9-4596-8c1d-7901fc0acd5b',
            level: 'High',
            level_digit: '0.75'
          },
          {
            level_uuid: 'f420ea4f-74a3-4449-ae62-b911b4a1b0f8',
            level: 'Low',
            level_digit: '0.5'
          },
          {
            level_uuid: 'c0bf72d7-cbbc-49de-b20f-953f68993848',
            level: 'Very low',
            level_digit: '0.25'
          },
        ]
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
