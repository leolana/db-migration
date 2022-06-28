import { logger } from "../infra/logger";

import { brazilProduction } from "./from";
import { cornelsenProduction } from "./to/cornelsenProduction";

const migrationOrder = [
  "courses",
  "activities",
  "classrooms",
  "users",
  "groups",
  "stats",
];

const migrateCourse = async () => {
  const courseQueryResult = await brazilProduction.courseQuery();
  logger.info(`Total of courses to migrate: ${courseQueryResult.length}`);
  courseQueryResult.forEach(async (item, index) => {
    logger.info('----------------------------------------------------');
    logger.info(`Course to migrate: ${item.id}`);
    // logger.info(JSON.stringify(item));
    const course = await brazilProduction.courseQueryOne(item.id);
    // const courseMigrated = await cornelsenProduction.courseInsert(course);
    logger.info(`Migrated course: ${course.id}`);
    logger.info(`Migrated course index: ${index}`);
    logger.info('----------------------------------------------------');
  });
};

// const migrateActivity = async () => {
//   const activityQueryResult = await brazilProduction.activityQuery();
//   activityQueryResult.forEach((item) => {
//     const activity = await brazilProduction.activityQueryOne(item.activity_id);
//     const activityMigrated = await cornelsenProduction.activityInsert(activity);
//   });
// };

export { migrationOrder, migrateCourse };
