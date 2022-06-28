import {
  queryToMigrate as activityQuery,
  queryOneToMigrate as activityQueryOne,
} from "./activities";
import {
  queryToMigrate as classroomQuery,
  queryOneToMigrate as classroomQueryOne,
} from "./classrooms";
import {
  queryToMigrate as courseQuery,
  queryOneToMigrate as courseQueryOne,
} from "./courses";
import {
  queryToMigrate as groupQuery,
  queryOneToMigrate as groupQueryOne,
} from "./groups";
import {
  queryToMigrate as statQuery,
  queryOneToMigrate as statQueryOne,
} from "./stat";
import {
  queryToMigrate as userQuery,
  queryOneToMigrate as userQueryOne,
} from "./users";

const brazilProduction = {
  activityQuery,
  activityQueryOne,
  classroomQuery,
  classroomQueryOne,
  courseQuery,
  courseQueryOne,
  groupQuery,
  groupQueryOne,
  statQuery,
  statQueryOne,
  userQuery,
  userQueryOne,
};

export { brazilProduction };
