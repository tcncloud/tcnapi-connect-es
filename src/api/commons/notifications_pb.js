// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/commons/notifications.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * FieldValueFilter resents a field mask and value to match on.
 * For now we are only supporting string matching.
 *
 * @generated from message api.commons.FieldValueFilter
 */
export const FieldValueFilter = proto3.makeMessageType(
  "api.commons.FieldValueFilter",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.NotificationType
 */
export const NotificationType = proto3.makeMessageType(
  "api.commons.NotificationType",
  [],
);

/**
 * @generated from enum api.commons.NotificationType.Enum
 */
export const NotificationType_Enum = proto3.makeEnum(
  "api.commons.NotificationType.Enum",
  [
    {no: 0, name: "INVALID"},
    {no: 1, name: "EMAIL"},
    {no: 2, name: "SERVER_PUSH"},
    {no: 3, name: "IOS"},
    {no: 4, name: "ANDROID"},
    {no: 5, name: "SMS"},
  ],
);

