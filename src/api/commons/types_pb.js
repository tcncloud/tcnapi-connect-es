// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/types.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Int32Value, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.Empty
 */
export const Empty = proto3.makeMessageType(
  "api.commons.Empty",
  [],
);

/**
 * nullable Int32
 *
 * @generated from message api.commons.Int32Nullable
 */
export const Int32Nullable = proto3.makeMessageType(
  "api.commons.Int32Nullable",
  () => [
    { no: 1, name: "is_null", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * nullable Int64
 *
 * @generated from message api.commons.Int64Nullable
 */
export const Int64Nullable = proto3.makeMessageType(
  "api.commons.Int64Nullable",
  () => [
    { no: 1, name: "is_null", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.commons.SomeSidAndDateCompare
 */
export const SomeSidAndDateCompare = proto3.makeMessageType(
  "api.commons.SomeSidAndDateCompare",
  () => [
    { no: 1, name: "some_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "date_greater", kind: "message", T: Timestamp },
    { no: 3, name: "date_less", kind: "message", T: Timestamp },
  ],
);

/**
 * if you want to use repeated fields in query parameters use these
 * these messages have type mappings in go/conversion/arrays.go
 *
 * @generated from message api.commons.Int64ArraySql
 */
export const Int64ArraySql = proto3.makeMessageType(
  "api.commons.Int64ArraySql",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
);

/**
 * @generated from message api.commons.Int32ArraySql
 */
export const Int32ArraySql = proto3.makeMessageType(
  "api.commons.Int32ArraySql",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ],
);

/**
 * @generated from message api.commons.StringArraySql
 */
export const StringArraySql = proto3.makeMessageType(
  "api.commons.StringArraySql",
  () => [
    { no: 2, name: "values", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.commons.BoolArraySql
 */
export const BoolArraySql = proto3.makeMessageType(
  "api.commons.BoolArraySql",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
  ],
);

/**
 * @generated from message api.commons.Int32ValueArraySql
 */
export const Int32ValueArraySql = proto3.makeMessageType(
  "api.commons.Int32ValueArraySql",
  () => [
    { no: 1, name: "values", kind: "message", T: Int32Value, repeated: true },
  ],
);

/**
 * wraps int64 values so they can be null, but also adds the JS_STRING
 * tag so that data isn't lost when using snowflake ids
 *
 * @generated from message api.commons.Int64Id
 */
export const Int64Id = proto3.makeMessageType(
  "api.commons.Int64Id",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

