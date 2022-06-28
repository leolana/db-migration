import { connect } from "../../../infra/database";

import { insert } from "./insert";

const inserMigrate = async (config) => {
  const connection = await connect(config);
  return insert(connection);
};

export { inserMigrate };
