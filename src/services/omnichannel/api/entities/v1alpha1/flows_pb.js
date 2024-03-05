// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file services/omnichannel/api/entities/v1alpha1/flows.proto (package services.omnichannel.api.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum services.omnichannel.api.entities.v1alpha1.FlowFieldName
 */
export const FlowFieldName = proto3.makeEnum(
  "services.omnichannel.api.entities.v1alpha1.FlowFieldName",
  [
    {no: 0, name: "FIELD_NAME_UNSPECIFIED"},
    {no: 1, name: "FIELD_NAME_USER_INPUT"},
  ],
);

/**
 * @generated from message services.omnichannel.api.entities.v1alpha1.FlowPayload
 */
export const FlowPayload = proto3.makeMessageType(
  "services.omnichannel.api.entities.v1alpha1.FlowPayload",
  () => [
    { no: 1, name: "fields", kind: "message", T: FlowField, repeated: true },
  ],
);

/**
 * @generated from message services.omnichannel.api.entities.v1alpha1.FlowField
 */
export const FlowField = proto3.makeMessageType(
  "services.omnichannel.api.entities.v1alpha1.FlowField",
  () => [
    { no: 1, name: "name", kind: "enum", T: proto3.getEnumType(FlowFieldName) },
    { no: 100, name: "user_input", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
  ],
);

