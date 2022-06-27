import { queryToMigrate as activityQueryMigrate } from "./activities";
import { queryToMigrate as classroomQuery } from "./classrooms";
import { queryToMigrate as courseQuery } from "./courses";
import { queryToMigrate as groupQuery } from "./groups";
import { queryToMigrate as statQuery } from "./stat";
import { queryToMigrate as userQuery } from "./users";

const brazilStaging = {
  activityQuery: activityQueryMigrate,
  classroomQuery: classroomQuery,
  courseQuery: courseQuery,
  groupQuery: groupQuery,
  statQuery: statQuery,
  userQuery: userQuery,
};

export { brazilStaging };
