// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/omnichannel/asm/entities/v1alpha1/session.proto (package services.omnichannel.asm.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Int64Value, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum services.omnichannel.asm.entities.v1alpha1.StatusState
 */
export const StatusState = /*@__PURE__*/ proto3.makeEnum(
  "services.omnichannel.asm.entities.v1alpha1.StatusState",
  [
    {no: 0, name: "STATUS_STATE_UNKNOWN"},
    {no: 1, name: "WAITING"},
    {no: 2, name: "IDLE"},
    {no: 3, name: "CONVERSATION_OPEN"},
  ],
);

/**
 * @generated from message services.omnichannel.asm.entities.v1alpha1.AsmSession
 */
export const AsmSession = /*@__PURE__*/ proto3.makeMessageType(
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
export const VoiceSession = /*@__PURE__*/ proto3.makeMessageType(
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
export const VoiceRegistration = /*@__PURE__*/ proto3.makeMessageType(
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
 * @generated from message services.omnichannel.asm.entities.v1alpha1.AsmUserDetails
 */
export const AsmUserDetails = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.entities.v1alpha1.AsmUserDetails",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "agent_status", kind: "enum", T: proto3.getEnumType(StatusState) },
    { no: 5, name: "agent_profile_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "current_conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 7, name: "average_customer_wait_time_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "average_time_to_respond_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "last_event_time", kind: "message", T: Timestamp },
    { no: 10, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 11, name: "asm_session_sid", kind: "message", T: Int64Value },
    { no: 12, name: "events", kind: "message", T: DashboardAgentResponseEvent, repeated: true },
    { no: 13, name: "login_time", kind: "message", T: Timestamp },
  ],
);

/**
 * The response event information for an agent
 *
 * @generated from message services.omnichannel.asm.entities.v1alpha1.DashboardAgentResponseEvent
 */
export const DashboardAgentResponseEvent = /*@__PURE__*/ proto3.makeMessageType(
  "services.omnichannel.asm.entities.v1alpha1.DashboardAgentResponseEvent",
  () => [
    { no: 1, name: "response_time_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
    { no: 3, name: "is_initial_agent_message", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

