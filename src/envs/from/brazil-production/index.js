import { query as activityQuery } from "./activities";
import { query as classroomQuery } from "./classrooms";
import { query as courseQuery } from "./courses";
import { query as groupQuery } from "./groups";
import { query as statQuery } from "./stat";
import { query as userQuery } from "./users";

import { config } from "../../../infra/config";
import { connect } from "../../../infra/database";

const connection = connect(config.wapp11ProductionDb);

const brazilProduction = {
  activityQuery: activityQuery(connection),
  classroomQuery: classroomQuery(connection),
  courseQuery: courseQuery(connection),
  groupQuery: groupQuery(connection),
  statQuery: statQuery(connection),
  userQuery: userQuery(connection),
};

export { brazilProduction };