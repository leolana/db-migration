import { Client } from "pg";

const connect = async (config) => {
  const client = new Client(config);

  client.connect();

  return client;
};

export { connect };
