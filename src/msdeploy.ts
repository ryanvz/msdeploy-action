import { execSync } from 'child_process';
import path from 'path';

const msdeployPath = path.join(__dirname, "..\\bin\\msdeploy.exe");

export function deploy(zip: string, site: string, server: string, user: string, password: string, port = 8172) {
    var args = `-verb:sync -allowUntrusted=true -source:package=\"${zip}\" ` +
               `-dest:auto,computerName=https://${server}:${port}/msdeploy.axd?site=${site},userName=${user},password=${password},authType=basic ` +
               `-setParam:"IIS Web Application Name"="${site}"`;
    execSync(`${msdeployPath} ${args}`);
}