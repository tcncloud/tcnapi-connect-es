// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v0alpha/dashboards.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TimeZone } from "../commons/org_pb.js";

/**
 * PublishDashboardRequest used in PublishDashboard rpc
 *
 * @generated from message api.v0alpha.PublishDashboardRequest
 */
export declare class PublishDashboardRequest extends Message<PublishDashboardRequest> {
  /**
   * resource id of the dashboard to be published
   *
   * @generated from field: string resource_id = 1;
   */
  resourceId: string;

  /**
   * destination resource id can be emtpy to create
   * a new resource or can be used to update an existing
   *
   * @generated from field: string destination_resource_id = 2;
   */
  destinationResourceId: string;

  constructor(data?: PartialMessage<PublishDashboardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.PublishDashboardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishDashboardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishDashboardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishDashboardRequest;

  static equals(a: PublishDashboardRequest | PlainMessage<PublishDashboardRequest> | undefined, b: PublishDashboardRequest | PlainMessage<PublishDashboardRequest> | undefined): boolean;
}

/**
 * PublishDashboardResponse used in PublishDashboard rpc
 *
 * @generated from message api.v0alpha.PublishDashboardResponse
 */
export declare class PublishDashboardResponse extends Message<PublishDashboardResponse> {
  /**
   * resource id of the published dashboard
   *
   * @generated from field: string resource_id = 1;
   */
  resourceId: string;

  constructor(data?: PartialMessage<PublishDashboardResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.PublishDashboardResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishDashboardResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishDashboardResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishDashboardResponse;

  static equals(a: PublishDashboardResponse | PlainMessage<PublishDashboardResponse> | undefined, b: PublishDashboardResponse | PlainMessage<PublishDashboardResponse> | undefined): boolean;
}

/**
 * ListDashboardsRequest --  filled in from auth. May include filters in future
 *
 * @generated from message api.v0alpha.ListDashboardsRequest
 */
export declare class ListDashboardsRequest extends Message<ListDashboardsRequest> {
  constructor(data?: PartialMessage<ListDashboardsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListDashboardsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDashboardsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDashboardsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDashboardsRequest;

  static equals(a: ListDashboardsRequest | PlainMessage<ListDashboardsRequest> | undefined, b: ListDashboardsRequest | PlainMessage<ListDashboardsRequest> | undefined): boolean;
}

/**
 * ListDashboardsRes contains an array of dashboard summaries
 *
 * @generated from message api.v0alpha.ListDashboardsResponse
 */
export declare class ListDashboardsResponse extends Message<ListDashboardsResponse> {
  /**
   * @generated from field: repeated api.v0alpha.DashboardSummary dashboard_summaries = 1;
   */
  dashboardSummaries: DashboardSummary[];

  constructor(data?: PartialMessage<ListDashboardsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListDashboardsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDashboardsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDashboardsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDashboardsResponse;

  static equals(a: ListDashboardsResponse | PlainMessage<ListDashboardsResponse> | undefined, b: ListDashboardsResponse | PlainMessage<ListDashboardsResponse> | undefined): boolean;
}

/**
 * Dashboard summary
 *
 * @generated from message api.v0alpha.DashboardSummary
 */
export declare class DashboardSummary extends Message<DashboardSummary> {
  /**
   * unique ID for this dashboard
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * required dashboard title
   *
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * optional dashboard description
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * number of associated panels
   *
   * @generated from field: int32 panel_count = 4;
   */
  panelCount: number;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 5;
   */
  resourceId: string;

  /**
   * standard dashboard flag
   *
   * @generated from field: bool standard_dashboard = 6;
   */
  standardDashboard: boolean;

  constructor(data?: PartialMessage<DashboardSummary>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DashboardSummary";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashboardSummary;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashboardSummary;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashboardSummary;

  static equals(a: DashboardSummary | PlainMessage<DashboardSummary> | undefined, b: DashboardSummary | PlainMessage<DashboardSummary> | undefined): boolean;
}

/**
 * GetDefaultDashboardRequest used in GetDefaultDashboard rpc
 *
 * @generated from message api.v0alpha.GetDefaultDashboardRequest
 */
export declare class GetDefaultDashboardRequest extends Message<GetDefaultDashboardRequest> {
  constructor(data?: PartialMessage<GetDefaultDashboardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetDefaultDashboardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDefaultDashboardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDefaultDashboardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDefaultDashboardRequest;

  static equals(a: GetDefaultDashboardRequest | PlainMessage<GetDefaultDashboardRequest> | undefined, b: GetDefaultDashboardRequest | PlainMessage<GetDefaultDashboardRequest> | undefined): boolean;
}

/**
 * SetDefaultDashboardRequest used in SetDefaultDashboard rpc
 *
 * @generated from message api.v0alpha.SetDefaultDashboardRequest
 */
export declare class SetDefaultDashboardRequest extends Message<SetDefaultDashboardRequest> {
  /**
   * unique ID of dashboard to be set as default
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 2;
   */
  resourceId: string;

  constructor(data?: PartialMessage<SetDefaultDashboardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.SetDefaultDashboardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetDefaultDashboardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetDefaultDashboardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetDefaultDashboardRequest;

  static equals(a: SetDefaultDashboardRequest | PlainMessage<SetDefaultDashboardRequest> | undefined, b: SetDefaultDashboardRequest | PlainMessage<SetDefaultDashboardRequest> | undefined): boolean;
}

/**
 * ListProductTypesRequest used in ListProductTypes rpc
 *
 * @generated from message api.v0alpha.ListProductTypesRequest
 */
export declare class ListProductTypesRequest extends Message<ListProductTypesRequest> {
  constructor(data?: PartialMessage<ListProductTypesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListProductTypesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProductTypesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProductTypesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProductTypesRequest;

  static equals(a: ListProductTypesRequest | PlainMessage<ListProductTypesRequest> | undefined, b: ListProductTypesRequest | PlainMessage<ListProductTypesRequest> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ListProductTypesResult
 */
export declare class ListProductTypesResult extends Message<ListProductTypesResult> {
  /**
   * @generated from field: repeated api.v0alpha.ProductType types = 1;
   */
  types: ProductType[];

  constructor(data?: PartialMessage<ListProductTypesResult>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ListProductTypesResult";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProductTypesResult;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProductTypesResult;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProductTypesResult;

  static equals(a: ListProductTypesResult | PlainMessage<ListProductTypesResult> | undefined, b: ListProductTypesResult | PlainMessage<ListProductTypesResult> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.ProductType
 */
export declare class ProductType extends Message<ProductType> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  constructor(data?: PartialMessage<ProductType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.ProductType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductType;

  static equals(a: ProductType | PlainMessage<ProductType> | undefined, b: ProductType | PlainMessage<ProductType> | undefined): boolean;
}

/**
 * DeleteDashboardRequest used in DeleteDashboard rpc
 *
 * @generated from message api.v0alpha.DeleteDashboardRequest
 */
export declare class DeleteDashboardRequest extends Message<DeleteDashboardRequest> {
  /**
   * unique ID of dashboard to be deleted
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 2;
   */
  resourceId: string;

  constructor(data?: PartialMessage<DeleteDashboardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DeleteDashboardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDashboardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDashboardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDashboardRequest;

  static equals(a: DeleteDashboardRequest | PlainMessage<DeleteDashboardRequest> | undefined, b: DeleteDashboardRequest | PlainMessage<DeleteDashboardRequest> | undefined): boolean;
}

/**
 * GetDashboardRequest used in GetDashboard rpc
 *
 * @generated from message api.v0alpha.GetDashboardRequest
 */
export declare class GetDashboardRequest extends Message<GetDashboardRequest> {
  /**
   * unique ID of dashboard to retrieve
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 2;
   */
  resourceId: string;

  constructor(data?: PartialMessage<GetDashboardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetDashboardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDashboardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDashboardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDashboardRequest;

  static equals(a: GetDashboardRequest | PlainMessage<GetDashboardRequest> | undefined, b: GetDashboardRequest | PlainMessage<GetDashboardRequest> | undefined): boolean;
}

/**
 * CreateDashboardRequest used in the CreateDashboard rpc
 *
 * @generated from message api.v0alpha.CreateDashboardRequest
 */
export declare class CreateDashboardRequest extends Message<CreateDashboardRequest> {
  /**
   * required dashboard title
   *
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * optional dashboard description
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * layout of associated dashboard panels
   *
   * @generated from field: api.v0alpha.DashboardLayout layout = 3;
   */
  layout?: DashboardLayout;

  /**
   * the dashboards viewing params
   *
   * @generated from field: api.v0alpha.DashboardView view = 4;
   */
  view?: DashboardView;

  /**
   * the type of dashboard, with type specific components
   *
   * @generated from field: api.v0alpha.DashboardType type = 5;
   */
  type?: DashboardType;

  constructor(data?: PartialMessage<CreateDashboardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.CreateDashboardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDashboardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDashboardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDashboardRequest;

  static equals(a: CreateDashboardRequest | PlainMessage<CreateDashboardRequest> | undefined, b: CreateDashboardRequest | PlainMessage<CreateDashboardRequest> | undefined): boolean;
}

/**
 * CreateDashboardResponse used in the CreateDashboard rpc
 *
 * @generated from message api.v0alpha.CreateDashboardResponse
 */
export declare class CreateDashboardResponse extends Message<CreateDashboardResponse> {
  /**
   * unique ID of the dashboard created
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * resource id of the dashboard created
   *
   * @generated from field: string resource_id = 2;
   */
  resourceId: string;

  constructor(data?: PartialMessage<CreateDashboardResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.CreateDashboardResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDashboardResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDashboardResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDashboardResponse;

  static equals(a: CreateDashboardResponse | PlainMessage<CreateDashboardResponse> | undefined, b: CreateDashboardResponse | PlainMessage<CreateDashboardResponse> | undefined): boolean;
}

/**
 * DashboardLayout contains location information for a dashboards panels
 *
 * @generated from message api.v0alpha.DashboardLayout
 */
export declare class DashboardLayout extends Message<DashboardLayout> {
  /**
   * location information for each panel
   *
   * @generated from field: repeated api.v0alpha.DashboardPanel panels = 1;
   */
  panels: DashboardPanel[];

  constructor(data?: PartialMessage<DashboardLayout>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DashboardLayout";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashboardLayout;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashboardLayout;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashboardLayout;

  static equals(a: DashboardLayout | PlainMessage<DashboardLayout> | undefined, b: DashboardLayout | PlainMessage<DashboardLayout> | undefined): boolean;
}

/**
 * location fields subject to change
 *
 * @generated from message api.v0alpha.DashboardPanel
 */
export declare class DashboardPanel extends Message<DashboardPanel> {
  /**
   * panel_source determines the fields needed to
   * retrieve the panel data and is used to determine
   * who to pull the data from
   *
   * @generated from field: api.v0alpha.PanelSource panel_source = 1;
   */
  panelSource?: PanelSource;

  /**
   * height of panel
   *
   * @generated from field: int64 row_length = 2;
   */
  rowLength: bigint;

  /**
   * length of panel
   *
   * @generated from field: int64 column_length = 3;
   */
  columnLength: bigint;

  /**
   * absolute x position of panel
   *
   * @generated from field: int64 row_start = 4;
   */
  rowStart: bigint;

  /**
   * absoulute y position of panel
   *
   * @generated from field: int64 column_start = 5;
   */
  columnStart: bigint;

  constructor(data?: PartialMessage<DashboardPanel>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DashboardPanel";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashboardPanel;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashboardPanel;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashboardPanel;

  static equals(a: DashboardPanel | PlainMessage<DashboardPanel> | undefined, b: DashboardPanel | PlainMessage<DashboardPanel> | undefined): boolean;
}

/**
 * PanelSource is used per APP and each message in the oneOf is used to determine what APP to call
 *
 * @generated from message api.v0alpha.PanelSource
 */
export declare class PanelSource extends Message<PanelSource> {
  /**
   * added for each new panel type used by multiple teams
   *
   * @generated from oneof api.v0alpha.PanelSource.panel_type
   */
  panelType: {
    /**
     * Used for new BI insights in operator
     *
     * @generated from field: string insight_id = 1;
     */
    value: string;
    case: "insightId";
  } | {
    /**
     * Used for old insights in BI
     *
     * @generated from field: string legacy_insight_id = 2;
     */
    value: string;
    case: "legacyInsightId";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<PanelSource>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.PanelSource";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PanelSource;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PanelSource;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PanelSource;

  static equals(a: PanelSource | PlainMessage<PanelSource> | undefined, b: PanelSource | PlainMessage<PanelSource> | undefined): boolean;
}

/**
 * Dashboard contains all fields for a dashboard
 *
 * @generated from message api.v0alpha.Dashboard
 */
export declare class Dashboard extends Message<Dashboard> {
  /**
   * unique ID for this dashboard
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * required dashboard title
   *
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * optional dashboard description
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * layout of associated panels
   *
   * @generated from field: api.v0alpha.DashboardLayout layout = 4;
   */
  layout?: DashboardLayout;

  /**
   * viewing params of dashboard
   *
   * @generated from field: api.v0alpha.DashboardView view = 5;
   */
  view?: DashboardView;

  /**
   * dashboard type, with type specific components
   *
   * @generated from field: api.v0alpha.DashboardType type = 6;
   */
  type?: DashboardType;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 7;
   */
  resourceId: string;

  /**
   * standard dashboard flag
   *
   * @generated from field: bool standard_dashboard = 8;
   */
  standardDashboard: boolean;

  constructor(data?: PartialMessage<Dashboard>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.Dashboard";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Dashboard;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Dashboard;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Dashboard;

  static equals(a: Dashboard | PlainMessage<Dashboard> | undefined, b: Dashboard | PlainMessage<Dashboard> | undefined): boolean;
}

/**
 * DashboardType, specifies what type of dashboard we are dealing with
 *
 * @generated from message api.v0alpha.DashboardType
 */
export declare class DashboardType extends Message<DashboardType> {
  /**
   * @generated from oneof api.v0alpha.DashboardType.type
   */
  type: {
    /**
     * @generated from field: api.v0alpha.HistoricConfig historic = 6;
     */
    value: HistoricConfig;
    case: "historic";
  } | {
    /**
     * @generated from field: api.v0alpha.RealTimeConfig real_time = 7;
     */
    value: RealTimeConfig;
    case: "realTime";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<DashboardType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DashboardType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashboardType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashboardType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashboardType;

  static equals(a: DashboardType | PlainMessage<DashboardType> | undefined, b: DashboardType | PlainMessage<DashboardType> | undefined): boolean;
}

/**
 * Historic Dashboard type
 *
 * @generated from message api.v0alpha.HistoricConfig
 */
export declare class HistoricConfig extends Message<HistoricConfig> {
  /**
   * amount of history the dashboard consumes
   *
   * @generated from oneof api.v0alpha.HistoricConfig.time_span
   */
  timeSpan: {
    /**
     * @generated from field: api.v0alpha.TimeSpan.Interval time_span_simple = 1;
     */
    value: TimeSpan_Interval;
    case: "timeSpanSimple";
  } | {
    /**
     * @generated from field: api.v0alpha.TimeSpan.Range time_span_range = 3;
     */
    value: TimeSpan_Range;
    case: "timeSpanRange";
  } | { case: undefined; value?: undefined };

  /**
   * The default time zone to view the historic data by
   *
   * @generated from field: api.commons.TimeZone time_zone = 4;
   */
  timeZone: TimeZone;

  constructor(data?: PartialMessage<HistoricConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.HistoricConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoricConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoricConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoricConfig;

  static equals(a: HistoricConfig | PlainMessage<HistoricConfig> | undefined, b: HistoricConfig | PlainMessage<HistoricConfig> | undefined): boolean;
}

/**
 * Real Time Dashboard type
 * has no time_span, is only concerned with the present
 *
 * @generated from message api.v0alpha.RealTimeConfig
 */
export declare class RealTimeConfig extends Message<RealTimeConfig> {
  constructor(data?: PartialMessage<RealTimeConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.RealTimeConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RealTimeConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RealTimeConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RealTimeConfig;

  static equals(a: RealTimeConfig | PlainMessage<RealTimeConfig> | undefined, b: RealTimeConfig | PlainMessage<RealTimeConfig> | undefined): boolean;
}

/**
 * UpdateDashboard used for the update RPC
 *
 * @generated from message api.v0alpha.UpdateDashboardRequest
 */
export declare class UpdateDashboardRequest extends Message<UpdateDashboardRequest> {
  /**
   * unique ID for this dashboard
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * required dashboard title
   *
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * optional dashboard description
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * layout of associated panels
   *
   * @generated from field: api.v0alpha.DashboardLayout layout = 4;
   */
  layout?: DashboardLayout;

  /**
   * viewing params of dashboard
   *
   * @generated from field: api.v0alpha.DashboardView view = 5;
   */
  view?: DashboardView;

  /**
   * dashboard type, with type specific components
   *
   * @generated from field: api.v0alpha.DashboardType type = 6;
   */
  type?: DashboardType;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 7;
   */
  resourceId: string;

  constructor(data?: PartialMessage<UpdateDashboardRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateDashboardRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDashboardRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDashboardRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDashboardRequest;

  static equals(a: UpdateDashboardRequest | PlainMessage<UpdateDashboardRequest> | undefined, b: UpdateDashboardRequest | PlainMessage<UpdateDashboardRequest> | undefined): boolean;
}

/**
 * UpdateDashboardTitleAndDescriptionResponse used for the update RPC
 *
 * @generated from message api.v0alpha.UpdateDashboardTitleAndDescriptionRequest
 */
export declare class UpdateDashboardTitleAndDescriptionRequest extends Message<UpdateDashboardTitleAndDescriptionRequest> {
  /**
   * unique ID for dashboard to update
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * required new dashboard title
   *
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * optional new dashboard description
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 4;
   */
  resourceId: string;

  constructor(data?: PartialMessage<UpdateDashboardTitleAndDescriptionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateDashboardTitleAndDescriptionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDashboardTitleAndDescriptionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDashboardTitleAndDescriptionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDashboardTitleAndDescriptionRequest;

  static equals(a: UpdateDashboardTitleAndDescriptionRequest | PlainMessage<UpdateDashboardTitleAndDescriptionRequest> | undefined, b: UpdateDashboardTitleAndDescriptionRequest | PlainMessage<UpdateDashboardTitleAndDescriptionRequest> | undefined): boolean;
}

/**
 * UpdateDashboardTitleAndDescriptionRequest used for the update RPC
 *
 * @generated from message api.v0alpha.UpdateDashboardLayoutRequest
 */
export declare class UpdateDashboardLayoutRequest extends Message<UpdateDashboardLayoutRequest> {
  /**
   * unique ID for dashboard to update
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * layout of associated panels
   *
   * @generated from field: api.v0alpha.DashboardLayout layout = 2;
   */
  layout?: DashboardLayout;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 3;
   */
  resourceId: string;

  constructor(data?: PartialMessage<UpdateDashboardLayoutRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateDashboardLayoutRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDashboardLayoutRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDashboardLayoutRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDashboardLayoutRequest;

  static equals(a: UpdateDashboardLayoutRequest | PlainMessage<UpdateDashboardLayoutRequest> | undefined, b: UpdateDashboardLayoutRequest | PlainMessage<UpdateDashboardLayoutRequest> | undefined): boolean;
}

/**
 * UpdateDashboardViewRequest  used in the update RPC
 *
 * @generated from message api.v0alpha.UpdateDashboardViewRequest
 */
export declare class UpdateDashboardViewRequest extends Message<UpdateDashboardViewRequest> {
  /**
   * unique ID of dashboard to update
   *
   * @generated from field: string dashboard_id = 1;
   */
  dashboardId: string;

  /**
   * the dashboards viewing params
   *
   * @generated from field: api.v0alpha.DashboardView view = 2;
   */
  view?: DashboardView;

  /**
   * resource id of the dashboard
   *
   * @generated from field: string resource_id = 3;
   */
  resourceId: string;

  constructor(data?: PartialMessage<UpdateDashboardViewRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.UpdateDashboardViewRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDashboardViewRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDashboardViewRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDashboardViewRequest;

  static equals(a: UpdateDashboardViewRequest | PlainMessage<UpdateDashboardViewRequest> | undefined, b: UpdateDashboardViewRequest | PlainMessage<UpdateDashboardViewRequest> | undefined): boolean;
}

/**
 * DashboardView contains the viewing parameters that make up the view of a dashboard
 *
 * @generated from message api.v0alpha.DashboardView
 */
export declare class DashboardView extends Message<DashboardView> {
  /**
   * list of clients whose data will be viewed
   *
   * @generated from field: repeated string org_ids = 2;
   */
  orgIds: string[];

  constructor(data?: PartialMessage<DashboardView>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.DashboardView";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashboardView;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashboardView;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashboardView;

  static equals(a: DashboardView | PlainMessage<DashboardView> | undefined, b: DashboardView | PlainMessage<DashboardView> | undefined): boolean;
}

/**
 * TimeSpan is used to determine the time scope of data retrieved from the dash
 *
 * @generated from message api.v0alpha.TimeSpan
 */
export declare class TimeSpan extends Message<TimeSpan> {
  constructor(data?: PartialMessage<TimeSpan>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.TimeSpan";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimeSpan;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimeSpan;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimeSpan;

  static equals(a: TimeSpan | PlainMessage<TimeSpan> | undefined, b: TimeSpan | PlainMessage<TimeSpan> | undefined): boolean;
}

/**
 * simple time selection
 *
 * @generated from enum api.v0alpha.TimeSpan.Interval
 */
export declare enum TimeSpan_Interval {
  /**
   * @generated from enum value: TODAY = 0;
   */
  TODAY = 0,

  /**
   * @generated from enum value: YESTERDAY = 1;
   */
  YESTERDAY = 1,

  /**
   * @generated from enum value: LAST_30_DAYS = 2;
   */
  LAST_30_DAYS = 2,

  /**
   * @generated from enum value: MONTH_TO_DATE = 3;
   */
  MONTH_TO_DATE = 3,

  /**
   * @generated from enum value: LAST_2_WEEKS = 4;
   */
  LAST_2_WEEKS = 4,

  /**
   * @generated from enum value: THIS_WEEK = 5;
   */
  THIS_WEEK = 5,

  /**
   * @generated from enum value: THIS_MONTH = 6;
   */
  THIS_MONTH = 6,

  /**
   * @generated from enum value: THIS_DAY_LAST_WEEK = 7;
   */
  THIS_DAY_LAST_WEEK = 7,

  /**
   * @generated from enum value: PREVIOUS_MONTH = 8;
   */
  PREVIOUS_MONTH = 8,
}

/**
 * absolute time range
 *
 * @generated from message api.v0alpha.TimeSpan.Range
 */
export declare class TimeSpan_Range extends Message<TimeSpan_Range> {
  /**
   * @generated from field: google.protobuf.Timestamp start = 1;
   */
  start?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end = 2;
   */
  end?: Timestamp;

  constructor(data?: PartialMessage<TimeSpan_Range>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.TimeSpan.Range";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimeSpan_Range;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimeSpan_Range;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimeSpan_Range;

  static equals(a: TimeSpan_Range | PlainMessage<TimeSpan_Range> | undefined, b: TimeSpan_Range | PlainMessage<TimeSpan_Range> | undefined): boolean;
}

