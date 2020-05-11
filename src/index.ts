import * as core from "@actions/core";
import { deploy } from "./msdeploy";

async function run() {
  try { 
     const zip = core.getInput("zip");
     const site = core.getInput("site");
     const server = core.getInput("server");
     const user = core.getInput("user");
     const password = core.getInput("password");

     deploy(zip, site, server, user, password);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}
run();