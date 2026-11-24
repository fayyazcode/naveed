"use strict";

process.env.HOST ||= "0.0.0.0";

import("./.output/server/index.mjs").catch((error) => {
  console.error("Unable to start the Nitro server. Build it with npm run build.", error);
  process.exitCode = 1;
});
