import { brazilProduction } from "./migrations/from";

void (async function () {
  try {
    const activityQueryResult = await brazilProduction.activityQuery();
    console.log(activityQueryResult);
  } catch (error) {
    console.log(error);
  }
})();
