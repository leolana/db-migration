import { query as activityQuery } from "./activities";
import { query as classroomQuery } from "./classrooms";
import { query as courseQuery } from "./courses";
import { query as groupQuery } from "./groups";
import { query as statQuery } from "./stat";
import { query as userQuery } from "./users";

const egratitudeProduction = {
  activityQuery,
  classroomQuery,
  courseQuery,
  groupQuery,
  statQuery,
  userQuery,
};

export { egratitudeProduction };
