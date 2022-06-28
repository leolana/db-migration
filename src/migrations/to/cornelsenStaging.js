import { config } from "../infra/config";

import { inserMigrate as activityInsert } from "./activities";
import { inserMigrate as classroomInsert } from "./classrooms";
import { inserMigrate as courseInsert } from "./courses";
import { inserMigrate as groupInsert } from "./groups";
import { inserMigrate as statInsert } from "./stat";
import { inserMigrate as userInsert } from "./users";

const cornelsenStaging = {
  activityInsert: () => activityInsert(config.wapp11CornelsenStagingDb),
  classroomInsert: () => classroomInsert(config.wapp11CornelsenStagingDb),
  courseInsert: () => courseInsert(config.wapp11CornelsenStagingDb),
  groupInsert: () => groupInsert(config.wapp11CornelsenStagingDb),
  statInsert: () => statInsert(config.wapp11CornelsenStagingDb),
  userInsert: () => userInsert(config.wapp11CornelsenStagingDb),
};

export { cornelsenStaging };
