import dotenv from "dotenv";

dotenv.config();

const config = {
  dbHeroStagingDb: {
    connectionString: process.env.DBHERO_STAGING_DB_CONNECTION_STRING,
  },
  dbHeroProductionDb: {
    connectionString: process.env.DBHERO_PRODUCTION_DB_CONNECTION_STRING,
  },
  dbHeroEgratitudeProductionDb: {
    connectionString:
      process.env.DBHERO_EGRATITUDE_PRODUCTION_DB_CONNECTION_STRING,
  },
  dbHeroCornelsenProductionDb: {
    connectionString:
      process.env.DBHERO_CORNELSEN_PRODUCTION_DB_CONNECTION_STRING,
  },
  dbHeroCornelsenStagingDb: {
    connectionString: process.env.DBHERO_CORNELSEN_STAGING_DB_CONNECTION_STRING,
  },
};

export { config };
