
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'Ben',
          fave_animal: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/cheetah-running.adapt.945.1.jpg',
          previous_occupation: 'Sales Associate',
          hometown_lat: 39.7392,
          hometown_long: 104.9903,
          useless_superpower:'night vision in day time'
         },
         {
          name: 'Andrew Pedersen',
          fave_animal: 'http://www.funnyjunksite.com/pictures/wp-content/uploads/2015/08/Funny-Llama-Picture.jpg',
          previous_occupation: 'Bartender',
          hometown_lat: 30.4383,
          hometown_long: 84.2807,
          useless_superpower: 'Can dunk basketball from halfcourt underwater'
        }
      ]);
    });
};
