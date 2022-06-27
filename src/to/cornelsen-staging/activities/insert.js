import { getInsertSqlByObject } from "../../../infra/database";

const query = async (source) => {
  const result = await source.query(`
      ${getInsertSqlByObject()}
    `);
  return result.rows;
};

export { query };
