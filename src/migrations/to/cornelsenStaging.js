import { config } from "../infra/config";

import { inserMigrate as activityInsert } from "./activities";
import { inserMigrate as classroomInsert } from "./classrooms";
import { inserMigrate as courseInsert } from "./courses";
import { inserMigrate as groupInsert } from "./groups";
import { inserMigrate as statInsert } from "./stat";
import { inserMigrate as userInsert } from "./users";

const cornelsenStaging = {
  activityInsert: () => activityInsert(config.dbHeroCornelsenStagingDb),
  classroomInsert: () => classroomInsert(config.dbHeroCornelsenStagingDb),
  courseInsert: () => courseInsert(config.dbHeroCornelsenStagingDb),
  groupInsert: () => groupInsert(config.dbHeroCornelsenStagingDb),
  statInsert: () => statInsert(config.dbHeroCornelsenStagingDb),
  userInsert: () => userInsert(config.dbHeroCornelsenStagingDb),
};

export { cornelsenStaging };
