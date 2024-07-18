exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('jokes').truncate()
      .then(function() {
        // Inserts seed entries
          return knex('jokes').insert([
              { joke: 'Why don’t scientists trust atoms?', punchline: 'Because they make up everything!' },
              { joke: 'Why did the scarecrow win an award?', punchline: 'Because he was outstanding in his field!' },
              { joke: 'Why don’t skeletons fight each other?', punchline: 'They don’t have the guts.' },
              { joke: 'What do you call fake spaghetti?', punchline: 'An impasta!' },
              { joke: 'Why was the math book sad?', punchline: 'Because it had too many problems.' },
              { joke: 'What do you call cheese that isn’t yours?', punchline: 'Nacho cheese.' },
              { joke: 'How does a penguin build its house?', punchline: 'Igloos it together.' },
              { joke: 'What do you get when you cross a snowman and a vampire?', punchline: 'Frostbite.' }
          ]);
      });
  };