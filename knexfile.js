  
module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'  // Adjust the filename/path as needed
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations'  // Directory where migration files are stored
      },
      seeds: {
        directory: './data/seeds'       // Directory where seed files are stored
      }
    },
  
    test: {
      client: 'sqlite3',
      connection: {
        filename: './test.sqlite3' // Adjust the filename/path as needed
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations'  // Directory where migration files are stored
      },
      seeds: {
        directory: './data/seeds'       // Directory where seed files are stored
      }
    }
  };
  