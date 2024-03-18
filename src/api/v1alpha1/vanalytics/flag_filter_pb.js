// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_filter.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { Flag } from "./flag_pb.js";
import { Filter } from "./filter_pb.js";

/**
 * CreateFlagFilterRequest is a request for creating a flag filter.
 * DEPRECATED
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagFilterRequest
 */
export const CreateFlagFilterRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.vanalytics.CreateFlagFilterRequest",
  () => [
    { no: 1, name: "flag_filter", kind: "message", T: FlagFilter },
  ],
);

/**
 * ListFlagFiltersRequest is a request for listing flag filters.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagFiltersRequest
 */
export const ListFlagFiltersRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListFlagFiltersRequest",
  () => [
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "flag_mask", kind: "message", T: FieldMask },
    { no: 5, name: "filter_mask", kind: "message", T: FieldMask },
    { no: 6, name: "flag_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
);

/**
 * ListFlagFiltersResponse is a response for listing flag filters.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagFiltersResponse
 */
export const ListFlagFiltersResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListFlagFiltersResponse",
  () => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flag_filters", kind: "message", T: FlagFilter, repeated: true },
  ],
);

/**
 * DeleteFlagFilterRequest is a request for deleting a flag filter.
 * DEPRECATED
 *
 * @generated from message api.v1alpha1.vanalytics.DeleteFlagFilterRequest
 */
export const DeleteFlagFilterRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.vanalytics.DeleteFlagFilterRequest",
  () => [
    { no: 1, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "all", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * DeleteFlagFilterResponse is a response for deleting a flag filter.
 * DEPRECATED
 *
 * @generated from message api.v1alpha1.vanalytics.DeleteFlagFilterResponse
 */
export const DeleteFlagFilterResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.vanalytics.DeleteFlagFilterResponse",
  [],
);

/**
 * FlagFilter is a resource in the Vanalytics API.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagFilter
 */
export const FlagFilter = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagFilter",
  () => [
    { no: 1, name: "flag_filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "flag", kind: "message", T: Flag },
    { no: 6, name: "filter", kind: "message", T: Filter },
  ],
);

