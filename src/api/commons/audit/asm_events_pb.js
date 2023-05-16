// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/asm_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { OmniConversation } from "../omnichannel_pb.js";
import { StatusState } from "../asm_pb.js";

/**
 * AsmAgentLoginEvent - whenever an agent logs into asm
 *
 * @generated from message api.commons.audit.AsmAgentLoginEvent
 */
export const AsmAgentLoginEvent = proto3.makeMessageType(
  "api.commons.audit.AsmAgentLoginEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * AsmOpenVoiceEvent - whenever an agent opens voice
 *
 * @generated from message api.commons.audit.AsmOpenVoiceEvent
 */
export const AsmOpenVoiceEvent = proto3.makeMessageType(
  "api.commons.audit.AsmOpenVoiceEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "voice_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * AsmOpenOmniAgentEvent - whenever an agent logs into omni agent
 *
 * @generated from message api.commons.audit.AsmOpenOmniAgentEvent
 */
export const AsmOpenOmniAgentEvent = proto3.makeMessageType(
  "api.commons.audit.AsmOpenOmniAgentEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * AsmActivateConversationEvent - whenever an agent activates a conversation
 *
 * @generated from message api.commons.audit.AsmActivateConversationEvent
 */
export const AsmActivateConversationEvent = proto3.makeMessageType(
  "api.commons.audit.AsmActivateConversationEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * AsmDeactivateConversationEvent - whenever agent deactivates a conversation
 *
 * @generated from message api.commons.audit.AsmDeactivateConversationEvent
 */
export const AsmDeactivateConversationEvent = proto3.makeMessageType(
  "api.commons.audit.AsmDeactivateConversationEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * AsmAgentStateChangedEvent - whenever an agent's state changes
 *
 * @generated from message api.commons.audit.AsmAgentStateChangedEvent
 */
export const AsmAgentStateChangedEvent = proto3.makeMessageType(
  "api.commons.audit.AsmAgentStateChangedEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "new_status", kind: "enum", T: proto3.getEnumType(StatusState) },
    { no: 4, name: "old_status", kind: "enum", T: proto3.getEnumType(StatusState) },
  ],
);

/**
 * AsmAgentLogoutEvent - whenever an agent logs out of asm
 *
 * @generated from message api.commons.audit.AsmAgentLogoutEvent
 */
export const AsmAgentLogoutEvent = proto3.makeMessageType(
  "api.commons.audit.AsmAgentLogoutEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * AsmPauseEvent -
 *
 * @generated from message api.commons.audit.AsmPauseEvent
 */
export const AsmPauseEvent = proto3.makeMessageType(
  "api.commons.audit.AsmPauseEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * AsmResumeEvent -
 *
 * @generated from message api.commons.audit.AsmResumeEvent
 */
export const AsmResumeEvent = proto3.makeMessageType(
  "api.commons.audit.AsmResumeEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

