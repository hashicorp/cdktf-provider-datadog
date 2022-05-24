// https://www.terraform.io/docs/providers/datadog/d/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string on which to filter the roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/role#filter DataDatadogRole#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/role#id DataDatadogRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/role datadog_role}
*/
export class DataDatadogRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/role datadog_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_role',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.12.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
