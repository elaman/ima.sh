import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "imash",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: stack.stage === "main"
          // Production URL.
          ? { domainName: "ima.sh", domainAlias: "www.ima.sh" }
          // Development URL.
          : `${stack.stage}.ima.sh`,
      });

      stack.addOutputs({
        Site: site.customDomainUrl || site.url,
      });
    });

    // We want to remove everything no matter the env.
    app.setDefaultRemovalPolicy('destroy');
  },
} satisfies SSTConfig;
