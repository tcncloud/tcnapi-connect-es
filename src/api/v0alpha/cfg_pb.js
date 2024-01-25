// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/cfg.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.v0alpha.GetConfigReq
 */
export const GetConfigReq = proto3.makeMessageType(
  "api.v0alpha.GetConfigReq",
  () => [
    { no: 1, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.WebAgent
 */
export const WebAgent = proto3.makeMessageType(
  "api.v0alpha.WebAgent",
  () => [
    { no: 1, name: "open_sips", kind: "message", T: WebAgent_OpenSips },
    { no: 2, name: "engine_priority", kind: "message", T: WebAgent_EnginePriority },
    { no: 3, name: "log_level", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "use_stun", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "use_fast_stun", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "use_fast_ice", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "ice_timeout", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "set_final_codec", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "use_rport", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "server", kind: "message", T: WebAgent_Server },
    { no: 11, name: "base_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "stun_server_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.WebAgent.OpenSips
 */
export const WebAgent_OpenSips = proto3.makeMessageType(
  "api.v0alpha.WebAgent.OpenSips",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "WebAgent_OpenSips"},
);

/**
 * @generated from message api.v0alpha.WebAgent.EnginePriority
 */
export const WebAgent_EnginePriority = proto3.makeMessageType(
  "api.v0alpha.WebAgent.EnginePriority",
  () => [
    { no: 1, name: "java", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "webrtc", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "ns", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "flash", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "app", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "p2p", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "access_num", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "native", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "WebAgent_EnginePriority"},
);

/**
 * @generated from message api.v0alpha.WebAgent.Server
 */
export const WebAgent_Server = proto3.makeMessageType(
  "api.v0alpha.WebAgent.Server",
  () => [
    { no: 1, name: "sip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "webrtc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "WebAgent_Server"},
);

