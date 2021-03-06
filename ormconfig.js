console.log("Process env", process.env.NODE_ENV)

const productionEnv = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: ['./dist/entities/*.js'],
    migrations: ['./dist/database/migrations/*.js'],
    cli: {
      migrationsDir: './dist/database/migrations',
    },
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  };
  
  const developmentEnv = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: ['./src/entities/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  };
  
  module.exports =
    process.env.NODE_ENV === 'production' ? productionEnv : developmentEnv;