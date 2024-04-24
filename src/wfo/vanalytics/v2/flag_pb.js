// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file wfo/vanalytics/v2/flag.proto (package wfo.vanalytics.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { Filter } from "./filter_pb.js";
import { DnclList } from "./dncl_list_pb.js";

/**
 * CreateFlagRequest is a request for creating a flag.
 *
 * @generated from message wfo.vanalytics.v2.CreateFlagRequest
 */
export const CreateFlagRequest = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.CreateFlagRequest",
  () => [
    { no: 1, name: "flag", kind: "message", T: Flag },
  ],
);

/**
 * ListFlagsRequest is a request for listing flags.
 *
 * @generated from message wfo.vanalytics.v2.ListFlagsRequest
 */
export const ListFlagsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.ListFlagsRequest",
  () => [
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "where" },
    { no: 6, name: "flag_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 7, name: "read_mask", kind: "message", T: FieldMask },
    { no: 8, name: "names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "priorities", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 10, name: "must_review", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 11, name: "must_notify", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
  ],
);

/**
 * ListFlagsResponse is a response for listing flags.
 *
 * @generated from message wfo.vanalytics.v2.ListFlagsResponse
 */
export const ListFlagsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.ListFlagsResponse",
  () => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flags", kind: "message", T: Flag, repeated: true },
    { no: 3, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * UpdateFlagRequest is a request for updating a flag.
 *
 * @generated from message wfo.vanalytics.v2.UpdateFlagRequest
 */
export const UpdateFlagRequest = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.UpdateFlagRequest",
  () => [
    { no: 1, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "flag", kind: "message", T: Flag },
    { no: 3, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * DeleteFlagRequest is a request for deleting a flag.
 *
 * @generated from message wfo.vanalytics.v2.DeleteFlagRequest
 */
export const DeleteFlagRequest = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.DeleteFlagRequest",
  () => [
    { no: 1, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "return", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * DeleteFlagResponse is a response for deleting a flag.
 *
 * @generated from message wfo.vanalytics.v2.DeleteFlagResponse
 */
export const DeleteFlagResponse = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.DeleteFlagResponse",
  () => [
    { no: 1, name: "flag", kind: "message", T: Flag },
  ],
);

/**
 * GetFlagRequest is a request for getting a flag.
 *
 * @generated from message wfo.vanalytics.v2.GetFlagRequest
 */
export const GetFlagRequest = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.GetFlagRequest",
  () => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "where" },
    { no: 3, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "where" },
  ],
);

/**
 * Flag is a resource in the Vanalytics API.
 *
 * @generated from message wfo.vanalytics.v2.Flag
 */
export const Flag = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.Flag",
  () => [
    { no: 1, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "review_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "notify_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "priority", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "filters", kind: "message", T: Filter, repeated: true },
    { no: 9, name: "must_review", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "must_notify", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "bool_expr", kind: "message", T: Flag_BoolExpr },
    { no: 12, name: "dncl_list", kind: "message", T: DnclList, repeated: true },
  ],
);

/**
 * BoolExpr defines a boolean expression of filters.
 *
 * @generated from message wfo.vanalytics.v2.Flag.BoolExpr
 */
export const Flag_BoolExpr = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.Flag.BoolExpr",
  () => [
    { no: 1, name: "and", kind: "message", T: Flag_BoolExpr, repeated: true },
    { no: 2, name: "or", kind: "message", T: Flag_BoolExpr, repeated: true },
    { no: 3, name: "filter", kind: "message", T: Flag_BoolExpr_Filter },
    { no: 4, name: "not", kind: "message", T: Flag_BoolExpr },
  ],
  {localName: "Flag_BoolExpr"},
);

/**
 * Filter defines a filter.
 *
 * @generated from message wfo.vanalytics.v2.Flag.BoolExpr.Filter
 */
export const Flag_BoolExpr_Filter = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.Flag.BoolExpr.Filter",
  () => [
    { no: 1, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "Flag_BoolExpr_Filter"},
);
