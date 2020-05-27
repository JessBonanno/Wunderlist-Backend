
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'SadieWilson', password: 'sadie'},
        {username: 'ThomasScott1', password: 'scottie'},
        {username: 'DanielTorres', password: 'fallout04'},
        {username: 'MarshallMathers', password: 'slimshady'},
        {username: 'LukeSkywalker', password: 'jediturnedsith'},
        {username: 'MichaelScott', password: 'bestboss100'},
        {username: 'BrittneySpears', password: 'youbetterwork'},
        {username: 'MariahCarey', password: 'irrelevent'},
        {username: 'JimCarrey', password: 'alegend'},
        {username: 'JohnnyDepp', password: 'innocent'},
        {username: 'SamuelLJackson', password: 'anevenbiggerlegend'}
      ]);
    });
};
