import { Client } from "pg";

const connect = async (config) => {
  const client = new Client({
    connectionString: config.connectionString,
  });

  client.connect();

  return client;
};

const getInsertVarsByObject = (obj) => {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);

  const columns = Object.keys(obj);
  const values = Object.values(obj).filter((v) => v !== undefined);
  const vars = [...Array(values.length + 1).keys()].slice(1);

  return {
    columns: columns.join(","),
    vars: "$" + vars.join(",$"),
    values: values,
  };
};

const getInsertSqlByObject = (table, obj) => {
  const insert = getInsertVarsByObject(obj);
  return {
    values: insert.values,
    text: `INSERT INTO "${table}" (${insert.columns}) VALUES (${insert.vars}) RETURNING *`,
  };
};

export { connect, getInsertSqlByObject };
