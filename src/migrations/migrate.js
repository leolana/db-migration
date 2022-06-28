import { logger } from "./infra/logger";

import { brazilProduction } from "./from";
import { cornelsenProduction } from "./to";

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
  courseQueryResult.forEach((item) => {
    logger.info('Course to migrate:', JSON.stringify(item));
    // const course = await brazilProduction.courseQueryOne(item.course_id);
    // const courseMigrated = await cornelsenProduction.courseInsert(course);
    // logger.info('Migrated course:', JSON.stringify(course));
  });
};

const migrateActivity = async () => {
  const activityQueryResult = await brazilProduction.activityQuery();
  activityQueryResult.forEach((item) => {
    const activity = await brazilProduction.activityQueryOne(item.activity_id);
    const activityMigrated = await cornelsenProduction.activityInsert(activity);
  });
};

export { migrationOrder, migrateCourse, migrateActivity };
