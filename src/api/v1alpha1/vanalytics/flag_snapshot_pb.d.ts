// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_snapshot.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { DnclList } from "./dncl_list_pb.js";

/**
 * ListFlagSnapshotsRequest is a request for listing flag snapshots.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagSnapshotsRequest
 */
export declare class ListFlagSnapshotsRequest extends Message<ListFlagSnapshotsRequest> {
  /**
   * Optional. The number of snapshots to include in a single response. When not
   * provided this defaults to 100.
   *
   * @generated from field: uint32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. The order by which snapshots will be listed. Follows sql order by
   * syntax. When not provided the order defaults to "flag_snapshot_sid desc".
   * Supported order by includes:
   *   + (flag_snapshot_sid desc)
   *   + (flag_snapshot_sid)
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
   * Optional. List of flag_snapshots to filter on.
   *
   * @generated from field: repeated int64 flag_snapshot_sids = 5;
   */
  flagSnapshotSids: bigint[];

  /**
   * Optional. mask contains a list of fields to be returned. Possible paths include
   * flag_snapshot_sid, flag_sid, name, review_group_id, notify_group_id, create_time,
   * version, and priority. If no mask is provided it defaults to using all paths.
   *
   * @generated from field: google.protobuf.FieldMask mask = 6;
   */
  mask?: FieldMask;

  /**
   * Optional. Transcript sid to filter on.
   *
   * @generated from field: int64 transcript_sid = 7;
   */
  transcriptSid: bigint;

  constructor(data?: PartialMessage<ListFlagSnapshotsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagSnapshotsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagSnapshotsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagSnapshotsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagSnapshotsRequest;

  static equals(a: ListFlagSnapshotsRequest | PlainMessage<ListFlagSnapshotsRequest> | undefined, b: ListFlagSnapshotsRequest | PlainMessage<ListFlagSnapshotsRequest> | undefined): boolean;
}

/**
 * ListFlagSnapshotsResponse is a response for listing flag snapshots.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagSnapshotsResponse
 */
export declare class ListFlagSnapshotsResponse extends Message<ListFlagSnapshotsResponse> {
  /**
   * Token to retrieve the next page of snapshots, or empty if there are no
   * more snapshots in the list.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * List of flag snapshots.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.FlagSnapshot flag_snapshots = 2;
   */
  flagSnapshots: FlagSnapshot[];

  constructor(data?: PartialMessage<ListFlagSnapshotsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagSnapshotsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagSnapshotsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagSnapshotsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagSnapshotsResponse;

  static equals(a: ListFlagSnapshotsResponse | PlainMessage<ListFlagSnapshotsResponse> | undefined, b: ListFlagSnapshotsResponse | PlainMessage<ListFlagSnapshotsResponse> | undefined): boolean;
}

/**
 * FlagSnapshot is a resource in the Vanalytics API.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSnapshot
 */
export declare class FlagSnapshot extends Message<FlagSnapshot> {
  /**
   * Output only. The unique id of this flag.
   *
   * @generated from field: int64 flag_snapshot_sid = 1;
   */
  flagSnapshotSid: bigint;

  /**
   * Output only. The unique id of this flag.
   *
   * @generated from field: int64 flag_sid = 2;
   */
  flagSid: bigint;

  /**
   * Required. The name of this flag. Must be non empty and unique across all
   * flags within an organization.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * Optional. The org permission group id which users must have in order to
   * to review flagged transcripts. When not provided flagged transcripts will
   * not require review.
   *
   * @generated from field: string review_group_id = 5;
   */
  reviewGroupId: string;

  /**
   * Optional. The notify group id for this flag.
   *
   * @generated from field: string notify_group_id = 6;
   */
  notifyGroupId: string;

  /**
   * Optional. The priority of the flag. Defaults to 0.
   *
   * @generated from field: int32 priority = 7;
   */
  priority: number;

  /**
   * Output only. The version of this flag.
   *
   * @generated from field: int64 version = 8;
   */
  version: bigint;

  /**
   * Output only. The timestamp when this flag snapshot was created. Assigned by the
   * server.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 9;
   */
  createTime?: Timestamp;

  /**
   * Output only. Determines whether this flag must be reviewed.
   *
   * @generated from field: bool must_review = 10;
   */
  mustReview: boolean;

  /**
   * Output only. Determines whether this flag must be notified.
   *
   * @generated from field: bool must_notify = 11;
   */
  mustNotify: boolean;

  /**
   * Required. Boolean expression of filters which a transcript must match
   * for this flag to be applied.
   *
   * @generated from field: api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr bool_expr = 12;
   */
  boolExpr?: FlagSnapshot_BoolExpr;

  /**
   * Optional. Specifies dncl lists to update
   * if a transcript is flagged.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.DnclList dncl_list = 13;
   */
  dnclList: DnclList[];

  constructor(data?: PartialMessage<FlagSnapshot>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.FlagSnapshot";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlagSnapshot;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlagSnapshot;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlagSnapshot;

  static equals(a: FlagSnapshot | PlainMessage<FlagSnapshot> | undefined, b: FlagSnapshot | PlainMessage<FlagSnapshot> | undefined): boolean;
}

/**
 * BoolExpr defines a boolean expression of filters.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr
 */
export declare class FlagSnapshot_BoolExpr extends Message<FlagSnapshot_BoolExpr> {
  /**
   * Optional. Boolean and operator.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr and = 1;
   */
  and: FlagSnapshot_BoolExpr[];

  /**
   * Optional. Boolean or operator.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr or = 2;
   */
  or: FlagSnapshot_BoolExpr[];

  /**
   * Optional. Filter to match.
   *
   * @generated from field: api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr.Filter filter = 3;
   */
  filter?: FlagSnapshot_BoolExpr_Filter;

  /**
   * Optional. Boolean not operator.
   *
   * @generated from field: api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr not = 4;
   */
  not?: FlagSnapshot_BoolExpr;

  constructor(data?: PartialMessage<FlagSnapshot_BoolExpr>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlagSnapshot_BoolExpr;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlagSnapshot_BoolExpr;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlagSnapshot_BoolExpr;

  static equals(a: FlagSnapshot_BoolExpr | PlainMessage<FlagSnapshot_BoolExpr> | undefined, b: FlagSnapshot_BoolExpr | PlainMessage<FlagSnapshot_BoolExpr> | undefined): boolean;
}

/**
 * Filter defines a filter.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr.Filter
 */
export declare class FlagSnapshot_BoolExpr_Filter extends Message<FlagSnapshot_BoolExpr_Filter> {
  /**
   * Required. Filter sid.
   *
   * @generated from field: int64 filter_sid = 1;
   */
  filterSid: bigint;

  constructor(data?: PartialMessage<FlagSnapshot_BoolExpr_Filter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr.Filter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlagSnapshot_BoolExpr_Filter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlagSnapshot_BoolExpr_Filter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlagSnapshot_BoolExpr_Filter;

  static equals(a: FlagSnapshot_BoolExpr_Filter | PlainMessage<FlagSnapshot_BoolExpr_Filter> | undefined, b: FlagSnapshot_BoolExpr_Filter | PlainMessage<FlagSnapshot_BoolExpr_Filter> | undefined): boolean;
}

