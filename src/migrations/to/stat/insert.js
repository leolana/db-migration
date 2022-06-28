 import { getInsertSqlByObject } from "../../../infra/database";

const insert = async (source, data) => {
  const { text, values } = getInsertSqlByObject("stat", data);
  const result = await source.query(text, values);
  return result.rows;
};

export { insert };
