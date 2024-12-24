// https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/cloud_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaCloudIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/cloud_ips#id DataGrafanaCloudIps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/cloud_ips grafana_cloud_ips}
*/
export class DataGrafanaCloudIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_cloud_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaCloudIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaCloudIps to import
  * @param importFromId The id of the existing DataGrafanaCloudIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/cloud_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaCloudIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_cloud_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/cloud_ips grafana_cloud_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaCloudIpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaCloudIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana_cloud_ips',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '3.15.3',
        providerVersionConstraint: '3.15.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosted_alerts - computed: true, optional: false, required: false
  public get hostedAlerts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_alerts'));
  }

  // hosted_grafana - computed: true, optional: false, required: false
  public get hostedGrafana() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_grafana'));
  }

  // hosted_logs - computed: true, optional: false, required: false
  public get hostedLogs() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_logs'));
  }

  // hosted_metrics - computed: true, optional: false, required: false
  public get hostedMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_metrics'));
  }

  // hosted_traces - computed: true, optional: false, required: false
  public get hostedTraces() {
    return cdktf.Fn.tolist(this.getListAttribute('hosted_traces'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}