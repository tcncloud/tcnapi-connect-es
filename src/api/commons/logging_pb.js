// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/commons/logging.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.Level
 */
export const Level = proto3.makeEnum(
  "api.commons.Level",
  [
    {no: 0, name: "OFF"},
    {no: 1, name: "FATAL"},
    {no: 2, name: "PANIC"},
    {no: 3, name: "DPANIC"},
    {no: 4, name: "ERROR"},
    {no: 5, name: "WARN"},
    {no: 6, name: "INFO"},
    {no: 7, name: "DEBUG"},
    {no: 8, name: "TRACE"},
  ],
);

