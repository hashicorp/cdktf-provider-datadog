// https://www.terraform.io/docs/providers/datadog/r/api_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name for API Key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/api_key.html#name ApiKey#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/api_key.html datadog_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_api_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/api_key.html datadog_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_api_key',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
