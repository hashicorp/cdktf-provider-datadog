const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "DataDog/datadog@~> 3.0"
});

project.synth();
