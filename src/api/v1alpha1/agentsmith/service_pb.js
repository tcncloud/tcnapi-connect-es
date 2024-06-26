// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/agentsmith/service.proto (package api.v1alpha1.agentsmith, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * AgentState is the state of the agent
 *
 * @generated from enum api.v1alpha1.agentsmith.AgentState
 */
export const AgentState = /*@__PURE__*/ proto3.makeEnum(
  "api.v1alpha1.agentsmith.AgentState",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "UNAVAILABLE"},
    {no: 2, name: "IDLE"},
    {no: 3, name: "READY"},
    {no: 4, name: "HUNGUP"},
    {no: 5, name: "DESTROYED"},
    {no: 6, name: "PEERED"},
    {no: 7, name: "PAUSED"},
    {no: 8, name: "WRAPUP"},
    {no: 10, name: "PREPARING_AFTER_IDLE"},
  ],
);

/**
 * FollowAgentReq is the request for the FollowAgent method.
 *
 * @generated from message api.v1alpha1.agentsmith.FollowAgentReq
 */
export const FollowAgentReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.agentsmith.FollowAgentReq",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "id" },
    { no: 2, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "id" },
  ],
);

/**
 * FollowAgentRes is the response for the FollowAgent method. Each message is an event associated with the
 * agent session and represents a change in the state of the agent session.
 *
 * @generated from message api.v1alpha1.agentsmith.FollowAgentRes
 */
export const FollowAgentRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.agentsmith.FollowAgentRes",
  () => [
    { no: 1, name: "ts", kind: "message", T: Timestamp },
    { no: 10, name: "agent_state_change", kind: "message", T: AgentStateChangeEvent, oneof: "event" },
    { no: 11, name: "agent_voice_start", kind: "message", T: AgentVoiceStartEvent, oneof: "event" },
    { no: 12, name: "agent_voice_end", kind: "message", T: AgentVoiceEndEvent, oneof: "event" },
    { no: 13, name: "agent_session_end", kind: "message", T: AgentSessionEndEvent, oneof: "event" },
  ],
);

/**
 * AgentStateChangeEvent is the event that is triggered when the agent state changes in the agent interface.
 *
 * @generated from message api.v1alpha1.agentsmith.AgentStateChangeEvent
 */
export const AgentStateChangeEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.agentsmith.AgentStateChangeEvent",
  () => [
    { no: 1, name: "old_state", kind: "enum", T: proto3.getEnumType(AgentState) },
    { no: 2, name: "new_state", kind: "enum", T: proto3.getEnumType(AgentState) },
    { no: 10, name: "empty", kind: "message", T: EmptyState, oneof: "state_details" },
  ],
);

/**
 * EmptyState is a debugging state (for now)
 *
 * @generated from message api.v1alpha1.agentsmith.EmptyState
 */
export const EmptyState = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.agentsmith.EmptyState",
  [],
);

/**
 * AgentVoiceStartEvent is the event that is triggered when the agent starts a voice session.
 *
 * @generated from message api.v1alpha1.agentsmith.AgentVoiceStartEvent
 */
export const AgentVoiceStartEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.agentsmith.AgentVoiceStartEvent",
  () => [
    { no: 1, name: "sip_dial_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * AgentVoiceEndEvent is the event that is triggered when the agent ends a voice session.
 *
 * @generated from message api.v1alpha1.agentsmith.AgentVoiceEndEvent
 */
export const AgentVoiceEndEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.agentsmith.AgentVoiceEndEvent",
  [],
);

/**
 * AgentSessionEndEvent is the event that is triggered when the agent session is closed.
 *
 * @generated from message api.v1alpha1.agentsmith.AgentSessionEndEvent
 */
export const AgentSessionEndEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.agentsmith.AgentSessionEndEvent",
  [],
);

