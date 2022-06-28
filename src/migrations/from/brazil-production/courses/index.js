import { config } from "../../../../infra/config";
import { connect } from "../../../../infra/database";

import { query, queryOne } from "./query";

const queryToMigrate = async () => {
  const connection = await connect(config.wapp11ProductionDb);
  return query(connection);
}

const queryOneToMigrate = async (id) => {
  console.log(config.wapp11ProductionDb);
  const connection = await connect(config.wapp11ProductionDb);
  return queryOne(connection, id);
}

export { queryToMigrate, queryOneToMigrate };
