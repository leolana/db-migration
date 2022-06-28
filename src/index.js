import { migrateCourse } from "./migrations/migrate";
import { logger } from "./infra/logger";

void (async function () {
  try {
    logger.info("Start migration");
    await migrateCourse();
    logger.info("Migration finished");
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
})();
