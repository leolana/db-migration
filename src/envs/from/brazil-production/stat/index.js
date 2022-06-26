import { config } from "../../../../infra/config";
import { connect } from "../../../../infra/database";

import { query } from "./query";

const queryToMigrate = async () => {
  const connection = await connect(config.wapp11ProductionDb);
  return query(connection);
}

export { queryToMigrate };
