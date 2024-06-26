// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/insights/insight.proto (package api.v1alpha1.insights, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { InsightPermissionType, InsightType, InsightVfsSchemaType } from "../../commons/insights_pb.js";

/**
 * Insight is a data handling entity used to process data
 * Insight can represent an object that belongs to the user
 * Insight can represent an object inside the common lib
 *
 * @generated from message api.v1alpha1.insights.Insight
 */
export declare class Insight extends Message<Insight> {
  /**
   * Required - unique insight snowflake id
   *
   * @generated from field: int64 insight_id = 2 [jstype = JS_STRING];
   */
  insightId: string;

  /**
   * Required - name of the insight
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * Required - description of the insight
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * Required - enum type used to deserialize body
   *
   * @generated from field: api.commons.InsightType insight_type = 5;
   */
  insightType: InsightType;

  /**
   * Required - version of the insight
   *
   * @generated from field: uint32 insight_version = 6;
   */
  insightVersion: number;

  /**
   * Required - serialized json of the insight body
   *
   * @generated from field: string body = 7;
   */
  body: string;

  /**
   * Required - enum type used to deserialize body
   *
   * @generated from field: api.commons.InsightPermissionType insight_permission_type = 8;
   */
  insightPermissionType: InsightPermissionType;

  /**
   * unique resource id of the insight
   *
   * @generated from field: string resource_id = 9;
   */
  resourceId: string;

  /**
   * whether the insight is a standard insight
   *
   * @generated from field: bool standard_insight = 10;
   */
  standardInsight: boolean;

  constructor(data?: PartialMessage<Insight>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.Insight";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Insight;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Insight;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Insight;

  static equals(a: Insight | PlainMessage<Insight> | undefined, b: Insight | PlainMessage<Insight> | undefined): boolean;
}

/**
 * PublishInsightRequest is the request to publish an insight.
 *
 * @generated from message api.v1alpha1.insights.PublishInsightRequest
 */
export declare class PublishInsightRequest extends Message<PublishInsightRequest> {
  /**
   * Required - resource id of the insight to publish
   *
   * @generated from field: string resource_id = 1;
   */
  resourceId: string;

  /**
   * Optional - resource id of the destination to publish to
   * If not provided, a new standard insight will be created
   *
   * @generated from field: string destination_resource_id = 2;
   */
  destinationResourceId: string;

  constructor(data?: PartialMessage<PublishInsightRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.PublishInsightRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishInsightRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishInsightRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishInsightRequest;

  static equals(a: PublishInsightRequest | PlainMessage<PublishInsightRequest> | undefined, b: PublishInsightRequest | PlainMessage<PublishInsightRequest> | undefined): boolean;
}

/**
 * PublishInsightResponse contains the Insight that was published.
 *
 * @generated from message api.v1alpha1.insights.PublishInsightResponse
 */
export declare class PublishInsightResponse extends Message<PublishInsightResponse> {
  /**
   * Published entity
   *
   * @generated from field: api.v1alpha1.insights.Insight insight = 1;
   */
  insight?: Insight;

  constructor(data?: PartialMessage<PublishInsightResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.PublishInsightResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishInsightResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishInsightResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishInsightResponse;

  static equals(a: PublishInsightResponse | PlainMessage<PublishInsightResponse> | undefined, b: PublishInsightResponse | PlainMessage<PublishInsightResponse> | undefined): boolean;
}

/**
 * CreateInsightRequest is the request to create an insight.
 *
 * @generated from message api.v1alpha1.insights.CreateInsightRequest
 */
export declare class CreateInsightRequest extends Message<CreateInsightRequest> {
  /**
   * Required - insight to be created
   *
   * @generated from field: api.v1alpha1.insights.Insight insight = 1;
   */
  insight?: Insight;

  constructor(data?: PartialMessage<CreateInsightRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.CreateInsightRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateInsightRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateInsightRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateInsightRequest;

  static equals(a: CreateInsightRequest | PlainMessage<CreateInsightRequest> | undefined, b: CreateInsightRequest | PlainMessage<CreateInsightRequest> | undefined): boolean;
}

/**
 * CreateInsightResponse contains the Insight that was created.
 *
 * @generated from message api.v1alpha1.insights.CreateInsightResponse
 */
export declare class CreateInsightResponse extends Message<CreateInsightResponse> {
  /**
   * Created entity
   *
   * @generated from field: api.v1alpha1.insights.Insight insight = 1;
   */
  insight?: Insight;

  constructor(data?: PartialMessage<CreateInsightResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.CreateInsightResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateInsightResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateInsightResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateInsightResponse;

  static equals(a: CreateInsightResponse | PlainMessage<CreateInsightResponse> | undefined, b: CreateInsightResponse | PlainMessage<CreateInsightResponse> | undefined): boolean;
}

/**
 * ListInsightsRequest is the request to list insights.
 *
 * @generated from message api.v1alpha1.insights.ListInsightsRequest
 */
export declare class ListInsightsRequest extends Message<ListInsightsRequest> {
  /**
   * Optional - list of insight permission types to filter by
   *
   * @generated from field: repeated api.commons.InsightPermissionType insight_permission_types = 2;
   */
  insightPermissionTypes: InsightPermissionType[];

  constructor(data?: PartialMessage<ListInsightsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.ListInsightsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListInsightsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListInsightsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListInsightsRequest;

  static equals(a: ListInsightsRequest | PlainMessage<ListInsightsRequest> | undefined, b: ListInsightsRequest | PlainMessage<ListInsightsRequest> | undefined): boolean;
}

/**
 * ListInsightsResponse contains the Insights that were listed.
 *
 * @generated from message api.v1alpha1.insights.ListInsightsResponse
 */
export declare class ListInsightsResponse extends Message<ListInsightsResponse> {
  /**
   * Requested insights
   *
   * @generated from field: repeated api.v1alpha1.insights.Insight insights = 1;
   */
  insights: Insight[];

  constructor(data?: PartialMessage<ListInsightsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.ListInsightsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListInsightsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListInsightsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListInsightsResponse;

  static equals(a: ListInsightsResponse | PlainMessage<ListInsightsResponse> | undefined, b: ListInsightsResponse | PlainMessage<ListInsightsResponse> | undefined): boolean;
}

/**
 * ListOrgInsightsRequest is the request to list insights for an org in support.
 *
 * @generated from message api.v1alpha1.insights.ListOrgInsightsRequest
 */
export declare class ListOrgInsightsRequest extends Message<ListOrgInsightsRequest> {
  /**
   * Required - org id to list insights for
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  constructor(data?: PartialMessage<ListOrgInsightsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.ListOrgInsightsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrgInsightsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrgInsightsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrgInsightsRequest;

  static equals(a: ListOrgInsightsRequest | PlainMessage<ListOrgInsightsRequest> | undefined, b: ListOrgInsightsRequest | PlainMessage<ListOrgInsightsRequest> | undefined): boolean;
}

/**
 * ListOrgInsightsResponse contains the Insights that were listed.
 *
 * @generated from message api.v1alpha1.insights.ListOrgInsightsResponse
 */
export declare class ListOrgInsightsResponse extends Message<ListOrgInsightsResponse> {
  /**
   * Requested insights
   *
   * @generated from field: repeated api.v1alpha1.insights.Insight insights = 1;
   */
  insights: Insight[];

  constructor(data?: PartialMessage<ListOrgInsightsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.ListOrgInsightsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrgInsightsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrgInsightsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrgInsightsResponse;

  static equals(a: ListOrgInsightsResponse | PlainMessage<ListOrgInsightsResponse> | undefined, b: ListOrgInsightsResponse | PlainMessage<ListOrgInsightsResponse> | undefined): boolean;
}

/**
 * UpdateInsightRequest is the request to update an insight.
 *
 * @generated from message api.v1alpha1.insights.UpdateInsightRequest
 */
export declare class UpdateInsightRequest extends Message<UpdateInsightRequest> {
  /**
   * Required - insight to be updated
   *
   * @generated from field: api.v1alpha1.insights.Insight insight = 1;
   */
  insight?: Insight;

  /**
   * Required - mask of fields to update
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateInsightRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.UpdateInsightRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateInsightRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateInsightRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateInsightRequest;

  static equals(a: UpdateInsightRequest | PlainMessage<UpdateInsightRequest> | undefined, b: UpdateInsightRequest | PlainMessage<UpdateInsightRequest> | undefined): boolean;
}

/**
 * UpdateInsightResponse contains the Insight that was updated.
 *
 * @generated from message api.v1alpha1.insights.UpdateInsightResponse
 */
export declare class UpdateInsightResponse extends Message<UpdateInsightResponse> {
  /**
   * Updated entity
   *
   * @generated from field: api.v1alpha1.insights.Insight insight = 1;
   */
  insight?: Insight;

  constructor(data?: PartialMessage<UpdateInsightResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.UpdateInsightResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateInsightResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateInsightResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateInsightResponse;

  static equals(a: UpdateInsightResponse | PlainMessage<UpdateInsightResponse> | undefined, b: UpdateInsightResponse | PlainMessage<UpdateInsightResponse> | undefined): boolean;
}

/**
 * DeleteInsightRequest is the request to delete an insight.
 *
 * @generated from message api.v1alpha1.insights.DeleteInsightRequest
 */
export declare class DeleteInsightRequest extends Message<DeleteInsightRequest> {
  /**
   * Required - id of insight to delete
   *
   * @generated from field: int64 insight_id = 1 [jstype = JS_STRING];
   */
  insightId: string;

  /**
   * resource id of the insight to delete
   *
   * @generated from field: string resource_id = 2;
   */
  resourceId: string;

  constructor(data?: PartialMessage<DeleteInsightRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.DeleteInsightRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteInsightRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteInsightRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteInsightRequest;

  static equals(a: DeleteInsightRequest | PlainMessage<DeleteInsightRequest> | undefined, b: DeleteInsightRequest | PlainMessage<DeleteInsightRequest> | undefined): boolean;
}

/**
 * DeleteInsightResponse contains the Insight that was deleted.
 *
 * @generated from message api.v1alpha1.insights.DeleteInsightResponse
 */
export declare class DeleteInsightResponse extends Message<DeleteInsightResponse> {
  /**
   * Deleted entity
   *
   * @generated from field: api.v1alpha1.insights.Insight insight = 1;
   */
  insight?: Insight;

  constructor(data?: PartialMessage<DeleteInsightResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.DeleteInsightResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteInsightResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteInsightResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteInsightResponse;

  static equals(a: DeleteInsightResponse | PlainMessage<DeleteInsightResponse> | undefined, b: DeleteInsightResponse | PlainMessage<DeleteInsightResponse> | undefined): boolean;
}

/**
 * GetInsightRequest is the request to get an insight.
 *
 * @generated from message api.v1alpha1.insights.GetInsightRequest
 */
export declare class GetInsightRequest extends Message<GetInsightRequest> {
  /**
   * Required - id of insight to get
   *
   * @generated from field: int64 insight_id = 1 [jstype = JS_STRING];
   */
  insightId: string;

  /**
   * resource id of insight to get
   *
   * @generated from field: string resource_id = 2;
   */
  resourceId: string;

  constructor(data?: PartialMessage<GetInsightRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.GetInsightRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInsightRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInsightRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInsightRequest;

  static equals(a: GetInsightRequest | PlainMessage<GetInsightRequest> | undefined, b: GetInsightRequest | PlainMessage<GetInsightRequest> | undefined): boolean;
}

/**
 * GetInsightResponse contains the Insight that was retrieved.
 *
 * @generated from message api.v1alpha1.insights.GetInsightResponse
 */
export declare class GetInsightResponse extends Message<GetInsightResponse> {
  /**
   * Requested entity
   *
   * @generated from field: api.v1alpha1.insights.Insight insight = 1;
   */
  insight?: Insight;

  constructor(data?: PartialMessage<GetInsightResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.GetInsightResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInsightResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInsightResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInsightResponse;

  static equals(a: GetInsightResponse | PlainMessage<GetInsightResponse> | undefined, b: GetInsightResponse | PlainMessage<GetInsightResponse> | undefined): boolean;
}

/**
 * GetVfsSchemaRequest is request to get vfs schema using alias
 *
 * @generated from message api.v1alpha1.insights.GetVfsSchemaRequest
 */
export declare class GetVfsSchemaRequest extends Message<GetVfsSchemaRequest> {
  /**
   * Required - alias name of vfs to get schema for
   *
   * @generated from field: string alias_name = 1;
   */
  aliasName: string;

  constructor(data?: PartialMessage<GetVfsSchemaRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.GetVfsSchemaRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVfsSchemaRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVfsSchemaRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVfsSchemaRequest;

  static equals(a: GetVfsSchemaRequest | PlainMessage<GetVfsSchemaRequest> | undefined, b: GetVfsSchemaRequest | PlainMessage<GetVfsSchemaRequest> | undefined): boolean;
}

/**
 * GetVfsSchemaResponse is response with vfs schema
 *
 * @generated from message api.v1alpha1.insights.GetVfsSchemaResponse
 */
export declare class GetVfsSchemaResponse extends Message<GetVfsSchemaResponse> {
  /**
   * array of fields
   *
   * @generated from field: repeated api.v1alpha1.insights.GetVfsSchemaResponse.Field fields = 1;
   */
  fields: GetVfsSchemaResponse_Field[];

  /**
   * description of the vfs - optional may not always be present
   *
   * @generated from field: string vfs_description = 2;
   */
  vfsDescription: string;

  /**
   * alias name of the vfs
   *
   * @generated from field: string alias_name = 3;
   */
  aliasName: string;

  constructor(data?: PartialMessage<GetVfsSchemaResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.GetVfsSchemaResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVfsSchemaResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVfsSchemaResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVfsSchemaResponse;

  static equals(a: GetVfsSchemaResponse | PlainMessage<GetVfsSchemaResponse> | undefined, b: GetVfsSchemaResponse | PlainMessage<GetVfsSchemaResponse> | undefined): boolean;
}

/**
 * Field represents a column in a dataframe
 *
 * @generated from message api.v1alpha1.insights.GetVfsSchemaResponse.Field
 */
export declare class GetVfsSchemaResponse_Field extends Message<GetVfsSchemaResponse_Field> {
  /**
   * name of the column
   *
   * @generated from field: string column_name = 1;
   */
  columnName: string;

  /**
   * internal enumerated column type
   *
   * @generated from field: api.commons.InsightVfsSchemaType column_type = 2;
   */
  columnType: InsightVfsSchemaType;

  /**
   * description of the column - optional may not always be present
   *
   * @generated from field: string column_description = 3;
   */
  columnDescription: string;

  constructor(data?: PartialMessage<GetVfsSchemaResponse_Field>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.GetVfsSchemaResponse.Field";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVfsSchemaResponse_Field;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVfsSchemaResponse_Field;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVfsSchemaResponse_Field;

  static equals(a: GetVfsSchemaResponse_Field | PlainMessage<GetVfsSchemaResponse_Field> | undefined, b: GetVfsSchemaResponse_Field | PlainMessage<GetVfsSchemaResponse_Field> | undefined): boolean;
}

/**
 * ListVfsesRequest is request to list vfses
 *
 * @generated from message api.v1alpha1.insights.ListVfsesRequest
 */
export declare class ListVfsesRequest extends Message<ListVfsesRequest> {
  constructor(data?: PartialMessage<ListVfsesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.ListVfsesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListVfsesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListVfsesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListVfsesRequest;

  static equals(a: ListVfsesRequest | PlainMessage<ListVfsesRequest> | undefined, b: ListVfsesRequest | PlainMessage<ListVfsesRequest> | undefined): boolean;
}

/**
 * ListVfsesResponse is response with vfs aliases
 *
 * @generated from message api.v1alpha1.insights.ListVfsesResponse
 */
export declare class ListVfsesResponse extends Message<ListVfsesResponse> {
  /**
   * Array of vfs alias names
   *
   * @generated from field: repeated string aliases = 1;
   */
  aliases: string[];

  constructor(data?: PartialMessage<ListVfsesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.ListVfsesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListVfsesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListVfsesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListVfsesResponse;

  static equals(a: ListVfsesResponse | PlainMessage<ListVfsesResponse> | undefined, b: ListVfsesResponse | PlainMessage<ListVfsesResponse> | undefined): boolean;
}

/**
 * ListVfsSchemasRequest is request to list vfs schemas
 *
 * @generated from message api.v1alpha1.insights.ListVfsSchemasRequest
 */
export declare class ListVfsSchemasRequest extends Message<ListVfsSchemasRequest> {
  constructor(data?: PartialMessage<ListVfsSchemasRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.ListVfsSchemasRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListVfsSchemasRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListVfsSchemasRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListVfsSchemasRequest;

  static equals(a: ListVfsSchemasRequest | PlainMessage<ListVfsSchemasRequest> | undefined, b: ListVfsSchemasRequest | PlainMessage<ListVfsSchemasRequest> | undefined): boolean;
}

/**
 * ListVfsSchemasResponse is response with vfs schemas
 *
 * @generated from message api.v1alpha1.insights.ListVfsSchemasResponse
 */
export declare class ListVfsSchemasResponse extends Message<ListVfsSchemasResponse> {
  /**
   * Array of vfs schemas
   *
   * @generated from field: repeated api.v1alpha1.insights.GetVfsSchemaResponse vfs_schemas = 1;
   */
  vfsSchemas: GetVfsSchemaResponse[];

  constructor(data?: PartialMessage<ListVfsSchemasResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.insights.ListVfsSchemasResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListVfsSchemasResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListVfsSchemasResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListVfsSchemasResponse;

  static equals(a: ListVfsSchemasResponse | PlainMessage<ListVfsSchemasResponse> | undefined, b: ListVfsSchemasResponse | PlainMessage<ListVfsSchemasResponse> | undefined): boolean;
}

