import { config } from "../../infra/config";

import { inserMigrate as activityInsert } from "./activities";
import { inserMigrate as classroomInsert } from "./classrooms";
import { inserMigrate as courseInsert } from "./courses";
import { inserMigrate as groupInsert } from "./groups";
import { inserMigrate as statInsert } from "./stat";
import { inserMigrate as userInsert } from "./users";

const cornelsenProduction = {
  activityInsert: () => activityInsert(config.dbHeroCornelsenProductionDb),
  classroomInsert: () => classroomInsert(config.dbHeroCornelsenProductionDb),
  courseInsert: () => courseInsert(config.dbHeroCornelsenProductionDb),
  groupInsert: () => groupInsert(config.dbHeroCornelsenProductionDb),
  statInsert: () => statInsert(config.dbHeroCornelsenProductionDb),
  userInsert: () => userInsert(config.dbHeroCornelsenProductionDb),
};

export { cornelsenProduction };
