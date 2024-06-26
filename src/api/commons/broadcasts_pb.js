// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/broadcasts.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.BroadcastType
 */
export const BroadcastType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.BroadcastType",
  [
    {no: 0, name: "TYPE_UNKNOWN"},
    {no: 1000, name: "TYPE_OUTBOUND"},
    {no: 1100, name: "TYPE_OUTBOUND_PREVIEW_ONLY"},
    {no: 1200, name: "TYPE_OUTBOUND_MAC_ONLY"},
    {no: 1300, name: "TYPE_OUTBOUND_RINGLESS_VOICEMAIL"},
    {no: 2000, name: "TYPE_INBOUND"},
    {no: 3000, name: "TYPE_MANUAL"},
    {no: 4000, name: "TYPE_SMS"},
    {no: 5000, name: "TYPE_EMAIL"},
    {no: 7000, name: "TYPE_OUTBOUND_INBOUND"},
    {no: 8000, name: "TYPE_OUTBOUND_MANUAL"},
    {no: 9000, name: "TYPE_INBOUND_MANUAL"},
    {no: 10000, name: "TYPE_OUTBOUND_INBOUND_MANUAL"},
  ],
);

/**
 * Enum to represent the different template types that broadcast templates can be.
 *
 * @generated from message api.commons.TemplateType
 */
export const TemplateType = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TemplateType",
  [],
);

/**
 * @generated from enum api.commons.TemplateType.Enum
 */
export const TemplateType_Enum = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.TemplateType.Enum",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "STANDARD"},
    {no: 2, name: "LAYERED"},
    {no: 3, name: "INBOUND"},
    {no: 4, name: "MAC_ONLY"},
    {no: 5, name: "PREVIEW_ONLY"},
    {no: 6, name: "RINGLESS_VOICEMAIL"},
  ],
);

