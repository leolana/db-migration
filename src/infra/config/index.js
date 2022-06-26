import dotenv from "dotenv";

dotenv.config();

const config = {
  wapp11StagingDb: {
    connectionString: process.env.WAPP11_STAGING_DB_CONNECTION_STRING,
  },
  wapp11ProductionDb: {
    connectionString: process.env.WAPP11_PRODUCTION_DB_CONNECTION_STRING,
  },
  wapp11EgratitudeProductionDb: {
    connectionString: process.env.WAPP11_EGRATITUDE_PRODUCTION_DB_CONNECTION_STRING,
  },
};

export { config };
