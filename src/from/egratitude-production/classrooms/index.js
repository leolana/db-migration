import { config } from "../../../infra/config";
import { connect } from "../../../infra/database";

import { query, queryOne } from "./query";

const queryToMigrate = async () => {
  const connection = await connect(config.wapp11ProductionDb);
  return query(connection);
}

const queryOneToMigrate = async () => {
  const connection = await connect(config.wapp11ProductionDb);
  return queryOne(connection);
}

export { queryToMigrate, queryOneToMigrate };
