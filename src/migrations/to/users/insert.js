 import { getInsertSqlByObject } from "../../../infra/database";

const insert = async (source, data) => {
  const { text, values } = getInsertSqlByObject("user_data", data);
  const result = await source.query(text, values);
  return result.rows;
};

export { insert };
