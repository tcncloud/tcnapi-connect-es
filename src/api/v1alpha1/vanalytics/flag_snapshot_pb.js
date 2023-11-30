// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_snapshot.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * ListFlagSnapshotsRequest is a request for listing flag snapshots.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagSnapshotsRequest
 */
export const ListFlagSnapshotsRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListFlagSnapshotsRequest",
  () => [
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "flag_snapshot_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 6, name: "mask", kind: "message", T: FieldMask },
    { no: 7, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ListFlagSnapshotsResponse is a response for listing flag snapshots.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagSnapshotsResponse
 */
export const ListFlagSnapshotsResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListFlagSnapshotsResponse",
  () => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flag_snapshots", kind: "message", T: FlagSnapshot, repeated: true },
  ],
);

/**
 * FlagSnapshot is a resource in the Vanalytics API.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSnapshot
 */
export const FlagSnapshot = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagSnapshot",
  () => [
    { no: 1, name: "flag_snapshot_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "review_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "notify_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "priority", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "create_time", kind: "message", T: Timestamp },
    { no: 10, name: "must_review", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "must_notify", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "bool_expr", kind: "message", T: FlagSnapshot_BoolExpr },
  ],
);

/**
 * BoolExpr defines a boolean expression of filters.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr
 */
export const FlagSnapshot_BoolExpr = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr",
  () => [
    { no: 1, name: "and", kind: "message", T: FlagSnapshot_BoolExpr, repeated: true },
    { no: 2, name: "or", kind: "message", T: FlagSnapshot_BoolExpr, repeated: true },
    { no: 3, name: "filter", kind: "message", T: FlagSnapshot_BoolExpr_Filter },
    { no: 4, name: "not", kind: "message", T: FlagSnapshot_BoolExpr },
  ],
  {localName: "FlagSnapshot_BoolExpr"},
);

/**
 * Filter defines a filter.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr.Filter
 */
export const FlagSnapshot_BoolExpr_Filter = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagSnapshot.BoolExpr.Filter",
  () => [
    { no: 1, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "FlagSnapshot_BoolExpr_Filter"},
);

