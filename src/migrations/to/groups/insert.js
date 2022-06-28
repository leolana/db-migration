 import { getInsertSqlByObject } from "../../../infra/database";

const insert = async (source, data) => {
  const { text, values } = getInsertSqlByObject("group_data", data);
  const result = await source.query(text, values);
  return result.rows;
};

export { insert };
