// @ts-check
import { definePlaywrightConfig } from "@neetoplaywright";

export default definePlaywrightConfig({
  currentsOverrides: { projectId: "" },
  globalOverrides: {
    reporter: [
      ["line"],
      [
        "@bigbinary/neeto-playwright-reporter",
        {
          apiKey: "gBB8ybG51V1PQWxjNwEdzseCZuBxstCvNzEAuPfyrToo88CK",
          ciBuildId: new Date().toUTCString(),
          projectKey: "NYXRGtAnVqQehf37s8xtRTvU",
        },
      ],
    ],
  },
});