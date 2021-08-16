const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "DataDog/datadog@~> 3.0",
  cdktfVersion: '^0.5',
  constructsVersion: "^3.0.4",
  minNodeVersion: "12.19.0"
});

project.synth();
