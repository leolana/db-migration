import { config } from "../infra/config";

import { inserMigrate as activityInsert } from "./migrations/activities";
import { inserMigrate as classroomInsert } from "./migrations/classrooms";
import { inserMigrate as courseInsert } from "./migrations/courses";
import { inserMigrate as groupInsert } from "./migrations/groups";
import { inserMigrate as statInsert } from "./migrations/stat";
import { inserMigrate as userInsert } from "./migrations/users";

const cornelsenStaging = {
  activityInsert: () => activityInsert(config.wapp11CornelsenStagingDb),
  classroomInsert: () => classroomInsert(config.wapp11CornelsenStagingDb),
  courseInsert: () => courseInsert(config.wapp11CornelsenStagingDb),
  groupInsert: () => groupInsert(config.wapp11CornelsenStagingDb),
  statInsert: () => statInsert(config.wapp11CornelsenStagingDb),
  userInsert: () => userInsert(config.wapp11CornelsenStagingDb),
};

export { cornelsenStaging };
