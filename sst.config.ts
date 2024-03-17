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
        customDomain: stack.stage === "prod" ? {
          domainName: "ima.sh",
          domainAlias: "www.ima.sh",
        } : `${stack.stage}.ima.sh`,
      });

      stack.addOutputs({
        Site: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
