// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/commons/cbs.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.ScheduledCallbackStatus
 */
export const ScheduledCallbackStatus = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.ScheduledCallbackStatus",
  [
    {no: 0, name: "SCS_INVALID"},
    {no: 1, name: "SCS_OPENED"},
    {no: 2, name: "SCS_CANCELED"},
    {no: 3, name: "SCS_CLOSED"},
    {no: 4, name: "SCS_READY"},
  ],
);

