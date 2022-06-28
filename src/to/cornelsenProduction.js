import { config } from "../infra/config";

import { inserMigrate as activityInsert } from "./migrations/activities";
import { inserMigrate as classroomInsert } from "./migrations/classrooms";
import { inserMigrate as courseInsert } from "./migrations/courses";
import { inserMigrate as groupInsert } from "./migrations/groups";
import { inserMigrate as statInsert } from "./migrations/stat";
import { inserMigrate as userInsert } from "./migrations/users";

const cornelsenProduction = {
  activityInsert: () => activityInsert(config.wapp11CornelsenProductionDb),
  classroomInsert: () => classroomInsert(config.wapp11CornelsenProductionDb),
  courseInsert: () => courseInsert(config.wapp11CornelsenProductionDb),
  groupInsert: () => groupInsert(config.wapp11CornelsenProductionDb),
  statInsert: () => statInsert(config.wapp11CornelsenProductionDb),
  userInsert: () => userInsert(config.wapp11CornelsenProductionDb),
};

export { cornelsenProduction };
