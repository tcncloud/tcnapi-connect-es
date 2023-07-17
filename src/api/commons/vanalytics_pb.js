// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/vanalytics.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Interval enumerates common dynamic time periods.
 *
 * @generated from enum api.commons.Interval
 */
export const Interval = proto3.makeEnum(
  "api.commons.Interval",
  [
    {no: 0, name: "TODAY"},
    {no: 1, name: "YESTERDAY"},
    {no: 2, name: "THIS_WEEK"},
    {no: 3, name: "LAST_7_DAYS"},
    {no: 4, name: "LAST_WEEK"},
    {no: 5, name: "LAST_14_DAYS"},
    {no: 6, name: "THIS_MONTH"},
    {no: 7, name: "LAST_30_DAYS"},
    {no: 8, name: "LAST_60_DAYS"},
    {no: 9, name: "LAST_90_DAYS"},
    {no: 10, name: "LAST_180_DAYS"},
  ],
);

