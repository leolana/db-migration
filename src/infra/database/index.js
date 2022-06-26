import { Client } from "pg";

const connect = async (config) => {
  const client = new Client({
    connectionString: config.connectionString,
  });

  client.connect();

  return client;
};

export { connect };
