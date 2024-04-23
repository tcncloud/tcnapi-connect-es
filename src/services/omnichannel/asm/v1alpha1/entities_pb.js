// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/omnichannel/asm/v1alpha1/entities.proto (package services.omnichannel.asm.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AsmSession, AsmUserDetails, VoiceRegistration, VoiceSession } from "../entities/v1alpha1/session_pb.js";

/**
 * @generated from message services.omnichannel.asm.v1alpha1.CreateSessionRequest
 */
export const CreateSessionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.CreateSessionRequest",
  [],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.CreateSessionResponse
 */
export const CreateSessionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.CreateSessionResponse",
  () => [
    { no: 1, name: "asm_session", kind: "message", T: AsmSession },
  ],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.EndSessionRequest
 */
export const EndSessionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.EndSessionRequest",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.EndSessionResponse
 */
export const EndSessionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.EndSessionResponse",
  [],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.GetCurrentSessionRequest
 */
export const GetCurrentSessionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.GetCurrentSessionRequest",
  [],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.GetCurrentSessionResponse
 */
export const GetCurrentSessionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.GetCurrentSessionResponse",
  () => [
    { no: 1, name: "asm_session", kind: "message", T: AsmSession },
  ],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.EnableVoiceRequest
 */
export const EnableVoiceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.EnableVoiceRequest",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
  ],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.EnableVoiceResponse
 */
export const EnableVoiceResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.EnableVoiceResponse",
  () => [
    { no: 1, name: "voice_session", kind: "message", T: VoiceSession },
    { no: 2, name: "voice_registration", kind: "message", T: VoiceRegistration },
  ],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.DisableVoiceRequest
 */
export const DisableVoiceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.DisableVoiceRequest",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.DisableVoiceResponse
 */
export const DisableVoiceResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.DisableVoiceResponse",
  [],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.ListAsmUserDetailsRequest
 */
export const ListAsmUserDetailsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.ListAsmUserDetailsRequest",
  [],
);

/**
 * @generated from message services.omnichannel.asm.v1alpha1.ListAsmUserDetailsResponse
 */
export const ListAsmUserDetailsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.v1alpha1.ListAsmUserDetailsResponse",
  () => [
    { no: 1, name: "sessions", kind: "message", T: AsmUserDetails, repeated: true },
    { no: 2, name: "asm_user_details", kind: "message", T: AsmUserDetails, repeated: true },
  ],
);

