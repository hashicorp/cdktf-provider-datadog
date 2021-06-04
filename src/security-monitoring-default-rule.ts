// https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringDefaultRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html#enabled SecurityMonitoringDefaultRule#enabled}
  */
  readonly enabled?: boolean;
  /**
  * case block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html#case SecurityMonitoringDefaultRule#case}
  */
  readonly case?: SecurityMonitoringDefaultRuleCase[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html#filter SecurityMonitoringDefaultRule#filter}
  */
  readonly filter?: SecurityMonitoringDefaultRuleFilter[];
}
export interface SecurityMonitoringDefaultRuleCase {
  /**
  * Notification targets for each rule case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html#notifications SecurityMonitoringDefaultRule#notifications}
  */
  readonly notifications: string[];
  /**
  * Status of the rule case to match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html#status SecurityMonitoringDefaultRule#status}
  */
  readonly status: string;
}

function securityMonitoringDefaultRuleCaseToTerraform(struct?: SecurityMonitoringDefaultRuleCase): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notifications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notifications),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface SecurityMonitoringDefaultRuleFilter {
  /**
  * The type of filtering action. Allowed enum values: require, suppress
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html#action SecurityMonitoringDefaultRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html#query SecurityMonitoringDefaultRule#query}
  */
  readonly query: string;
}

function securityMonitoringDefaultRuleFilterToTerraform(struct?: SecurityMonitoringDefaultRuleFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html datadog_security_monitoring_default_rule}
*/
export class SecurityMonitoringDefaultRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_default_rule.html datadog_security_monitoring_default_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringDefaultRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringDefaultRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_default_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._case = config.case;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // case - computed: false, optional: true, required: false
  private _case?: SecurityMonitoringDefaultRuleCase[];
  public get case() {
    return this.interpolationForAttribute('case') as any;
  }
  public set case(value: SecurityMonitoringDefaultRuleCase[] ) {
    this._case = value;
  }
  public resetCase() {
    this._case = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInput() {
    return this._case
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: SecurityMonitoringDefaultRuleFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: SecurityMonitoringDefaultRuleFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      case: cdktf.listMapper(securityMonitoringDefaultRuleCaseToTerraform)(this._case),
      filter: cdktf.listMapper(securityMonitoringDefaultRuleFilterToTerraform)(this._filter),
    };
  }
}
