// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vmds/service.proto (package api.v1alpha1.vmds, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { CallType_Enum } from "../../commons/acd_pb.js";

/**
 * @generated from message api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest
 */
export const DownloadSpecifiedMessagesRequest = proto3.makeMessageType(
  "api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest",
  () => [
    { no: 1, name: "messages", kind: "message", T: DownloadSpecifiedMessagesRequest_MessageRequest, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest.MessageRequest
 */
export const DownloadSpecifiedMessagesRequest_MessageRequest = proto3.makeMessageType(
  "api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest.MessageRequest",
  () => [
    { no: 1, name: "mail_box", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "caller_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "caller_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
  {localName: "DownloadSpecifiedMessagesRequest_MessageRequest"},
);

/**
 * @generated from message api.v1alpha1.vmds.DownloadSpecifiedMessagesResponse
 */
export const DownloadSpecifiedMessagesResponse = proto3.makeMessageType(
  "api.v1alpha1.vmds.DownloadSpecifiedMessagesResponse",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

