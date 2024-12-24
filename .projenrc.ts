import { CdktfProviderProject } from "@cdktf/provider-project";
const project = new CdktfProviderProject({
  author: "jorge.oliveira",
  authorAddress: "jorge.luizchaves@yahoo.com.br",
  cdktfVersion: "0.20.9",
  constructsVersion: "^10.4.2",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project"],
  minNodeVersion: "18.12.0",
  jsiiVersion: "~5.5.0",
  typescriptVersion: "~5.5.0", // NOTE: this should be the same major/minor version as JSII
  name: "cdktf-provider-grafana",
  packageName: "@jorgeLuizChaves/cdktf-provider-grafana",
  projenrcTs: true,
  repositoryUrl: "https://github.com/jorgeLuizChaves/cdktf-provider-grafana.git",
  terraformProvider: "grafana/grafana@0.13.0",
  isDeprecated: false,
  npmRegistryUrl: "https://npm.pkg.github.com", // NOTE: switch to gh npm registry
  releaseToNpm: true,
  package: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();