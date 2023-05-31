// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v0alpha/sds.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { CallType_Enum } from "../commons/acd_pb.js";

/**
 * @generated from message api.v0alpha.GetAgentResponseDataReq
 */
export const GetAgentResponseDataReq = proto3.makeMessageType(
  "api.v0alpha.GetAgentResponseDataReq",
  () => [
    { no: 1, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
);

/**
 * @generated from message api.v0alpha.GetAgentResponseDataRes
 */
export const GetAgentResponseDataRes = proto3.makeMessageType(
  "api.v0alpha.GetAgentResponseDataRes",
  () => [
    { no: 1, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 3, name: "responses", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message api.v0alpha.GetCallReq
 */
export const GetCallReq = proto3.makeMessageType(
  "api.v0alpha.GetCallReq",
  () => [
    { no: 2, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateVoicemailBoxReq
 */
export const UpdateVoicemailBoxReq = proto3.makeMessageType(
  "api.v0alpha.UpdateVoicemailBoxReq",
  () => [
    { no: 2, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 4, name: "pbx_extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateVoicemailBoxRes
 */
export const UpdateVoicemailBoxRes = proto3.makeMessageType(
  "api.v0alpha.UpdateVoicemailBoxRes",
  [],
);

/**
 * @generated from message api.v0alpha.CallObject
 */
export const CallObject = proto3.makeMessageType(
  "api.v0alpha.CallObject",
  () => [
    { no: 1, name: "oid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 10, name: "updated", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 12, name: "recording_file", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "updated_date", kind: "message", T: Timestamp },
    { no: 14, name: "src_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "dst_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "caller_id_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "agent_worker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "events", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 19, name: "call_data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "agent_response_data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 21, name: "recorded", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 22, name: "connected", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 23, name: "suspended", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 24, name: "disconnect_reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 25, name: "voicemailed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 26, name: "voicemail_box", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 27, name: "originated", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 28, name: "folder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 29, name: "rtp_info", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateAgentResponseDataReq
 */
export const UpdateAgentResponseDataReq = proto3.makeMessageType(
  "api.v0alpha.UpdateAgentResponseDataReq",
  () => [
    { no: 2, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 4, name: "responses", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message api.v0alpha.UpdateAgentResponseDataRes
 */
export const UpdateAgentResponseDataRes = proto3.makeMessageType(
  "api.v0alpha.UpdateAgentResponseDataRes",
  [],
);
