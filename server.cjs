"use strict";

import("./.output/server/index.mjs").catch((error) => {
  console.error("Unable to start the Nitro server. Build it with npm run build:godaddy.", error);
  process.exitCode = 1;
});
