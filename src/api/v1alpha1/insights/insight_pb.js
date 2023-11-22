// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/insights/insight.proto (package api.v1alpha1.insights, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { InsightPermissionType, InsightType, InsightVfsSchemaType } from "../../commons/insights_pb.js";

/**
 * Insight is a data handling entity used to process data
 * Insight can represent an object that belongs to the user
 * Insight can represent an object inside the common lib
 *
 * @generated from message api.v1alpha1.insights.Insight
 */
export const Insight = proto3.makeMessageType(
  "api.v1alpha1.insights.Insight",
  () => [
    { no: 2, name: "insight_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "insight_type", kind: "enum", T: proto3.getEnumType(InsightType) },
    { no: 6, name: "insight_version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "body", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "insight_permission_type", kind: "enum", T: proto3.getEnumType(InsightPermissionType) },
    { no: 9, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "standard_insight", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * PublishInsightRequest is the request to publish an insight.
 *
 * @generated from message api.v1alpha1.insights.PublishInsightRequest
 */
export const PublishInsightRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.PublishInsightRequest",
  () => [
    { no: 1, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "destination_resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * PublishInsightResponse contains the Insight that was published.
 *
 * @generated from message api.v1alpha1.insights.PublishInsightResponse
 */
export const PublishInsightResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.PublishInsightResponse",
  () => [
    { no: 1, name: "insight", kind: "message", T: Insight },
  ],
);

/**
 * CreateInsightRequest is the request to create an insight.
 *
 * @generated from message api.v1alpha1.insights.CreateInsightRequest
 */
export const CreateInsightRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.CreateInsightRequest",
  () => [
    { no: 1, name: "insight", kind: "message", T: Insight },
  ],
);

/**
 * CreateInsightResponse contains the Insight that was created.
 *
 * @generated from message api.v1alpha1.insights.CreateInsightResponse
 */
export const CreateInsightResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.CreateInsightResponse",
  () => [
    { no: 1, name: "insight", kind: "message", T: Insight },
  ],
);

/**
 * ListInsightsRequest is the request to list insights.
 *
 * @generated from message api.v1alpha1.insights.ListInsightsRequest
 */
export const ListInsightsRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.ListInsightsRequest",
  () => [
    { no: 2, name: "insight_permission_types", kind: "enum", T: proto3.getEnumType(InsightPermissionType), repeated: true },
  ],
);

/**
 * ListInsightsResponse contains the Insights that were listed.
 *
 * @generated from message api.v1alpha1.insights.ListInsightsResponse
 */
export const ListInsightsResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.ListInsightsResponse",
  () => [
    { no: 1, name: "insights", kind: "message", T: Insight, repeated: true },
  ],
);

/**
 * UpdateInsightRequest is the request to update an insight.
 *
 * @generated from message api.v1alpha1.insights.UpdateInsightRequest
 */
export const UpdateInsightRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.UpdateInsightRequest",
  () => [
    { no: 1, name: "insight", kind: "message", T: Insight },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateInsightResponse contains the Insight that was updated.
 *
 * @generated from message api.v1alpha1.insights.UpdateInsightResponse
 */
export const UpdateInsightResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.UpdateInsightResponse",
  () => [
    { no: 1, name: "insight", kind: "message", T: Insight },
  ],
);

/**
 * DeleteInsightRequest is the request to delete an insight.
 *
 * @generated from message api.v1alpha1.insights.DeleteInsightRequest
 */
export const DeleteInsightRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.DeleteInsightRequest",
  () => [
    { no: 1, name: "insight_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DeleteInsightResponse contains the Insight that was deleted.
 *
 * @generated from message api.v1alpha1.insights.DeleteInsightResponse
 */
export const DeleteInsightResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.DeleteInsightResponse",
  () => [
    { no: 1, name: "insight", kind: "message", T: Insight },
  ],
);

/**
 * GetInsightRequest is the request to get an insight.
 *
 * @generated from message api.v1alpha1.insights.GetInsightRequest
 */
export const GetInsightRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.GetInsightRequest",
  () => [
    { no: 1, name: "insight_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "resource_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetInsightResponse contains the Insight that was retrieved.
 *
 * @generated from message api.v1alpha1.insights.GetInsightResponse
 */
export const GetInsightResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.GetInsightResponse",
  () => [
    { no: 1, name: "insight", kind: "message", T: Insight },
  ],
);

/**
 * GetVfsSchemaRequest is request to get vfs schema using alias
 *
 * @generated from message api.v1alpha1.insights.GetVfsSchemaRequest
 */
export const GetVfsSchemaRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.GetVfsSchemaRequest",
  () => [
    { no: 1, name: "alias_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetVfsSchemaResponse is response with vfs schema
 *
 * @generated from message api.v1alpha1.insights.GetVfsSchemaResponse
 */
export const GetVfsSchemaResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.GetVfsSchemaResponse",
  () => [
    { no: 1, name: "fields", kind: "message", T: GetVfsSchemaResponse_Field, repeated: true },
    { no: 2, name: "vfs_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "alias_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Field represents a column in a dataframe
 *
 * @generated from message api.v1alpha1.insights.GetVfsSchemaResponse.Field
 */
export const GetVfsSchemaResponse_Field = proto3.makeMessageType(
  "api.v1alpha1.insights.GetVfsSchemaResponse.Field",
  () => [
    { no: 1, name: "column_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "column_type", kind: "enum", T: proto3.getEnumType(InsightVfsSchemaType) },
    { no: 3, name: "column_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GetVfsSchemaResponse_Field"},
);

/**
 * ListVfsesRequest is request to list vfses
 *
 * @generated from message api.v1alpha1.insights.ListVfsesRequest
 */
export const ListVfsesRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.ListVfsesRequest",
  [],
);

/**
 * ListVfsesResponse is response with vfs aliases
 *
 * @generated from message api.v1alpha1.insights.ListVfsesResponse
 */
export const ListVfsesResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.ListVfsesResponse",
  () => [
    { no: 1, name: "aliases", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * ListVfsSchemasRequest is request to list vfs schemas
 *
 * @generated from message api.v1alpha1.insights.ListVfsSchemasRequest
 */
export const ListVfsSchemasRequest = proto3.makeMessageType(
  "api.v1alpha1.insights.ListVfsSchemasRequest",
  [],
);

/**
 * ListVfsSchemasResponse is response with vfs schemas
 *
 * @generated from message api.v1alpha1.insights.ListVfsSchemasResponse
 */
export const ListVfsSchemasResponse = proto3.makeMessageType(
  "api.v1alpha1.insights.ListVfsSchemasResponse",
  () => [
    { no: 1, name: "vfs_schemas", kind: "message", T: GetVfsSchemaResponse, repeated: true },
  ],
);

