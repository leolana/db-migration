const config = {
    wapp11StagingDb: {
        user: process.env.WAPP11_STAGING_DB_USER || 'postgres',
        password: process.env.WAPP11_STAGING_DB_PASSWORD || 'postgres',
        host: process.env.WAPP11_STAGING_DB_HOST || 'localhost',
        port: process.env.WAPP11_STAGING_DB_PORT || 5432,
        database: process.env.WAPP11_STAGING_DB_NAME || 'postgres'
    },
    wapp11ProductionDb: {
        user: process.env.WAPP11_PRODUCTION_DB_USER || 'postgres',
        password: process.env.WAPP11_PRODUCTION_DB_PASSWORD || 'postgres',
        host: process.env.WAPP11_PRODUCTION_DB_HOST || 'localhost',
        port: process.env.WAPP11_PRODUCTION_DB_PORT || 5432,
        database: process.env.WAPP11_PRODUCTION_DB_NAME || 'postgres'
    },
    wapp11EgratitudeProductionDb: {
        user: process.env.WAPP11_EGRATITUDE_PRODUCTION_DB_USER || 'postgres',
        password: process.env.WAPP11_EGRATITUDE_PRODUCTION_DB_PASSWORD || 'postgres',
        host: process.env.WAPP11_EGRATITUDE_PRODUCTION_DB_HOST || 'localhost',
        port: process.env.WAPP11_EGRATITUDE_PRODUCTION_DB_PORT || 5432,
        database: process.env.WAPP11_EGRATITUDE_PRODUCTION_DB_NAME || 'postgres'
    },
};

export { config };