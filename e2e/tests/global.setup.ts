import { PRODUCT } from "@constants/common";
import setup from "@fixtures";
import { initializeCredentials, login } from "@neetoplaywright";

setup("login", async ({ page, organizationPage, neetoPlaywrightUtilities }) => {
  await setup.step("Step 1: Initialize credentials", () =>
    initializeCredentials(PRODUCT)
  );

  await setup.step("Step 2: Setup Organization", () =>
    organizationPage.setupOrganization(PRODUCT)
  );

  await setup.step("Step 3: Login into the application", () =>
    login({ page, neetoPlaywrightUtilities })
  );
  
  process.env.baseURL = `${process.env.baseURL}/admin`
});
