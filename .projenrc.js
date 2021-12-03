const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "DataDog/datadog@~> 3.0",
  cdktfVersion: '^0.8.1',
  constructsVersion: "^10.0.0",
  minNodeVersion: "12.19.0",
  jsiiVersion: "^1.46.0",
});

project.synth();
