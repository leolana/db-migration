import { config } from "../infra/config";

import { inserMigrate as activityInsert } from "./activities";
import { inserMigrate as classroomInsert } from "./classrooms";
import { inserMigrate as courseInsert } from "./courses";
import { inserMigrate as groupInsert } from "./groups";
import { inserMigrate as statInsert } from "./stat";
import { inserMigrate as userInsert } from "./users";

const cornelsenProduction = {
  activityInsert: () => activityInsert(config.wapp11CornelsenProductionDb),
  classroomInsert: () => classroomInsert(config.wapp11CornelsenProductionDb),
  courseInsert: () => courseInsert(config.wapp11CornelsenProductionDb),
  groupInsert: () => groupInsert(config.wapp11CornelsenProductionDb),
  statInsert: () => statInsert(config.wapp11CornelsenProductionDb),
  userInsert: () => userInsert(config.wapp11CornelsenProductionDb),
};

export { cornelsenProduction };
