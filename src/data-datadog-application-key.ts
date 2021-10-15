// https://www.terraform.io/docs/providers/datadog/d/application_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogApplicationKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id for Application Key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/application_key.html#id DataDatadogApplicationKey#id}
  */
  readonly id?: string;
  /**
  * Name for Application Key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/application_key.html#name DataDatadogApplicationKey#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/application_key.html datadog_application_key}
*/
export class DataDatadogApplicationKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_application_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/application_key.html datadog_application_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogApplicationKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogApplicationKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_application_key',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string ) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}