// @generated by protoc-gen-es v1.4.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/dashboards.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { TimeZone } from "../commons/org_pb.js";

/**
 * PublishDashboardRequest used in PublishDashboard rpc
 *
 * @generated from message api.v0alpha.PublishDashboardRequest
 */
export const PublishDashboardRequest = proto3.makeMessageType(
  "api.v0alpha.PublishDashboardRequest",
  () => [
    { no: 1, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "destination_resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * PublishDashboardResponse used in PublishDashboard rpc
 *
 * @generated from message api.v0alpha.PublishDashboardResponse
 */
export const PublishDashboardResponse = proto3.makeMessageType(
  "api.v0alpha.PublishDashboardResponse",
  () => [
    { no: 1, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListDashboardsRequest --  filled in from auth. May include filters in future
 *
 * @generated from message api.v0alpha.ListDashboardsRequest
 */
export const ListDashboardsRequest = proto3.makeMessageType(
  "api.v0alpha.ListDashboardsRequest",
  [],
);

/**
 * ListDashboardsRes contains an array of dashboard summaries
 *
 * @generated from message api.v0alpha.ListDashboardsResponse
 */
export const ListDashboardsResponse = proto3.makeMessageType(
  "api.v0alpha.ListDashboardsResponse",
  () => [
    { no: 1, name: "dashboard_summaries", kind: "message", T: DashboardSummary, repeated: true },
  ],
);

/**
 * Dashboard summary
 *
 * @generated from message api.v0alpha.DashboardSummary
 */
export const DashboardSummary = proto3.makeMessageType(
  "api.v0alpha.DashboardSummary",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "panel_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "standard_dashboard", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * GetDefaultDashboardRequest used in GetDefaultDashboard rpc
 *
 * @generated from message api.v0alpha.GetDefaultDashboardRequest
 */
export const GetDefaultDashboardRequest = proto3.makeMessageType(
  "api.v0alpha.GetDefaultDashboardRequest",
  [],
);

/**
 * SetDefaultDashboardRequest used in SetDefaultDashboard rpc
 *
 * @generated from message api.v0alpha.SetDefaultDashboardRequest
 */
export const SetDefaultDashboardRequest = proto3.makeMessageType(
  "api.v0alpha.SetDefaultDashboardRequest",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListProductTypesRequest used in ListProductTypes rpc
 *
 * @generated from message api.v0alpha.ListProductTypesRequest
 */
export const ListProductTypesRequest = proto3.makeMessageType(
  "api.v0alpha.ListProductTypesRequest",
  [],
);

/**
 * @generated from message api.v0alpha.ListProductTypesResult
 */
export const ListProductTypesResult = proto3.makeMessageType(
  "api.v0alpha.ListProductTypesResult",
  () => [
    { no: 1, name: "types", kind: "message", T: ProductType, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.ProductType
 */
export const ProductType = proto3.makeMessageType(
  "api.v0alpha.ProductType",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DeleteDashboardRequest used in DeleteDashboard rpc
 *
 * @generated from message api.v0alpha.DeleteDashboardRequest
 */
export const DeleteDashboardRequest = proto3.makeMessageType(
  "api.v0alpha.DeleteDashboardRequest",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetDashboardRequest used in GetDashboard rpc
 *
 * @generated from message api.v0alpha.GetDashboardRequest
 */
export const GetDashboardRequest = proto3.makeMessageType(
  "api.v0alpha.GetDashboardRequest",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * CreateDashboardRequest used in the CreateDashboard rpc
 *
 * @generated from message api.v0alpha.CreateDashboardRequest
 */
export const CreateDashboardRequest = proto3.makeMessageType(
  "api.v0alpha.CreateDashboardRequest",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "layout", kind: "message", T: DashboardLayout },
    { no: 4, name: "view", kind: "message", T: DashboardView },
    { no: 5, name: "type", kind: "message", T: DashboardType },
  ],
);

/**
 * CreateDashboardResponse used in the CreateDashboard rpc
 *
 * @generated from message api.v0alpha.CreateDashboardResponse
 */
export const CreateDashboardResponse = proto3.makeMessageType(
  "api.v0alpha.CreateDashboardResponse",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DashboardLayout contains location information for a dashboards panels
 *
 * @generated from message api.v0alpha.DashboardLayout
 */
export const DashboardLayout = proto3.makeMessageType(
  "api.v0alpha.DashboardLayout",
  () => [
    { no: 1, name: "panels", kind: "message", T: DashboardPanel, repeated: true },
  ],
);

/**
 * location fields subject to change
 *
 * @generated from message api.v0alpha.DashboardPanel
 */
export const DashboardPanel = proto3.makeMessageType(
  "api.v0alpha.DashboardPanel",
  () => [
    { no: 1, name: "panel_source", kind: "message", T: PanelSource },
    { no: 2, name: "row_length", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "column_length", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "row_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "column_start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * PanelSource is used per APP and each message in the oneOf is used to determine what APP to call
 *
 * @generated from message api.v0alpha.PanelSource
 */
export const PanelSource = proto3.makeMessageType(
  "api.v0alpha.PanelSource",
  () => [
    { no: 1, name: "insight_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "panel_type" },
    { no: 2, name: "legacy_insight_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "panel_type" },
  ],
);

/**
 * Dashboard contains all fields for a dashboard
 *
 * @generated from message api.v0alpha.Dashboard
 */
export const Dashboard = proto3.makeMessageType(
  "api.v0alpha.Dashboard",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "layout", kind: "message", T: DashboardLayout },
    { no: 5, name: "view", kind: "message", T: DashboardView },
    { no: 6, name: "type", kind: "message", T: DashboardType },
    { no: 7, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "standard_dashboard", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * DashboardType, specifies what type of dashboard we are dealing with
 *
 * @generated from message api.v0alpha.DashboardType
 */
export const DashboardType = proto3.makeMessageType(
  "api.v0alpha.DashboardType",
  () => [
    { no: 6, name: "historic", kind: "message", T: HistoricConfig, oneof: "type" },
    { no: 7, name: "real_time", kind: "message", T: RealTimeConfig, oneof: "type" },
  ],
);

/**
 * Historic Dashboard type
 *
 * @generated from message api.v0alpha.HistoricConfig
 */
export const HistoricConfig = proto3.makeMessageType(
  "api.v0alpha.HistoricConfig",
  () => [
    { no: 1, name: "time_span_simple", kind: "enum", T: proto3.getEnumType(TimeSpan_Interval), oneof: "time_span" },
    { no: 3, name: "time_span_range", kind: "message", T: TimeSpan_Range, oneof: "time_span" },
    { no: 4, name: "time_zone", kind: "enum", T: proto3.getEnumType(TimeZone) },
  ],
);

/**
 * Real Time Dashboard type
 * has no time_span, is only concerned with the present
 *
 * @generated from message api.v0alpha.RealTimeConfig
 */
export const RealTimeConfig = proto3.makeMessageType(
  "api.v0alpha.RealTimeConfig",
  [],
);

/**
 * UpdateDashboard used for the update RPC
 *
 * @generated from message api.v0alpha.UpdateDashboardRequest
 */
export const UpdateDashboardRequest = proto3.makeMessageType(
  "api.v0alpha.UpdateDashboardRequest",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "layout", kind: "message", T: DashboardLayout },
    { no: 5, name: "view", kind: "message", T: DashboardView },
    { no: 6, name: "type", kind: "message", T: DashboardType },
    { no: 7, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * UpdateDashboardTitleAndDescriptionResponse used for the update RPC
 *
 * @generated from message api.v0alpha.UpdateDashboardTitleAndDescriptionRequest
 */
export const UpdateDashboardTitleAndDescriptionRequest = proto3.makeMessageType(
  "api.v0alpha.UpdateDashboardTitleAndDescriptionRequest",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * UpdateDashboardTitleAndDescriptionRequest used for the update RPC
 *
 * @generated from message api.v0alpha.UpdateDashboardLayoutRequest
 */
export const UpdateDashboardLayoutRequest = proto3.makeMessageType(
  "api.v0alpha.UpdateDashboardLayoutRequest",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "layout", kind: "message", T: DashboardLayout },
    { no: 3, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * UpdateDashboardViewRequest  used in the update RPC
 *
 * @generated from message api.v0alpha.UpdateDashboardViewRequest
 */
export const UpdateDashboardViewRequest = proto3.makeMessageType(
  "api.v0alpha.UpdateDashboardViewRequest",
  () => [
    { no: 1, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "view", kind: "message", T: DashboardView },
    { no: 3, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DashboardView contains the viewing parameters that make up the view of a dashboard
 *
 * @generated from message api.v0alpha.DashboardView
 */
export const DashboardView = proto3.makeMessageType(
  "api.v0alpha.DashboardView",
  () => [
    { no: 2, name: "org_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * TimeSpan is used to determine the time scope of data retrieved from the dash
 *
 * @generated from message api.v0alpha.TimeSpan
 */
export const TimeSpan = proto3.makeMessageType(
  "api.v0alpha.TimeSpan",
  [],
);

/**
 * simple time selection
 *
 * @generated from enum api.v0alpha.TimeSpan.Interval
 */
export const TimeSpan_Interval = proto3.makeEnum(
  "api.v0alpha.TimeSpan.Interval",
  [
    {no: 0, name: "TODAY"},
    {no: 1, name: "YESTERDAY"},
    {no: 2, name: "LAST_30_DAYS"},
    {no: 3, name: "MONTH_TO_DATE"},
    {no: 4, name: "LAST_2_WEEKS"},
    {no: 5, name: "THIS_WEEK"},
    {no: 6, name: "THIS_MONTH"},
    {no: 7, name: "THIS_DAY_LAST_WEEK"},
    {no: 8, name: "PREVIOUS_MONTH"},
  ],
);

/**
 * absolute time range
 *
 * @generated from message api.v0alpha.TimeSpan.Range
 */
export const TimeSpan_Range = proto3.makeMessageType(
  "api.v0alpha.TimeSpan.Range",
  () => [
    { no: 1, name: "start", kind: "message", T: Timestamp },
    { no: 2, name: "end", kind: "message", T: Timestamp },
  ],
  {localName: "TimeSpan_Range"},
);

