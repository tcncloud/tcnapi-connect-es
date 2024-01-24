// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/filter.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { SearchRequest } from "./transcript_pb.js";

/**
 * @generated from message api.v1alpha1.vanalytics.CreateFilterRequest
 */
export const CreateFilterRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.CreateFilterRequest",
  () => [
    { no: 1, name: "filter", kind: "message", T: Filter },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.ListFiltersRequest
 */
export const ListFiltersRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListFiltersRequest",
  () => [
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "conflict", kind: "message", T: Filter, oneof: "where" },
    { no: 6, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "where" },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.ListFiltersResponse
 */
export const ListFiltersResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListFiltersResponse",
  () => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filters", kind: "message", T: Filter, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.UpdateFilterRequest
 */
export const UpdateFilterRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.UpdateFilterRequest",
  () => [
    { no: 1, name: "filter", kind: "message", T: Filter },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
    { no: 3, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.DeleteFilterRequest
 */
export const DeleteFilterRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.DeleteFilterRequest",
  () => [
    { no: 1, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "return", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.DeleteFilterResponse
 */
export const DeleteFilterResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.DeleteFilterResponse",
  () => [
    { no: 1, name: "filter", kind: "message", T: Filter },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.GetFilterRequest
 */
export const GetFilterRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.GetFilterRequest",
  () => [
    { no: 2, name: "search_request", kind: "message", T: SearchRequest, oneof: "where" },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "where" },
    { no: 4, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "where" },
  ],
);

/**
 * A filter resource in the Vanalytics API.
 *
 * @generated from message api.v1alpha1.vanalytics.Filter
 */
export const Filter = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Filter",
  () => [
    { no: 1, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "search_request", kind: "message", T: SearchRequest },
    { no: 5, name: "create_time", kind: "message", T: Timestamp },
    { no: 6, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

