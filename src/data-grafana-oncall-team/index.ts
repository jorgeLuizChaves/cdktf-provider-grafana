// https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/oncall_team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGrafanaOncallTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/oncall_team#id DataGrafanaOncallTeam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The team name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/oncall_team#name DataGrafanaOncallTeam#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/oncall_team grafana_oncall_team}
*/
export class DataGrafanaOncallTeam extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_oncall_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGrafanaOncallTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGrafanaOncallTeam to import
  * @param importFromId The id of the existing DataGrafanaOncallTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/oncall_team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGrafanaOncallTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_oncall_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/3.15.3/docs/data-sources/oncall_team grafana_oncall_team} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGrafanaOncallTeamConfig
  */
  public constructor(scope: Construct, id: string, config: DataGrafanaOncallTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_oncall_team',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}