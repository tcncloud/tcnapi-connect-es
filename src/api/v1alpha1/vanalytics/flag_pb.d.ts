// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Filter } from "./filter_pb.js";

/**
 * CreateFlagRequest is a request for creating a flag.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagRequest
 */
export declare class CreateFlagRequest extends Message<CreateFlagRequest> {
  /**
   * The flag resource to create.
   *
   * @generated from field: api.v1alpha1.vanalytics.Flag flag = 1;
   */
  flag?: Flag;

  constructor(data?: PartialMessage<CreateFlagRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.CreateFlagRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlagRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlagRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlagRequest;

  static equals(a: CreateFlagRequest | PlainMessage<CreateFlagRequest> | undefined, b: CreateFlagRequest | PlainMessage<CreateFlagRequest> | undefined): boolean;
}

/**
 * ListFlagsRequest is a request for listing flags.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagsRequest
 */
export declare class ListFlagsRequest extends Message<ListFlagsRequest> {
  /**
   * Optional. The number of flags to include in a single response. When not
   * provided this defaults to 100.
   *
   * @generated from field: uint32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. The order by which flags will be listed. Follows sql order by
   * syntax. When not provided the order defaults to "name".
   * Supported order by includes:
   *   + (name)
   *   + (name desc)
   *
   * @generated from field: string order_by = 3;
   */
  orderBy: string;

  /**
   * Optional. The next_page_token returned from a previous List request, if any.
   * When provided all other request fields are ignored.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken: string;

  /**
   * @generated from oneof api.v1alpha1.vanalytics.ListFlagsRequest.where
   */
  where: {
    /**
     * Optional. Lists flags which are associated with given filter sid.
     *
     * @generated from field: int64 filter_sid = 5;
     */
    value: bigint;
    case: "filterSid";
  } | { case: undefined; value?: undefined };

  /**
   * Optional. Lists flags which have given flag sids.
   *
   * @generated from field: repeated int64 flag_sids = 6;
   */
  flagSids: bigint[];

  /**
   * Optional. Field mask which determines which flag reads will be read and
   * included in the response.
   *
   * @generated from field: google.protobuf.FieldMask read_mask = 7;
   */
  readMask?: FieldMask;

  /**
   * Optional. Listed flags must have one of the provided names.
   *
   * @generated from field: repeated string names = 8;
   */
  names: string[];

  /**
   * Optional. Listed flags must have one of the provided priorities.
   *
   * @generated from field: repeated int32 priorities = 9;
   */
  priorities: number[];

  /**
   * Optional. Filter by flags that require a review. This does not mean
   * that the flag has/hasn't been reviewed. This is whether it requires one.
   *
   * @generated from field: repeated bool must_review = 10;
   */
  mustReview: boolean[];

  /**
   * Optional. Filter by flags that send notifications.
   *
   * @generated from field: repeated bool must_notify = 11;
   */
  mustNotify: boolean[];

  constructor(data?: PartialMessage<ListFlagsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagsRequest;

  static equals(a: ListFlagsRequest | PlainMessage<ListFlagsRequest> | undefined, b: ListFlagsRequest | PlainMessage<ListFlagsRequest> | undefined): boolean;
}

/**
 * ListFlagsResponse is a response for listing flags.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagsResponse
 */
export declare class ListFlagsResponse extends Message<ListFlagsResponse> {
  /**
   * Token to retrieve the next page of flags, or empty if there are no
   * more flags in the list.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * List of flags which contains at most one request page_size.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.Flag flags = 2;
   */
  flags: Flag[];

  /**
   * Total number of flags.
   *
   * @generated from field: uint64 total = 3;
   */
  total: bigint;

  constructor(data?: PartialMessage<ListFlagsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagsResponse;

  static equals(a: ListFlagsResponse | PlainMessage<ListFlagsResponse> | undefined, b: ListFlagsResponse | PlainMessage<ListFlagsResponse> | undefined): boolean;
}

/**
 * UpdateFlagRequest is a request for updating a flag.
 *
 * @generated from message api.v1alpha1.vanalytics.UpdateFlagRequest
 */
export declare class UpdateFlagRequest extends Message<UpdateFlagRequest> {
  /**
   * The ID of the flag to be updated.
   *
   * @generated from field: int64 flag_sid = 1;
   */
  flagSid: bigint;

  /**
   * The flag resource to update.
   *
   * @generated from field: api.v1alpha1.vanalytics.Flag flag = 2;
   */
  flag?: Flag;

  /**
   * Optional. update_mask contains a list of paths to be updated. Possible paths include
   * name, review_group_id, notify_group_id, and priority. If no update_mask
   * is provided it defaults to using all paths.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 3;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateFlagRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.UpdateFlagRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFlagRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFlagRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFlagRequest;

  static equals(a: UpdateFlagRequest | PlainMessage<UpdateFlagRequest> | undefined, b: UpdateFlagRequest | PlainMessage<UpdateFlagRequest> | undefined): boolean;
}

/**
 * DeleteFlagRequest is a request for deleting a flag.
 *
 * @generated from message api.v1alpha1.vanalytics.DeleteFlagRequest
 */
export declare class DeleteFlagRequest extends Message<DeleteFlagRequest> {
  /**
   * Required. The unique id of the flag to be deleted.
   *
   * @generated from field: int64 flag_sid = 1;
   */
  flagSid: bigint;

  /**
   * Optional. Return the flag that was deleted.
   *
   * @generated from field: bool return = 3;
   */
  return: boolean;

  constructor(data?: PartialMessage<DeleteFlagRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteFlagRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFlagRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFlagRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFlagRequest;

  static equals(a: DeleteFlagRequest | PlainMessage<DeleteFlagRequest> | undefined, b: DeleteFlagRequest | PlainMessage<DeleteFlagRequest> | undefined): boolean;
}

/**
 * DeleteFlagResponse is a response for deleting a flag.
 *
 * @generated from message api.v1alpha1.vanalytics.DeleteFlagResponse
 */
export declare class DeleteFlagResponse extends Message<DeleteFlagResponse> {
  /**
   * Optional. The flag that was deleted.
   *
   * @generated from field: api.v1alpha1.vanalytics.Flag flag = 1;
   */
  flag?: Flag;

  constructor(data?: PartialMessage<DeleteFlagResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteFlagResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFlagResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFlagResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFlagResponse;

  static equals(a: DeleteFlagResponse | PlainMessage<DeleteFlagResponse> | undefined, b: DeleteFlagResponse | PlainMessage<DeleteFlagResponse> | undefined): boolean;
}

/**
 * GetFlagRequest is a request for getting a flag.
 *
 * @generated from message api.v1alpha1.vanalytics.GetFlagRequest
 */
export declare class GetFlagRequest extends Message<GetFlagRequest> {
  /**
   * @generated from oneof api.v1alpha1.vanalytics.GetFlagRequest.where
   */
  where: {
    /**
     * The name of the flag.
     *
     * @generated from field: string name = 2;
     */
    value: string;
    case: "name";
  } | {
    /**
     * The unique id of the flag.
     *
     * @generated from field: int64 flag_sid = 3;
     */
    value: bigint;
    case: "flagSid";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<GetFlagRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.GetFlagRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlagRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlagRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlagRequest;

  static equals(a: GetFlagRequest | PlainMessage<GetFlagRequest> | undefined, b: GetFlagRequest | PlainMessage<GetFlagRequest> | undefined): boolean;
}

/**
 * Flag is a resource in the Vanalytics API.
 *
 * @generated from message api.v1alpha1.vanalytics.Flag
 */
export declare class Flag extends Message<Flag> {
  /**
   * Output only. The unique id of this flag.
   *
   * @generated from field: int64 flag_sid = 1;
   */
  flagSid: bigint;

  /**
   * Required. The name of this flag. Must be non empty and unique across all
   * flags within an organization.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * Optional. The org permission group id which users must have in order to
   * to review flagged transcripts. When not provided flagged transcripts will
   * not require review.
   *
   * @generated from field: string review_group_id = 4;
   */
  reviewGroupId: string;

  /**
   * Optional. The notify group id for this flag.
   *
   * @generated from field: string notify_group_id = 5;
   */
  notifyGroupId: string;

  /**
   * Optional. The priority of the flag. Defaults to 0.
   *
   * @generated from field: int32 priority = 6;
   */
  priority: number;

  /**
   * Output only. The version of this flag.
   *
   * @generated from field: int64 version = 7;
   */
  version: bigint;

  /**
   * Output only. Filters associated with this flag.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.Filter filters = 8;
   */
  filters: Filter[];

  /**
   * Output only. Determines whether this flag must be reviewed.
   *
   * @generated from field: bool must_review = 9;
   */
  mustReview: boolean;

  /**
   * Output only. Determines whether this flag must be notified.
   *
   * @generated from field: bool must_notify = 10;
   */
  mustNotify: boolean;

  /**
   * Required. Boolean expression of filters which a transcript must match
   * for this flag to be applied.
   *
   * @generated from field: api.v1alpha1.vanalytics.Flag.BoolExpr bool_expr = 11;
   */
  boolExpr?: Flag_BoolExpr;

  constructor(data?: PartialMessage<Flag>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.Flag";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Flag;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Flag;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Flag;

  static equals(a: Flag | PlainMessage<Flag> | undefined, b: Flag | PlainMessage<Flag> | undefined): boolean;
}

/**
 * BoolExpr defines a boolean expression of filters.
 *
 * @generated from message api.v1alpha1.vanalytics.Flag.BoolExpr
 */
export declare class Flag_BoolExpr extends Message<Flag_BoolExpr> {
  /**
   * Optional. Boolean and operator.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.Flag.BoolExpr and = 1;
   */
  and: Flag_BoolExpr[];

  /**
   * Optional. Boolean or operator.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.Flag.BoolExpr or = 2;
   */
  or: Flag_BoolExpr[];

  /**
   * Optional. Filter to match.
   *
   * @generated from field: api.v1alpha1.vanalytics.Flag.BoolExpr.Filter filter = 3;
   */
  filter?: Flag_BoolExpr_Filter;

  /**
   * Optional. Boolean not operator.
   *
   * @generated from field: api.v1alpha1.vanalytics.Flag.BoolExpr not = 4;
   */
  not?: Flag_BoolExpr;

  constructor(data?: PartialMessage<Flag_BoolExpr>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.Flag.BoolExpr";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Flag_BoolExpr;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Flag_BoolExpr;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Flag_BoolExpr;

  static equals(a: Flag_BoolExpr | PlainMessage<Flag_BoolExpr> | undefined, b: Flag_BoolExpr | PlainMessage<Flag_BoolExpr> | undefined): boolean;
}

/**
 * Filter defines a filter.
 *
 * @generated from message api.v1alpha1.vanalytics.Flag.BoolExpr.Filter
 */
export declare class Flag_BoolExpr_Filter extends Message<Flag_BoolExpr_Filter> {
  /**
   * Required. Filter sid.
   *
   * @generated from field: int64 filter_sid = 1;
   */
  filterSid: bigint;

  constructor(data?: PartialMessage<Flag_BoolExpr_Filter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.Flag.BoolExpr.Filter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Flag_BoolExpr_Filter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Flag_BoolExpr_Filter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Flag_BoolExpr_Filter;

  static equals(a: Flag_BoolExpr_Filter | PlainMessage<Flag_BoolExpr_Filter> | undefined, b: Flag_BoolExpr_Filter | PlainMessage<Flag_BoolExpr_Filter> | undefined): boolean;
}

