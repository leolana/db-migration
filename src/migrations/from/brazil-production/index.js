import {
  queryToMigrate as activityQueryMigrate,
  queryOneToMigrate as activityQueryOneMigrate,
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
  activityQuery: activityQueryMigrate,
  activityQueryOne: activityQueryOneMigrate,
  classroomQuery: classroomQuery,
  classroomQueryOne: classroomQueryOne,
  courseQuery: courseQuery,
  courseQueryOne: courseQueryOne,
  groupQuery: groupQuery,
  groupQueryOne: groupQueryOne,
  statQuery: statQuery,
  statQueryOne: statQueryOne,
  userQuery: userQuery,
  userQueryOne: userQueryOne,
};

export { brazilProduction };
