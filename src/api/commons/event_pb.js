// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/commons/event.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { StatusState } from "./asm_pb.js";
import { OmniConversation } from "./omnichannel_pb.js";

/**
 * this event will be depricated and asmevent will be used instead
 *
 * @generated from message api.commons.Event
 */
export const Event = proto3.makeMessageType(
  "api.commons.Event",
  () => [
    { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(StatusState) },
    { no: 2, name: "event_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "activated_conversation_event", kind: "message", T: ActivatedConversationEvent, oneof: "event" },
    { no: 6, name: "deactivated_conversation_event", kind: "message", T: DeactivatedConversationEvent, oneof: "event" },
    { no: 7, name: "sent_message_event", kind: "message", T: SentMessageEvent, oneof: "event" },
    { no: 8, name: "send_status_event", kind: "message", T: SendStatusEvent, oneof: "event" },
    { no: 9, name: "pause_event", kind: "message", T: PauseEvent, oneof: "event" },
    { no: 10, name: "resume_event", kind: "message", T: ResumeEvent, oneof: "event" },
  ],
);

/**
 * @generated from message api.commons.ActivatedConversationEvent
 */
export const ActivatedConversationEvent = proto3.makeMessageType(
  "api.commons.ActivatedConversationEvent",
  () => [
    { no: 1, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * @generated from message api.commons.DeactivatedConversationEvent
 */
export const DeactivatedConversationEvent = proto3.makeMessageType(
  "api.commons.DeactivatedConversationEvent",
  () => [
    { no: 1, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * @generated from message api.commons.SentMessageEvent
 */
export const SentMessageEvent = proto3.makeMessageType(
  "api.commons.SentMessageEvent",
  () => [
    { no: 1, name: "response_time_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "is_initial_agent_message", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * Indicate that the status has changed
 *
 * @generated from message api.commons.SendStatusEvent
 */
export const SendStatusEvent = proto3.makeMessageType(
  "api.commons.SendStatusEvent",
  () => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(StatusState) },
  ],
);

/**
 * AsmEvent
 *
 * @generated from message api.commons.AsmEvent
 */
export const AsmEvent = proto3.makeMessageType(
  "api.commons.AsmEvent",
  () => [
    { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(StatusState) },
    { no: 2, name: "event_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "activated_conversation_asm_event", kind: "message", T: ActivatedConversationAsmEvent, oneof: "event" },
    { no: 6, name: "deactivated_conversation_asm_event", kind: "message", T: DeactivatedConversationAsmEvent, oneof: "event" },
    { no: 7, name: "sent_message_asm_event", kind: "message", T: SentMessageAsmEvent, oneof: "event" },
    { no: 8, name: "send_status_asm_event", kind: "message", T: SendStatusAsmEvent, oneof: "event" },
    { no: 9, name: "pause_event", kind: "message", T: PauseEvent, oneof: "event" },
    { no: 10, name: "resume_event", kind: "message", T: ResumeEvent, oneof: "event" },
    { no: 11, name: "conversation_pulled_event", kind: "message", T: ConversationPulledEvent, oneof: "event" },
  ],
);

/**
 * @generated from message api.commons.ActivatedConversationAsmEvent
 */
export const ActivatedConversationAsmEvent = proto3.makeMessageType(
  "api.commons.ActivatedConversationAsmEvent",
  () => [
    { no: 1, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * @generated from message api.commons.DeactivatedConversationAsmEvent
 */
export const DeactivatedConversationAsmEvent = proto3.makeMessageType(
  "api.commons.DeactivatedConversationAsmEvent",
  () => [
    { no: 1, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * @generated from message api.commons.SentMessageAsmEvent
 */
export const SentMessageAsmEvent = proto3.makeMessageType(
  "api.commons.SentMessageAsmEvent",
  () => [
    { no: 1, name: "response_time_seconds", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "is_initial_agent_message", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * Indicate that the status has changed
 *
 * @generated from message api.commons.SendStatusAsmEvent
 */
export const SendStatusAsmEvent = proto3.makeMessageType(
  "api.commons.SendStatusAsmEvent",
  [],
);

/**
 * @generated from message api.commons.PauseEvent
 */
export const PauseEvent = proto3.makeMessageType(
  "api.commons.PauseEvent",
  [],
);

/**
 * @generated from message api.commons.ResumeEvent
 */
export const ResumeEvent = proto3.makeMessageType(
  "api.commons.ResumeEvent",
  [],
);

/**
 * @generated from message api.commons.ConversationPulledEvent
 */
export const ConversationPulledEvent = proto3.makeMessageType(
  "api.commons.ConversationPulledEvent",
  () => [
    { no: 1, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

