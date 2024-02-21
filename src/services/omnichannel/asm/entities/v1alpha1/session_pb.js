// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file services/omnichannel/asm/entities/v1alpha1/session.proto (package services.omnichannel.asm.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message services.omnichannel.asm.entities.v1alpha1.AsmSession
 */
export const AsmSession = proto3.makeMessageType(
  "services.omnichannel.asm.entities.v1alpha1.AsmSession",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "asm_session_start", kind: "message", T: Timestamp },
    { no: 5, name: "asm_session_end", kind: "message", T: Timestamp },
    { no: 6, name: "voice_session", kind: "message", T: VoiceSession },
  ],
);

/**
 * @generated from message services.omnichannel.asm.entities.v1alpha1.VoiceSession
 */
export const VoiceSession = proto3.makeMessageType(
  "services.omnichannel.asm.entities.v1alpha1.VoiceSession",
  () => [
    { no: 1, name: "voice_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "voice_session_start", kind: "message", T: Timestamp },
    { no: 3, name: "voice_session_end", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message services.omnichannel.asm.entities.v1alpha1.VoiceRegistration
 */
export const VoiceRegistration = proto3.makeMessageType(
  "services.omnichannel.asm.entities.v1alpha1.VoiceRegistration",
  () => [
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "dial_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "pstn_phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "default_time_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "expiration_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message services.omnichannel.asm.entities.v1alpha1.ListAsmUserDetails
 */
export const ListAsmUserDetails = proto3.makeMessageType(
  "services.omnichannel.asm.entities.v1alpha1.ListAsmUserDetails",
  [],
);

