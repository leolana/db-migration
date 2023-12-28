import { config } from "../../../../infra/config";
import { connect } from "../../../../infra/database";

import { query, queryOne } from "./query";

const queryToMigrate = async () => {
  const connection = await connect(config.dbHeroProductionDb);
  return query(connection);
};

const queryOneToMigrate = async (id) => {
  const connection = await connect(config.dbHeroProductionDb);
  return queryOne(connection, id);
};

export { queryToMigrate, queryOneToMigrate };
