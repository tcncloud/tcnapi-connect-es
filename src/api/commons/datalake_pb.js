// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/datalake.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * REMOVE IF I FORGET
 *
 * @generated from message api.commons.DLFSDef
 */
export const DLFSDef = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DLFSDef",
  () => [
    { no: 1, name: "vfs_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "incremental", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.commons.DLFSDefs
 */
export const DLFSDefs = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DLFSDefs",
  () => [
    { no: 1, name: "defs", kind: "message", T: DLFSDef, repeated: true },
  ],
);

