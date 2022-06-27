const migrationOrder = [
  "courses",
  "activities",
  "classrooms",
  "users",
  "groups",
  "stats",
];

const migrate = async (source, target) => {
  const result = await query(source);
  result.forEach((item) => {
    insert(target, item);
  });
};

export { migrationOrder, migrate };
